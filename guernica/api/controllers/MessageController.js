/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {

  inbox: function (req, res) {
    console.log ("Inside the Message controller");
    Message.find({}).exec(function(err, messages){
        if(err != null) {
          console.log("Error: Not able to find the messages "+err);
          res.view ({err:'Unable to access the Message.',
          messages:null});
        } else {
          console.log("data is present");
          res.view({messages:messages});
        }
    });
  },

  sent: function (req, res) {
    console.log ("Inside the Message controller");
    Message.find({from:'dv28@gmail.com'}).exec(function(err, messages){
      if(err != null) {
        console.log("Error: Not able to find the messages "+err);
        res.view ({err:'Unable to access the Message.',
          messages:null});
      } else {
        console.log("data is present");
        res.view({messages:messages});
      }
    });
  }
}
