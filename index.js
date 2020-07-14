const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const AWS = require('aws-sdk');

const USERS_TABLE = process.env.USERS_TABLE;

const IS_OFFLINE = process.env.IS_OFFLINE;
let dynamoDb;
if (IS_OFFLINE === 'true') {
    dynamoDb = new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:8000'
    })
    console.log(dynamoDb);
} else {
    dynamoDb = new AWS.DynamoDB.DocumentClient();
};

app.use(bodyParser.json({ strict: false }));

const user = {
    firstName: "Ararat",
    lastName: "Asatryan",
    username: "aroray"
};


// app.get('/', function (req, res) {
//     res.send('Hello Serverless!')
// })

app.get('/', function (req, res) {
    res.send(user)
})


// Get User endpoint
app.get('/users/:userId', function (req, res) {
    const params = {
        TableName: USERS_TABLE,
        Key: {
            userId: req.params.userId,
        },
    }

    dynamoDb.get(params, (error, result) => {
        if (error) {
            console.log(error);
            res.status(400).json({ error: 'Could not get user' });
        }
        if (result.Item) {
            const {userId, name} = result.Item;
            res.json({ userId, name });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    });
})

// Create User endpoint
app.post('/users', function (req, res) {
    const { userId, name } = req.body;
    if (typeof userId !== 'string') {
        res.status(400).json({ error: '"userId" must be a string' });
    } else if (typeof name !== 'string') {
        res.status(400).json({ error: '"name" must be a string' });
    }

    const params = {
        TableName: USERS_TABLE,
        Item: {
            userId: 'aroray',
            name: 'Ararat Asatryan',
        },
    };

    dynamoDb.put(params, (error) => {
        if (error) {
            console.log(error);
            res.status(400).json({ error: 'Could not create user' });
        }
        res.json({ userId, name });
    });
})

module.exports.handler = serverless(app);