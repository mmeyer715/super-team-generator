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
    
    INDEX_CARD: `<div class="col l3 m6 s12">
    <div class="card">
      <div class="card-content blue white-text">
      <span class="row employee-name"></span>
      <span class="row employee-role"></span>
    </div>
    <div class="card-action blue lighten-4">
      <div class="row detail-rows">
      <span id="employee-id"></span>
    </div>
    <div class="row detail-rows">
      <span></span>
      <a href="mailto: insertemailhere@xyz.com?subject=Mail from xyz.com" id="employee-email"></a>
    </div>
    <div class="row detail-rows">
      <span id="unique-role-value"></span>
    </div>
  </div>`,

    INDEX_END: `</div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
</html>`
};

module.exports = indexHTML;