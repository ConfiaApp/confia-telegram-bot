/* eslint-disable no-console */
import { app } from "./app";
import config from "./config";

app({ config }).then(([server, bot]) => {
    server.listen(config.server.port);
    bot.then(console.log).catch(console.error)
}).catch(console.error);