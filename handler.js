"use strict";

// Folder: serverless/sls-hello2
//
// https://serverless.com/learn/tutorial/create-api-endpoint-with-serverless-framework/
// https://serverless.com/learn/tutorial/using-profiles-in-serverless-dashboard/
//
// https://dashboard.serverless.com/tenants/p..51/applications/
// https://console.aws.amazon.com/iam/home/roles
// The role serverless-enterprise_p..51 has been created.
// Role name: serverless-enterprise_p...51
// Trusted entities: The account 992587217999 (serverless.com)
// Role ARN: arn:aws:iam::993243346499:role/serverless-enterprise_palves1945
// Give this link to users who can switch roles in the console:
//     https://signin.aws.amazon.com/switchrole?roleName=serverless-enterprise_p..51&account=paf.
//  Trusted entities
// The following trusted entities can assume this role:
// Trusted entities -> The account 992587217999

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from serverless 2020-01-29 22:29 hs!")
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
