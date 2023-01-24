import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const logemailRef = useRef();
  const logpasswordRef = useRef();
  const { login, signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  //asyncronous submit function

  async function submitHandler(e) {
    e.preventDefault();
    if (isLoggingIn) {
      try {
        await login(logemailRef.current.value, logpasswordRef.current.value);
        navigate("/cars/1");
      } catch (err) {
        setError("Incorrect email or password");
      }
      return;
    }
    await signup(logemailRef.current.value, logpasswordRef.current.value);
  }

  //line 44 the handleSubmit function is now called  to the signin Form on Submission

  return (
    <div className="signup-background">
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="TestCard">
          <>
            <Card className="SignUp-Card">
              <Card.Body>
                <h2 className="text-center mb-4 text-white">SignIn</h2>
                {error && <Alert variant="danger">{error}</Alert>}

                <Form
                  style={{ backgroundColor: "transparent" }}
                  onSubmit={submitHandler}
                >
                  <Form.Group id="email" className="mt-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      ref={logemailRef}
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>

                  <Form.Group id="password" className="mt-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      ref={logpasswordRef}
                      required
                    />
                  </Form.Group>
                  <div className="w-100 mt-3 text-white mt-4">
                    <Link to="/">Forgot Password?</Link>
                  </div>
                  <Button
                    disabled={loading}
                    className="buttonStyle w-100 mt-4"
                    type="submit"
                  >
                    Log In
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 text-white">
              Need an account? <Link to="/sign-up">Sign Up</Link>
            </div>
          </>
        </div>
      </Container>
    </div>
  );
}
