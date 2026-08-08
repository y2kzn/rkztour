import { Router } from "express";
import { ForService, ServiceType } from "../Modules/Service";

const App = Router();

App.use(ForService(ServiceType.Public));

App.get("/", (_, res) => res.send("Tournament-SDK | Made by Luckx"));

App.post("/", (_, res) => res.send("Tournament-SDK | Made by Luckx"));

export default {
  App,
  DefaultAPI: "/",
};
