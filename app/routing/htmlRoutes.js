/*include two routes:

A GET Route to /survey 
which should display the survey page.


And a default, catch-all route that leads to home.html which displays the home page.*/

app.get('/', function(req, res){
    res.send("Put this ROUTE in the htmlRoutes.js file.  This  display the SURVEY PAGE.")
});

