const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/nsetracker'));
app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/nsetracker/index.html'));
});
app.listen(process.env.PORT || 8080);