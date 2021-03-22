const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoutes/routes');
const apiRoutes = require('./routes/apiRoutes/routes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Api is now listening on port ${PORT}`);
});
