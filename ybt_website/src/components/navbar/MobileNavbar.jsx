import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Logo from "../Logo";
import DiscoverButton from "./DiscoveryButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoChevronRight } from "react-icons/go";
import { HiMiniXMark } from "react-icons/hi2";
import { useState } from 'react';

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return (
        <div className="md:hidden flex px-8 py-2 flex justify-between items-center w-screen bg-white">
            <div className="pr-12">
                <Logo className="fill-gold"></Logo>
            </div>

            <div>
                {!isOpen && (
                    <RxHamburgerMenu className="text-gold size-10" onClick={toggleOpen}/>
                )}

                {isOpen && (
                    <HiMiniXMark className="text-gold size-10" onClick={toggleOpen}/>
                )}

                {isOpen && (
                    <div className="bg-white w-full h-full absolute top-21 right-0 z-50 overflow-hidden flex flex-col items-center p-20 gap-30">
                        <div className="flex flex-col gap-5">
                            <Link to="/about" onClick={toggleOpen} className="flex gap-1 items-center justify-center">
                                <p className="text-2xl font-bold">About</p>
                                <GoChevronRight className="mt-1 text-xl"/>
                            </Link>

                            <Link to="/services" onClick={toggleOpen} className="flex gap-1 items-center justify-center">
                                <p className="text-2xl font-bold">Services</p>
                                <GoChevronRight className="mt-1 text-xl"/>
                            </Link>

                            <HashLink smooth to="/#success-stories" onClick={toggleOpen} className="flex gap-1 items-center justify-center">
                                <p className="text-2xl font-bold">Success Stories</p>
                                <GoChevronRight className="mt-1 text-xl"/>
                            </HashLink>

                            <Link to="/faq" onClick={toggleOpen} className="flex gap-1 items-center justify-center">
                                <p className="text-2xl font-bold">FAQ</p>
                                <GoChevronRight className="mt-1 text-xl"/>
                            </Link>
                        </div>

                        <DiscoverButton/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MobileNavbar;
