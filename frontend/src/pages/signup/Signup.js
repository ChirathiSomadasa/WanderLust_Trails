import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { Eye, EyeOff, User, Mail, Lock, ChevronRight } from "lucide-react";
import "./Signup.css";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PublicIcon from "@mui/icons-material/Public";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import axios from "axios"; // Import axios for making HTTP requests

function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(""); 
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the registration endpoint
      await axios.post("https://wander-lust-trails-backend.vercel.app/api/user/register", formData);
      navigate("/login"); // Redirect to login after successful registration
    } catch (err) {
      setServerError(err.response?.data?.error || "Registration failed"); // Use setServerError here
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <div className="signup-background"></div>
      <div className="signup-content">
        <div className="signup-left">
          <h1>Explore the World</h1>
          <p>
            Access to detailed information about countries, cultures, and travel destinations. Join our community of
            travelers and start planning your next adventure today!
          </p>
          <div className="features-signup">
            <div className="feature-signup">
              <div className="feature-icon-signup">
                <FlightTakeoffIcon fontSize="large" />
              </div>
              <div className="feature-text-signup">
                <h3>Exclusive Travel Deals</h3>
                <p>Get access to members-only discounts and offers</p>
              </div>
            </div>
            <div className="feature-signup">
              <div className="feature-icon-signup">
                <PublicIcon fontSize="large" />
              </div>
              <div className="feature-text-signup">
                <h3>Personalized Recommendations</h3>
                <p>Discover destinations tailored to your preferences</p>
              </div>
            </div>
            <div className="feature-signup">
              <div className="feature-icon-signup">
                <PhoneIphoneIcon fontSize="large" />
              </div>
              <div className="feature-text-signup">
                <h3>Travel Community</h3>
                <p>Connect with fellow travelers and share experiences</p>
              </div>
            </div>
          </div>
        </div>

        <div className="signup-form-container">
          <div className="signup-form-wrapper">
            <h2>Sign up now</h2>
            <p className="form-subtitle">Create your account to start your journey</p>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-row-signup">
                <div className="form-group-signup">
                  <label htmlFor="firstName">First name</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={18} />
                    <input
                      type="text"
                      id="firstName"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className={errors.first_name ? "error" : ""}
                    />
                  </div>
                  {errors.first_name && <span className="error-message">{errors.first_name}</span>}
                </div>

                <div className="form-group-signup">
                  <label htmlFor="lastName">Last name</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={18} />
                    <input
                      type="text"
                      id="lastName"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className={errors.last_name ? "error" : ""}
                    />
                  </div>
                  {errors.last_name && <span className="error-message">{errors.last_name}</span>}
                </div>
              </div>

              <div className="form-group-signup">
                <label htmlFor="email">Email address</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={errors.email ? "error" : ""}
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group-signup">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className={errors.password ? "error" : ""}
                  />
                  <button
                    type="button"
                    className="toggle-password-signup"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <button type="submit" className="signup-button">
                Sign up
                <ChevronRight size={18} />
              </button>

              {serverError && <p className="error-message">{serverError}</p>}

              <div className="login-link">
                Already have an account? <Link to="/login">Log in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;