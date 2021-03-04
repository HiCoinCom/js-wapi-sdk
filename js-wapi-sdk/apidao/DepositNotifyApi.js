/**
 *  充值通知相关api
 */
const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/WASSHttpUtils');
const Cons = require('../utils/Constants');

/**
 *  充值通知
 */
exports.depositNotify =async function (reqData) {
    var respData = await WApiHttpUtils.request({
        url: Cons.DEPOSIT_NOTIFY,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.decryptByPrivate(respData.data);
};

/**
 *  内部通知
 */
exports.internalNotify = async function (reqData) {
    return await WApiHttpUtils.request({
        url: Cons.INTERNAL_NOTIFY,
        method: Cons.POST,
        requestData: reqData
    });
};