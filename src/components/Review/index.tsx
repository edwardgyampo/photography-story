import { PropsWithChildren } from 'react'
import './index.css'
import { truncate } from '../Helper'
import { Avatar } from '../Avatar'

export const Review = (props: PropsWithChildren<{
    name: string,
    picture: string,
    brand: string,
    work: string,
    location: string,
    children: string
}>) => {
    return <div className="Review">
        <section className="Review__topSection">
            <Avatar picture={props.picture} />

            <div className="Review__tags">
                <p className="Review__name">{props.name}</p>
                <p className="Review__location">{props.location}</p>
                <p className="Review__work">{props.work}</p>
                <p className="Review__brand">{props.brand}</p>
            </div>
        </section>

        <section className="Review__bottomSection">
            <p className="Review__text">{truncate(props.children, { length: 300, omission: '...' })}</p>
        </section>
    </div>
}