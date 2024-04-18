
// Question: Implement OAuth2 flow

    const oauth2 = require('simple-oauth2').create({
      client: {
        id: 'client_id',
        secret: 'client_secret'
      },
      auth: {
        tokenHost: 'https://api.oauth.com'
      }
    });
    const token = await oauth2.clientCredentials.getToken();
