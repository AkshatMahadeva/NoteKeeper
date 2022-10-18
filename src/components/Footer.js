import React from "react";


function Footer(){
    const current_year = new Date().getFullYear()
        return <footer>
            <p>copyright @ {current_year} keeper.com</p>
        </footer>
}

export default Footer;