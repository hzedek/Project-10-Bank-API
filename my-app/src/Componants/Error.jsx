import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
     <Link to="/SignUp"> Connectez-vous</Link>
    </div>
  );
}
export default Error;