const app = require("./app");

const {API_PORT}=process.env;

const port = process.env.PORT || API_PORT;

app.listen(port || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
