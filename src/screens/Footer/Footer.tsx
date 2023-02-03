import { useLocation } from 'react-router';
import './styles.scss';
const Footer = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className={location.pathname === '/structure' ? 'footer dark' : 'footer'}>
      <div className="links">
        <p>
          Developed by
          <span>
            <a
              href="https://vazgenzadayan.github.io/portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Vazgen Zadayan
            </a>
          </span>
        </p>
        <p>
          Powered by
          <span>
            <a href="https://aimit.company/" target="_blank" rel="noreferrer">
              AimIT
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
