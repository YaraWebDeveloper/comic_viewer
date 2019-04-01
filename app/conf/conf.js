/* Using enviroment */
global.enviroment = 'dev';

/* Using to export constants */
const conf = {
  dev: {},
  prod: {},
  test: {},
}

/* Enviroment on development */
conf['dev']['base_url'] = 'http://localhost';
conf['dev']['port'] = '3100';
conf['dev']['apiServer'] = 'https://xkcd.now.sh/';
conf['dev']['fileName'] = 'all_dist';
conf['dev']['minify'] = true;
conf['dev']['mediaApi'] = 'http://localhost:3100/dist/';
conf['dev']['keyCrypto'] = '';


/* Enviroment on development */
conf['prod']['base_url'] = 'https://test-resuelve.herokuapp.com/';
conf['prod']['port'] = '';
conf['prod']['apiServer'] = 'https://ghibliapi.herokuapp.com/';
conf['prod']['fileName'] = 'all_dist';
conf['prod']['minify'] = true;
conf['prod']['mediaApi'] = 'https://test-resuelve.herokuapp.com/dist/';
conf['prod']['keyCrypto'] = '';



/* Export constants */
module.exports = conf[global.enviroment];
