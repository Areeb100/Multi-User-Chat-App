const mongoose = require('mongoose');


const databaseName = "julmttf200";
const url = `mongodb+srv://areeb:areeb12345@cluster0.wrx1jgj.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;