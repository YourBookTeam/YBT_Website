import { Link } from "react-router-dom";
import Logo from "../Logo";
import DiscoverButton from "./DiscoveryButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoChevronRight } from "react-icons/go";
import { HiMiniXMark } from "react-icons/hi2";
import { useState, useEffect } from 'react';

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;

        if(isOpen){
            body.classList.add("overflow-hidden");
            html.classList.add("overflow-hidden");
        }
        else{
            body.classList.remove("overflow-hidden");
            html.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    return (
        <>
            {!isOpen && (
                <div className="md:hidden flex px-8 py-4 justify-between items-center w-screen bg-white">
                    <div className="pr-12">
                        <Logo className="fill-gold"></Logo>
                    </div>
                    <RxHamburgerMenu className="text-gold size-10" onClick={toggleOpen}/>
                </div>
            )}


            {isOpen && (
                <div className="bg-white w-full h-full fixed top-0 right-0 z-50 overflow-hidden flex flex-col items-center py-4 gap-20">
                    <div className="md:hidden flex px-8 justify-between items-center w-screen bg-white">
                        <div className="pr-12">
                            <Logo className="fill-gold" toggleOpen={toggleOpen}></Logo>
                        </div>
                        <HiMiniXMark className="text-gold size-10" onClick={toggleOpen}/>
                    </div>
                    
                    <div className="flex flex-col gap-5">
                        <Link to="/about" onClick={toggleOpen} className="flex gap-1 items-center justify-center">
                            <p className="text-2xl font-bold">About</p>
                            <GoChevronRight className="mt-1 text-xl"/>
                        </Link>

                        <Link to="/services" onClick={toggleOpen} className="flex gap-1 items-center justify-center">
                            <p className="text-2xl font-bold">Services</p>
                            <GoChevronRight className="mt-1 text-xl"/>
                        </Link>

                        <Link smooth to="/#success-stories" onClick={toggleOpen} className="flex gap-1 items-center justify-center">
                            <p className="text-2xl font-bold">Success Stories</p>
                            <GoChevronRight className="mt-1 text-xl"/>
                        </Link>

                        <Link to="/faq" onClick={toggleOpen} className="flex gap-1 items-center justify-center">
                            <p className="text-2xl font-bold">FAQ</p>
                            <GoChevronRight className="mt-1 text-xl"/>
                        </Link>
                    </div>

                    <DiscoverButton toggleOpen={toggleOpen}/>
                </div>
            )}
        </>
    );
}

export default MobileNavbar;
