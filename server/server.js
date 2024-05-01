const express = require("express")

const SpotifyWebApi = require("spotify-web-api-node")
const app = express()

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: "http://localhost:3000",
      clientId: "7fcd62f13c154a0188abeb51968d8cb6",
      clientSecret: "a5fe942b5f90437eba924bcf66d9ade6",
    })
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        res.sendStatus(400)
      })
  }) 

  app.listen(3001)