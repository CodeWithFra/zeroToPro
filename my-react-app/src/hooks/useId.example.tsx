import React, { useId } from "react";

/**
 * Un componente funzionale che dimostra l'uso del hook `useId`.
 *
 * Questo componente genera un ID univoco utilizzando il hook `useId` e lo assegna
 * a un elemento `div`. L'ID viene anche visualizzato all'interno del `div`.
 *
 * @returns Un elemento `div` con un ID univoco e testo che visualizza l'ID.
 */
export const UseIdExample = () => {
  // Come posso generare un prefisso a scelta mia? https://react.dev/reference/react/useId#specifying-a-shared-prefix-for-all-generated-ids
  const id = useId();
  return <div id={id}>This is a div with id: {id}</div>;
};
