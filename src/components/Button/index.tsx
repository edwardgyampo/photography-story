import { PropsWithChildren } from "react"
import './index.css'

export const Button = (props: PropsWithChildren<{
    builtinProps?: React.HTMLAttributes<HTMLButtonElement>
}>) => {
    const { className, ...builtinPropsRemainder } = props.builtinProps ?? {};

    return <button {...builtinPropsRemainder}
        className={["Button", className].filter(c => c).join(' ')}>
        {props.children}
    </button>
}