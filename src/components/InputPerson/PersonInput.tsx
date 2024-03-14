/* creare un componente “PersonInput” che dovrà visualizzare:

- due input testuali ("firstName" e "lastName")
- un bottone "save"

- Quando il bottone viene cliccato, App.tsx dovrà essere modificato tramite la callback del salvataggio 
    e ricevere la persona salvata stampandola successivamente a video
- input della callback = {”name”: “<....>”, ”surnname”: “<....>”}
*/

import { useState } from "react"

interface Persona {
    firstName: string,
    lastName: string
}

export function PersonInput(props: {

    readonly onChange: (person: Persona) => void
}

) {

    const [persona, setPersona] = useState<Persona>({ firstName: "", lastName: "" })
    const { onChange } = props


    return <>

        <div>
            NAME: <input type="text" onChange={(ev) => {

                const newPersona: Persona = {
                    ...persona,
                    firstName: ev.target.value

                }

                setPersona(newPersona)
            }} />
        </div>
        <br />
        <div>
            SURNAME: <input type="text" onChange={(ev) => {

                const newPersona: Persona = {
                    ...persona,
                    lastName: ev.target.value

                }

                setPersona(newPersona)
            }} />
        </div>
        <br />
        <button onClick={() => {

            onChange(persona)
            console.log(persona);
        }

        }>save</button>

    </>
}