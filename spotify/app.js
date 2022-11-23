const express = require('express')
const axios = require('axios')
const qs = require('qs')
const config = require('./config')

const app = express()

app.get('/token/:code', async (req, res) => {
  const code = req.params.code

  const endpoint = 'https://accounts.spotify.com/api/token'

  let body = qs.stringify({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: 'http://localhost:3000/callback',
  })
  const conf = {
    method: 'post',
    url: endpoint,
    headers: {
      json: true,
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        new Buffer(config.CLIENT_ID + ':' + config.CLIENT_SECRET).toString(
          'base64'
        ),
    },
    data: body,
  }

  let orcid
  try {
    const data = await axios(conf)
    orcid = JSON.stringify(data.data)
    console.log(data.data)
  } catch (err) {
    console.log(err.message)
  }

  res.json({
    orcid,
  })
})

app.listen(5000, () => {
  console.log('Server is up on port 5000')
})
