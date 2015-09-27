/**
 * ArtistController
 *
 * @description :: Server-side logic for managing artists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		Artist.create({
		  firstName: "Margaux",
		  lastName: "Portron",
		  title: "Photographer",
		  country: "Iraq",
		  email: "camille.ballouche@gmail.com",
		  profileImage: "bulbizarre.png"
		}).exec(this.callback);
		Artist.create({
		  firstName: "Camille",
		  lastName: "Ballouche",
		  title: "Designer",
		  country: "Syria",
		  email: "camille.ballouche@gmail.com",
		  profileImage: "pikachu.png"
		}).exec(this.callback);
		Artist.create({
		  firstName: "Diego",
		  lastName: "Romero",
		  title: "Journalist",
		  country: "Egypt",
		  email: "camille.ballouche@gmail.com",
		  profileImage: "Miaouss.jpg"
		}).exec(this.callback);
		Artist.create({
		  firstName: "Dinesh",
		  lastName: "Viswanath",
		  title: "Illustrator",
		  country: "Mali",
		  email: "camille.ballouche@gmail.com",
		  profileImage: "rattata.png"
		}).exec(function findAllArtists(err, found) {
			return res.json({
			    done: 'done'
			});
    	});
	},

	callback: function(res, error) {
		console.log(res);
	}
};

