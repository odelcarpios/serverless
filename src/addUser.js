const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports.createUser = async (event) => {
  try {
    const { name, user, email } = JSON.parse(event.body)
    const createdAt = Date()
    const id = v4()

    const newUser = {
        id,
        name,
        user,
        email,
        createdAt
    }

    await dynamodb.put({
        TableName: 'usersTable',
        Item: newUser
    }).promise()
    

    return {
      statusCode: 200,
      body: JSON.stringify(newUser)
    };
  } catch (err) {
    console.log(err)
  }

  };

  module.exports.listUser = async (event) => {
    try {
      const users = await dynamodb.scan({
          TableName: 'usersTable'
      }).promise()

      return {
        statusCode: 200,
        body: JSON.stringify(users),
      };  
    } catch (err) {
      console.log(err)
    }
    
  };


  