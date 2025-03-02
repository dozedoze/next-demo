import * as React from "react";
// import * as ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router";
// import http from "http";
import { renderJSXToHTML } from "./utils";
import { IndexPage, Layout, PostPage } from "./components";

export async function htmlGenerator(url) {
  return renderJSXToHTML(<Router url={url} />);
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
