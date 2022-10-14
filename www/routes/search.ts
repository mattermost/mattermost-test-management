import { esClient } from "../../src/deps.ts";

const client = new esClient({
    node: Deno.env.get('ELASTIC_URL') || 'http://localhost:9200'
});

export const handler = {
    async GET(_req) {
      const url = new URL(_req.url);
      const query = url.searchParams.get('q') || '';

      if (query === '') {
        return new Response(
            JSON.stringify({ data: [] }),
            {
                headers: {"content-type": "application/json"}
            }    
        );
      }

      const results = await client.search({
        target: 'test-cases',
        body: {
            query: {
                match: {
                    content: query,
                },
            }
        }
      });

      return new Response(
        JSON.stringify({ data: results }),
        {
            headers: {"content-type": "application/json"}
        }    
    );
  }
};