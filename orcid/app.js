const express = require('express')
const axios = require('axios')
const qs = require('qs')
const config = require('./config')

const app = express()

app.get('/token/:code', async (req, res) => {
  const code = req.params.code

  const endpoint = 'https://sandbox.orcid.org/oauth/token'

  let body = qs.stringify({
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,
    grant_type: 'authorization_code',
    code: code,
  })
  const conf = {
    method: 'post',
    url: endpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: body,
  }

  let orcid
  try {
    const data = await axios(conf)
    orcid = data.data.orcid
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
