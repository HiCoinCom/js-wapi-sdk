const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/WASSHttpUtils');
const Cons = require('../utils/Constants');

/**
 * 提币拉取接口
 */
exports.withdrawConsume = async function (reqData) {
    var respData = await WApiHttpUtils.request({
        url: Cons.WITHDRAW_CONSUME,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.decryptByPrivate(respData.data);
};

/**
 * 提币通知接口
 */
exports.withdrawNotify = async function (reqData) {
    return await WApiHttpUtils.request({
        url: Cons.WITHDRAW_NOTIFY,
        method: Cons.POST,
        requestData: reqData
    });
};

/**
 * 提币打回接口
 */
exports.withdrawCancel = async function (reqData) {
    return await WApiHttpUtils.request({
        url: Cons.WITHDRAW_CANCEL,
        method: Cons.POST,
        requestData: reqData
    });
};

