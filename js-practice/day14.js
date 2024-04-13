
// Question: Create HOC for authentication

    function withAuth(Component) {
      return props => {
        const isAuth = checkAuth();
        return isAuth ? <Component {...props} /> : <Login />;
      };
    }
