import { Picture } from '../Picture'
import './index.css'

export const Preview = ({ pictures }: { pictures: string[] }) => {
    return <div className="Preview">
        {pictures.map((picture, i) => <Picture key={i} url={picture}/>)}
    </div>
}