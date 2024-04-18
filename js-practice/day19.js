
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

// Question: Create Three.js scene

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

// Question: Implement WebRTC connection

    const pc = new RTCPeerConnection();
    pc.onicecandidate = e => {
      if(e.candidate) sendCandidate(e.candidate);
    };
    pc.createOffer().then(offer => pc.setLocalDescription(offer));

// Question: Create AWS Lambda handler

    exports.handler = async (event) => {
      const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
      };
      return response;
    };
