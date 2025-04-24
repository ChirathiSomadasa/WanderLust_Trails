import { useState, useEffect, useRef } from "react";
import "./Service.css";
import {
  Compass,
  Map,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Users,
  Calendar,
  Shield,
  Heart,
  Award,
  Clock,
  ChevronRight,
} from "lucide-react";

// Import Images
import EuropeImage from "../../images/European.jpg";
import AsiaImage from "../../images/asia.jpg";
import AfricaImage from "../../images/africa.jpg";
import TravelFeaturesImage from "../../images/feature.jpg";

const Service = () => {
  const [scrollY, setScrollY] = useState(0);
  const servicesRef = useRef([]);
  const featuresRef = useRef([]);
  const packagesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Animation for elements to fade in when scrolled into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    // Staggered animations
    servicesRef.current.forEach((service, index) => {
      if (service) {
        service.style.transitionDelay = `${index * 0.15}s`;
      }
    });

    featuresRef.current.forEach((feature, index) => {
      if (feature) {
        feature.style.transitionDelay = `${index * 0.15}s`;
      }
    });

    packagesRef.current.forEach((pkg, index) => {
      if (pkg) {
        pkg.style.transitionDelay = `${index * 0.15}s`;
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelectorAll(".fade-in").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      icon: <Compass />,
      title: "Guided Tours",
      description:
        "Expert-led tours to the world's most fascinating destinations with insider knowledge and exclusive access.",
    },
    {
      icon: <Map />,
      title: "Adventure Trips",
      description: "Thrilling expeditions for adrenaline seekers, from mountain trekking to jungle exploration.",
    },
    {
      icon: <Plane />,
      title: "Flight Bookings",
      description: "Secure the best deals on flights worldwide with our premium booking service and price guarantees.",
    },
    {
      icon: <Hotel />,
      title: "Luxury Accommodations",
      description: "Hand-picked luxury stays from boutique hotels to exclusive resorts with VIP amenities.",
    },
    {
      icon: <Utensils />,
      title: "Culinary Experiences",
      description: "Immersive food tours, cooking classes, and reservations at the finest local restaurants.",
    },
    {
      icon: <Camera />,
      title: "Photography Tours",
      description: "Capture stunning landscapes and cultural moments with our specialized photography expeditions.",
    },
  ];

  const features = [
    {
      icon: <Users />,
      title: "Personalized Service",
      description: "Tailored itineraries designed around your preferences, interests, and travel style.",
    },
    {
      icon: <Calendar />,
      title: "Flexible Scheduling",
      description: "Adjust your travel dates and itinerary with our flexible booking policies.",
    },
    {
      icon: <Shield />,
      title: "Travel Protection",
      description: "Comprehensive travel insurance and 24/7 emergency assistance for peace of mind.",
    },
    {
      icon: <Heart />,
      title: "Sustainable Tourism",
      description: "Eco-friendly travel options that support local communities and preserve natural environments.",
    },
  ];

  const packages = [
    {
      title: "European Elegance",
      duration: "12 Days",
      price: "$3,499",
      image: EuropeImage, // Imported image
      highlights: ["Paris & Rome", "Luxury Accommodations", "Cultural Experiences", "Fine Dining"],
    },
    {
      title: "Asian Adventure",
      duration: "14 Days",
      price: "$2,899",
      image: AsiaImage, // Imported image
      highlights: ["Tokyo & Bangkok", "Temple Tours", "Street Food Exploration", "Island Hopping"],
    },
    {
      title: "African Safari",
      duration: "10 Days",
      price: "$4,299",
      image: AfricaImage, // Imported image
      highlights: ["Wildlife Viewing", "Luxury Camps", "Local Tribal Visits", "Sunset Safaris"],
    },
  ];

  return (
    <div className="services-container">
      {/* Parallax Hero Section */}
      <section className="parallax-section">
        <div className="parallax-bg" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="parallax-overlay"></div>
        <div className="parallax-content">
          <h1 className="animate-title">Our Services</h1>
          <p className="animate-subtitle">Exceptional travel experiences tailored just for you</p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="services-intro fade-in">
        <div className="container">
          <h2>
            Discover Our <span className="highlight">Premium Services</span>
          </h2>
          <p>
            At WanderLust Trails, we offer a comprehensive range of travel services designed to create unforgettable
            experiences. From meticulously planned guided tours to adventurous expeditions, we handle every aspect of
            your journey with attention to detail and personalized care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid">
        <div className="container">
          <div className="services-wrapper">
            {services.map((service, index) => (
              <div className="service-card fade-in" key={index} ref={(el) => (servicesRef.current[index] = el)}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="service-link">
                  Learn More <ChevronRight className="link-icon" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="featured-packages">
        <div className="container">
          <h2 className="section-title fade-in">
            Featured <span className="highlight">Travel Packages</span>
          </h2>
          <p className="section-subtitle fade-in">
            Explore our most popular travel experiences, carefully crafted to provide unforgettable adventures
          </p>
          <div className="packages-wrapper">
            {packages.map((pkg, index) => (
              <div className="package-card fade-in" key={index} ref={(el) => (packagesRef.current[index] = el)}>
                <div className="package-image">
                  <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} />
                  <div className="package-duration">
                    <Calendar className="duration-icon" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
                <div className="package-content">
                  <h3>{pkg.title}</h3>
                  <div className="package-price">{pkg.price}</div>
                  <ul className="package-highlights">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i}>
                        <ChevronRight className="highlight-icon" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <button className="package-button">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <div className="features-content">
            <div className="features-text fade-in">
              <h2>
                Why Choose <span className="highlight">WanderLust Trails</span>
              </h2>
              <p>
                With over a decade of experience creating exceptional travel experiences, our team of experts is
                dedicated to making your journey seamless, memorable, and tailored to your preferences.
              </p>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div className="feature-item fade-in" key={index} ref={(el) => (featuresRef.current[index] = el)}>
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="features-image fade-in">
              <div className="image-container">
                <img src={TravelFeaturesImage} alt="Travel features" /> {/* Imported image */}
                <div className="experience-badge">
                  <div className="badge-content">
                    <span className="years">
                      <Award className="award-icon" /> 13+
                    </span>
                    <span className="text">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section fade-in">
        <div className="container">
          <h2 className="section-title">
            How It <span className="highlight">Works</span>
          </h2>
          <p className="section-subtitle">
            Our simple process ensures your travel experience is seamless from start to finish
          </p>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-icon">
                <Compass />
              </div>
              <h3>Consultation</h3>
              <p>Share your travel dreams and preferences with our expert consultants</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Map />
              </div>
              <h3>Custom Planning</h3>
              <p>Receive a tailored itinerary designed specifically for your interests</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-icon">
                <Clock />
              </div>
              <h3>Refinement</h3>
              <p>Fine-tune your journey until it's exactly what you envision</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-icon">
                <Plane />
              </div>
              <h3>Experience</h3>
              <p>Embark on your adventure with 24/7 support throughout your travels</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-service fade-in">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Adventure?</h2>
            <p>Contact our travel specialists today to begin planning your dream journey</p>
            <div className="cta-buttons">
              <button className="cta-button primary pulse-animation">Request a Quote</button>
              <button className="cta-button secondary">Browse Destinations</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;