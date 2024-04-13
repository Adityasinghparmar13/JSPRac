
// Question: Create HOC for authentication

    function withAuth(Component) {
      return props => {
        const isAuth = checkAuth();
        return isAuth ? <Component {...props} /> : <Login />;
      };
    }

// Question: Validate email with regex

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
