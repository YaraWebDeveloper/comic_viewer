/* Using enviroment */
global.enviroment = 'prod';

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


/* Enviroment on production */
conf['prod']['base_url'] = 'https://comic-viewer-yara.herokuapp.com/';
conf['prod']['port'] = '';
conf['prod']['apiServer'] = 'https://xkcd.now.sh/';
conf['prod']['fileName'] = 'all_dist';
conf['prod']['minify'] = true;
conf['prod']['mediaApi'] = 'https://comic-viewer-yara.herokuapp.com/dist/';
conf['prod']['keyCrypto'] = '';



/* Export constants */
module.exports = conf[global.enviroment];
