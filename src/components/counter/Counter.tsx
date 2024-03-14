/* avere un counter (il numero viene preso dal componente "Display"), con sotto due pulsanti: 
"aumenta" o "diminuisci", se il cunter è maggiore di 5, verrà stampata una stringa a video, presa da app */

import { useState } from "react";
import { Display } from "./Display";

export function Counter(props: {

    readonly messaggio: string

}) {

    const [contatore, setConatore] = useState<number>(0);

    return <>
        <Display number={contatore} colore="Red" />
        <br />
        <button onClick={() =>
            setConatore(contatore + 1)
        }>aumenta</button>
        <button onClick={() =>
            setConatore(contatore - 1)
        }>diminuisci</button>
        <button onClick={() =>
            setConatore(contatore - contatore)
        }>azzera</button>
        <br />
        {contatore > 5 && <div>{props.messaggio}</div>}
    </>
}