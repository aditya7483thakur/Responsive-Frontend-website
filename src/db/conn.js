var mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/adityadynamics',{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
  console.log("connection succesfull");
}).catch((error)=>{
  console.log(error);
})