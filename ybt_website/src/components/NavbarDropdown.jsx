import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function NavbarDropdown() {
    const success_stories = 
    [
        {
            title: "Thirst",
            author: "H.W Terrence",
            link: "/success_stories/thirst"
        },

        {
            title: "Prompting Happiness",
            author: "Nimrod Vromen",
            link: "/success_stories/prompting_happiness"
        },

        {
            title: "Under The Floorboards",
            author: "John Kiss",
            link: "/success_stories/under_the_floorboards"
        },
    ]

    return (
    <div className="flex relative group">
        <div className="border-none bg-none cursor-pointer flex gap-2 items-center">
            Success Stories
            <FaAngleDown></FaAngleDown>
        </div>

        <div className="hidden group-hover:flex absolute top-full z-100 min-w-full bg-white px-2 py-1 mt-2 flex-col gap-1 shadow-md">
            {success_stories.map((book)=>
                <Link to={book.link}>
                    <b>{book.title} -</b> {book.author}
                </Link>
            )}
        </div>
    </div>
    );
}

export default NavbarDropdown;