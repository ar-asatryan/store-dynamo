# store-dynamo
Post call endpoint - Save user data to dynamo-db with unique id


Usage of the Project:

First of all you have to configure your AWS credentials for your account in the
~/.aws/config file>>>


// Step 1:
$ sls deploy


ANY - https://368j9bsa7k.execute-api.eu-north-1.amazonaws.com/dev

// Step 2:
// Create User via curl: (run from terminal from the project directory)

curl -H "Content-Type: application/json" -X POST ${BASE_DOMAIN}/users -d '{"userId": "id", "name": "Test1 Test2"}'

// Step 3:
// Check dynamoDB Tables section from your AWS account:

for example:
https://eu-north-1.console.aws.amazon.com/dynamodb/home?region=eu-north-1#tables:
