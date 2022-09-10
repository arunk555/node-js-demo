const app = require("./app");

app.listen(8000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});