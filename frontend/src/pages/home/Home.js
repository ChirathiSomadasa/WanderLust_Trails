import { useState, useEffect, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowRight, MapPin, Star, Calendar, Users, TrendingUp, ChevronRight, ChevronLeft, Image, Layers } from "lucide-react"
import "./Home.css"
// Import images - assuming these paths work in your project
import image1 from "../../images/bali.jpg"
import image2 from "../../images/greece.jpg"
import image3 from "../../images/japan.jpg"
import image4 from "../../images/peru.jpg"
import image5 from "../../images/sigiriya.jpeg"
import SlideShowImage1 from "../../images/img1.jpg"
import SlideShowImage2 from "../../images/img10.jpg"
import SlideShowImage3 from "../../images/peru.jpg"
import SlideShowImage4 from "../../images/image-3.jpg"
import SlideShowImage5 from "../../images/img6.jpg"
import SpecialOffersImg from "../../images/offer.jpg"

function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const parallaxRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => {
      // Fade in animations for sections
      const elements = document.querySelectorAll(".fade-in-section")
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("is-visible")
        }
      })
      // Parallax effect
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset
        const parallaxElement = parallaxRef.current
        const parallaxOffset = scrollPosition * 0.4 // Adjust speed
        parallaxElement.style.backgroundPositionY = `${parallaxOffset}px`
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Custom arrow components for the slider
  const PrevArrow = (props) => {
    const { onClick } = props
    return (
      <button className="slider-arrow slider-arrow-prev" onClick={onClick}>
        <ChevronLeft size={24} />
      </button>
    )
  }

  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <button className="slider-arrow slider-arrow-next" onClick={onClick}>
        <ChevronRight size={24} />
      </button>
    )
  }

  // Hero slider settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  // Destinations slider settings
  const destinationSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
          arrows: false,
          dots: true,
        },
      },
    ],
  }

  // Testimonial slider settings
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    fade: true,
  }

  // Hero slides data
  const heroSlides = [
    {
      image: SlideShowImage1,
      title: "Discover Paradise Beaches",
      subtitle: "Experience crystal clear waters and pristine sands",
      cta: "Explore Beach Destinations",
    },
    {
      image: SlideShowImage2,
      title: "Adventure Awaits in the Mountains",
      subtitle: "Trek through breathtaking landscapes and scenic trails",
      cta: "Find Mountain Getaways",
    },
    {
      image: SlideShowImage3,
      title: "Immerse in Cultural Wonders",
      subtitle: "Explore ancient cities and historical landmarks",
      cta: "Discover Cultural Tours",
    },
    {
      image: SlideShowImage4,
      title: "Wildlife Encounters",
      subtitle: "Get up close with exotic animals in their natural habitat",
      cta: "Book Safari Adventures",
    },
    {
      image: SlideShowImage5,
      title: "Luxury Urban Escapes",
      subtitle: "Experience the finest accommodations in world-class cities",
      cta: "View Luxury Packages",
    },
  ]

  // Featured destinations data
  const destinations = [
    {
      name: "Bali, Indonesia",
      image: image1,
      rating: 4.8,
      price: "$1,299",
      duration: "7 Days",
    },
    {
      name: "Santorini, Greece",
      image: image2,
      rating: 4.9,
      price: "$1,899",
      duration: "8 Days",
    },
    {
      name: "Kyoto, Japan",
      image: image3,
      rating: 4.7,
      price: "$2,199",
      duration: "10 Days",
    },
    {
      name: "Machu Picchu, Peru",
      image: image4,
      rating: 4.9,
      price: "$2,499",
      duration: "12 Days",
    },
    {
      name: "Sigiriya, Sri Lanka",
      image: image5,
      rating: 4.8,
      price: "$3,299",
      duration: "3 Days",
    },
  ]

  // Travel categories data
  const categories = [
    {
      title: "Adventure",
      description: "Thrilling experiences for the bold traveler",
      icon: <TrendingUp size={32} />,
    },
    {
      title: "Beach",
      description: "Relax on pristine shores and crystal waters",
      icon: <MapPin size={32} />,
    },
    {
      title: "Cultural",
      description: "Immerse yourself in rich heritage and traditions",
      icon: <Star size={32} />,
    },
    {
      title: "Family",
      description: "Create lasting memories with loved ones",
      icon: <Users size={32} />,
    },
    {
      title: "Seasonal",
      description: "Perfect getaways for every time of year",
      icon: <Calendar size={32} />,
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      text: "Our trip to Bali was absolutely magical! WanderLust Trails took care of every detail, from airport transfers to exclusive resort access. We'll definitely book with them again!",
      author: "Sarah Johnson",
      location: "New York, USA",
    },
    {
      text: "The guided tour through Japan exceeded all our expectations. Our guide was knowledgeable and friendly, and the itinerary was perfectly balanced between popular attractions and hidden gems.",
      author: "David Chen",
      location: "Toronto, Canada",
    },
    {
      text: "As a solo traveler, I was looking for both adventure and safety. WanderLust Trails delivered on both fronts with their amazing European package. I made friends for life on this journey!",
      author: "Emma Rodriguez",
      location: "London, UK",
    },
  ]

  return (
    <div className={`home-container ${isVisible ? "visible" : ""}`}>
      {/* Hero Section */}
      <section className="hero-section-home">
        <Slider {...heroSettings} className="hero-slider-home">
          {heroSlides.map((slide, index) => (
            <div key={index} className="hero-slide-home">
              <div className="hero-image-container-home">
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="hero-image-home" />
                <div className="hero-overlay-home"></div>
              </div>
              <div className="hero-content-home">
                <h1 className="slide-title-home">{slide.title}</h1>
                <p className="slide-subtitle-home">{slide.subtitle}</p>
                <button className="cta-button-home">
                  {slide.cta} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {/* Featured Destinations Section */}
      <section className="destinations-section fade-in-section">
        <div className="section-header">
          <h2>Featured Destinations</h2>
          <p>Explore our handpicked destinations for your next adventure</p>
        </div>
        <Slider {...destinationSettings} className="destinations-slider">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <div className="destination-image-container">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="destination-image"
                />
                <div className="destination-price">{destination.price}</div>
              </div>
              <div className="destination-content">
                <h3>{destination.name}</h3>
                <div className="destination-details">
                  <div className="destination-rating">
                    <Star size={16} className="star-icon" />
                    <span>{destination.rating}</span>
                  </div>
                  <div className="destination-duration">
                    <Calendar size={16} />
                    <span>{destination.duration}</span>
                  </div>
                </div>
                <button className="view-button">View Details</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {/* Parallax Section */}
      <section className="parallax-section">
        <div className="parallax-content">
          <h2>Experience the Journey of a Lifetime</h2>
          <p>Unforgettable adventures await in the world's most breathtaking destinations</p>
          <button className="parallax-button">Start Your Adventure</button>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="features-section fade-in-section">
        <div className="section-header">
          <h2>Why Choose WanderLust Trails</h2>
          <p>We make your travel experience unforgettable for all the right reasons</p>
        </div>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <Layers size={60} color="var(--primary-color)" />
            </div>
            <h3>Curated Experiences</h3>
            <p>Handcrafted itineraries designed by travel experts with local knowledge</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Image size={60} color="var(--primary-color)" />
            </div>
            <h3>24/7 Support</h3>
            <p>Travel with peace of mind knowing our team is always available to assist you</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Star size={60} color="var(--primary-color)" />
            </div>
            <h3>Best Price Guarantee</h3>
            <p>We promise competitive rates and transparency—no hidden fees or surprises</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <MapPin size={60} color="var(--primary-color)" />
            </div>
            <h3>Sustainable Travel</h3>
            <p>Eco-friendly options that respect local communities and environments</p>
          </div>
        </div>
      </section>
      {/* Travel Categories Section */}
      <section className="categories-section fade-in-section">
        <div className="section-header">
          <h2>Explore Travel Styles</h2>
          <p>Find the perfect travel experience that matches your interests</p>
        </div>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <a href="#" className="category-link">
                Explore <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* Special Offers Section */}
      <section className="offers-section fade-in-section">
        <div className="offers-content">
          <h2>Limited Time Offers</h2>
          <p>Take advantage of these exclusive deals before they're gone</p>
          <div className="offer-timer">
            <div className="timer-unit">
              <span className="timer-number">05</span>
              <span className="timer-label">Days</span>
            </div>
            <div className="timer-unit">
              <span className="timer-number">12</span>
              <span className="timer-label">Hours</span>
            </div>
            <div className="timer-unit">
              <span className="timer-number">45</span>
              <span className="timer-label">Minutes</span>
            </div>
          </div>
          <button className="offer-button">View All Offers</button>
        </div>
        <div className="offers-image">
          <img src={SpecialOffersImg || "/placeholder.svg"} alt="Special Offers" />
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials-section fade-in-section">
        <div className="section-header">
          <h2>What Our Travelers Say</h2>
          <p>Real experiences from our satisfied customers</p>
        </div>
        <Slider {...testimonialSettings} className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {/* Newsletter Section */}
      <section className="newsletter-section fade-in-section">
        <div className="newsletter-content">
          <h2>Get Inspired</h2>
          <p>Subscribe to our newsletter for travel tips and exclusive offers</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home