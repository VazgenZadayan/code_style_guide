import { CodeBlock, dracula } from 'react-code-blocks';
import { IExample } from './interfaces';
import './styles.scss';

const GoodExample = ({ goodExample }: IExample) => {
  if (!goodExample) return null;
  return (
    <div className="badExample">
      <strong>Правильно</strong>
      <CodeBlock
        text={goodExample}
        language="tsx"
        wrapLines
        showLineNumbers
        theme={dracula}
      />
    </div>
  );
};

export default GoodExample;
