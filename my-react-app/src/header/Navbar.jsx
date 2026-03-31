import React, { useState, useEffect } from "react";
import gpsLogo from "../assets/gps.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Breakpoint for mobile menu (matches CSS media query)
  const MOBILE_BREAKPOINT = 850;

  useEffect(() => {
    // Check initial screen width
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    checkMobileView();

    // Add resize listener
    window.addEventListener("resize", checkMobileView);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  // Close menu when screen changes from mobile to desktop
  useEffect(() => {
    if (!isMobileView && isOpen) {
      setIsOpen(false);
    }
  }, [isMobileView, isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileView && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileView, isOpen]);

  // Close menu when a nav link is clicked (mobile only)
  const handleNavClick = () => {
    if (isMobileView) {
      setIsOpen(false);
    }
  };

  // Toggle menu only on mobile
  const toggleMenu = () => {
    if (isMobileView) {
      setIsOpen(!isOpen);
    }
  };

  // Shared button style to reduce code clutter
  const baseBtnStyle = {
    background: "transparent",
    color: "white",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    padding: "8px 12px",
    transition: "0.3s",
  };

  // Default styles for nav-links (desktop layout)
  const defaultNavLinksStyle = {
    display: "flex",
    gap: "15px",
    listStyle: "none",
    alignItems: "center",
    margin: 0,
    padding: 0,
  };

  // Mobile-specific transform styles
  const mobileTransformStyle = isMobileView
    ? {
        transform: isOpen ? "translateX(0%)" : "translateX(100%)",
        transition: "transform 0.4s ease-in-out",
      }
    : {};

  return (
    <>
      {/* Global styles to prevent horizontal scroll and ensure responsive behavior */}
      <style>
        {`
          /* Reset and prevent horizontal scroll */
          html, body {
            overflow-x: hidden;
            margin: 0;
            padding: 0;
            width: 100%;
          }
          * {
            box-sizing: border-box;
          }

          /* Hover & Active States */
          .nav-btn:hover { color: #ec7718 !important; }
          .contact-btn:hover { background-color: #ff5a00 !important; }
          .menu-icon.active div:nth-child(1) { transform: translateY(9px) rotate(45deg); }
          .menu-icon.active div:nth-child(2) { opacity: 0; }
          .menu-icon.active div:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

          /* Responsive padding for navbar container */
          @media (max-width: 1100px) {
            .nav-container {
              padding: 0 30px !important;
            }
          }
          @media (max-width: 768px) {
            .nav-container {
              padding: 0 20px !important;
            }
          }
          @media (max-width: 480px) {
            .nav-container {
              padding: 0 15px !important;
            }
          }

          /* Mobile menu styles (≤850px) */
          @media (max-width: 850px) {
            .menu-icon {
              display: flex !important;
            }
            .nav-links {
              position: fixed !important;
              top: 0;
              right: 0;
              height: 100vh;
              width: 280px;
              max-width: 85vw;
              background: #111 !important;
              flex-direction: column !important;
              justify-content: center !important;
              align-items: stretch !important;
              border-left: 1px solid #333 !important;
              z-index: 1050;
              gap: 20px !important;
              padding: 20px !important;
            }
            /* Mobile menu button styles - better touch targets */
            .nav-links button {
              width: 100%;
              text-align: center;
              padding: 14px 12px !important;
              font-size: 16px !important;
            }
            .contact-btn {
              padding: 14px 22px !important;
              width: 100%;
              font-size: 16px !important;
            }
            /* Adjust phone button for mobile */
            .nav-links li:has(.nav-btn[style*="flex"]) button {
              justify-content: center;
            }
          }

          /* Tablet and small desktop adjustments (851px - 1100px) */
          @media (min-width: 851px) and (max-width: 1100px) {
            .nav-links {
              gap: 8px !important;
            }
            .nav-btn {
              padding: 6px 8px !important;
              font-size: 13px !important;
            }
            .contact-btn {
              padding: 8px 16px !important;
              font-size: 13px !important;
            }
          }
        `}
      </style>

      <nav
        className="nav-container"
        style={{
          position: "fixed",
          width: "100%",
          height: "80px",
          backgroundColor: "#000000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          padding: "0 68px",
          boxSizing: "border-box",
        }}
      >
        <div className="flex-justify-"></div>
        <img
          src={gpsLogo}
          alt="Logo"
          style={{ height: "45px", objectFit: "contain", maxWidth: "100%" }}
        />

        {/* Mobile Menu Toggle */}
        <div
          className={`menu-icon ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "6px",
            cursor: "pointer",
            zIndex: 1100,
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: "28px",
                height: "3px",
                background: "white",
                transition: "0.4s",
              }}
            />
          ))}
        </div>

        {/* Navigation Links */}
        <ul
          className="nav-links"
          style={{
            ...defaultNavLinksStyle,
            ...mobileTransformStyle,
          }}
        >
          <li>
            <button className="nav-btn" style={baseBtnStyle} onClick={handleNavClick}>
              Features
            </button>
          </li>
          <li>
            <button className="nav-btn" style={baseBtnStyle} onClick={handleNavClick}>
              Benefits
            </button>
          </li>
          <li>
            <button className="nav-btn" style={baseBtnStyle} onClick={handleNavClick}>
              Industries
            </button>
          </li>
          <li>
            <button className="nav-btn" style={baseBtnStyle} onClick={handleNavClick}>
              Devices
            </button>
          </li>
          <li>
            <button
              className="nav-btn"
              style={{
                ...baseBtnStyle,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "bold",
              }}
              onClick={handleNavClick}
            >
              <svg
                style={{ width: "16px", color: "#f97316" }}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 9876543210
            </button>
          </li>
          <li>
            <button
              className="contact-btn"
              style={{
                backgroundColor: "#e24800",
                color: "white",
                border: "none",
                padding: "10px 22px",
                cursor: "pointer",
                borderRadius: "6px",
                fontWeight: "600",
              }}
              onClick={handleNavClick}
            >
              Contact us
            </button>
          </li>
        </ul>
      </nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div style={{ height: "80px" }}></div>
    </>
  );
};