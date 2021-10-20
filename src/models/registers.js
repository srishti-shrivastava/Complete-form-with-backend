const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const employeesSchema=new mongoose.Schema({
    firstname: {
        type:String,
        required: true

    },
    lastname: {
        type:String,
        required: true

    },
    email: {
        type:String,
        required: true,
        unique: true

    },
    gender: {
        type:String,
        required: true

    },
    phone: {
        type:Number,
        required: true,
        unique: true

    },
    age: {
        type:Number,
        required: true

    },
    password: {
        type:String,
        required: true

    },
    confirmpassword: {
        type:String,
        required: true

    },

})


employeesSchema.pre('save',async function(next){

    if(this.isModified("password")){
        // const passwordhash = await bcrypt.hash(password,10);
        this.password= await bcrypt.hash(this.password,10);
        this.confirmpassword=undefined;
    }
    next();
     
})
//now collection created
const Register = new mongoose.model("Register",employeesSchema);

module.exports = Register;