var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pageone ={
    title: "Page 1 | Emwhack",
    heading: "Page 1",
    date: "September 30,2016",
    content:`<p><i>The day turned to night, yet my dog never learned to bite. Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment.</i></p>
            <div>
                <p><b>Ever been to the moon, but had to return because there was no saloon? Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment.</b></p>
            </div>
            <div>
                <p><i>Plastic unicorns made my day, burping rainbows all the way Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment. Filler Text is a big embarassment to the establishment.</i></p>`
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
}

var htmltemplate = `
<html>
    <head>
        ${title}
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
            <div>
                ${date}
            </div>
            ${content}
        </div>
    </body>
</html> 
`;


app.get('/', function (req, res) {
  res.send(createTemplate(pageone));
});

app.get('/page1',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'page1.html'));
});

app.get('/page2',function(req, res){
     res.sendFile(path.join(__dirname, 'ui', 'page2.html'));
});

app.get('/page3',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'page3.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
