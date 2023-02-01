import { Route, Routes } from 'react-router';

import Main from './screens/Main/Main';
import Info from './screens/Info/Info';

import { data } from './data/technologies';

import './styles/global.scss';
import StructureSnippet from './screens/StructurePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/structure" element={<StructureSnippet />} />
      {data.map((tech) => (
        <Route key={tech.title} path={`/${tech.route}`} element={<Info />} />
      ))}
    </Routes>
  );
}

export default App;
