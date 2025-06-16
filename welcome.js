const display = (title, content) => `
<html>
  <head><title>${title}</title></head>
  <body>
    <h1>${content}</h1>
    <a href="/calculator">Calculator</a>
  </body>
</html>`;
const welcome=(req,res)=>{
  res.setHeader("Content-Type", "text/html");
  res.write(display("Calculator", "Welcome to Calculator"));
    res.end();
}
module.exports=welcome;