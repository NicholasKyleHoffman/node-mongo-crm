# node-mongo-crm

Following LinkedIn Learning tutorial at https://www.linkedin.com/learning/building-restful-web-apis-with-node-js-and-express/

<strong>Using:</strong>

Express: https://expressjs.com/ </br>
Node: https://nodejs.org/en/download/ </br>
Mongoose: </br>
Babel: babel-preset-es2015 babel-preset-stage-0 https://babeljs.io/docs/en/plugins </br>
Nodemon: (use nodemon instead of node in CLI - nodemon monitors changes in your code & restarts your server) https://nodemon.io/ </br>

Postman - this is used in conjunction with HTTP Requests GET POST PUT DELETE - './src/routes/crmRoutes.js'</br> 
https://www.getpostman.com/ </br>

Robomongo/Robo Studio 3T - this tool is used to CONNECT to Mongodb (after running mongod in CLI):</br>
Note: you must set a connection (name, verify that it's on the port that output in CLI)</br>
https://robomongo.org/download</br>
MongoDB Community: https://docs.mongodb.com/manual/tutorial/getting-started/ </br>

====================================

<strong>CLI Commands:</strong>

Have 3 Terminals Open:</br>

Console #1: navigate to C://data/db
Start Mongo: 
mongod </br>

Console #2: navigate to 'node-mongo-crm' root dir
Start 'node-mongo-crm' App:
npm start </br>

Console #3 (optional): navigate to 'node-mongo-crm' root dir
Git status / push / pull

Have Robomongo (Studio 3T connected to mongodb instance - verify correct port from Console #1)
Have Postman Open for HTTP requests
Have MongoDB Compass open (for viewing data)

<strong>Navigate To:</strong>
Open the following in browser: localhost://4200
Note: you will see "Node & express server running on port 4200" if everything worked. Try navigating to localhost://4200 & note changes on Console #2!

