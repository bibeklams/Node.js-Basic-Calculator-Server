const sumResult = require("./sum");
const calculatorDis = require("./calculator");
const welcome = require("./welcome");

const display = (title, content) => `
<html>
  <head><title>${title}</title></head>
  <body>
    <h1>${content}</h1>
    <a href="/calculator">Calculator</a>
  </body>
</html>`;

const connectionToServer = (req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/") {
    welcome(req, res);
  } else if (req.url === "/calculator" && req.method == "GET") {
    calculatorDis(req, res);
  } else if (req.url === "/calculator-result" && req.method == "POST") {
    sumResult(req, res);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write(display("404 ERROR", "No data found"));
    res.end();
  }
};

module.exports = connectionToServer;
