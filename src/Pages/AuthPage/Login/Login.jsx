import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginImage from "../../../assets/loginImage.png";
import Form from "react-bootstrap/Form";
import GlobalAddButton from "../../../Components/GlobalButton/GlobalAddButton";
import GlobalToaster from "../../../Components/GlobalToaster/ToasterHandle";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, loginActionReset } from "../../../Redux/Auth/action";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const loginReducer = store?.loginReducer;
  console.log(loginReducer, "loginReducer");
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    dispatch(authLogin(data));
  };
  // for toast

  const [toastSeverity, setToastSeverity] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (loginReducer?.data) {
      if (loginReducer?.data?.status == 200) {
        setToastSeverity("success");
        localStorage.setItem("token", loginReducer?.data?.data?.token);
        navigate("/home");
        setToastMessage(loginReducer?.data?.data?.message);
        setToastOpen(true);
      } else {
        setToastSeverity("error");
        setToastMessage(loginReducer?.message?.data?.message);
        setToastOpen(true);
      }
      dispatch(loginActionReset());
    }
  }, [loginReducer]);

  return (
    <Row xs={1} md={2} style={{ height: "100vh", margin: 0 }}>
      {/* Left Side - Image & Text */}
      <GlobalToaster
        severity={toastSeverity}
        message={toastMessage}
        open={toastOpen}
        handleClose={() => setToastOpen(false)}
      />
      <Col
        style={{
          backgroundColor: "#4D007D",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "520px", textAlign: "center" }}>
          <img
            src={loginImage}
            alt="Login Visual"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.4,
              fontWeight: 600,
              marginTop: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.4,
              marginTop: "10px",
            }}
          >
            Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
      </Col>

      {/* Right Side - Form */}
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <h2
            style={{
              textAlign: "start",
              marginBottom: "20px",
              fontSize: "20px",
              lineHeight: 1.4,
              fontWeight: 600,
            }}
          >
            Welcome to Dashboard
          </h2>

          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>
            {/* Password */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <InputGroup.Text
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup>
              {errors.password && (
                <Form.Text className="text-danger">
                  {errors.password.message}
                </Form.Text>
              )}
            </Form.Group>
            <GlobalAddButton text="Login" type="submit"  />
          </Form>
          <p style={{ marginTop: "10px" }}>
            Don’t have an account?{" "}
            <strong
              onClick={() => navigate("/register")}
              style={{ cursor: "pointer", color: "#4D007D" }}
            >
              Register
            </strong>
          </p>
        </div>
      </Col>
    </Row>
  );
}
