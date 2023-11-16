// const http = require("http");
// const data = require("./data");

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "application/json" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(5000);

const express = require("express");
const path = require("path");

const app = express();
const folder_path = path.join(__dirname, "views");

app.use(express.static(folder_path));

app.get("/", (req, res, next) => {
  const page = req.params.page;
  res.sendFile(folder_path + `/${page}.html`, (err) => {
    if (err) {
      res.sendFile(folder_path + "/error_pages/404.html");
    }
  });
});

app.get("*", (_, res) => {
  // const page = req.params.page;
  res.sendFile(folder_path + `/error_pages/404.html`, (err) => {
    if (err) {
      res.sendFile(folder_path + "/error_pages/404.html");
    }
  });
});

app.listen(5000);
