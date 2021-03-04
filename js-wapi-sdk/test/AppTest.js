const Cons = require('../utils/Constants');
const addrApi = require('../apidao/AddressRegisterApi');
const depositNotify = require('../apidao/DepositNotifyApi');
const withdraw = require('../apidao/WithdrawApi');


Cons.setAppId('8ee3794a7e5bd188c6af4fd7dda191f3');
Cons.setHost('http://baas.hiwallet.pro');
Cons.setPubKey('MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmY3x4DVuU2NV90HaXZWnxGj7XvuBtwGT4bvnCiDcpMVlNuQN1cr+Vg+WMPIUihWmWkupA9oXdZf4LzWtqv2SRlP3tIs+tWG4Df3FuuZ0W2CIxhtJNnWHIY146m/teif+H2v9G3GeY+P+z/LqGFyV0nLYJzs4WQZa3/RL0rh2IlVlfs1eHod+PX99o+Aog80kmUx8NF6ExsoO4qI9y3wW8CH+5tGVqHvq3NaD3jHyS3DYrRztfxuJw9k/YTfZ6rDJVXmD7onqvZe2leSe5h/ehu321y7nB7+2uTJ76i1YOmIrEBW8KupwQUU1JuZKvMCzcLowLjIOYysU8JfpxXH+MQIDAQAB');
Cons.setPrivateKey('MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDQ/Xw5xJGvaadYBbCfqFaUoLIKEFvxsXpfWAeIV93J6MeY+eeLrSPq4oQeEAHsv3HIKe+k/jhbOnu3GM19gX7xKJoVRU/mtrCKyIetxQfG8oQidV3KN4Tp1ScO+vtpwVOYXQlkJt/MMDfyXlbOcNXcBYRI6bsZ3/Q0/usKJkNuf7a46WsaqxhKLhwvAKeipERD79nus26DyXdWWq+/HphWPTHFaL/irPzJeVlXxoEA3WuyECRpNVuRaOKPq5IneUwdj30HkOqcX/kQCFhhz4ZOAAwvkoAd8diUX5j0YOUpmgFqLEgr9fce2AE5oggNoJkUtJBo7fqCEgSnKOd6mBcFAgMBAAECggEAcpe7aPWGqHc3QgWErlagesiONwR3VdRp9CORpcoAG7ke0JuewbDDNATWSqGeXJEws3+DHqYigqtTsLbR3hKGZ3dK3YTu5eOgc8i21KpntEe/+iD+t2Wv5INy8jzeZEOUMcQ55QeHyS9bTfM6h+HI8ea4fT5j0DFDd1ebyynl6YzyGYy4kccMSvfUhkY2NVbLH1EKCoNXDO1fOyxMZ2McNvDwFhmm9+RIWxgD+Jqso/t+eAFddkxZHzMKgvmvnS3ov5H+0dbhf/NGGinzv697YVF2+8iRFS9+dpcPGHKN8Pxfd+dASIAxAkRP+suLYAfBdnP5SdHP7PZTp0vHokgM1QKBgQDpagBKVZXfdwz2DGcVLHJezyhx0ND9ToMyW75LwAZqtCB5pStltnM1kCioQGqaIuvhMKBCq3EEAT7kxzJA6/1QFFwqaDjCIrhr0rtxcfzv027B5u8YFSr4Fe3Pk8Osrf3+Vh7DVYBnerknmYOn3D1sYxp0LCAuO3r6ilbA/mOdFwKBgQDlNng2UPqmJ/8ba4IuQIBijWfFnW3wmq5mQh4ZjZzt4WSzHhU8lUCt+U28HzKoziuKjUriOJJFkjqT+HlMgpeTgKDsHBDfioo40TcPhH29pdb0D340uNlQ93So6r5NNbMazmr/lBTvXNfFv7IMIhATuQWmBhV9AkbDHiSTQOoWQwKBgQDn8IhXVVJ3WxKLEOoB9Ue1BH85EfoKK9Fc4iNnnGoD7/fxSPqluLYk/JoaDuCfR6JDBBHMDhZgl2hK59H9B0ORJporHaOA7gV6R04xvcZM/jmp/nOJ58bp/MhyI3AmkEK7UBKDodvVd/Ky8e4MiGKU6Kmp1QspRbu/aGYqot6TgwKBgQCPszF0ZBpwFv0xtJn940RaBOr9EnC9ekxCIct7G7Q50qfuP7ryq2PMblLU0P5SpEbZ6zD6WJsjcMS2xf1OAUWEHQ1GWWYer11ut4N8gATQ4+q6QghOh2D/CNSjnd/GyhbKhITCTJU/Z4aDHGZEgwpvQv0OlBverpGse/ZUN0tKvwKBgQDme1R9fsRKrlNhXe1wXs8qDw10KOfAa9TC04RRlY3p9rLa6ZQhDrUQEHBZLeKOgWeiPHULt5emLcRlqm50mMBHHNoN61kHDIN+EdxZXmJnICD1TzD0P6yj+VjdbmGcz/mQ1+Msf0RT+/KGvjX+GenjpYiTQc7n2CwYypnN9ru8KA');

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
