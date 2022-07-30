const everythingApi = require('./everythingApi');
const topHeadlinesApi = require('./topHeadlinesApi');
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
const { queryBuilder } = require('./queryBuilder');

app.get('*', function (req, res) {
    let query = queryBuilder(req);
    try {
        if (query.category) {
            topHeadlinesApi.callApi(query.category, query.page, (response) => {
                res.send(response);
            });
        }
        else if (query.q) {
            everythingApi.callApi(query.q, query.page, function (response) {
                res.send(response);
            });
        }
    } catch (error) {
        console.log(error)
    }
});
app.listen(3001, () => {
    console.log("Server running on port 3001");
});