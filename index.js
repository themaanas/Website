//
//var downloader = require("openload-downloader");
//// https://openload.co/embed/r6L66uBDLlQ/Arrow.S03E02.Sara.mp4
//downloader.download("https://oload.tv/embed/r6L66uBDLlQ", "dummy.mp4");
//(async function() {
//  await
//  console.log("Download completed");
//})();
var embedUrl;
var expandUrl;
var request = require("request");
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use("/", express.static(__dirname));
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});
//
// app.post('/season', function (req, res) {
//
// 	request({
// 		uri: "https://srv.hdeuropix.com/svop/lkbs?search=arrow-s" + req.body.season + "e" + req.body.episode,
// 	}, function (error, response, body) {
// 		var str = body.substr(body.indexOf("<iframe src=")).substr(13);
// 		embedUrl = str.substr(0, str.indexOf("'"));
// 		googl(embedUrl).then(function (value) {
// 			expandUrl = value.substr(26, value.substr(26).indexOf("/"));
// 			(async () => {
// 				const url = 'https://oload.tv/embed/' + expandUrl;
// 				const scrap = await new OpenloadScraper().scrap(url);
// 				if (scrap.success) {
// 					console.log(scrap.data.sources[0].url);
// 					res.status(200).send({url: scrap.data.sources[0].url});
// 				}
// 			})();
// 		});
// 	});
// 	console.log(req.body);
// });

app.listen(8080);
