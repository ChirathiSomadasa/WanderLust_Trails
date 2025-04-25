import { useState } from "react"
import "./Login.css"
import { Eye, EyeOff } from 'lucide-react'
import {Link} from "react-router-dom"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email or phone number is required"
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Here you would typically handle the login logic
      console.log("Form submitted:", formData)
      
      // For demo purposes, we'll just reset the form
      setFormData({
        email: "",
        password: "",
      })
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

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
            
            <button type="submit" className="login-button">Login</button>
            
            <div className="signup-prompt">
              Don't have an account? <Link to="/register">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
