/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'guernicaMongodbServer',
  tableName: 'messages',

  attributes: {
  	to : 'string',
  	from : 'string',
  	subject: 'string',
  	msgContent : 'string'
  }
};

