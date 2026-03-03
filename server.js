const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('.'));

app.post('/submit-quote', (req, res)=>{
  const data = req.body;
  fs.appendFileSync('quotes.json', JSON.stringify(data)+'\n');
  res.json({message:'Quote submitted successfully'});
});

app.listen(port, ()=>console.log(`Server running at http://localhost:${port}`));