import { useNavigate } from "react-router-dom";

export function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="container col-4 mt-4 text-center">
      <h1 className="h3 mb-3">Registrate</h1>
      <form className="form-signin">
        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-3"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Correo Electronico</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control mb-3"
            id="floatingPassword"
            placeholder="Contraseña"
          />
          <label htmlFor="floatingPassword">Contraseña</label>

          <button
            onClick={handleSubmit}
            className="btn-lg btn-primary w-100 my-4"
          >
            Registrate
          </button>
        </div>
      </form>
      <p className="m-0">
        ¿Aun no tienes cuenta?{" "}
        <a href="/signup" className="link-primary text-end m-0">
          Registrate aquí
        </a>
      </p>
    </div>
  );
}