import * as edgedb from 'edgedb';

export default {
	async fetch(_request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const client = edgedb.createHttpClient({
			instanceName: env.EDGEDB_INSTANCE,
			secretKey: env.EDGEDB_SECRET_KEY,
		});
		const movies = await client.query(`
			select Movie {
				title
			}
		  `);

		return new Response(JSON.stringify(movies, null, 2), {
			headers: {
				'content-type': 'application/json;charset=UTF-8',
			},
		});
	},
} satisfies ExportedHandler<Env>;
