const http = require('http');
const connectionToServer=require("./serverconnection");

const server = http.createServer(connectionToServer);

const port = 3005;
server.listen(port, () =>
  console.log(`Server is connected to http://localhost:${port}`)
);
