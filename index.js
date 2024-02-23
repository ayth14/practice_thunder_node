// const http = require("http");
// const data = require("./data");

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "application/json" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(5000);
const dbConnect = require("./mongoDb");

const express = require("express");
const app = express();
const route = express.Router();
const { join } = require("path");

const folder_path = join(__dirname, "views");

// // const { express, Router } = require("express");
const reqMiddleware = require("./middleware");

app.set("view engine", "ejs");

route.use(reqMiddleware);
app.get("/", async (req, res, next) => {
  const page = req.params.page;
  let data = await dbConnect;

  data = await data.find().toArray();
  console.log(data);
  res.send(data);
  // res.sendFile(folder_path + `/${page}.html`, (err) => {
  //   if (err) {
  //     res.sendFile(folder_path + "/error_pages/404.html");
  //   }
  // });
});

route.get("/profile", (_, res) => {
  res.render(`user`);
});

app.get("*", (_, res) => {
  // const page = req.params.page;
  res.sendFile(folder_path + `/error_pages/404.html`, (err) => {
    if (err) {
      res.sendFile(folder_path + "/error_pages/404.html");
    }
  });
});

app.use("/", route);

app.listen(5000);
