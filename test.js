console.log('starting function');

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-north-1'});

exports.handle = function(err, data, cb) {
    let params = {
        userA: {
            fistName: "Ararat",
            lastName: "Asatrtyan",
            userName: "aroray"
        },

        TableName: 'usersBook'
    }

    docClient.put(params, function(err, data){
        if (err){
            cb(err,null);
        } else {
            cb(data);
        }
    });

};