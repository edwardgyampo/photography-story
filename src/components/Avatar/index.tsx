import { Label } from "../Label"
import { Picture } from "../Picture"
import './index.css'

export const Avatar = ({ text, picture }: { text?: string, picture: string }) => {
    return <div className="Avatar">
        <Picture url={picture} />

        {text && <Label>{text}</Label>}
    </div>
}