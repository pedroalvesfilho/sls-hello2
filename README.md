2020-01-27
-------------

Folder: serverless/sls-hello2

### Building serverless endpoint manually
Build API Gateway endpoint manually by using the AWS console to put together this API endpoints that will trigger a Lambda function:
https://serverless.com/learn/tutorial/building-api-inside-aws-console/

---
/pets
AWS management Console -> Amazon API Gateway -> Create API -> REST API -> 
	Choose the protocol: Rest, Create new API: Example API -> Import 
---
/hello
AWS management Console -> Amazon API Gateway -> Create API -> REST API -> 
	Choose the protocol:  Rest, Create new API: New API, API name: Test Demo/Hello API, Description: Testing...
	--> Create API
Actions -> Create Resource -> Resource Name: Hello2, Resource Path: /hello2 -> Create Resource
Actions -> Create Method -> Get
Click in Get V -> We need to indicate the 'Lambda Function'. For this:
Click in Services -> Lambda -> AWS Lambda -> Create function -> Author from scratch
	-> Basic information: Function name:  hello
	-> Choose or create an execution role -> Create a new role with basic Lambda permissions
	-> Create function  --> arn:aws:lambda:us-east-1:913243346481:function:hello
	-> Save (hello function)
Now, back to API:
API Gateway -> Select "Test Demo/Hello API"
/hello -> GET -> Lambda function: hello -> Save --> And we should have an API Gateway: 
---
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda Serverless!'),
    };
    return response;
};
---

https://serverless.com/learn/tutorial/create-api-endpoint-with-serverless-framework/

$ mkdir hello
$ cd hello
$ serverless create --template aws-nodejs

---

// /c/Users/pedro/Documents/cloud-mega/serverless/hello
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

---

npm install -all
endpoints:
  GET - https://p4ogchp8i2.execute-api.us-east-1.amazonaws.com/dev/hello

AWS Credentials:
https://serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/
https://serverless.com/framework/docs/providers/aws/guide/credentials/

$ serverless config credentials --provider provider --key key --secret secret
e.g.
$ serverless config credentials --provider aws --key 1234 --secret 5678

---

$ sls login

Automatic deployments are disabled. -> enable <<== click enable

https://dashboard.serverless.com/tenants/palves1945/applications/myapp0/settings/stages

add stage  ==> stage name: sls

$ serverless --org palves1945 --app hello2
$ sls deploy -v


---Warning IAM User: amplify-p1945, Account: pafi (913243346481)
 User: arn:aws:iam::913243346481:user/amplify-p1945 is not authorized to perform: apigateway:GET on resource: arn:aws:apigateway:us-east-1::/restapis

https://console.aws.amazon.com/iam/home?region=us-east-1#/users
Create policy -> Policy actions -> Attach -  AdministratorAccess (Checked V)
-> Attach the policy to users, groups, or roles in your account
-> Attach policy

---

https://tmbd3zz7kb.execute-api.us-east-1.amazonaws.com/dev/hello2
--
Service Information
service: hello2
stage: dev
region: us-east-1
stack: hello2-dev
resources: 18
api keys:
  None
endpoints:
  GET - https://tmbd3zz7kb.execute-api.us-east-1.amazonaws.com/dev/hello2
functions:
  hello: hello2-dev-hello


--serverless.yml:
app: hello2
org: palves1945
service: hello2
--------



