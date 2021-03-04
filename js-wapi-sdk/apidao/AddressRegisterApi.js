const RSA = require("../utils/RSAUtil");
const WApiHttpUtils = require('../utils/WASSHttpUtils');
const Cons = require('../utils/Constants');

/**
 * 向平台注册地址，此地址用于分配给用户
 */
exports.registerAddress = async function (reqData) {
    return await WApiHttpUtils.request({
        url: Cons.REGISTER_ADDRESS,
        method: Cons.POST,
        requestData: reqData
    });
};

/**
 * 推送的地址中还有多少可用地址
 */
exports.checkAvailableAddress = async function (reqData) {
    var respData = await WApiHttpUtils.request({
        url: Cons.CHECK_AVAILABLE_ADDRESS,
        method: Cons.POST,
        requestData: reqData
    });
    return RSA.decryptByPrivate(respData.data);
};
