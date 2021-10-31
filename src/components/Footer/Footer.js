import React from "react";
import "./StylesFooter.css"
import { Link } from "@material-ui/core";
import { GitHub, Email, LinkedIn } from "@material-ui/icons";

const Footer = () => {
    return (
        <footer>
            <h3 style={{ textAlign: "center", fontSize: "25px" }}>Explore More About Me</h3>
            <div className="footerContent">
                <ul className="socials">
                    <li>
                        <Link href="mailto:Crodriguezescamilla3@gmail.com">
                            <Email
                                style={{ fontSize: "32px" }}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/carlos-r-escamilla/">
                            <LinkedIn
                                style={{ fontSize: "32px" }}
                            />
                        </Link>
                    </li>
                </ul>
                <h3 style={{ textAlign: "center" }}>FitnessTracker Backend</h3>
                <ul className="socials">
                    <li>
                        <Link href="https://github.com/carlos-escamilla33/FitnessTrackerBackend">
                            <GitHub
                                style={{ fontSize: "32px" }}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="bottomFooter">
                <p>copyright &copy;2021. designed by <span>Carlos Escamilla</span></p>
            </div>
        </footer>
    )
}

export default Footer;



{/* <div className={classes.container}>
            <div className={classes.footer}>
                <Link href="https://github.com/carlos-escamilla33">
                    <GitHub style={{ fontSize: '32px' }} />
                </Link>
                <Link href="mailto:Crodriguezescamilla3@gmail.com">
                    <Email style={{ fontSize: '32px' }} />
                </Link>
                <Link href="https://www.linkedin.com/in/carlos-r-escamilla/">
                    <LinkedIn style={{ fontSize: '32px' }} />
                </Link>
            </div>
        </div> */}