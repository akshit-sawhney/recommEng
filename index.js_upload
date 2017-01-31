var ug = require('ug')
var express = require('express')
var app = express()
var graph = new ug.Graph();


app.get('/', function (req, res) {

  // var graph = new ug.Graph();

  // fetch data

  // var users = getUsers();         // abstract function to get user data (i.e. SQL)
  // var listings = getListings();   // ... listings
  // var views = getViews();         // ... etc.
  // var favorites = getFavorites();
  // var requests = getRequests();

  var users = [
      {
          user_id: 0
      },
      {
          user_id: 1
      },
      {
          user_id: 2
      },
      {
          user_id: 3
      },
      {
          user_id: 4
      },
      {
          user_id: 5
      }
  ];
  var listings = [
      {
          listing_id: 11
      },
      {
          listing_id: 12
      },
      {
          listing_id: 13
      },
      {
          listing_id: 14
      },
      {
          listing_id: 15
      },
      {
          listing_id: 16
      },
      {
          listing_id: 17
      },
      {
          listing_id: 18
      },
      {
          listing_id: 19
      }
  ];
  var views = [
      {
          user_id: 0,
          listing_id: 11
      },
      {
          user_id: 1,
          listing_id: 11
      },
      {
          user_id: 1,
          listing_id: 12
      }
  ];
  var favorites = [
      {
          user_id: 2,
          listing_id: 14
      },
      {
          user_id: 3,
          listing_id: 14
      },
      {
          user_id: 3,
          listing_id: 15
      }
  ]
  var requests = [
      {
          user_id: 4,
          listing_id: 17
      },
      {
          user_id: 5,
          listing_id: 17
      },
      {
          user_id: 5,
          listing_id: 18
      }
  ]

    function getNodeById(nodes, id) {
      return nodes.filter(function(node) {
          return node.get('id') === id;
      })[0];
    }

  // Add to graph

  users.forEach(function(user) {
    graph.createNode('user', user);
  });

  listings.forEach(function(listing) {
    graph.createNode('listing', listing);
  });

  views.forEach(function(view) {
    graph.createEdge('view').link(
      graph.nodes('user').query().filter({user_id: view.user_id}).first(),
      graph.nodes('listing').query().filter({listing_id: view.listing_id}).first()
    ).setDistance(4);
  });

  favorites.forEach(function(favorite) {
    graph.createEdge('favorite').link(
        graph.nodes('user').query().filter({user_id: favorite.user_id}).first(),
        graph.nodes('listing').query().filter({listing_id: favorite.listing_id}).first()
    ).setDistance(2);
  });

  requests.forEach(function(request) {
    graph.createEdge('request').link(
        graph.nodes('user').query().filter({user_id: request.user_id}).first(),
        graph.nodes('listing').query().filter({listing_id: request.listing_id}).first()
    ).setDistance(1);
  });

  // save graph
  graph.save('C:/Users/Akshit.Sawhney/Desktop/recommEng/recommEng/saved_graph.ugd', function() {

    console.log("DONE SUCCESSFULLY");

  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
