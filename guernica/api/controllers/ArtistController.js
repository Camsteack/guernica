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
          profileImage: "P1012065.JPG",
          coverImage: "gal1.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Camille",
          lastName: "Ballouche",
          title: "Designer",
          country: "Syria",
          email: "camille.ballouche@gmail.com",
          profileImage: "P1012999.JPG",
          coverImage: "gal3.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Diego",
          lastName: "Romero",
          title: "Writer",
          country: "Egypt",
          email: "camille.ballouche@gmail.com",
          profileImage: "Saeed.jpg",
          coverImage: "gal8.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Chulani",
          lastName: "Kodi",
          title: "Visual Artist",
          country: "Pakistan",
          email: "camille.ballouche@gmail.com",
          profileImage: "ChulaniKodikara.jpg",
          coverImage: "gal17.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Joe",
          lastName: "Crinadchi",
          title: "Writer",
          country: "Sudan",
          email: "camille.ballouche@gmail.com",
          profileImage: "Crinadchi.jpg",
          coverImage: "gal4.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Mohamed",
          lastName: "Hisham",
          title: "Media Artist",
          country: "Tunisia",
          email: "camille.ballouche@gmail.com",
          profileImage: "MohamedHisham.png",
          coverImage: "gal18.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Ruhanie",
          lastName: "Perera",
          title: "Designer",
          country: "Lybia",
          email: "camille.ballouche@gmail.com",
          profileImage: "RuhaniePerera.jpg",
          coverImage: "gal2.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Selyna",
          lastName: "Peiris",
          title: "Writer",
          country: "Nigeria",
          email: "camille.ballouche@gmail.com",
          profileImage: "SelynaPeiris.jpg",
          coverImage: "gal6.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Simon",
          lastName: "Yuen",
          title: "Photographer",
          country: "Myanmar",
          email: "camille.ballouche@gmail.com",
          profileImage: "Simon.jpg",
          coverImage: "gal5.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Saskia",
          lastName: "Fernando",
          title: "Media Artist",
          country: "Afghanistan",
          email: "camille.ballouche@gmail.com",
          profileImage: "Miaouss.jpg",
          coverImage: "gal8.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Khartoon",
          lastName: "",
          title: "Illustrator",
          country: "Sudan",
          email: "camille.ballouche@gmail.com",
          profileImage: "Khartoon.jpg",
          coverImage: "gal14.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Mido",
          lastName: "Basim",
          title: "Writer",
          country: "Iraq",
          email: "camille.ballouche@gmail.com",
          profileImage: "mo.jpg",
          coverImage: "gal13.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Nalaka",
          lastName: "Gunawerde",
          title: "Filmmaker",
          country: "Palestine",
          email: "camille.ballouche@gmail.com",
          profileImage: "NalakaGunawerde.jpg",
          coverImage: "gal9.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Dushyanti",
          lastName: "Mendis",
          title: "Illustrator",
          country: "Somalia",
          email: "camille.ballouche@gmail.com",
          profileImage: "DushyanthiMendis.jpg",
          coverImage: "gal6.jpg"
        }).exec(this.callback);
        Artist.create({
          firstName: "Dinesh",
          lastName: "Viswanath",
          title: "Illustrator",
          country: "Mali",
          email: "camille.ballouche@gmail.com",
          profileImage: "dinesh.jpg",
          coverImage: "gal12.jpg"
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

