import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FiMapPin, FiMail } from "react-icons/fi";
import logo from "./RozWebsite2.SVG";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerGrid}>
        {/* Quick Links + Terms */}
        <div style={styles.footerCol}>
          <div style={styles.column}>
            <h3 style={styles.title}>Quick Links</h3>
            <ul style={styles.list}>
              <a href="about">About Us</a>
              <a href="services">Services</a>
              <a href="careers">Careers</a>
              <a href="terms">FAQ</a>
            </ul>
          </div>
          <div style={styles.bottomLeft}>
            <a href="terms">Terms of Use and Policies</a>
          </div>
        </div>
        {/* Contact Info + Social Icons */}
        <div style={styles.footerCol}>
          <div style={styles.column}>
            <h3 style={styles.title}>Contact Info</h3>
            <div style={styles.contactBlock}>
              <div style={styles.text}>
                <FiMapPin style={styles.icon} />
                <div style={styles.contactText}>
                  3214 Silverado Dr
                  <br />
                  Los Angeles, CA 90039
                </div>
              </div>
              <div style={styles.text}>
                <FiMail style={styles.icon} />
                <div style={styles.contactText}>info@yourbookteam.com</div>
              </div>
            </div>
          </div>
          <div style={styles.bottomCenter}>
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>
        {/* Logo + Copyright */}
        <div style={styles.footerCol}>
          <div style={styles.column}>
            <div style={styles.logoBox}>
              <img src={logo} alt="YourBookTeam Logo" style={styles.logo} />
            </div>
          </div>
          <div style={styles.bottomRight}>
            <span>
              Copyright © 2025 YourBookTeam
              <br />
              All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Inline styles
const styles = {
  footer: {
    padding: "50px 20px 0 20px",
    display: "flex",
    flexDirection: "column",
    fontFamily: "sans-serif",
  },
  footerGrid: {
    display: "flex",
    flexWrap: "wrap",
  },
  footerCol: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: "250px",
    minHeight: "500px",
  },
  column: {
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "30px",
  },
  list: {
    lineHeight: "1.1",
    fontSize: "1.3rem",
  },
  text: {
    fontSize: "1.1rem",
    margin: "18px 0",
    display: "flex",
    lineHeight: "1.3",
  },
  icon: {
    fontSize: "1.4rem",
  },
  logoBox: {
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    marginTop: "-120px",
    width: "480px",
    height: "480px",
  },
  bottomLeft: {
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "10px",
  },
  bottomCenter: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    fontSize: "1.5rem",
    marginTop: "auto",
    marginBottom: "20px",
  },
  bottomRight: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "10px",
  },
  contactBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contactText: {
    minWidth: "230px",
  },
};

export default Footer;
