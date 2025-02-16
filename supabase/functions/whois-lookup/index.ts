
import { serve } from "https://deno.fresh.run/std@0.168.0/http/server.ts"

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

    console.log(`Starting WHOIS lookup for domain: ${domain}`)
    const apiUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${domain}&outputFormat=JSON`
    
    const response = await fetch(apiUrl)
    if (!response.ok) {
      console.error(`WhoisXML API error: ${response.status} ${response.statusText}`)
      throw new Error('WHOIS API request failed')
    }
    
    const data = await response.json()
    console.log('WHOIS API response received successfully')
    
    return new Response(
      JSON.stringify(data),
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
