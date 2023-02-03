import { SyntheticEvent, useState } from 'react';

import { Grid, Tab, Tabs, Typography } from '@mui/material';

import Icon from './Icon';
import Structure from './Structure';
import CodeSnippet from './CodeSnippet';
import { ICode } from './interfaces';

const StructureSnippet = () => {
  const [code, setCode] = useState<ICode[]>([]);
  const [value, setValue] = useState<number>();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeTab = (
    e: SyntheticEvent<Element, Event>,
    code: ICode[],
    name: string,
    index: number
  ) => {
    const findedFile = code.find((item: any) => item.name === name);
    const findedFileIndex = findedFile && code.indexOf(findedFile);
    if (findedFileIndex === value) {
      setCode((prev) => prev.filter((item: any) => item.name !== name));
      if (findedFileIndex === 0) {
        handleChange(e, findedFileIndex);
      } else {
        handleChange(e, index - 1);
      }
    } else {
      handleChange(e, index);
    }
  };

  return (
    <Grid container style={{ overflow: 'hidden', height: 'calc(100% - 50px)' }}>
      <Grid item xs={2.5} padding={1} style={{overflow: 'hidden auto'}}>
        <Typography variant="body1" color="#ffffffd6">
          EXPLORER
        </Typography>
        <Structure setCode={setCode} handleChange={handleChange} code={code} />
      </Grid>
      <Grid item xs={9.5} className="folders-bar">
        <Tabs
          value={value}
          onChange={handleChange}
          className="tabs"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {code.map(({ name, icon }, index) => (
            <Tab
              key={name}
              label={name}
              icon={<Icon src={icon} alt={name} tabIcon />}
              iconPosition="start"
              onClick={(e) => handleChangeTab(e, code, name, index)}
            />
          ))}
        </Tabs>
        {value !== undefined && code && <CodeSnippet code={code[value]} />}
      </Grid>
    </Grid>
  );
};

export default StructureSnippet;
