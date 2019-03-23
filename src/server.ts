import express = require('express');
import path from 'path';
import { AppString } from "./components/index";
import { renderHtml } from "./templates/index";

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('/', (req: express.Request, res: express.Response) => {
  const domWithReact = renderHtml(AppString);
  res.writeHead( 200, { "Content-type": "text/html" } );
  res.end(domWithReact)
})

app.listen(3000, () => {
  console.log('app is listening on port 3000')
})