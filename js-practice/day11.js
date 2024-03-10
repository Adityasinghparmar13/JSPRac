
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
