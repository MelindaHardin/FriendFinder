//should contain two routes:
var path = require("path");
var friends = require("../data/friends.js")


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);

    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var compatibleFriend;
        var bestFriendScore;
        friends.friends.forEach(function (currentFriend) {
            var friendScore = 0;

            //loops through survey scores 
            for (i = 0; i < newFriend.scores.length; i++) {
                friendScore += Math.abs(newFriend.scores[i] - currentFriend.scores[i]); //adds the absolute value of new friedscore - currently compared to friend's score.
            }
            if (compatibleFriend === undefined) //if there is no compatible friend assigned, the current friend is assigned and that friends score is the bestScore
            {
                compatibleFriend = currentFriend;
                bestFriendScore = friendScroe;
            } else {
                if (friendScore < bestFriendScore) {
                    compatibleFriend = currentFriend;
                    bestFriendScore = friendScore;
                }
            }
        });

        friends.friends.pus(req.body);
        return res.json(compatibleFriend);
    });	
}