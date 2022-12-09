const axios = require("axios");
require('dotenv').config();

const getData = async (url) => {
    const res = await axios.get(url, {
        headers: {
            Cookie: `session=${process.env.SESSION}; _ga=${process.env.GA}; _gid=${process.env.GID};`
        }
    });
    return res.data;
}

module.exports = { getData };