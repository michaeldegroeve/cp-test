// Create web server and listen on port 3000
// Load the express module
var express = require('express');
// Load our own module
var comments = require('./comments');
// Create an instance of express
var app = express();
// Create a route for the path "/"
app.get('/', function(request, response) {
  // Send the response body "Hello World"
  response.send('Hello World\n');
});
// Create a route for the path "/comments"
app.get('/comments', function(request, response) {
  // Send the response body "Hello World"
  response.send(comments.getComments());
});
// Create a route for the path "/comments/:id"
app.get('/comments/:id', function(request, response) {
  // Send the response body "Hello World"
  response.send(comments.getComment(request.params.id));
});
// Create a route for the path "/comments/:id"
app.post('/comments', function(request, response) {
  // Send the response body "Hello World"
  response.send(comments.addComment(request.body));
});
// Create a route for the path "/comments/:id"
app.put('/comments/:id', function(request, response) {
  // Send the response body "Hello World"
  response.send(comments.updateComment(request.params.id, request.body));
});
// Create a route for the path "/comments/:id"
app.delete('/comments/:id', function(request, response) {
  // Send the response body "Hello World"
  response.send(comments.deleteComment(request.params.id));
});
// Start the web server on port 3000
app.listen(3000);
// Print message to console
console.log('Server running at http://