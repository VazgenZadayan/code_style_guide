/* eslint-disable no-useless-escape */
export const snippets: any = {
  'components.Example.tsx': `
import { SUBJECT } from './constants/constants';
import { IExampleProps } from './constants/types';
import useExample from './useExample';

const Example = ({ title }: IExampleProps) => {
  const { handleChange, value } = useExample();
  return (
    <div>
      <h1>{title}</h1>
      <p>{SUBJECT.desc}</p>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export const ExampleLogin = () => <h1>Example login</h1>;

export default Example;
`,
  'components.Example.module.scss':  ``,
  'components.useExample.ts': `
  import { ChangeEvent, useState } from 'react';

const useExample = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setValue(value);

  return {
    handleChange,
    value,
  };
};

export default useExample;
`,
  'components.constants.ts': `
  //static information should be created by enum
export enum USER_EXAMPLE_ROLES {
  admin = 'Admin',
  user = 'User',
}

export enum SUBJECT {
  desc = 'description',
}
`,
  'components.types.ts': `
  export interface IExampleProps {
    title?: string;
  }
  `,
  'components.validation.ts': `
  //here should be written validation schema

export const validation = {};
`,
'hooks.useDebounce.ts': `
import { useEffect, useState } from 'react';

const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<any>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
`,
'pages.Example.tsx': `
import useExample from './useExample';

const Example = () => {
  const { handleClick, value } = useExample();
  return <div onClick={handleClick}>{value}</div>;
};

export default Example;
`,
'pages.Example.module.scss': ``,
'pages.useExample.ts': `
import { useState } from 'react';

const useExample = () => {
  const [value, setValue] = useState<string>('');
  const handleClick = () => {
    setValue('start');
  };

  return { handleClick, value };
};

export default useExample;
`,
'services.axios.ts': `
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { errorLogger } from '../utils/devHelper';
import { deleteToken, getToken } from '../utils/storage';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const interceptor = (baseUrl: string | undefined) => {
  const newAxios: AxiosInstance = axios.create({
    baseURL: baseUrl,
  });
  newAxios.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    if (config && config.headers) {
      config.headers.Authorization = 'Bearer token';
    }
    return config;
  });
  newAxios.interceptors.response.use(
    response => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    error => {
      if (error.response.status === 401) {
        window.location.pathname = '/login';
        deleteToken();
      }
      errorLogger(error);
      return Promise.reject(error);
    }
  );
  return newAxios;
};
const api: AxiosInstance = interceptor(API_BASE_URL);
export default api;
`,
'services.example.ts': ``,
'store.hooks.ts': `
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from './store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

`,
'store.store.ts': `
import { configureStore } from '@reduxjs/toolkit';

import exampleSlice from './exampleSlice/example';

export const store = configureStore({
  reducer: {
    example: exampleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
`,
'store.example.ts': `
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { IExample } from './interfaces';

export const initialState: IExample = {
  value: 0,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = exampleSlice.actions;

export const selectExample = (state: RootState) => state.example.value;

export default exampleSlice.reducer;
`,
'store.interfaces.ts': `
export interface IExample {
  value: number;
}
`,
'store.selector.ts': `
import { RootState } from '../store';

export const selectValue = (state: RootState) => state.example.value;
`,
'styles._mixins.scss': `
// Font Size to rem
@use "sass:math";
@mixin fontRem($size, $weight: 400, $lineHeight: initial) {
  font-size: math.div($size, 16) + rem;
  font-weight: $weight;
  @if ($lineHeight == initial) {
    line-height: $lineHeight;
  } @else {
    line-height: math.div($lineHeight, $size);
  }
}
// Font Size to rem end

@function str-replace($string, $search, $replace: "") {
  $index: str-index($string, $search);

  @if $index {
    @return str-slice($string, 1, $index - 1) + $replace +
      str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
  }

  @return $string;
}

@mixin font-face($name, $path, $weight: null, $style: null, $exts: eot woff2 woff ttf svg) {
  $src: null;

  $extmods: (
    eot: "?",
    svg: "#" + str-replace($name, " ", "_"),
  );

  $formats: (
    otf: "opentype",
    ttf: "truetype",
  );

  @each $ext in $exts {
    $extmod: if(map-has-key($extmods, $ext), $ext + map-get($extmods, $ext), $ext);
    $format: if(map-has-key($formats, $ext), map-get($formats, $ext), $ext);
    $src: append($src, url(quote($path + "." + $extmod)) format(quote($format)), comma);
  }

  @font-face {
    font-family: quote($name);
    font-style: $style;
    font-weight: $weight;
    src: $src;
  }
}
// FONT FACE END
// text shortign
@mixin textShorten($numLines: 1) {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @supports (-webkit-line-clamp: $numLines) {
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: $numLines;
    -webkit-box-orient: vertical;
  }
}
// text shortign end

// flex with childs
@mixin flexRow($distance, $count: 1, $align: stretch) {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: $align;
  margin-left:  - math.div($distance, 2) + px;
  margin-right: - math.div($distance, 2) + px;
  > [class*="col_"] {
    flex: 0 0 math.div(100%, $count);
    max-width: math.div(100%, $count);
    padding-left: math.div($distance, 2) + px;
    padding-right: math.div($distance, 2) + px;
  }
}
@mixin RowItems($distance, $align: stretch) {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: $align;
  margin-left:  - math.div($distance, 2) + px;
  margin-right: - math.div($distance, 2) + px;
  > [class*="col_"] {
    padding-left: math.div($distance, 2) + px;
    padding-right: math.div($distance, 2) + px;
  }
}



// flex with childs

// Flex alignment
@mixin flex-column {
  display: flex;
  flex-direction: column;
}
@mixin d-flex {
  display: flex;
  flex-wrap: wrap;
}
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

@mixin flex-center-column {
  @include flex-center;
  flex-direction: column;
}

@mixin flex-center-vert {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

@mixin flex-center-horiz {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
// Flex alignment end

// absolute positing
@mixin absoluteCenter($position) {
  position: absolute;
  @if $position == "vertical" {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  } @else if $position == "horizontal" {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translate(-50%);
  } @else if $position == "both" {
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
// absolute positing end
// Button Nulled
@mixin buttonNulled {
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
// Button Nulled end
// Border Arrow
@mixin arrow($direction: down, $size: 5px, $color: #555) {
  width: 0;
  height: 0;
  @if ($direction == left) {
    border-top: $size solid transparent;
    border-bottom: $size solid transparent;
    border-right: $size solid $color;
  } @else if ($direction == right) {
    border-top: $size solid transparent;
    border-bottom: $size solid transparent;
    border-left: $size solid $color;
  } @else if ($direction == down) {
    border-left: $size solid transparent;
    border-right: $size solid transparent;
    border-top: $size solid $color;
  } @else {
    border-left: $size solid transparent;
    border-right: $size solid transparent;
    border-bottom: $size solid $color;
  }
}
// Border Arrow end
`,
'styles.global.scss': `
html,
body {
    height: 100%;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    font-size: 1rem;
    line-height: 24px;
}
* {
    box-sizing: border-box;
}

*::after,
*::before {
    box-sizing: border-box;
}

::-webkit-file-upload-button {
    appearance: button;
    -webkit-appearance: button;
    font: inherit;
}

img,
picture,
video,
canvas {
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    overflow-wrap: break-word;
    hyphens: auto;
    margin: 0;
}

button,
input,
select,
label {
    font-family: inherit;
    outline: none;
}

label {
    display: block;
}

button {
    cursor: pointer;
}

[type="button"],
[type="reset"],
[type="submit"] {
    appearance: buttom;
    -webkit-appearance: button;
}

hr {
    overflow: visible;
}

fieldset {
    padding: 0.35em 0.75em 0.625em;
}

legend {
    box-sizing: border-box;
    color: inherit;
    white-space: normal;
}

#root {
    height: 100%;
}
`,
'ui.Button.tsx': `
import React from 'react';
import { Button as AntButton } from 'antd';
import clsx from 'clsx';

import { IButtonProps } from './constants/types';

import styles from './Button.module.scss';

const Button: React.FC<IButtonProps> = ({ type = 'primary', onClick, children, ...props }) => {
  return (
    <div className={clsx(styles.button)}>
      <AntButton type={type} onClick={onClick} {...props}>
        {children}
      </AntButton>
    </div>
  );
};

export default Button;
`,
'ui.types.ts': `
import { ReactNode } from 'react';

type TButtonTypes = 'primary' | 'link' | 'text' | 'ghost' | 'default' | 'dashed';
type TButtonSizes = 'large' | 'middle' | 'small';
type TButtonShapes = 'default' | 'circle' | 'round';
type TButtonHtmlTypes = 'button' | 'submit' | 'reset';

export interface IButtonProps {
  type: TButtonTypes;
  size: TButtonSizes;
  shape: TButtonShapes;
  htmlType: TButtonHtmlTypes;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean | { delay: number };
  icon?: ReactNode;
}
`,
'ui.Button.module.scss': ``,
'utils.regexp.ts': `
export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
`,
'utils.dates.ts': `
export const monday = 'monday';
export const year = '2023';
`,
'utils.storage.ts': `
type TToken = string | null;

export const getToken = (): TToken => {
  return localStorage.getItem('token');
};

export const deleteToken = (): void => {
  localStorage.removeItem('token');
};
`,
'App.tsx': `
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router from '../src/components/routes/Router';

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
};

export default App;
`,
'index.tsx': `
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/store';
import App from './App';

import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
`,
}