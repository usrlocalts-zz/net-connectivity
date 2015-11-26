require('dns').resolve('www.google.com', function(err) {
  if (err)
     console.log("Internet doesn't work");
  else
     console.log("Internet works");
});
