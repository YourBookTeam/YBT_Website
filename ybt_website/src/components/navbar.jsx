function NavBar(){

    return (
        <nav>
            <div class="left-nav">
                <div>Logo</div>
            </div>

            <div className="mid-nav">
                <div>About</div>
                <div>Services</div>
                <button class="success-button">
                    Success Stories
                    <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div>Careers</div>
                <div>FAQ</div>
            </div>
            
            <div class="right-nav">
                <button class="book-button">
                    Book A Free Consultation
                </button>
            </div>
        </nav>
    ); 
}


export default NavBar;