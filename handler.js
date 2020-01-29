"use strict";

// Folder: serverless/hello2
//
// https://serverless.com/learn/tutorial/create-api-endpoint-with-serverless-framework/
// https://serverless.com/learn/tutorial/using-profiles-in-serverless-dashboard/
//
// https://dashboard.serverless.com/tenants/palves1945/applications/
// https://console.aws.amazon.com/iam/home/roles
// The role serverless-enterprise_palves1945 has been created.
// Role name: serverless-enterprise_palves1945
// Trusted entities: The account 802587217904 (serverless.com)
// Role ARN: arn:aws:iam::913243346481:role/serverless-enterprise_palves1945
// Give this link to users who can switch roles in the console:
//     https://signin.aws.amazon.com/switchrole?roleName=serverless-enterprise_palves1945&account=pafi
//  Trusted entities
// The following trusted entities can assume this role:
// Trusted entities -> The account 802587217904

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from serverless 2020-01-28 20:29 hs!")
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
