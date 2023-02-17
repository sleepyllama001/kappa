import "./Footer.css";
import React from "react";

//
export default function Footer() {
    return (
        <div className="footer_box">
            <div className="footer_content">
                <p className="footer_text" id="privacy_policy">Privacy Policy</p>
                <p className="footer_text">Terms & Conditions</p>
                <div className="About Us">
                    <h2 className="footer_text" id="about_us">About Us</h2>
                    <p className="footer_text" id="email">Email: eatmyass@gmail.com</p>
                </div>
            </div>
        </div>
    )
}