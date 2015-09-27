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
          coverImage: "gal1.jpg",
          bio: "I am a photographer living in Iraq, although I was born in France. I mainly work on lengthy photo-essays which are hard to sell to big newspapers who want short articles and spot news. I spend time in communities to get their voice expressed rather than build a story from a western standpoint. I like to work with Iraqi writers to build my story: I have worked a lot with Baghdad-based Mido Basim."
        }).exec(this.callback);
        Artist.create({
          firstName: "Camille",
          lastName: "Ballouche",
          title: "Designer",
          country: "Syria",
          email: "camille.ballouche@gmail.com",
          profileImage: "P1012999.JPG",
          coverImage: "gal3.jpg",
          bio: "I am a Syrian-born designer based in Damascus. I used to work with Syrian television and newspapersbefore the war began in 2011. Here I show my personal work, which illustrates the conflict we’re in, as well as my professional portfolio. I’m keen to meet designers and visual artists from other countries so please get in touch and leave comments!"
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
          title: "Illustrator",
          country: "Mali",
          email: "camille.ballouche@gmail.com",
          profileImage: "Crinadchi.jpg",
          coverImage: "gal4.jpg",
          bio: "I live in Bamako, Mali, and have been illustrating children books for 10years; I also organiseworkshops in schools. The arrival of Boko Haram has made it very difficult for us to work. Artists are persecuted. I use to have work but it’s getting more and more problematic. I would be happy to illustrate children books from Europe and other parts of the world."
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
          profileImage: "SaskiaFernando.jpg",
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

