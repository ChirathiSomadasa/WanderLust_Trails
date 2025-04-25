import { useState } from "react"
import {Link} from "react-router-dom"
import { Eye, EyeOff, User, Mail, Lock, ChevronRight } from "lucide-react"
import "./Signup.css"
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PublicIcon from "@mui/icons-material/Public";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

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

        // First name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required"
        }

        // Last name validation
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required"
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid"
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required"
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        // Confirm password validation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {
            setIsSubmitting(true)

            // Simulate API call
            setTimeout(() => {
                console.log("Form submitted successfully", formData)
                setIsSubmitting(false)
                // Here you would typically redirect the user or show a success message
            }, 1500)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

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
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Enter your first name"
                                            className={errors.firstName ? "error" : ""}
                                        />
                                    </div>
                                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                </div>

                                <div className="form-group-signup">
                                    <label htmlFor="lastName">Last name</label>
                                    <div className="input-wrapper">
                                        <User className="input-icon" size={18} />
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Enter your last name"
                                            className={errors.lastName ? "error" : ""}
                                        />
                                    </div>
                                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
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
                                <span className="password-hint">Use 6 or more characters with a mix of letters, numbers & symbols</span>
                            </div>

                            <button type="submit" className="signup-button" disabled={isSubmitting}>
                                {isSubmitting ? "Creating Account..." : "Sign up"}
                                {!isSubmitting && <ChevronRight size={18} />}
                            </button>

                            <div className="login-link">
                                Already have an account? <Link to="/login">Log in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
