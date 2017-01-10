var express = require('express');
var app = express();
var fs = require('fs')
  , gm = require('gm');

// resize and remove EXIF profile data

app.get('/',function(req,res){
    console.log('request came here');
    gm('./device@3x.png')
    .resize(240, 240)
    .noProfile()
    .write('./target.png', function (err) {
      if (!err) console.log('done');
    });
    res.send('success');
})

app.post('/',function(req,res){
   console.log('post call');
     gm('./device@3x.png')
    .resize(240, 240)
    .noProfile()
    .write('./target.png', function (err) {
      if (!err) console.log('done');
    });
    res.send('success');
});

app.listen(3000,function(port){
    console.log('i am listning')
});
