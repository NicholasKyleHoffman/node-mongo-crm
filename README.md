# node-mongo-crm

Following LinkedIn Learning tutorial at https://www.linkedin.com/learning/building-restful-web-apis-with-node-js-and-express/

<strong>Using:</strong>

Express: https://expressjs.com/ </br>
Node: https://nodejs.org/en/download/ </br>
Mongoose: </br>
Babel: babel-preset-es2015 babel-preset-stage-0 https://babeljs.io/docs/en/plugins </br>
Nodemon: (use nodemon instead of node in CLI - nodemon monitors changes in your code & restarts your server) https://nodemon.io/ </br>
Body-parser: https://www.npmjs.com/package/body-parser</br>
MongoDB Community https://docs.mongodb.com/manual/tutorial/getting-started/</br>

Postman - this is used in conjunction with HTTP Requests GET POST PUT DELETE - './src/routes/crmRoutes.js'</br> 
https://www.getpostman.com/ </br>

Robomongo/Robo Studio 3T - this tool is used to CONNECT to Mongodb (after running mongod in CLI):</br>
Note: you must set a connection (name, verify that it's on the port that output in CLI)</br>
https://robomongo.org/download</br>
MongoDB Community: https://docs.mongodb.com/manual/tutorial/getting-started/ </br>

====================================

<strong>CLI Commands:</strong></br>

<strong>Have 3 Terminals Open:</br></strong>

<strong>Terminal/CLI #1:</strong></br>
navigate to 'C://data/db'</br>
Start Mongo: 'mongod' </br>

<strong>Console #2:</strong></br>
navigate to 'node-mongo-crm' root dir</br>
Start 'node-mongo-crm' App: 'npm start' </br>

<strong>Console #3 (optional):</strong></br>
navigate to 'node-mongo-crm' root dir </br>
Git status / push / pull</br>

<strong>Robomongo:</strong></br>
Have Postman Open for HTTP API request checking. Validation that custom HTTP/API endpoints are working.</br>
(Studio 3T connected to mongodb instance via port # - verify correct port from Console #1)</br>
Have MongoDB Compass open (for viewing data)</br>

<strong>Navigate To:</strong></br>
Open the following in browser: localhost://4200</br>
Note: you will see "Node & express server running on port 4200" if everything worked.</br>
Try navigating to localhost://4200 & note changes on Console #2!</br>
Navigate to localhost://4200/sky.jpeg (example of static image loading using this single line of code</br>
in index.js: 'app.use(express.static('public/images'));'</br>


===========================================================================

<strong>Setup:</strong></br>
git clone repo</br>
npm install && npm update</br>
have downloaded MongoDB, Postman, and Robomongo</br>
start mongo with 'mongod' (from 'C://data/db') --- </br>
^^^ <strong>TROUBLESHOOTING WINDOWS</strong>: make sure the application route is in your PATH variable </br>
(Ref: https://teamtreehouse.com/community/windows-add-mongodb-directory-to-path-environmental-variable-for-easy-command-line-interaction)</br>
from node-mongo-crm folder, run 'npm start'</br>
^^^ <strong>TROUBLESHOOTING WINDOWS</strong>: If application keeps stopping, you may have to kill process at port# 4200</br>
(Ref: https://developers.de/blogs/indraneel/archive/2017/10/18/kill-a-process-in-windows-by-port-number.aspx)</br>
navigate to localhost://4200</br>
have run mongod command <strong>BEFORE</strong>connecting to your port in Robomongo/Studio 3T </br>
create collection in postman specifically for this app - localhost://4200 is default. ENSURE for POST & PUT <br>
routes/endpoints you select "x-www-form-urlencoded" under Body radio button. This is for json data. <br>
have fun :)</br>
