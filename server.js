Skip to content
This repository
Search
Pull requests
Issues
Gist
 @matthewattanasio
 Watch 17
  Star 320
  Fork 57 raineroviir/react-redux-socketio-chat
 Code  Issues 1  Pull requests 0  Wiki  Pulse  Graphs
Branch: master Find file Copy pathreact-redux-socketio-chat/src/server/server.prod.js
24d9893  on Jan 14
@raineroviir raineroviir tidy up
1 contributor
RawBlameHistory     114 lines (92 sloc)  3.21 KB
'use strict';

import express from 'express';
import path from 'path';

import mongoose from 'mongoose';

import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import React from 'react';
import configureStore from '../common/store/configureStore'
import { RouterContext, match } from 'react-router';
import routes from '../common/routes';
import { createLocation } from 'history';
import cors from 'cors';

import User from './models/User.js';
import passport from 'passport';
require('../../config/passport')(passport);
import SocketIo from 'socket.io';
const app = express();

//set env vars
process.env.MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/chat_dev';
process.env.PORT = process.env.PORT || 3000;

// connect our DB
mongoose.connect(process.env.MONGOLAB_URI);

process.on('uncaughtException', function (err) {
  console.log(err);
});

app.use(cors());
app.use(passport.initialize());

//load routers
const messageRouter = express.Router();
const usersRouter = express.Router();
const channelRouter = express.Router();
require('./routes/message_routes')(messageRouter);
require('./routes/channel_routes')(channelRouter);
require('./routes/user_routes')(usersRouter, passport);
app.use('/api', messageRouter);
app.use('/api', usersRouter);
app.use('/api', channelRouter);

app.use('/', express.static(path.join(__dirname, '../..', 'static')));

app.get('/*', function(req, res) {

  const location = createLocation(req.url)

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if(err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if(!renderProps) {
      return res.status(404).end('Not found');
    }

    const store = configureStore();

    const InitialView = (
      <Provider className="root" store={store}>
        <div style={{height: '100%'}}>
          <RouterContext {...renderProps} />
        </div>
      </Provider>
    );

    const initialState = store.getState();
    const html = renderToString(InitialView)
    res.status(200).end(renderFullPage(html, initialState));
  })
})

const server = app.listen(process.env.PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('server listening on port: %s', process.env.PORT);
});

const io = new SocketIo(server, {path: '/api/chat'})
const socketEvents = require('./socketEvents')(io);

function renderFullPage(html, initialState) {
  return `
    <!DOCTYPE html>
		<html lang="en">
		<head>
		    <meta charset="utf-8">
		    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
		    <meta name="viewport" content="width=device-width, initial-scale=1.0">
		    <title>Message Me</title>
		    <link rel="stylesheet" href="app/dist/css/style.css" type="text/css">
		</head>
		<body>
			<div id="container"></div>
		    <script src="app/dist/js/app.js"></script>
		</body>
		</html>
  `
}
