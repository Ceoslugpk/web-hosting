
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
    const apiKey = Deno.env.get('WHOISFREAKS_API_KEY') // Updated to use new env variable name

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
    const apiUrl = `https://api.whoisfreaks.com/v1.0/whois?apiKey=${apiKey}&whois=live&domainName=${domain}`
    
    const response = await fetch(apiUrl)
    if (!response.ok) {
      console.error(`WhoisFreaks API error: ${response.status} ${response.statusText}`)
      throw new Error('WHOIS API request failed')
    }
    
    const data = await response.json()
    console.log('WHOIS API response received successfully')
    
    // Transform WhoisFreaks response to match our existing frontend structure
    const transformedData = {
      WhoisRecord: {
        domainName: data.domain_name,
        status: Array.isArray(data.domain_status) ? data.domain_status.join(', ') : data.domain_status,
        createdDate: data.create_date,
        updatedDate: data.update_date,
        expiresDate: data.expiry_date,
        registrar: {
          name: data.registrar?.registrar_name,
          ianaId: data.registrar?.registrar_iana_id,
          url: data.registrar?.registrar_url,
          email: data.registrar?.registrar_email,
          phone: data.registrar?.registrar_phone
        },
        registryData: {
          nameServers: {
            hostNames: Array.isArray(data.name_servers) ? data.name_servers : [data.name_servers]
          }
        },
        administrativeContact: data.administrative_contact ? {
          organization: data.administrative_contact.organization,
          state: data.administrative_contact.state_province,
          country: data.administrative_contact.country
        } : null
      }
    }
    
    return new Response(
      JSON.stringify(transformedData),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        } 
      }
    )
  } catch (error) {
    console.error('Error in WHOIS lookup:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to fetch WHOIS data', details: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
