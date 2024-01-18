global.fetch = require('node-fetch');
const config = require('universal-config');
// 
const { createApi } = require('unsplash-js');

const unsplash = createApi({
  accessKey: config.get('APPLICATION_ID'),
  secret: config.get('SECRET'),
  callbackUrl: config.get('CALLBACK_URL')
});

const express = require('express');
const app = express();
app.get('/api/photos', async (req, res) => {
    try {
      const { response, errors } = await unsplash.photos.listPhotos(req.query.start,req.query.count)
      if (errors) {
        console.error('Unsplash API errors:', errors);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  
      res.json(response);
    } catch (error) {
      console.error('Erro  r fetching photos:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on the port ${PORT}`));
