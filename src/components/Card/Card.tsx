import { Link } from 'react-router-dom';

import { ICardProps } from './interfaces';

import './styles.scss';

const Card = ({ icon, title, route }: ICardProps) => {
  return (
    <Link to={route} className="card_container">
      <img src={icon} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
};

export default Card;
