import express from "express";
import { readFile } from "fs/promises";
import { htmlGenerator } from "./generator";

const app = express();

app.get("/:route(*)", async (req, res) => {
  // 匹配 client.js

  if (req.url === "/favicon.ico") {
    return null;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/client.js") {
    const content = await readFile("./client.js", "utf8");
    res.setHeader("Content-Type", "text/javascript");
    res.end(content);
    return;
  }
  const html = await htmlGenerator(url);
  res.setHeader("Content-Type", "text/html");
  res.end(html);
});

app.listen(3000, (err) => {
  if (err) return console.error(err);
  return console.log(`Server is listening on 3000`);
});
