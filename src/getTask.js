const AWS = require('aws-sdk');

const getTask = async(event) => {

    try {
     
    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    const result = await dynamoDB.scan({
        TableName: 'TaskTable'
    }).promise();

    const task = result.Items;

    console.log(task)

    return{
        status: 200,
        body: {task}
    };  

    } catch (error) {
        console.log(error)
    }


};
  

module.exports = {
    getTask
};