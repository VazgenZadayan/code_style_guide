export const REACT_RULES =[
  {
    title: "Destructuring",
    description: "Use Destructuring to unpack values from arrays, or properties from objects, into distinct variables.",
    badExample: `const Main = (props) => {
      const name = props.name;
      const age = props.age;
      return <h1>My name is {name}, I am {age} years old</h1>
    }
    export default Main;

    const arr = [1,2,3,4,5];
    const firstElement = arr[0];
    console.log(firstElement) // Output 1
`,
    goodExample: `const Main = ({ name, age }) => {
      return <h1>My name is {name}, I am {age} years old</h1>
    }
    export default Main

    const arr = [1,2,3,4,5];
    const [a,b, ...rest] = arr;
    console.log(a) // Output 1
    console.log(b) // Output 2
    console.log(rest) // Output [3,4,5]
    `,
  },
  {
    title: "Именование компонента",
    description: "Называйте файлы так же как и компоненты. Например, ReservationCard.jsx должен содержать внутри компонент ReservationCard. Однако корневые компоненты в директории должны лежать в файле index.jsx, и в этом случае название папки должно быть таким же, как название компонента:",
    badExample: `
    import Footer from './Footer/Footer';

    import Footer from './Footer/index';`,
    goodExample: `import Footer from './Footer'`,
  },
  {
    title: "Именование компонента высшего порядка",
    description: `Используйте сочетание имени компонента высшего порядка и имени переданного в него компонента как свойство displayName сгенерированного компонента. Например, из компонента высшего порядка withFoo(), которому передан компонент Bar, должен получаться компонент с displayName равным withFoo(Bar).

Почему? Свойство displayName может использоваться в инструментах разработчика или сообщениях об ошибках, и если оно ясно выражает связь между компонентами, это помогает понять, что происходит.`,
    badExample: `export default function withFoo(WrappedComponent) {
        return function WithFoo(props) {
            return <WrappedComponent {...props} foo />;
        }
    }`,
    goodExample: `export default function withFoo(WrappedComponent) {
      function WithFoo(props) {
        return <WrappedComponent {...props} foo />;
      }
    
      const wrappedComponentName = WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';
    
      WithFoo.displayName = withFoo(wrappedComponentName);
      return WithFoo;
    }`,
  },
  {
    title: "Кавычки",
    description: `Всегда используйте двойные кавычки (") для JSX-атрибутов, а одинарные кавычки (') для всего остального JS. eslint: jsx-quotes

Почему? Для стандартных HTML-атрибутов обычно используются двойные кавычки, а не одинарные, и JSX-атрибуты тоже следуют этому соглашению.`,
  },
  {
    title: "IIFE",
    description: "Если у Вас есть функция которая выполняет ассинхронный запрос и должна вызываться только в useEffect, то есть ее не нужно передавать на onClick или прочее, используйте данный метод",
    badExample: `const fetchPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const json = await response.json();
  setPosts(json);
}

useEffect(() => {
    fetchPosts();
  }
}, []);`,
    goodExample: `useEffect(() => {
      (async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const json = await response.json();
  
        setPosts(json);
      })();
    }, []);`,
  },
]