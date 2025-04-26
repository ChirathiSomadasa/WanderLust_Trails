import { useState, useContext } from "react";
import "./Login.css";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(""); 
  const { setIsAuthenticated } = useContext(AuthContext); // Destructure setIsAuthenticated from AuthContext
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
    setServerError(""); // Clear server error when user changes input
  };

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email or phone number is required";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Make a POST request to the login endpoint
        const response = await axios.post("http://localhost:5000/api/user/login", formData, {
          withCredentials: true, // Send cookies with the request
        });

        // Store token in localStorage
        localStorage.setItem("auth_token", response.data.token);

        // Update authentication state in AuthContext
        setIsAuthenticated(true);

        // Handle successful login
        console.log("Login successful:", response.data);
        navigate("/"); // Redirect to the dashboard or home page
      } catch (err) {
        console.error("Error during login:", err.response?.data?.error || err.message);
        setServerError(err.response?.data?.error || "Login failed. Please try again.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <div className="login-overlay"></div>

      <div className="login-content">
        <div className="login-welcome">
          <h1>Welcome Back!</h1>
          <p>Please enter your details to access your account</p>
        </div>

        <div className="login-form-container">
          <h2>Login</h2>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group-login">
              <label htmlFor="email">Email or phone number</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email or phone"
                className={errors.email ? "error" : ""}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group-login">
              <label htmlFor="password">Password</label>
              <div className="password-input-container-login">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={errors.password ? "error" : ""}
                />
                <button
                  type="button"
                  className="toggle-password-login"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            <div className="form-group-login forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            {serverError && <p className="error-message">{serverError}</p>}

            <div className="signup-prompt">
              Don't have an account? <Link to="/register">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;