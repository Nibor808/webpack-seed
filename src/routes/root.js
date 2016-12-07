import path from 'path'

const defaultPath = '../src/views/';

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('login');
  });
}