import { TreeItem, TreeView } from '@mui/lab';
import Icon from './Icon';

import { react } from '../../data/file-structure/react/react';
import { RenderTree } from '../../data/file-structure/interfaces';

import './styles.scss';
import { treeStyles } from './styles';

const Structure = ({ setCode, handleChange, code }: any) => {
  const renderTree = (nodes: RenderTree) => (
      <TreeItem
        key={nodes.id}
        sx={treeStyles}
        nodeId={nodes.id}
        label={nodes.name}
        endIcon={<Icon src={nodes.icon} />}
        expandIcon={<Icon src={nodes.expandIcon} alt={nodes.name} />}
        collapseIcon={<Icon src={nodes.collapseIcon} alt={nodes.name} />}
        onClick={(e) => {
          if (!nodes.children?.length) {
            setCode((prev: any) =>
              prev.find(({ name }: any) => name === nodes.name)
                ? prev
                : [...prev, { name: nodes.name, icon: nodes.icon, snippet: nodes.snippet }]
            );
            const findedFile = code.find(
              (item: any) => item.name === nodes.name
            );
            const findedFileIndex = code.indexOf(findedFile);
            if (findedFileIndex === -1) {
              handleChange(e, code.length);
            } else {
              handleChange(e, findedFileIndex);
            }
          }
        }}
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  return <TreeView defaultExpanded={['root']}>{renderTree(react)}</TreeView>;
};

export default Structure;
