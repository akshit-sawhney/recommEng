var ug = require('ug')
var express = require('express')
var app = express()
var graph = new ug.Graph();


app.get('/', function (req, res) {
    console.log("INN");
    graph.load('C:/Users/Akshit.Sawhney/Desktop/recommEng/recommEng/saved_graph.ugd', function() {

      // get the closest 100 'listings' nodes, at a minimum depth (distance) of 3
    //   console.log(graph);
      var node =  graph.nodes('user').query().filter({user_id: 4}).first()
      var results = graph.closest(node, {
        compare: function(node) { return node.entity === 'listing'; },
        minDepth: 3,
        count: 100
      });

      // results is now an array of Paths, which are each traces from your starting node to your result node...
      var resultNodes = results.map(function(path) {
        return path.end();
      });
      console.log(resultNodes);
    //   doSomething(resultNodes); // render, whatever you'd like

    });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
