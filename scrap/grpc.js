const V2ray = require('../v2ray_api');
const uuid = require('uuid');
const cron = require('node-cron');

let ctl = new V2ray({ 
    APIAddr: '127.0.0.1',
    APIPort: 10085,
    ProxyFlag: 'api'
});

ctl.init();

setTimeout(() => {
    ctl.AddInbound("accounts", 8443)
    .then((msg) => {
        console.log(msg)
        setTimeout(() => {
            ctl.AddUser('accounts', {
                "id": 'b831381d-6324-4d53-ad4f-8cda48b30811' || uuid.v4(),
                "level": 0,
                "alterId": 64,
                "email": "paulmugaya@live.com"
            }).then((res) => {
                console.log(res)
                cron.schedule('*/2 * * * *', () => {
                    ctl.RemoveUser('accounts', {
                        "email": "paulmugaya@live.com"
                    }).then(console.log)
                    .catch((e) => console.log(e.message))
                    console.log('running a task every 2 minutes');
                });
            }).catch((e) => console.log(e.message))
        }, 1000 * 10);
    }).catch((err) => console.log(err.message));
}, 5000);
