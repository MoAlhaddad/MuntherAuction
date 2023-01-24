import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/cars/1");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">
                    {error && <Alert variant="danger">{error}</Alert>}
                  </h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <div className="mb-3"></div>
                  <Form
                    style={{ backgroundColor: "transparent" }}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group id="email" className="mb-3">
                      <Form.Label className="text-center">Email</Form.Label>
                      <Form.Control
                        type="email"
                        ref={emailRef}
                        placeholder="Enter your name"
                        required
                      />
                    </Form.Group>
                    <Form.Group id="password" className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        ref={passwordRef}
                        placeholder="Enter Password"
                        required
                      />
                    </Form.Group>
                    <Form.Group id="password-confirm" className="mt-4">
                      <Form.Label>Password Confirmation</Form.Label>
                      <Form.Control
                        type="password"
                        ref={passwordConfirmRef}
                        placeholder="Confirm Password"
                        required
                      />
                      <p className="small">
                        <a className="text-primary" href="#!">
                          Forgot password?
                        </a>
                      </p>
                    </Form.Group>
                    <div className="d-grid">
                      <Button
                        disabled={loading}
                        className="buttonStyle w-100 mt-3"
                        type="submit"
                      >
                        Sign Up
                      </Button>
                    </div>
                  </Form>

                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Don't have an account?{" "}
                      <a href="/sign-In" className="text-primary fw-bold">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
