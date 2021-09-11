const express = require('express')
      , app = express()
      , path = require('path')
      , multer = require('multer')
      ;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({storage});

app.use(express.static('public'));

app.post('/file_upload', upload.single('arq'), (req, res) => {
  console.log('Novo upload.')
  res.status(204).end();
});

app.get('/form_get', (req, res) => {
  response = {
    "item1": req.query.item1,
    "item2": req.query.item2
  };
  console.log(response);
  res.status(204).end();
});

app.get('/ajax_json.json', (req, res) => {
  response = {
    "lal": "lul",
    "blas": "toise"
  };
  console.log('Request ajax recebido.');
  res.send(JSON.stringify(response));
});

app.listen(8081, () => console.log('App na porta 8081'));

