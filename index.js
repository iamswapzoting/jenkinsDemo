const express = require('express');
const app = express();

app.get('/', (req, res)=>{
	res.send({data : {name : 'test', city :'testCity'}});
})

app.listen(5000, ()=>{
	console.log('application running on port 5000');
});
