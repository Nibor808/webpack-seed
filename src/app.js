import express from 'express';
import exhbs from 'express-handlebars';
import bodyParser from 'body-parser';
import env from 'node-env-file';
import cookieParser from 'cookie-parser';

env('./config/.env', {logger: console});

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));
app.use(cookieParser());

app.set('views', `${__dirname}/views`);
app.engine('.hbs', exhbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: `${app.get('views')}/layouts`,
  partialsDir: `${app.get('views')}/partials`
}));
app.set('view engine', '.hbs');

require('routes/root')(app);
require('routes/user')(app);




app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});