# js-wapi sdk
wapi api client sdk

依赖包安装：

```
npm install js-wapi-sdk@1.0.0
```

使用方式:

```
const Cons = require('js-wapi-sdk/utils/Constants');
const addrApi = require('js-wapi-sdk/apidao/AddressRegisterApi');
const depositNotify = require('js-wapi-sdk/apidao/DepositNotifyApi');
const withdraw = require('js-wapi-sdk/apidao/WithdrawApi');


Cons.setAppId('baaceb1e506e1b5d7d1f0a3b1622583b');//应用id
Cons.setHost('http://awstestopenapi.hiwallet.pro');//接口域名
Cons.setPubKey('wass 公钥');
Cons.setPrivateKey('商户私钥');

//1.注册地址
addrApi.registerAddress({symbol: 'VLX', addresses: 'aaaaabbbbb',memo:false}).then(function (data) {
    console.debug("注册地址结果：-----" + JSON.stringify(data));
});

//2.获取地址可用数
addrApi.checkAvailableAddress({symbol: 'VLX'}).then(function (data) {
    console.debug("获取地址可用数：------" + JSON.stringify(data));
});

//3.充值接口
depositNotify.depositNotify({
        "address_to": "LZC5G3rWkzsDDRRJnMD9mfdefe2ncEFnNH",
        "amount": 123,
        "balance": 12,
        "confirm": 1000,
        "request_id": "2343423242452",
        "status": 1,
        "symbol": "VLX",
        "txid": "adb936e24130c3fffer294d607a865f467a906b96850e02c1a2771c759f0bfdsf"
    }
).then(function (data) {
    console.debug("充值结果：------" + JSON.stringify(data));
});

//4.内部通知接口
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

//7. 提币取消
withdraw.withdrawCancel({"symbol": "VLX", "trans_id": 49560}).then(function (data) {
    console.debug("提币取消结果：------" + JSON.stringify(data));
});

```