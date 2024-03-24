import { useMemo } from "react"
import "./index.css"

export const Footer = () => {
    return <section id="footer" className="footer">
        <span>
            © {useMemo(() => new Date(Date.now()).getFullYear(), [])}
        </span>

        <span>&nbsp;created by&nbsp;</span>

        <a target="_blank" href="https://www.linkedin.com/in/edward-gyampo-b3a68318a">
            Edward Gyampo
        </a>
    </section>
}