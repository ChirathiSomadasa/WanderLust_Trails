import { useState, useEffect } from "react"
import "./Contact.css"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import office1 from "../../images/office1.jpg"
import office2 from "../../images/office2.jpg"
import office3 from "../../images/office3.jpg"

const Contact = () => {
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "", // Updated from "phone" to "phone_number"
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Animation for elements to fade in when scrolled into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible")
        }
      })
    }, observerOptions)
    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.querySelectorAll(".fade-in").forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Send form data to the backend
      const response = await fetch("https://wander-lust-trails-backend.vercel.app/api/contact/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        // Handle successful submission
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you for your message! We'll get back to you soon.",
        })
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone_number: "", // Reset phone_number
          subject: "",
          message: "",
        })
      } else {
        // Handle backend errors
        setFormStatus({
          submitted: true,
          success: false,
          message: result.error || "An error occurred while submitting the form.",
        })
      }
    } catch (error) {
      // Handle network or other errors
      setFormStatus({
        submitted: true,
        success: false,
        message: "Failed to connect to the server. Please try again later.",
      })
    }

    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      })
    }, 5000)
  }

  const contactInfo = [
    {
      icon: <MapPin />,
      title: "Our Location",
      details: ["No. 456, Galle Road", "Colombo 03", "Sri Lanka"],
    },
    {
      icon: <Phone />,
      title: "Phone Number",
      details: ["+94 112426901", "+94 112446900"],
    },
    {
      icon: <Mail />,
      title: "Email Address",
      details: ["info@wanderlusttrails.com", "bookings@wanderlusttrails.com"],
    },
    {
      icon: <Clock />,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
    },
  ]

  const socialLinks = [
    { icon: <Facebook />, url: "#", name: "Facebook" },
    { icon: <Instagram />, url: "#", name: "Instagram" },
    { icon: <Twitter />, url: "#", name: "Twitter" },
    { icon: <Linkedin />, url: "#", name: "LinkedIn" },
  ]

  return (
    <div className="contact-container">
      {/* Parallax Hero Section */}
      <section className="contact-parallax-section">
        <div className="parallax-bg-contact" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="parallax-overlay-contact"></div>
        <div className="parallax-content-contact">
          <h1 className="animate-title-contact">Contact Us</h1>
          <p className="animate-subtitle-contact">Get in touch with our travel experts</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-intro fade-in">
            <h2>
              Let's Start Your <span className="highlight-contact">Adventure</span> Together
            </h2>
            <p>
              Have questions about our travel packages or need a custom itinerary? Our team of travel experts is ready
              to assist you in planning your perfect getaway. Reach out to us through any of the methods below.
            </p>
          </div>

          <div className="contact-layout">
            {/* Contact Information - Now in a vertical column */}
            <div className="contact-info-column fade-in">
              {contactInfo.map((info, index) => (
                <div className="info-card" key={index}>
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h3>{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="social-links">
                <h3>Connect With Us</h3>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a href={social.url} className="social-icon" key={index} aria-label={social.name}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container fade-in">
              <div className="form-header">
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? "success" : "error"}`}>
                  {formStatus.success ? (
                    <CheckCircle className="message-icon" />
                  ) : (
                    <AlertCircle className="message-icon" />
                  )}
                  <p>{formStatus.message}</p>
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group-contact">
                  <label htmlFor="name">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-row-contact">
                  <div className="form-group-contact">
                    <label htmlFor="email">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group-contact">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      placeholder="Your phone number (optional)"
                    />
                  </div>
                </div>
                <div className="form-group-contact">
                  <label htmlFor="subject">Subject*</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={errors.subject ? "error" : ""}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>
                <div className="form-group-contact">
                  <label htmlFor="message">Message*</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us more about your travel plans..."
                    className={errors.message ? "error" : ""}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <button type="submit" className="submit-button-contact">
                  <Send className="button-icon" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section fade-in">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.799850455061!2d79.85398837442697!3d6.927078693025854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f691c37%3A0x2ddbf0b0e6bb4da!2sColombo!5e0!3m2!1sen!2slk!4v1698749965913!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="WanderLust Trails Location - Sri Lanka"
          ></iframe>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="office-gallery fade-in">
        <div className="container">
          <h2>
            Visit Our <span className="highlight">Office</span>
          </h2>
          <p className="gallery-intro">
            Our travel experts are ready to welcome you to our office. Stop by to discuss your travel plans in person.
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={office1} alt="Office reception" />
            </div>
            <div className="gallery-item">
              <img src={office2} alt="Meeting room" />
            </div>
            <div className="gallery-item">
              <img src={office3} alt="Travel consultation area" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section fade-in">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Next Adventure?</h2>
            <p>Subscribe to our newsletter for exclusive travel deals and inspiration.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
