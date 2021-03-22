const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes/routes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', htmlRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Api is now listening on port ${PORT}`);
});
