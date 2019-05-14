const AWS = require('aws-sdk');
const fs = require('fs');
const uuid = require('uuid');

const appInsights = require('applicationinsights');
    appInsights
        .setup('<I_KEY>')
        .start();

const s3 = new AWS.S3({
  accessKeyId: '<ACCESS_KEY>',
  secretAccessKey: '<SECRET_KEY>'
});

(async () => {
  // Successful
  await s3.putObject({
    Body: fs.readFileSync('500kb.txt'),
    Bucket: '<BUCKET_NAME>',
    Key: uuid.v4()
  })
    .promise()
    .then(console.log)
    .catch(console.error);

  // Errors
  await s3.putObject({
    Body: fs.readFileSync('1mb.txt'),
    Bucket: '<BUCKET_NAME>',
    Key: uuid.v4()
  })
    .promise()
    .then(console.log)
    .catch(console.error);
})();

