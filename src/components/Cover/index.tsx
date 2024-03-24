import { Button } from "../Button"
import { Label } from "../Label"
import { Picture } from "../Picture"
import './index.css'

export const Cover = ({ picture }: { picture: string }) => {
    return <div className="Cover">
        <Label><span>featuring</span> Amanda Robins</Label>

        <Picture url={picture}/>

        <Button>view full gallery</Button>
    </div>
}