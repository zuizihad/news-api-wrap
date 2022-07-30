const axios = require('axios');

const everything = async (q, page, callback) => {
    const apiKey = `bb733ce962d64deaab61ef9a13771507`

    const res = await axios.get(`https://newsapi.org/v2/everything`,
        { withCredentials: false, params: { q, pageSize: 20, page, apiKey } });
    callback(res.data);
}
module.exports.callApi = everything;