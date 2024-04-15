
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

// Question: Implement JWT authentication

    function generateToken(user) {
      return jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
    }
    function verifyToken(token) {
      return jwt.verify(token, 'secret');
    }
