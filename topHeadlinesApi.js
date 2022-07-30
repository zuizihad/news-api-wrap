const axios = require('axios');

const topHeadlines = async (category, page, callback) => {
    const apiKey = `bb733ce962d64deaab61ef9a13771507`

    const res = await axios.get('https://newsapi.org/v2/top-headlines',
        { withCredentials: false, params: { category, pageSize: 20, page, apiKey } });
    callback(res.data);
}

module.exports.callApi = topHeadlines;