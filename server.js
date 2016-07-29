// import path from 'path';
// import express from 'express';
var path = require("path");
var express = require("express");

// import handlebars from 'express-handlebars';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import {createStore} from 'redux';
//import {Provider} from 'react-redux';
//import App from './generated/app';

const app = express();

// View templates
// app.engine('handlebars', handlebars({
//   defaultLayout: 'main',
//   layoutsDir: path.resolve(__dirname, 'views/layouts')
// }));
// app.set('view engine', 'handlebars');
// app.set('views', path.resolve(__dirname, 'views'));

// console.log( path.resolve(__dirname, '../dist') )

// // Static assets
// app.use(express.static(path.resolve(__dirname, '../dist')));

app.use(express.static('app'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

// Routes
// app.get('/', (request, response) => {
//   const initialState = {
//     userId: '',
//     currentMessage: '',
//     messages: []
//   };
//   const store = createStore((state=initialState) => state);
//   const appContent = ReactDOMServer.renderToString(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   response.render('app', {
//     app: appContent,
//     initialState: JSON.stringify(initialState)
//   });
// });

//export default app;
module.exports = app;
