# Comic Viewer XKCD

Basado en [React Ethereal](https://github.com/YaraWebDeveloper/react_ethereal)

### Instalación
1. Clonar o descargar el repositorio
`$ git clone  https://github.com/YaraWebDeveloper/comic_viewer.git`
2. Entrar en la carpeta `$ cd comic_view`
3. Ejecutar [npm](https://npmjs.com) `$ npm i`
4. Si hay problemas de compilación. `$ npm i --only=dev`
5. Editar archivo de configuración con puerto, cambiar la variabel env a 'dev', base_url y demás setups `app/conf/conf.js`
6. Ejecutar `$ npm start`

### Descripción
Mediante el consumo de la API de XKCD realice un visor de comic random con posibilidad de calificar la imagen actual, esta funcionalidad es solo de front.

Realice la prueba en una arquitectura basada en React con Redux Basado en [React Ethereal](https://github.com/YaraWebDeveloper/react_ethereal) escrita en su totalidad por mi, usando patrón de Store, Actions, Reducer, Components. La principal razón es por la comodidad que presento con esta arquitectura.

El principal problema que presente fue una parte con el acceso CORS de XKCD, el cual encontrpe una pequeña solución con un servidor alterno de XKCD con el CORS abierto al publico [XKCD CORS CLEAN] (https://github.com/mrmartineau/xkcd-api)

La aplicación queda alojada en la siguiente URL: [Comic Viewer - YaraWeb](https://comic-viewer-yara.herokuapp.com/)


## License
- MIT

---
**Enjoy the ride, love the ending**
by [YaraWebDeveloper](https://github.com/YaraWebDeveloper/react_ethereal)
