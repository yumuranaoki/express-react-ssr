export const renderHtml = (reactDOM: string): string => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>React SSR</title>
  </head>

  <body>
    <div id="root">${reactDOM}</div>
    <script src="./bundle.js"></script>
  </body>
  </html>
`;