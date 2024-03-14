import { useState } from "react"

export function Display(props: {
    readonly number: number
    readonly colore: string
}) {

    const {number, colore} = props

    return <>
        <div style={{color: colore}}>{number}</div>
    </>
}