# generator-redux-post-run

Modded post run template of [generators-redux](https://github.com/banderson/generator-redux/tree/master/generators/app/templates).

####Mods:

- jade
- stylus
- explicit backend and frontend code context
  - pros:
    - no guessing as to what code belongs to where
  - negs:
    - common code will require a common directory if the convention is followed. Otherwise the code would just go in the old `./js` or alternativley `./src`.
- eslint
  - frontend:
    - eslint-loader into babel transpile
  - backend:
    - eslint-watch for backend continuous linting


## Running your project

The generated project includes a development server on port `4000`, which will rebuild the app whenever you change application code. To start the server (with the dev-tools enabled), run:

```bash
$ npm start
```

To run the server with the dev-tools disabled, run:

```bash
$ DEBUG=false npm start
```

To build for production, this command will output optimized production code:

```bash
$ npm run prod
```
