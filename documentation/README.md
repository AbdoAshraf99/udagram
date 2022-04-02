

## infrastructure and app dependencies
## this app Built With
- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API 
Framework
1. this project use npm
1. important app dependencies
#### for backend
- typescript
- jasmine
- dotenv
- bodybarser
- jwt
#### for frontend
- angular
- angular cli (ng)
-angular router

## aws services used
1. Elastic Beanstalk for Backend
2. S3 for frontend
3. RDS for database
4. EC2

## pipe line
we use circleci to manage pipeline proccess
1. at the first connect your circleci account with your github repository
1. create `.circleci` folder
1. create `config.yml` file under `.circleci`
1. add your pipeline configuration
1. then commit and push your code to github :
```
  $ git init -b main
  $ git add .
  $ git commit -m "c1
  $ git push -u origin main
 ```
## pipe line process
1. ### install server dependencies
1. ### building server
1. ### deploy server to Elastic Beanstalk
1. ### install UI dependencies
1. ### building  Ui
1. ### deploy server to s3


### URLs
 - [Backend](http://wwwdev-env.eba-tc2fphnc.us-east-1.elasticbeanstalk.com/) -backend url
 - [Frontend](http://demo-s3-1234.s3-website-us-east-1.amazonaws.com/) - Frontend url