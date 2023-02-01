import Card from '../../components/Card/Card';

import { dataCards } from '../../data/technologies';

import './styles.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="main_bg">
        <h1>
          <span>{`{ `}</span>
          CODE STYLE GUIDE
          <span>{` }`}</span>
        </h1>
        <p>
          All code should look like it was written by one person, no matter how
          many people were involved in writing it.
        </p>
      </div>
      <div className="cards">
        {dataCards.map((tech) => (
          <Card
            key={tech.title}
            title={tech.title}
            icon={tech.icon}
            route={tech.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
