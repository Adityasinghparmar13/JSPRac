
// Question: Parse query parameters from URL

    let params = new URLSearchParams(window.location.search);
    console.log(params.get('page'));

// Question: Create reusable fetch wrapper

    async function fetchData(url) {
      try {
        const response = await fetch(url);
        return await response.json();
      } catch(error) {
        console.error('Fetch failed:', error);
      }
    }

// Question: Implement authentication middleware

    function authMiddleware(req, res, next) {
      if(req.headers.authorization) next();
      else res.status(401).send('Unauthorized');
    }

// Question: Generate UUID v4

    function uuidv4() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    }
