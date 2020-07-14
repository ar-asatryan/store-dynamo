const express = require('express');
const router = express.Router();

const user = {
  firstName: 'Ararat',
  lastName: 'Asatryan',
  userName: 'aroray'
};

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "handling GEt requests -->"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json(user);
});

// const AWS = require('aws-sdk');
// const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-north-1'});
// exports.handle = function(err, data, cb) {
//     let params = {
//         userA: {
//             fistName: "Ararat",
//             lastName: "Asatrtyan",
//             userName: "aroray"
//         },
//
//         TableName: 'usersBook'
//     }
//
//     docClient.put(params, function(err, data){
//         if (err){
//             cb(err,null);
//         } else {
//             cb(null, data);
//         }
//     });
//
// };

module.exports = router;