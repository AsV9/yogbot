const DiscordCommand = require('../DiscordCommand.js');

class DiscordCommandRoss extends DiscordCommand {
	
	constructor(subsystem) {
		super("ross", "Happy little accidents", undefined , subsystem, true);
	}
	
	onRun(message, permissions, args) {
		var responses = [
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/images.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/Bob-Ross.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/bobross.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/bob_ross_by_metalkenji_1.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/epic-bob-ross-painting-printed-poster-0.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/images%201.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/gallery-1486403001-gettyimages-50467807.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/mp550x550mattefffffft.3u2.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/smite_bobross_sylvanus_by_scebiqu-db8ujx8.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/saturday_morning_sanctuary_by_jasinski-d5ekeag.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/bob_ross_by_phantompainter-darjb8h.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/1507456944949573927.png",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/bob-ross-promojpg.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/f6d138b5ecbb089cde6b77704cc71b9e.gif",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/82433755.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/hey-guys-bob-ross.png",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/il_570xN.859524156_3x30.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/il_fullxfull.684132140_dslz.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/69670460850a43ee94ebb53500d722a9--the-joy-of-painting-painting-tips.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/BobRoss_theme-meme_t6vendor_MensTee_ModelFront.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/Bob_Ross.jpg",
			"http://i1065.photobucket.com/albums/u383/CynicalGamer/Bob%20Ross/0d3f593fb019d80d4ba5bd881ef023dcc8882c3111d17b3fa9e081fc8b81ca26.jpg"
		];
		var response = responses[Math.floor(Math.random() * responses.length)];
		message.reply(response);
	}
}

module.exports = DiscordCommandRoss;