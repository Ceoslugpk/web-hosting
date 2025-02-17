
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
    const apiKey = Deno.env.get('WHOISXML_API_KEY')

    if (!domain) {
      return new Response(
        JSON.stringify({ error: 'Domain is required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    if (!apiKey) {
      console.error('WHOISXML API key is not configured')
      throw new Error('WHOISXML API key is not configured')
    }

    console.log(`Starting WHOIS lookup for domain: ${domain}`)
    const apiUrl = `https://api.apilayer.com/whois/query?domain=${domain}`
    
    console.log('Making request to APILayer...')
    console.log('APILayer URL:', apiUrl)
    
    const response = await fetch(apiUrl, {
      headers: {
        'apikey': apiKey
      }
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error(`APILayer WHOIS API error: ${response.status} ${response.statusText}`)
      console.error('APILayer error response:', errorText)
      throw new Error(`WHOIS API request failed with status ${response.status}: ${errorText}`)
    }
    
    const data = await response.json()
    console.log('WHOIS API response received successfully')
    console.log('API Response data:', JSON.stringify(data, null, 2))

    if (!data || typeof data !== 'object') {
      console.error('Invalid response from APILayer:', data)
      throw new Error('Invalid response from WHOIS API')
    }
    
    // Transform APILayer response to match our frontend structure with enhanced information
    const transformedData = {
      WhoisRecord: {
        domainName: data.domain,
        status: Array.isArray(data.status) ? data.status.join(', ') : data.status,
        createdDate: data.created_date,
        updatedDate: data.updated_date,
        expiresDate: data.expiration_date,
        registrar: {
          name: data.registrar,
          ianaId: data.registrar_iana_id,
          url: data.registrar_url,
          email: data.registrar_email,
          phone: data.registrar_phone
        },
        registryData: {
          nameServers: {
            hostNames: Array.isArray(data.name_servers) ? data.name_servers : [data.name_servers]
          }
        },
        administrativeContact: {
          organization: data.admin_organization,
          state: data.admin_state,
          country: data.admin_country,
          email: data.admin_email,
          phone: data.admin_phone
        },
        technicalContact: {
          organization: data.tech_organization,
          email: data.tech_email,
          phone: data.tech_phone
        },
        registrant: {
          organization: data.registrant_organization,
          country: data.registrant_country,
          state: data.registrant_state,
          email: data.registrant_email
        },
        dnssec: data.dnssec,
        domain_age: data.domain_age,
        domain_grace_period: data.domain_grace_period
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
      JSON.stringify({ 
        error: 'Failed to fetch WHOIS data', 
        details: error.message,
        type: error.name
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
