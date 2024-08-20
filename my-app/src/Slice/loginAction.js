import { loginStart, loginSuccess, loginFailure } from './loginSlice';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    
    // Effectuer une requête POST vers l'API de connexion
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (response.ok) {
      const data = await response.json(); // Récupérer les données utilisateur et token si la connexion réussit
    dispatch(loginSuccess({data:data.data}));
      console.log(data);
      
      localStorage.setItem('token', data.token); // Stocker le token dans le localStorage pour la session
    } else {
      const errorData = await response.json();
      console.log(errorData);
      
      dispatch(loginFailure(errorData.message));
    }
  } catch (error) {
    dispatch(loginFailure('An error occurred. Please try again.'));
  }
};


