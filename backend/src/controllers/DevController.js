import axios from "axios";
import Dev from "../models/Dev";

import parseStringAsArray from "../utils/parseStringAsArray";
import { findConnections, sendMessage } from "../websocket";

export default {
  async index(request, response) {
    const devs = await Dev.find();
    return response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { login, avatar_url, html_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name: login,
        avatar_url,
        html_url,
        bio,
        techs: techsArray,
        location,
      });

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray
      );
      sendMessage(sendSocketMessageTo, "new-dev", dev);
    }

    return response.json(dev);
  },
};
