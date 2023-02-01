import { Button, Link } from '@mui/material';
import { useState } from 'react';
import { data } from './data';
import './styles.scss';

const ChooseStack = () => {
  const [stack, setStack] = useState();

  const handleChooseStack = (child: any) => {
    console.log(child, 'fdvdf');
  };

  return (
    <div className="container">
      <h1>Choose your stack</h1>
      {data.map((item) => (
        <div key={item.title} className="data_grid">
          <div className="mainCard">
            <p>{item.title}</p>
          </div>
          <div className="button_group">
            {item.children.map((child) => (
              <Button
                key={child.title}
                onClick={() => handleChooseStack(child.title)}
                className="btn"
              >
                {child.title}
              </Button>
            ))}
          </div>
        </div>
      ))}
  <Link>Hey</Link>
    </div>
  );
};

export default ChooseStack;
