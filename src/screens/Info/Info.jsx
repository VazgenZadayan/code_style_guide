import { useLocation } from 'react-router';

import { data } from '../../data/technologies';

import './styles.scss';
import BadExample from './BadExample';
import GoodExample from './GoodExample';

const Info = () => {
  const location = useLocation();
  const element = data.find((tech) => tech.route === location.pathname);
  return (
    <div className="info">
      <div className="icon_container">
        <img src={element.icon} alt={element.title} />
        <h2>{element.title}</h2>
      </div>
      <div className="rules">
        {element.rules.map((rule, index) => (
          <div key={rule.title}>
            <h3 className="title">{`#${index + 1}. ${rule.title}`}</h3>
            <pre className="description">{rule.description}</pre>
            <div className="examples">
              <BadExample badExample={rule.badExample}/>
              <GoodExample goodExample={rule.goodExample}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
