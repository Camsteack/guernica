/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {
    	Project.find({}).exec(function findAllProjects(err, found) {
    		return res.view({
            	artists: found
        	});
    	});
    },	
};

