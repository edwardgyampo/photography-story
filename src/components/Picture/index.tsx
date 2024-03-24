import './index.css'

export const Picture = (props: { url: string }) => {
    return <img className="Picture" src={props.url}></img>
};