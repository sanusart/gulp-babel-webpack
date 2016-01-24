# gulp task with babel and webpack test

### Set-up

`$ git clone https://github.com/sanusart/gulp-babel-webpack`

and

`$ npm install`

### Running

`$ npm start` - will run the gulp task and watch for changes in `./src` directory and serve the contents of `./build` directory

### Structure

```
.
├── README
├── build               <- built files goes here
├── gulpfile.js
├── node_modules        <- node modules
├── package.json
├── src                 <- source directory of the app
│   ├── index.js        <- main entry point file
│   └── lib
│       ├── Hello.js
│       └── Person.js
└── webpack.config.js
```

### License

MIT
