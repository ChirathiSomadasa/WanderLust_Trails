import { useEffect, useRef } from "react";
import "./About.css";
import { Leaf, Users, Award, Shield } from "lucide-react";
import storyImage from "../../images/story.jpg";
import team1 from "../../images/emp1.jpg"; // Import team member images
import team2 from "../../images/emp2.jpg";
import team3 from "../../images/emp3.jpg";
import team4 from "../../images/emp4.jpg";

const About = () => {
  // Refs for animated elements
  const valueCardsRef = useRef([]);
  const teamMembersRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
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

    // Additional animation for staggered elements
    valueCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.transitionDelay = `${index * 0.15}s`;
      }
    });

    teamMembersRef.current.forEach((member, index) => {
      if (member) {
        member.style.transitionDelay = `${index * 0.15}s`;
      }
    });

    statsRef.current.forEach((stat, index) => {
      if (stat) {
        stat.style.transitionDelay = `${index * 0.15}s`;
      }
    });

    return () => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section-about">
        <div className="hero-overlay-about"></div>
        <div className="hero-content-about">
          <h1 className="animate-title">Our Journey</h1>
          <p className="animate-subtitle">Discover the passion and expertise behind WanderLust Trails</p>
        </div>
      </section>

      {/* About Us Content */}
      <section className="about-content">
        <div className="about-intro fade-in">
          <h2 className="about-intro-h2">
            Welcome to <span className="highlight-about">WanderLust Trails</span>
          </h2>
          <p>
            Since 2010, we've been crafting unforgettable travel experiences for adventurers around the globe. Our
            mission is to transform ordinary trips into extraordinary journeys, connecting travelers with authentic
            local cultures and breathtaking destinations.
          </p>
        </div>

        <div className="about-story fade-in">
          <div className="story-image-about">
            <img src={storyImage} alt="Team of travel experts" />
          </div>
          <div className="story-text">
            <h3>Our Story</h3>
            <p>
              WanderLust Trails began with a simple idea: travel should be more than just visiting places; it should be
              about creating meaningful connections and lasting memories. Founded by a group of passionate travelers
              with over 30 years of combined experience, we've explored hidden gems across all seven continents.
            </p>
            <p>
              Today, our team of 50+ travel specialists designs custom itineraries that balance must-see attractions
              with off-the-beaten-path experiences, ensuring every journey is as unique as our travelers.
            </p>
          </div>
        </div>

        <div className="values-section fade-in">
          <h3>Our Values</h3>
          <div className="values-grid">
            {[
              {
                icon: <Leaf className="value-icon-svg" />,
                title: "Sustainability",
                description:
                  "We're committed to responsible tourism practices that preserve destinations for future generations.",
              },
              {
                icon: <Users className="value-icon-svg" />,
                title: "Authenticity",
                description:
                  "We prioritize genuine cultural exchanges and support for local communities in all our tours.",
              },
              {
                icon: <Award className="value-icon-svg" />,
                title: "Excellence",
                description:
                  "From luxury accommodations to guided excursions, we maintain the highest standards of quality.",
              },
              {
                icon: <Shield className="value-icon-svg" />,
                title: "Safety",
                description:
                  "Your security and comfort are paramount, with comprehensive support throughout your journey.",
              },
            ].map((value, index) => (
              <div className="value-card fade-in" key={index} ref={(el) => (valueCardsRef.current[index] = el)}>
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section fade-in">
          <h3>Meet Our Team</h3>
          <div className="team-grid">
            {[
              { name: "Derek Horton", role: "Founder & CEO", img: team1 }, 
              { name: "Sarah Johnson", role: "Head of Destinations", img: team2 },
              { name: "Andy Bowen", role: "Customer Experience", img: team3 },
              { name: "Brenda Sherman", role: "Adventure Specialist", img: team4 },
            ].map((member, index) => (
              <div className="team-member fade-in" key={index} ref={(el) => (teamMembersRef.current[index] = el)}>
                <div className="member-photo">
                  <img src={member.img} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          {[
            { number: "15,000+", label: "Happy Travelers" },
            { number: "120+", label: "Destinations" },
            { number: "13", label: "Years of Excellence" },
            { number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div className="stat-item fade-in" key={index} ref={(el) => (statsRef.current[index] = el)}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="cta-section fade-in">
          <h3>Start Your Adventure Today</h3>
          <p>Let us help you create memories that will last a lifetime.</p>
          <button className="cta-button pulse-animation">Contact Our Team</button>
        </div>
      </section>
    </div>
  );
};

export default About;