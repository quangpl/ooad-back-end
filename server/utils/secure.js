const customerModel = require("../models/customer");
 
 
 const authCustomer = async (req,res,next)=>{
    const token = req.headers['x-token'];
    const customer = await  customerModel.getByToken(token);
    
    if(!customer||!token){

        return false;
    }
    else {
      return customer;
    }
}
module.exports = {
  authCustomer
};