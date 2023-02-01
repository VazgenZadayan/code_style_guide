import { Alert } from '@mui/material';
import { useState } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import { snippets } from './data/react-data';

const CodeSnippet = ({ code }: any) => {
  const [alert, setAlert] = useState(false);

  const handleCopy = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };

  return (
    code && (
      <div className='snippet'>
        {alert && (
          <Alert severity="info">Enjoy your code!</Alert>
        )}
        <CopyBlock
          text={snippets[code.snippet]}
          language={code.snippet.substr(code.snippet.length - 4) === 'scss' ? 'scss' :  "tsx"}
          wrapLines
          showLineNumbers={!!snippets[code.snippet]}
          theme={dracula}
          onCopy={handleCopy}
        />
      </div>
    )
  );
};

export default CodeSnippet;
