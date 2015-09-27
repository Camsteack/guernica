/**
 * ChallengeController
 *
 * @description :: Server-side logic for managing challenges
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
    	Challenge.find({}).exec(function findAllArtists(err, found) {
    		return res.view({
            	artists: found
        	});
    	});
    },
};

