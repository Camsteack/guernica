/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {
    	Artist.find({}).exec(function findAllArtists(err, found) {
    		return res.view({
            	artists: found
        	});
    	});  
    },

    profile: function(req, res) {
		Artist.find({id: req.param('id')}).exec(function findArtist(err, found) {
    		return res.view({
            	artist: found
        	});
    	});  
    }
};

