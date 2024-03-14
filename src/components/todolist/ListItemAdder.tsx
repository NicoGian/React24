import { useState } from "react"

export function ListItemAdder(props: {
    
    readonly onSave: (stringa: string) => void

}

) {
    
    const {onSave} = props

    const [stringToDo, setStringToDo] = useState<string>("")

    return <>
        <input type="text" placeholder="To do" value={stringToDo} onChange={(stringa) => setStringToDo(stringa.target.value) }/>
        <button onClick={() => {
            onSave(stringToDo);
            console.log(stringToDo);
            setStringToDo("")
        }}>save</button>
    </>


}