var page = require('webpage').create();
page.open('https://cafe.promofb.es', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});
