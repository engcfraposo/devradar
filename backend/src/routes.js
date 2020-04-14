const { Router } = require('express');
const axios = require('axios');

const Dev = require('./models/Dev');


const routes = Router();

routes.post('/devs', async (request, response) => {
    const {github_username, techs} = request.body
    
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    const { login, avatar_url, html_url, bio, latitude, longitude } = apiResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    
        
    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],

    };

    console.log(location)

    const dev = await Dev.create({
        github_username,
        name : login,
        avatar_url,
        html_url,
        bio,
        techs : techsArray,
        location 
    });

    return response.json(dev)
});

module.exports = routes;