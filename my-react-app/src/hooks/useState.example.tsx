import React, { useState } from "react";

/**
 * Un componente funzionale che dimostra l'uso dell'hook `useState`.
 *
 * Questo componente mantiene uno stato `count` e fornisce un pulsante per aggiornare
 * il `count` con un valore casuale tra 0 e 10 quando viene cliccato.
 *
 * @returns Un elemento JSX contenente un paragrafo che visualizza il conteggio corrente
 * e un pulsante per aggiornare il conteggio.
 */
export const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const [object, setObject] = useState({ a: 1, b: 2 });
  const [array, setArray] = useState([1, 2, 3]);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p>useState example for incremental number</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(10 * Math.random())}>Click me</button>

      <p>useState example for object mutation</p>
      <p>You clicked on {JSON.stringify(object)}</p>
      <button
        onClick={() =>
          setObject({
            a: 3,
            b: 4,
          })
        }
      >
        Click me
      </button>

      <p>useState example for array mutation - NOT WORKING</p>
      <p>You clicked on {JSON.stringify(array)}</p>
      <button
        onClick={() => {
          array.push(4);
        }}
      >
        Click me
      </button>

      <p>useState example for array mutation - WORKING</p>
      <p>You clicked on {JSON.stringify(array)}</p>
      <button
        onClick={() => {
          setArray([...array, 4]);
        }}
      >
        Click me
      </button>
    </div>
  );
};
