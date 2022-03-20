const http = require('http');

const {spawn} = require('child_process');

const host = 'localhost';
const port = 8001;

let parameters = ''

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {

    if(req.method === "POST")
    {
        request.on('data', function(data) {
            parameters += data
        })
    }
});

const child = spawn('mlflow', ['run', '../../../../../Desktop/docker' `${parameters}`])

child.stdout.on('data', (data) => {
    console.log(`stdout:\n${data}`);
  });
  
  child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  child.on('error', (error) => {
    console.error(`error: ${error.message}`);
  });
  
  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });