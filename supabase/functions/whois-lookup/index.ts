
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { domain } = await req.json()

    if (!domain) {
      return new Response(
        JSON.stringify({ error: 'Domain is required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log(`Starting WHOIS lookup for domain: ${domain}`)
    
    // Using the free rdap.org API
    const apiUrl = `https://www.rdap.org/domain/${domain}`;
    
    console.log('Making request to RDAP API...')
    
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`RDAP API error: ${response.status} ${response.statusText}`);
      console.error('RDAP error response:', errorText);
      throw new Error(`WHOIS API request failed with status ${response.status}: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('WHOIS API response received successfully');

    // Transform RDAP response to match our frontend structure
    // Extract relevant registration information
    const events = data.events || [];
    const entities = data.entities || [];
    
    let registrar = {};
    let admin = {};
    let technical = {};
    let registrant = {};
    
    // Extract entity information
    entities.forEach(entity => {
      if (entity.roles.includes('registrar')) {
        registrar = {
          name: entity.publicIds?.[0]?.identifier || entity.handle || 'Unknown',
          ianaId: entity.publicIds?.[0]?.type === 'IANA' ? entity.publicIds[0].identifier : '',
          url: entity.vcardArray?.[1]?.find(v => v[0] === 'url')?.[3] || '',
          email: entity.vcardArray?.[1]?.find(v => v[0] === 'email')?.[3] || '',
          phone: entity.vcardArray?.[1]?.find(v => v[0] === 'tel')?.[3] || ''
        };
      }
      
      if (entity.roles.includes('administrative')) {
        admin = {
          organization: entity.vcardArray?.[1]?.find(v => v[0] === 'org')?.[3] || '',
          email: entity.vcardArray?.[1]?.find(v => v[0] === 'email')?.[3] || '',
          phone: entity.vcardArray?.[1]?.find(v => v[0] === 'tel')?.[3] || ''
        };
      }
      
      if (entity.roles.includes('technical')) {
        technical = {
          organization: entity.vcardArray?.[1]?.find(v => v[0] === 'org')?.[3] || '',
          email: entity.vcardArray?.[1]?.find(v => v[0] === 'email')?.[3] || '',
          phone: entity.vcardArray?.[1]?.find(v => v[0] === 'tel')?.[3] || ''
        };
      }
      
      if (entity.roles.includes('registrant')) {
        registrant = {
          organization: entity.vcardArray?.[1]?.find(v => v[0] === 'org')?.[3] || '',
          email: entity.vcardArray?.[1]?.find(v => v[0] === 'email')?.[3] || ''
        };
      }
    });
    
    // Find event dates
    const createdEvent = events.find(e => e.eventAction === 'registration');
    const updatedEvent = events.find(e => e.eventAction === 'last changed');
    const expiresEvent = events.find(e => e.eventAction === 'expiration');
    
    // Extract nameservers
    const nameServers = data.nameservers?.map(ns => ns.ldhName) || [];
    
    // Build transformed data structure
    const transformedData = {
      WhoisRecord: {
        domainName: data.ldhName || domain,
        status: Array.isArray(data.status) ? data.status.join(', ') : (data.status || 'Unknown'),
        createdDate: createdEvent?.eventDate || '',
        updatedDate: updatedEvent?.eventDate || '',
        expiresDate: expiresEvent?.eventDate || '',
        domain_age: 'Not available',
        domain_grace_period: 'Not available',
        registrar: registrar,
        registryData: {
          nameServers: {
            hostNames: nameServers
          }
        },
        administrativeContact: admin,
        technicalContact: technical,
        registrant: registrant,
        dnssec: data.secureDNS?.delegationSigned ? 'signed' : 'unsigned'
      }
    };
    
    return new Response(
      JSON.stringify(transformedData),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        } 
      }
    );
  } catch (error) {
    console.error('Error in WHOIS lookup:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch WHOIS data', 
        details: error.message,
        type: error.name
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
})
