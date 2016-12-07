import express from 'express';
import exhbs from 'express-handlebars';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

app.set('views', `${__dirname}/src/views`);
app.engine('.hbs', exhbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: `${app.get('views')}/layouts`,
  partialsDir: `${app.get('views')}/partials`
}));
app.set('view engine', '.hbs');

require('./src/routes/root')(app);
require('./src/routes/user')(app);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})