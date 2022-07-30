const axios = require('axios');

const topHeadlines = async (category, page, callback) => {
    const apiKey = `c86c671dcd1040c6b3af2cd5d03009db`

    const res = await axios.get('https://newsapi.org/v2/top-headlines',
        { withCredentials: false, params: { category, pageSize: 20, page, apiKey } });
    callback(res.data);
}

module.exports.callApi = topHeadlines;