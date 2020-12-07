const { REACT_APP_BASE_URL } = process.env;

export const signup = admin => (
  fetch(`${REACT_APP_BASE_URL}/admin/register`, {
    method: "POST",
    body: JSON.stringify(admin),
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
);

export const login = admin => (
  fetch(`${REACT_APP_BASE_URL}/admin/login`, {
    method: "POST",
    body: JSON.stringify(admin),
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
);

export const logout = () => (
  fetch(`${REACT_APP_BASE_URL}/admin/logout`, {
    method: "DELETE",
    credentials: 'include'
  })
);

export const checkLoggedIn = async () => {
  const response = await fetch(`${REACT_APP_BASE_URL}/admin/auth`, {
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