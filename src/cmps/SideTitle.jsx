import { useEffect } from "react"

export function SideTitle({title}) {

    useEffect(() => {
        console.log(title)
    }, [])

    return (
        <div className="side-title">
            {title}
        </div>
    )
}