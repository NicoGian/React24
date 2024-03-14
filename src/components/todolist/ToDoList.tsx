import { useState } from "react"
import { ListItemAdder } from "./ListItemAdder"
import { isTemplateLiteral } from "typescript";

export default function ToDoList() {


    const [listItem, setListItem] = useState<string[]>([""])

    return <>

        <div>
            <ListItemAdder onSave={(stringa) => {
                let newItem = listItem.concat(stringa);
                setListItem(newItem)
            }} />
        </div>

        <br />
        <br />

        <div>
            {listItem.map(item => item ? <div> <button onClick={() => {
                let newItem = listItem.filter((itemRimosso) => itemRimosso !== item)
                setListItem(newItem);
            }}>X</button>
                {item}</div> : "")}
        </div>

    </>
}