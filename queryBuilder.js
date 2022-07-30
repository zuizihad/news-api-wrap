const queryBuilder = (request, options) => {
    let query = {};
    try {
        if (request.url) {
            let queryString = request?.url?.split('?')[1];
            let queryParams = queryString?.split('&');
            queryParams?.forEach(param => {
                let key = param.split('=')[0];
                let value = param.split('=')[1];
                query[key] = value;
            })
        }
    } catch (error) {
        console.log(error)
    }
    return query;
}
module.exports = {
    queryBuilder,
};