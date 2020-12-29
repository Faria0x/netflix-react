import React from "react"
import "./Header.css"

export default ({black}) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="http://">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/100px-Netflix_2015_logo.svg.png" alt="" srcset=""/>
                </a>
            </div>
            <div className="header--user">
                <a href="http://">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="" srcset=""/>
                </a>
            </div>
        </header>
    )
}