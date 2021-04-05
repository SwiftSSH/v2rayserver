const { exec } = require('child_process');
/**
 * Creates a unix socket server and waits for a python client to interact
 * https://gist.github.com/low-ghost/e7c1fc472a03ee271bc1a7abe9cc3635
 */

const net = require('net');
const fs = require('fs');
const socketPath = '/tmp/node-python-sock';
const extend = require('xtend');
const cron = require('node-cron');
const context = require('./context');
const instances = require("./instances");

const handler = (socket) => {
  socket.on('data', (bytes) => {
    const msg = bytes.toString();
    if (msg === 'python connected') {
      return cron.schedule('* * * * * *', () => {
        socket.write('get_status');
      });
    }   
  
    let v2rayService = instances.get("v2rayService");
    let data = JSON.parse(msg.toString().replace(/[\'|\)|\(]/g, '"'));
    data.loads = data.loads.split(', ').map((load) => Number(load));

    let info = extend(data, {
      v2: {
        code: v2rayService ? v2rayService.code : 0, 
        message: v2rayService ? v2rayService.message.replace(/\"/g, "") : "",
      }
    });
    
    context.data.set("server_info", info);
  });
};

fs.unlink(
  socketPath,
  () => net.createServer(handler).listen(socketPath)
);

exec('python3 server_info.py');