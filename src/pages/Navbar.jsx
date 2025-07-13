import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Ekosharr.jpg';
import './Navbar.css';

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'mk', label: 'Македонски', flag: '🇲🇰' },
  { code: 'sq', label: 'Shqip', flag: '🇦🇱' },
];

export default function Navbar() {
  const [selectedLang, setSelectedLang] = useState('en');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setSelectedLang(e.target.value);
    // Here you would also update the language globally using i18n or context
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Eko Sharr Logo" style={styles.logoImage} />
        <span style={styles.logoText}>Eko Sharr</span>
      </div>

      <ul className={menuOpen ? 'navLinks mobile-active' : 'navLinks'}>
        <li><Link to="/" className="navLink" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/products" className="navLink" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/contact" className="navLink" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/about" className="navLink" onClick={closeMenu}>About</Link></li>
      </ul>

      <select
        value={selectedLang}
        onChange={handleLanguageChange}
        style={styles.languageSelector}
        aria-label="Select Language"
      >
        {languages.map(({ code, flag }) => (
          <option key={code} value={code}>
            {flag}
          </option>
        ))}
      </select>

      <button
        style={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed',        // Sticky at top
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
    flexWrap: 'wrap',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: '1 1 auto',
  },
  logoImage: {
    height: '36px',
    width: '36px',
    objectFit: 'contain',
    borderRadius: '8px', // removes white box look
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'green',
  },
  languageSelector: {
    fontSize: '24px',
    padding: '4px 8px',
    borderRadius: '6px',
    border: '1.5px solid #4CAF50',
    backgroundColor: 'white',
    color: '#333',
    cursor: 'pointer',
    width: '60px',
    textAlign: 'center',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
  },
  menuButton: {
    fontSize: '28px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'none',
  },
};
