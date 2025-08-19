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
    <div className="relative group flex items-center justify-center">
        <div className="border-none bg-none cursor-pointer flex gap-2 items-center">
            Success Stories
            <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180"></FaAngleDown>
        </div>

        <div className="
            hidden group-hover:flex absolute top-[102%] z-50 w-[135%] bg-white flex-col gap-1 shadow-xl border-t-[1px] border-black/2
        ">
            {success_stories.map((book)=>
                <Link to={book.link} className="w-full px-2 py-1 font-secondary text-md hover:bg-lighter-gold hover:font-semibold">
                    {book.title}
                </Link>
            )}
        </div>
    </div>
    );
}

export default NavbarDropdown;