
// Question: Parse query parameters from URL

    let params = new URLSearchParams(window.location.search);
    console.log(params.get('page'));
