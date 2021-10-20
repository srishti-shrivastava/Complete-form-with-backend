const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/youtubeRegistrtion")
.then(()=>{
    console.log(`connection successfull`);
}).catch((e)=>{
    console.log(`connection error`);
});