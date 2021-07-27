module.exports = ({ projectName }) => {
  return {
    file: 'index.html',
    text: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${projectName}</title>
</head>
<body>
<div id="app"></div>
</body>
</html>`,
  };
};
