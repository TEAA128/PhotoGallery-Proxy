const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(cors());

// app.use('/api', createProxyMiddleware({ target: 'http://52.14.226.255/', changeOrigin: true }));
// app.use('/reviews', createProxyMiddleware({ target: 'http://18.224.95.187/', changeOrigin: true }));
// app.use('/carousel', createProxyMiddleware({ target: 'http://54.215.84.53/', changeOrigin: true }));
// app.use('/api', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));
app.use('/photogallery', createProxyMiddleware({ target: 'http://ec2-52-53-224-53.us-west-1.compute.amazonaws.com', changeOrigin: true}));

app.listen(port, () => console.log(`Listening at http://ec2-18-144-100-18.us-west-1.compute.amazonaws.com:${port}/`));