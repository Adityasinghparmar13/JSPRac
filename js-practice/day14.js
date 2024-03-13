
// Question: Optimize image lazy loading

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          observer.unobserve(img);
        }
      });
    });
    document.querySelectorAll('img.lazy').forEach(img => observer.observe(img));
