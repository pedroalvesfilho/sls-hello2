2020-01-27
-------------

Folder: serverless/sls-hello2

### Building serverless endpoint manually
Build API Gateway endpoint manually by using the AWS console to put together this API endpoints that will trigger a Lambda function:
https://serverless.com/learn/tutorial/building-api-inside-aws-console/

```
/pets
AWS management Console -> Amazon API Gateway -> Create API -> REST API -> 
	Choose the protocol: Rest, Create new API: Example API -> Import 

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
	-> Create function  --> arn:aws:lambda:us-east-1:993243346499:function:hello
	-> Save (hello function)
Now, back to API:
API Gateway -> Select "Test Demo/Hello API"
Resource Name: Hello2, Resource Path: /hello2
-> Create resource
Create Method: GET (V)-> Lambda function: hello2-dev-hello -> Save --> And we should have an API Gateway:
You are about to give API Gateway permission to invoke your Lambda function:
arn:aws:lambda:us-east-1:913243346481:function:hello2-dev-hello

e.g. --- example only:
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda Serverless!'),
    };
    return response;
};
See file `handler.js` inside folder `sls-hello2`.

https://serverless.com/learn/tutorial/create-api-endpoint-with-serverless-framework/

$ mkdir sls-hello2
$ cd sls-hello2
$ serverless create --template aws-nodejs

---

// Folder: serverless/sls-hello2
//
// https://serverless.com/learn/tutorial/create-api-endpoint-with-serverless-framework/
// https://serverless.com/learn/tutorial/using-profiles-in-serverless-dashboard/
//
// https://dashboard.serverless.com/tenants/pal.../applications/
// https://console.aws.amazon.com/iam/home/roles
// The role serverless-enterprise_xxx has been created.
// Role name: serverless-enterprise_xxx45
// Trusted entities: The account 9990258721xxx (serverless.com)
// Role ARN: arn:aws:iam::913x4334xxx:role/serverless-enterprise_xxx45
// Give this link to users who can switch roles in the console:
//     https://signin.aws.amazon.com/switchrole?roleName=serverless-enterprise_xxx45&account=xxx
//  Trusted entities
// The following trusted entities can assume this role:
// Trusted entities -> The account 8025899999999

---

endpoints:
  GET - https://p4oxxx.execute-api.us-east-1.amazonaws.com/dev/hello

AWS Credentials:
https://serverless.com/framework/docs/providers/aws/cli-reference/config-credentials/
https://serverless.com/framework/docs/providers/aws/guide/credentials/

$ serverless config credentials --provider provider --key key --secret secret
e.g.
$ serverless config credentials --provider aws --key 1234 --secret 5678

---

$ sls login

Automatic deployments are disabled. -> enable <<== click enable

https://dashboard.serverless.com/tenants/pxxx45/applications/myapxx/settings/stages

add stage  ==> stage name: dev

$ serverless --org palvxxx --app 

To deploy, first export the credentials:
$ export aws_access_key_id=01IA5JIMLSYYX2FLH220
$ export aws_secret_access_key=01pl7qL9PVrSSMVjrUOG0/vaGd7e8qNVl+NpLs40

$ sls deploy -v


---To create IAM User: 

https://console.aws.amazon.com/iam/home?region=us-east-1#/users
Create policy -> Policy actions -> Attach -  AdministratorAccess (Checked V)
-> Attach the policy to users, groups, or roles in your account
-> Attach policy

---

https://xxxx.execute-api.us-east-1.amazonaws.com/dev/hello2
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
  GET - https://xxxx.execute-api.us-east-1.amazonaws.com/dev/hello2
functions:
  hello: hello2-dev-hello

--serverless.yml:
# custom-resource-apigw-cw-role
# https://forum.serverless.com/t/lambda-created-custom-resource-apigw-cw-role-what-is-it/9529/2
# app: hello2
# org: palves1945
Comment `app:` and `org:` to not get  custom-resource-apigw-cw-role error.
app: hello2
org: palves1945
service: hello2
--------

---------2020-01-29:
Service Information
service: hello2
stage: dev
region: us-east-1
stack: hello2-dev
resources: 11
api keys:
  None
endpoints:
  GET - https://tmbd3zz7kb.execute-api.us-east-1.amazonaws.com/dev/hello2
functions:
  hello2: hello2-dev-hello2
layers:
  None
----------

