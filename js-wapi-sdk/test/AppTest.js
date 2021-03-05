const Cons = require('../utils/Constants');
const addrApi = require('../apidao/AddressRegisterApi');
const depositNotify = require('../apidao/DepositNotifyApi');
const withdraw = require('../apidao/WithdrawApi');


Cons.setAppId('');//商户id
Cons.setHost('');//服务器域名
Cons.setPubKey('');//系统公钥
Cons.setPrivateKey('');//三方私钥

/*
//1.注册地址
addrApi.registerAddress({symbol: 'VLX', addresses: 'aaaaabbbbb',memo:false}).then(function (data) {
    console.debug("注册地址结果：-----" + JSON.stringify(data));
});

//2.获取地址可用数
addrApi.checkAvailableAddress({symbol: 'VLX'}).then(function (data) {
    console.debug("获取地址可用数：------" + JSON.stringify(data));
});
*/
//3.充值接口
/*depositNotify.depositNotify({
        "address_to": "LaZ8uQKLLUoqnbwagGBpc9Hqz7ZFrikw6D",
        "amount": 123,
        "balance": 12,
        "confirm": 1000,
        "request_id": "2343423242452s",
        "status": 1,
        "symbol": "VLX",
        "txid": "adb936e24130c3fffer294d607a865f467a906b96850e02c1a2771c759er"
    }
).then(function (data) {
    console.debug("充值结果：------" + JSON.stringify(data));
});*/

/*//4.内部通知接口
depositNotify.internalNotify({
    "address_to": "aaaaabbbbb",
    "amount": 234234,
    "balance": 12,
    "confirm": 1,
    "fee": 12,
    "symbol": "VLX",
    "txid": "adb936e24130c3fff9a6294d607a865f467a906b96850e02c1a2771c759ewwe"
}).then(function (data) {
    console.debug("内部通知结果：------" + JSON.stringify(data));
});

//5.获取提币列表
withdraw.withdrawConsume({symbol: "VLX"}).then(function (data) {
    console.debug("获取提币列表结果：------" + JSON.stringify(data));
});

//6.提现通知接口
withdraw.withdrawNotify({
    "address_to": "L111ZC5G3rWkzsDDRRJnMD9mfdefe2ncEF",
    "amount": 234234.234,
    "balance": 0,
    "confirm": 1000,
    "fee": 12,
    "symbol": "VLX",
    "trans_id": 50021,
    "txid": "adb936e243fa6294d607a865f467a906b96850e02c1a2771c759ewrweD"
}).then(function (data) {
    console.debug("提现通知接口结果：------" + JSON.stringify(data));
});
*/
//7. 提币取消
withdraw.withdrawCancel({"symbol": "VLX", "trans_id": 50077,"msg":"tesst"}).then(function (data) {
    console.debug("提币取消结果：------" + JSON.stringify(data));
});
