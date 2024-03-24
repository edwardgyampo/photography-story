import { PropsWithChildren } from "react"
import './index.css'

export const Label = ({ children }: PropsWithChildren) => {
    return <p className="Label">
        {children}
    </p>;
};