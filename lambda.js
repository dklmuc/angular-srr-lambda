const serverlessExpress = require('@codegenie/serverless-express')

module.exports.handler = async (event, context) => {
	const server = await import('./dist/angular-ssr-lambda/server/server.mjs');
	const app = await server.app();

	serverlessExpressInstance = serverlessExpress({ app });
	return serverlessExpressInstance(event, context);
}
