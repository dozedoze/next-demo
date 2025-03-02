import * as React from "react";
// import * as ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router";
// import http from "http";
import { renderJSXToHTML } from "./utils";
import { IndexPage, Layout, PostPage } from "./components";

export async function htmlGenerator(url) {
  let html = await renderJSXToHTML(<Router url={url} />);
  // 直接拼虽然有些错误，但浏览器会纠正，并正确解析
  html += `<script type="module" src="/client.js"></script>`;
  return html;
}

function Router({ url }) {
  let page;
  if (url.pathname === "/") {
    page = <IndexPage />;
  } else {
    const slug = url.pathname.slice(1);
    page = <PostPage slug={slug} />;
  }
  return <Layout>{page}</Layout>;
}

// function requestHandler(req, res) {
//   let html = ReactDOMServer.renderToString(
//     <StaticRouter location={req.url}>
//       {/* The rest of your app goes here */}
//     </StaticRouter>
//   );

//   res.write(html);
//   res.end();
// }

// http.createServer(requestHandler).listen(3000);
