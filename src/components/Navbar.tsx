import './Navbar.css'

const fullName = 'Karol Piotr Koniewicz';

const tabSections = [
  'Home',
  'About',
  'Projects',
  'Contact',
  'Calendar'
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="left">
          <img src="your-logo-url.png" alt="Your Logo" className="logo" />
          <span className="name">{fullName}</span>
        </div>
        <div className="right">
          <ul className="menu">
            {tabSections.map((tab, index) => (
              <li key={index}>
                <a href="#">{tab}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
