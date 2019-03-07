import { Application, Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.HTTP_PORT || 3000;

app.get("/api/", (req: Request, res: Response) => {
  console.info(`This is an API request. Request path is: ${req.path}`);
  res.status(200).json({
    hello: "world",
  });
});

app.use(express.static("dist/public"));

(async () => {
  app.listen(port, async () => {
    console.log(`Server listening on port ${port}`);
  });
})();
