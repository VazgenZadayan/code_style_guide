import { RenderTree } from "../interfaces";

export const react: RenderTree = {
  id: 'root',
  name: 'src',
  expandIcon: 'some/src.svg',
  collapseIcon: 'some/src_opened.svg',
  children: [
    {
      id: '1',
      name: 'components',
      expandIcon: 'some/components.svg',
      collapseIcon: 'some/components_opened.svg',
      children: [
        {
          id: '11',
          name: 'example',
          expandIcon: 'some/components.svg',
          collapseIcon: 'some/components_opened.svg',
          children: [
            {
              id: '111',
              name: 'constants',
              expandIcon: 'some/components.svg',
              collapseIcon: 'some/components_opened.svg',
              children: [
                { id: '1111', name: 'constants.ts', snippet: 'components.constants.ts', icon: 'some/ts.svg'},
                { id: '11111', name: 'types.ts', snippet: 'components.types.ts', icon: 'some/ts.svg' },
                { id: '1111111', name: 'validation.ts', snippet: 'components.validation.ts', icon: 'some/ts.svg' },
              ],
            },
            { id: '11111111', name: 'Example.module.scss', snippet: 'components.Example.module.scss', icon: 'some/scss.svg',  },
            { id: '111111111', name: 'Example.tsx', snippet: 'components.Example.tsx', icon: 'some/react.svg',},
            { id: '1111111111', name: 'useExample.ts', snippet: 'components.useExample.ts', icon: 'some/react.svg',},

          ],
        },
      ],
    },
    {
      id: '2',
      name: 'hooks',
      expandIcon: 'some/components.svg',
      collapseIcon: 'some/components_opened.svg',
      children: [{ id: '22', name: 'useDebounce.ts', snippet: 'hooks.useDebounce.ts', icon: 'some/ts.svg', }],
    },
    {
      id: '3',
      name: 'pages',
      expandIcon: 'some/components.svg',
      collapseIcon: 'some/components_opened.svg',
      children: [
        {
          id: '33',
          name: 'example',
          expandIcon: 'some/components.svg',
          collapseIcon: 'some/components_opened.svg',
          children: [
            { id: '333', name: 'Example.module.scss', snippet: 'pages.Example.module.scss', icon: 'some/scss.svg', },
            { id: '3333', name: 'Example.tsx', snippet: 'pages.Example.tsx', icon: 'some/react.svg',},
            { id: '33333', name: 'useExample.ts', snippet: 'pages.useExample.ts', icon: 'some/ts.svg', },
          ],
        },
      ],
    },
    {
      id: '4',
      name: 'services',
      expandIcon: 'some/services.svg',
      collapseIcon: 'some/services_opened.svg',
      children: [
        {
          id: '44',
          name: 'requests',
          expandIcon: 'some/components.svg',
          collapseIcon: 'some/components_opened.svg',
          children: [{ id: '444', name: 'example.ts', snippet: 'services.example.ts', icon: 'some/ts.svg' }],
        },
        { id: '4444', name: 'axios.ts', snippet: 'services.axios.ts', icon: 'some/ts.svg', },
      ],
    },
    {
      id: '5',
      name: 'store',
      expandIcon: 'some/components.svg',
      collapseIcon: 'some/components_opened.svg',
      children: [
        { id: '55', name: 'store.ts', snippet: 'store.store.ts', icon: 'some/ts.svg', },
        { id: '555', name: 'hooks.ts', snippet: 'store.hooks.ts', icon: 'some/ts.svg', },
        {
          id: '5555',
          name: 'exampleSlice',
          expandIcon: 'some/components.svg',
          collapseIcon: 'some/components_opened.svg',
          children: [
            { id: '55555', name: 'example.ts', snippet: 'store.example.ts', icon: 'some/ts.svg', },
            { id: '555555', name: 'interfaces.ts', snippet: 'store.interfaces.ts', icon: 'some/ts.svg', },
            { id: '5555555', name: 'selector.ts', snippet: 'store.selector.ts', icon: 'some/ts.svg',},
          ],
        },
      ],
    },
    {
      id: '6',
      name: 'styles',
      expandIcon: 'some/folder_css.svg',
      collapseIcon: 'some/folder_css_opened.svg',
      children: [
        { id: '66', name: '_mixins.scss', snippet: 'styles._mixins.scss', icon: 'some/scss.svg', },
        { id: '666', name: 'global.scss', snippet: 'styles.global.scss', icon: 'some/scss.svg',},
      ],
    },
    {
      id: '7',
      name: 'ui',
      expandIcon: 'some/components.svg',
      collapseIcon: 'some/components_opened.svg',
      children: [
        {
          id: '77',
          name: 'button',
          expandIcon: 'some/components.svg',
          collapseIcon: 'some/components_opened.svg',
          children: [
            { id: '777', name: 'Button.tsx', snippet: 'ui.Button.tsx', icon: 'some/react.svg', },
            { id: '7777', name: 'Button.module.scss',  snippet: 'ui.Button.module.scss', icon: 'some/scss.svg', },
            {
              id: '77777',
              name: 'constants',
              expandIcon: 'some/components.svg',
              collapseIcon: 'some/components_opened.svg',
              children: [
                { id: '7777777', name: 'types.ts', snippet: 'ui.types.ts', icon: 'some/ts.svg' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '8',
      name: 'utils',
      expandIcon: 'some/components.svg',
      collapseIcon: 'some/components_opened.svg',
      children: [
        { id: '88', name: 'dates.ts', snippet: 'utils.dates.ts', icon: 'some/ts.svg',},
        { id: '888', name: 'regexp.ts', snippet: 'utils.regexp.ts', icon: 'some/ts.svg', },
        { id: '8888', name: 'storage.ts', snippet: 'utils.storage.ts', icon: 'some/ts.svg',},
      ],
    },
    { id: '9', name: 'App.tsx', snippet: 'App.tsx', icon: 'some/react.svg',},
    { id: '99', name: 'index.tsx', snippet: 'index.tsx', icon: 'some/react.svg', },
  ],
};