const mongoose =  require('mongoose');
const customer = require('.models/customer');
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/customer');
    const Customer = require('.models/customer');

const Customer = require('./models/customer');

const addCustomer = (customer) => {
Customer.create(customer).then(customer =>{
console.info('New Customer Added');
db.close();


});

}


const findCustomer = (name) => {
const  search = new RegExp(name, 'i');
Customer.find({$or: [{firstName: search}, {lastName: search}]})
.then(customer =>{
    console.info(customer);
    console.info(`${customer.length} match`);
    db.close();
});

}

module.exports = {
addCustomer,
findCustomer

}
