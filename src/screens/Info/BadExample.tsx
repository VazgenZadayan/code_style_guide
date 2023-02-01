import { CodeBlock, dracula } from 'react-code-blocks';
import { IExample } from './interfaces';
import './styles.scss';

const BadExample = ({ badExample }: IExample) => {
  if (!badExample) return null;
  return (
    <div className="badExample">
      <strong>Неправильно</strong>
      <CodeBlock
        text={badExample}
        language="tsx"
        wrapLines
        showLineNumbers
        theme={dracula}
      />
    </div>
  );
};

export default BadExample;
