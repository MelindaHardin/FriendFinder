//should contain 2 routes:
var path = require("path");
var friendsData = require("../data/friends.js");


//   1 GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {

        res.json(friendsData);

    });
// ***  NEED HELP ***   2 POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {
        var surveyResults = req.body;
        var surverScore=req.body.scores;
        var totalDifference=0;

        console.log(req.body);
        //friendsData.push(surveyResults);    
        //res.json(matchFriend(friendsData))

    });

}



//function matchFriend(friendsData) {
    
//}