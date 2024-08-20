import "../style/main.css";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../Slice/loginSlice';

function User() {
  const { user, token, loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      dispatch(fetchUserProfile()); // Récupérer les données utilisateur
    }
  }, [token, dispatch, navigate]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{user ? `${user.firstName}` : 'User'}</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
      {/* Afficher les détails de l'utilisateur si disponible */}
      {!loading && !error && user && (
        <>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          {/* Ajoutez plus de sections pour afficher d'autres informations utilisateur */}
        </>
      )}
    </main>
  );
}

export default User;
