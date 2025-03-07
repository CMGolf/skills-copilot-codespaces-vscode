// Create web server
// Create a new comment and store it in the database
// Return the new comment as JSON
// Return a 500 error if something goes wrong
//
// Method: POST
// Params: { username: 'string', text: 'string' }
// Output: { id: 'string', username: 'string', text: 'string' }

app.post('/comments', function(req, res) {
  var comment = {
    id: uuid.v4(),
    username: req.body.username,
    text: req.body.text
  };

  // Store the new comment in the database
  db.collection('comments').insert(comment, function(err, result) {
    if (err) {
      console.error(err);
      res.status(500).send('Error storing comment');
    } else {
      res.json(comment);
    }
  });
});