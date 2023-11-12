import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Info from "../components/Info";
import Footer from "../components/footer/Footer";


const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;

  a {
    text-decoration: none;
    color: #000;
  }

  form input {
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid rgba(159, 159, 159, 1);
  }

  button {
    border-radius: 15px;
    border: 1px solid #000;
    padding: 17px 78px;

    cursor: pointer;
  }

  .login {
    padding: 0 1rem;
  }

  .login form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .form-btn {
    display: flex;
    justify-content: space-between;
  }

  .register {
    padding: 0 1rem;
  }

  .register form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .register-form-btn {
    width: min-content;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    flex-direction: row;

    .login {
      width: 50%;
      padding: 50px 100px 50px 230px;
    }

    .register {
      width: 50%;
      padding: 50px 230px 50px 100px;
    }
  }
`;

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const { authenticate, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    authenticate(formState);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Container>
        <div className="login">
          <h2>Log In</h2>
          {!isAuthenticated && (
            <form onSubmit={handleFormSubmit}>
            <label>Username or email address</label>
            <input
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              type="text"
              value={formState.email}
              required
            />
            <label>Password</label>
            <input
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
              type="password"
              value={formState.password}
              required
            />
            <div className="form-btn">
              <button className="form-btn-login" type="submit">
                Login
              </button>
              <Link to="/">Lost Your Password</Link>
            </div>
          </form>
          )}
        </div>
        <div className="register">
          <h2>Register</h2>
          <form>
            <label>Email address</label>
            <input
              type="text"
              required
            />
            <p>
              A link to set a new password will be sent to your email address.
            </p>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button className="register-form-btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default Login;
