const calculator = () => `
<html>
<head>
  <title>calculator</title>
</head>
<body>
  <form action="/calculator-result" method="POST">
    <label for="num1">Enter the value of Number 1:</label>
    <input type="text" name="num1" id="num1"><br><br>
    <label for="num2">Enter the value of Number 2:</label>
    <input type="text" name="num2" id="num2"><br><br>
    <button type="submit">Sum</button>
  </form>
</body>
</html>`;

const calculatorDis=(req,res)=>{
   res.setHeader("Content-Type", "text/html");
  res.write(calculator());
    res.end();
}
module.exports=calculatorDis;