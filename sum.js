const result = (title, results) => `
<html>
  <head><title>${title}</title></head>
  <body>
    <h1>${results}</h1>
    <a href="/">Go Home</a>
  </body>
</html>`;

const sumResult=(req,res)=>{
  const body=[];
    req.on("data",chunk=>{
      body.push(chunk);
    });
    req.on("end",()=>{
      const fullBody=Buffer.concat(body).toString();
      const params=new URLSearchParams(fullBody);
      const num1=parseInt(params.get("num1"));
      const num2=parseInt(params.get("num2"));
      const sum=num1+num2;
       res.setHeader("Content-Type", "text/html");
       res.write(result("Result",`the result is ${sum}`));
       res.end();
    })
}
module.exports=sumResult;