const app = require('express')();
const http = require('http').Server(app);
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://devasreea:deva25@counter-app.9in8vrr.mongodb.net/?retryWrites=true&w=majority&appName=Counter-app")
const User = require('./modals/userModel');
async function inser()
{
   await User.create({
        name:'Devasree',
        email:'devasree.a@kalvium.community'
    })
}
useInsertionEffect();

http.listen(3000, function(){
    console.log('Server is running');

})
