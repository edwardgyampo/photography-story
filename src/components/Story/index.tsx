import { Avatar } from "../Avatar"
import { Button } from "../Button"
import { Cover } from "../Cover"
import { Preview } from "../Preview"
import { Review } from "../Review"
import './index.css'

export const Story = () => {

    return <section className="Story">
        <header>
            <h1 className="Story__title">the dream of a young adult</h1>
        </header>

        <div className="Story__content">
            <Cover picture="https://otagungu.sirv.com/Example/Images/pexels-photo-2744193.jpeg" />

            <section id="narration">
                <h3 className="Story__caption">dreams don't lie</h3>

                <p className="Story__description">
                    In the quiet of the night, there's a special dream that belongs to a young adult.
                    It's like a beautiful story made of wishes and big ideas.
                    This dream is full of hope and a feeling like anything is possible.
                    It's a journey where you can imagine amazing things and chase after what you want most in life.
                    Sometimes it feels a bit confusing, but that's okay.
                    The dream helps you figure things out and makes you feel excited about what's ahead.
                    It's like having a magical map that guides you to where you want to go.
                    In the dream of a young adult, there are moments of doubt and fear, but they learn to be brave and keep going.
                    And as they journey through their dreams, they discover that the most important thing is to believe in themselves and never give up, no matter what.
                </p>

                <section className="Story__contributors">
                    <h4 className="Story__caption">project contributors</h4>

                    <div className="Avatars">
                        <Avatar
                            picture="https://otagungu.sirv.com/Example/Images/pexels-photo-220453.jpeg"
                            text="David Douglas" />

                        <Avatar
                            picture="https://otagungu.sirv.com/Example/Images/pexels-photo-220453.jpeg"
                            text="David Douglas" />

                        <Avatar
                            picture="https://otagungu.sirv.com/Example/Images/pexels-photo-220453.jpeg"
                            text="David Douglas" />
                    </div>
                </section>
            </section>
        </div>

        <section id="reviews">
            <h2 className="Story__caption">what some pro<span>s</span> had to say</h2>

            <div className="Story__reviews">
                <Review
                    name="Lucas Moone"
                    brand="Roboflix"
                    location="Tokyo"
                    work="Robotics Engineer"
                    picture="https://otagungu.sirv.com/Example/Images/pexels-photo-2379005.jpeg">
                    Your talent behind the lens is truly remarkable!
                    The way you've portrayed 'The Dream of a Young Adult' through your photography is both captivating and inspiring.
                    Each image is a testament to your ability to evoke emotion and spark imagination.
                </Review>

                <Review
                    name="Lucas Moone"
                    brand="Roboflix"
                    location="Tokyo"
                    work="Robotics Engineer"
                    picture="https://otagungu.sirv.com/Example/Images/pexels-photo-2379005.jpeg">
                    Your photography skillfully captures the essence of 'The Dream of a Young Adult,' weaving together elements of fantasy and reality with such finesse.
                    Each photo feels like a glimpse into a world where anything is possible, igniting a sense of wonder and possibility in all who behold it.
                </Review>

                <Review
                    name="Lucas Moone"
                    brand="Roboflix"
                    location="Tokyo"
                    work="Robotics Engineer"
                    picture="https://otagungu.sirv.com/Example/Images/pexels-photo-2379005.jpeg">
                    Wow, your photography brings 'The Dream of a Young Adult' to life in such a vivid and enchanting way.
                    The way you play with light and shadow creates a dreamlike atmosphere that draws viewers in, leaving them spellbound by the beauty of your work.
                </Review>
            </div>
        </section>

        <h2 className="Story__caption">gallery preview</h2>

        <Preview pictures={[
            "https://otagungu.sirv.com/Example/Images/pexels-photo-1758144.jpeg",
            "https://otagungu.sirv.com/Example/Images/pexels-photo-3975955.jpeg",
            "https://otagungu.sirv.com/Example/Images/pexels-photo-1681010.jpeg",
            "https://otagungu.sirv.com/Example/Images/pexels-photo-838875.jpeg",
            "https://otagungu.sirv.com/Example/Images/pexels-photo-3674248.jpeg",
            "https://otagungu.sirv.com/Example/Images/pexels-photo-769733.jpeg",
            "https://otagungu.sirv.com/Example/Images/pexels-photo-1882309.jpeg",
            "https://otagungu.sirv.com/Example/Images/pexels-photo-3014856.jpeg",
        ]} />

        <footer>
            <h2 className="Story__caption">the dream of a young adult</h2>

            <Button>view full gallery</Button>
        </footer>
    </section>
}