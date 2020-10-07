let express = require('express');
let bodyParser = require('body-parser');
let app = express();


app.set('port', 3000);

app.use(bodyParser.json());

require('./controller/appController')(app);

app.listen(app.get('port'), function () {
    console.log('Server started on ' + app.get('port') + ' port.');
});