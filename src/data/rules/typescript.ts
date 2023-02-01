export const TYPESCRIPT_RULES = [
  {
    title: "@types npm/yarn",
    description: "При установлении сторонних библиотек, вы должны обязательно установить package с поддержкой типами для TS, во избежание ошибок типизации.",
    badExample: `yarn add/npm install [package-name]`,
    goodExample: `yarn add/npm install @types/[package-name]`,
  },
  {
    title: "Variables",
    description: "Когда мы создаем переменные, мы должны объявить какого она типа.Чтобы, другой разработчик, понимал что происходит.",
    badExample: `const userExperience = 20;
const userSpecialization = "Front-End Developer";
    `,
    goodExample: `const userExperience: number = 20;
const userSpecialization: string = "Front-End Developer";
    `,
  },
  {
    title: "How to define Array in interfaces",
    description: `Как такого типа Массив, в TS не существует, но если вам надо типизировать массив, есть несколько вариантов синтаксиса.
1. При помощи ключевого слова Array<>, и уже внутрь <> мы прокидываем, из чего состоит наш массив.
Если это массив чисел, то Array<number>
2. Если так же наш массив состоит из чисел, мы можем написать number[].
Оба варианта верны, но лучше всего использовать, так как он короче в написании.`,
    goodExample: `interface IUser {
      id: string;
      name: string;
    }
    const users: IUser[] = [
      { id: "1", name: "Adam" },
      { id: "2", name: "Smith" }
    ];
    
    const users: any[] = [
      { id: "1", name: "Adam" },
      { id: "2", name: "Smith" }
    ];`,
  },
  {
    title: "Functions",
    description: `Тоже самое относится и для функций, разница в том, что фукнции могут принимать в себя аргументы,
    и мы должны их затипизировать, для более четкого понимания, с какими типами мы имеем дело, чтобы понимать какие методы мы можем использовать.`,
    badExample: `function handleSkills(skills) {
      return skills.toUpperCase();
    }
    `,
    goodExample: `function getUserProfile(fullName: string, ageOfExperience: number) {
      return {
        name: fullName,
        experienceCount: ageOfExperience
      };
    }
    `,
  },
  {
    title: "How to define Interface in React.FC",
    description: `Для типизации пропсов лучше всего объявить интерфейс,
и обязательно название любого интерфейса должно начинаться с заглавной буквы "I",
включать в себя название компонента или страницы и в конце должно присуствовать слово Props.`,
    badExample: `interface HeaderObject {
      id: string;
      name: string;
    }
    
    const Header = ({ id, name }: HeaderObject) => {
      return <div id={id}>{name}</div>;
    };
    `,
    goodExample: `interface IHeaderProps {
      id: string;
      name: string;
    }
    
    const Header = ({ id, name }: IHeaderProps) => {
      return <div id={id}>{name}</div>;
    };
    `,
  },
  {
    title: "How to define Interface for InitialValues",
    description: `Если у вас есть изначальное состояние, которому надо определить интерфейс, есть несколько правил которые нужно соблюдать. Во первых название которое должно быть маскимально понятным, несмотря на длину названия интерфейса, и оно так же должно объявляться с заглавной "I". Так же, если у нас есть вложенная цепочка интерфейсов, нужно каждый вложенный интерфейс объявить отдельно.
    `,
    badExample: `interface InitialValues {
      id: string;
      name: string;
      teacher: boolean;
      internship: {
        id: string;
        name: string;
        experienceCount: number;
      };
    }
    
    const values: InitialValues = {
      id: "1",
      name: "Adam",
      teacher: true,
      internship: {
        id: "2",
        name: "David",
        experienceCount: 1
      }
    };
    `,
    goodExample: `interface IIntern {
      id: string;
      name: string;
      experienceCount: number;
    }
    
    interface IInitialValuesTeacher {
      id: string;
      name: string;
      teacher: boolean;
      internship: IIntern;
    }
    
    const values: IInitialValuesTeacher = {
      id: "1",
      name: "Adam",
      teacher: true,
      internship: {
        id: "2",
        name: "David",
        experienceCount: 1
      }
    };
    `,
  },
  {
    title: "How to define Interface for State",
    description: `Если в вашем компоненте вы создали useState, верным решением будет его затипизировать изначально и задать ему начальное значение во избежания ошибок. Если вы создадите состояние, и зададите ему начальное значение пустой строки, то вы сможете изменить состояние только на этип тип, вы не сможете добавить туда Boolean значение или же Number, TS высветит вам сразу же ошибку. Если вы не знаете какое начальное состояние будет изначально, но вы знаете какое значение будет при setState, лучше всего будет передать вашему состоянию UnionType.`,
    badExample: `const [userData, setUserData] = useState(null);
// or
const [userData, setUserData] = useState();
// or ]
const [userData, setUserData] = useState<IUserData>(undefined);
`,
    goodExample: `interface IUserData {
      id: string;
      name: string;
      age: number;
    }
    const [userData, setUserData] = useState<IUserData | null>(null);
    // or
    const initialUserData: IUserData = {
      id: "",
      name: "",
      age: 1
    };
    const [userData, setUserData] = useState<IUserData>(initialUserData);
    `,
  },
  {
    title: "Setter Functions",
    description: `Сеттер функции можно передать как пропс, для объявления ее типа, вам нужно передать в SetStateAction, тип или интерфейс который мы сеттим в наше состояние.`,
    badExample: `const [state, setState] = useState<boolean>(false)
    interface IHeaderProps {
      setState: () => boolean;
    }
// or
    interface IHeaderProps {
      setState: (state: boolean) => void;
    }
    `,
    goodExample: `import { Dispatch, SetStateAction } from 'react';

    const [state, setState] = useState<boolean>(false)
      interface IHeaderProps {
        setState: Dispatch<SetStateAction<boolean>>;
      }
    `,
  },
  {
    title: "Event definition",
    description: `При обработчике событий, мы получаем event, TS будет требовать типизации.
    // Текстовый редактор в большинстве случаев будет подсказывать какой именно тип event-a произошел,
    // но если вам нужно будет самому проинициализировать тип,
    // то вам надо понимать на каком элементе было событие.
    // В основном все события, это события мыши, их надо типизировать при помощи React.MouseEvent<>.
    // Внутрь <>, мы должны передать на какой HTML тег мы повесили событие.
    `,
    badExample: `const [state, setState] = useState<boolean>(false)
    interface IHeaderProps {
      setState: () => boolean;
    }
// or
    interface IHeaderProps {
      setState: (state: boolean) => void;
    }
    `,
    goodExample: `import { Dispatch, SetStateAction } from 'react';

    const [state, setState] = useState<boolean>(false)
      interface IHeaderProps {
        setState: Dispatch<SetStateAction<boolean>>;
      }
    `,
  },
]