const server = require('./api/server.js');

// heroku will add the Port variable to the environment
const port = process.env.PORT || 5001;
server.listen(port, () => {
	console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
