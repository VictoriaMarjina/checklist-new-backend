const path = require('path');
const api = require('./restAPI');
const express = require('express');

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../dist')));
        this._app.use(this.headerCors);

        this._app.post('/user-register', this.onUserRegister)
        this._app.post('/log-in', this.onLogIn)
        this._app.post('/get-tasks', this.onGetTasks)
        this._app.post('/get-all-users', this.onGetUsers)
        this._app.post('/get-info', this.onGetInfo)
    }

    headerCors = (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    }

    onGetUsers = async (req, res) => {
        const data = await api.getAllUsers(req.body);

        res.json(data);
        res.end();
    }

    onGetInfo = async (req, res) => {
        const data = await api.onGetInfo(req.body);

        res.json(data);
        res.end();
    }

    onUserRegister = async (req, res) => {
        const data = await api.userRegister(req.body);

        res.json(data);
        res.end();
    }

    onLogIn = async (req, res) => {
        const data = await api.logIn(req.body);

        res.json(data);
        res.end();
    }

    onGetTasks = async (req, res) => {
        //const data = await api.getTasks(req.body);
        const data = {
                "Task": [
                    {
                        "checklist_id": 540,
                        "responsible_token": "1ae22e526fbf0a2fb6e670f4c5c76b1f",
                        "full_name": "Sabina Shamilova",
                        "status_id": 0,
                        "description": "Спасибо за бууулошки",
                        "dead_line": "2020-12-11"
                    },
                    {
                        "checklist_id": 537,
                        "responsible_token": "1e584a9c0eb8b4a18fcf54de826bbe1e",
                        "full_name": "Sabina Shamilova",
                        "status_id": 1,
                        "description": "Интересная была партия в шахматы)",
                        "dead_line": "2020-12-10"
                    }
                ],
                "SubTask": []
            }
            
        res.json(data);
        res.end();
    }


    getApp = () => this._app;
}

module.exports = App;