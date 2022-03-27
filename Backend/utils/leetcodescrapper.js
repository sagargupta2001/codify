const axios = require('axios');
// const fetch = require('node-fetch');

module.exports.fetchLeetcode = async function(username) {
    const URL = "https://leetcode.com/graphql";
    const Query = { "query": "query getUserProfile($username: String!) { allQuestionsCount { difficulty count } matchedUser(username: $username) { contributions { points } profile { reputation ranking } submitStats { acSubmissionNum { difficulty count submissions } totalSubmissionNum { difficulty count submissions } } }", "variables": { "username": username } };

    axios.defaults.withCredentials = true;

    axios.post(URL, Query, {
        "headers": {
            "accept": "application/json",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "Referer": `https://leetcode.com/${username}`,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "withCredentials": "true",
            "mode": "cors",
            "cache": "default",
            "redirect": "follow",
            "x-csrf-token": "undefined",
            "x-requested-with": "XMLHttpRequest"
        },
        // "referer-policy": "no-referrer-when-downgrade"
    }).then(res => {
        return res.data;
    }).catch(err => {
        console.log(err.response);
    });

    // fetch(URL, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Accept-Language': 'en-US,en;q=0.9',
    //             'Content-Type': 'application/json',
    //             'Referer': `http://leetcode.com/`
    //         },
    //         body: JSON.stringify(Query)
    //     })
    //     .then(res => res.text())
    //     .then(res => {
    //         console.log(res);
    //     });

    // const URL = `https://leetcode-stats-api.herokuapp.com/${username}`;
    // axios.get(URL).then(res => {
    //     console.log(res.data);
    // }).catch(err => {
    //     console.log(err.response);
    // });
}