require('./db/connect');
        const AppChatRouter = require('./routers/routers_chat');
        const express = require('express');
        const bcryptjs = require('bcryptjs');
        const path = require('path');

        const app = express();
        const port = 3030;

        app.use(express.json());
        app.use(express.static(path.join(__dirname, 'public')));
        app.use(AppChatRouter);

        app.listen(port, () => {
        console.log('ecoute sur le port: ',port);
        });