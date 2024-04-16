
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
