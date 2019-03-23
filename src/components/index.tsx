import * as React from 'react';
import { renderToString } from "react-dom/server";

export const App: React.FC<{}> = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Hello Typescript React</h1>
      <span>{ count }</span>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  )
}

export const AppString: string = renderToString(<App />);


