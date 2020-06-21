import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";

import routes from "./routes";
import { setupWebsocket } from "./websocket";

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@omnistack9-ub5tj.gcp.mongodb.net/devradar?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("useCreateIndex", true);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
