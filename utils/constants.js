const indexHTML = {
    INDEX_BASE: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <link rel="stylesheet" href="./dist/style.css" />
        <title>Super Team Table Generator</title>
      </head>
      <body>
        <header class="blue lighten-4">
        Super Team Table Generator
        </header>
        <div class="container">
            <div class="row" id="card-holder">`,

    INDEX_END: `</div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
</html>`
};

module.exports = indexHTML;