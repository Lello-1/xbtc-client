export const signup = admin => (
  fetch("http://localhost:5000/admin/register", {
    method: "POST",
    body: JSON.stringify(admin),
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
);

export const login = admin => (
  fetch("http://localhost:5000/admin/login", {
    method: "POST",
    body: JSON.stringify(admin),
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
);

export const logout = () => (
  fetch("http://localhost:5000/admin/logout", {
    method: "DELETE",
    credentials: 'include'
  })
);

export const checkLoggedIn = async () => {
  const response = await fetch('http://localhost:5000/admin/auth', {
    credentials: 'include'
  });

  const { admin } = await response.json();
  let preloadedState = {};

  if (admin) {
    preloadedState = {
      session: admin
    };
  }
  
  return preloadedState;
};