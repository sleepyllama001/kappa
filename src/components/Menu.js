import "./Menu.css";
import React from "react";
import { useState } from "react";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Creates the Nav bar! Includes the Manganato logo, Home,
// Recently Updated, Trending, Login, Register, and Night Mode Buttons
export default function Menu() {

    const [theme, setTheme] = useState('light');
    const Darkmodez = () => {
        console.log("kappa");
        if (theme === 'light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    };

    const [loginOpen, setLoginOpen] = useState(false);

    function openLogin() {
        ChangeZIndex('0')
        setLoginOpen(true);
    }

    function closeLogin() {
        ChangeZIndex('1')
        setLoginOpen(false)
    }

    function afterOpenLogin() {}

    const [registerOpen, setRegisterOpen] = useState(false);

    function openRegister() {
        ChangeZIndex('0')
        setRegisterOpen(true);
    }

    function closeRegister() {
        ChangeZIndex('1')
        setRegisterOpen(false)
    }

    function afterRegister() {}

    return (
        <div className="menu">
            <div className="logo">
                <a className="horizontal_logo" href={process.env.PUBLIC_URL}>
                    <embed className="M" type={"image/png"} src={"img/icons/manganato_logo.png"}/>
                        <div className="Manga"><h1>Manga</h1></div>
                        <div className="Nato"><h1>Nato</h1></div>
                </a>

            </div>
            <div className="menu_bar">
                <div className="border_box">
                    <ul className="horizontal">
                        <li key={'0'}><a id="Home" href={process.env.PUBLIC_URL}>Home</a></li>
                        <li key={'1'}><a id="Recent" href={process.env.PUBLIC_URL + "/Trending"}>Recently Updated</a></li>
                        <li key={'2'}><a id="Trending" href={process.env.PUBLIC_URL + "/Trending"}>Trending</a></li>
                    </ul>
                </div>
            </div>

            <button className="loginRegister" onClick={openLogin}>
                <div className="login_register">
                    <h2>Login</h2>
                </div>
            </button>
            <Modal
                className={"ModalBody"}
                isOpen={loginOpen}
                onAfterOpen={afterOpenLogin}
                onRequestClose={closeLogin}
                style={customStyles}
                contentLabel="Example Modal">
                <div className={"ModalContent"}>
                    <div>
                        <h1 className={"Heading"} style={{color:'#072448'}}>Log In to your Account!</h1>
                        <div style={{display:'flex', justifyContent:'center', maxHeight:'30vh'}}>
                            <img src="img/profile_pics/makima.png"
                                 alt="Avatar" className="avatar"/>
                        </div>

                        <div className="loginRegisterContainer">
                            <div style={{paddingBottom:'1vh'}}>
                                <label><b style={{color:'#072448', fontFamily:'Patrick Hand'}}>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required/>
                            </div>

                            <div style={{paddingBottom:'1vh'}}>
                                <label><b style={{color:'#072448', fontFamily:'Patrick Hand'}}>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required/>
                            </div>

                            <div id={"Captchar"} style={{display:'flex', justifyContent:'row', paddingBottom:'1vh'}}>
                                <img src={'img/icons/captchar.jpg'} alt={"Captchar image"} style={{maxHeight:'5vh', paddingRight:'1vw'}}/>
                                <input type="text" placeholder="Captchar" required/>
                            </div>

                            <button type="submit" className={"loginRegisterButton"}>Sign In</button>
                            <div style={{display:"flex", alignContent:"center"}}>
                                <input type="checkbox" checked="checked"/> <b style={{color:'#072448', fontFamily:'Patrick Hand'}}>Remember me</b>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundColor:"#f1f1f1", display:"flex", justifyContent:"space-between", height:'12vh', alignItems:'center'}}>
                        <div><button className="cancelBtn" onClick={closeLogin}>Cancel</button></div>
                        <span id="psw" style={{color:'#072448', fontFamily:'Patrick Hand'}}>Forgot <a href={"#"}>password?</a></span>
                    </div>
                </div>
            </Modal>

            <button className="loginRegister" onClick={openRegister}>
                <div className="login_register">
                    <h2>Register</h2>
                </div>
            </button>
            <Modal
                className={"ModalBody"}
                isOpen={registerOpen}
                onAfterOpen={afterRegister}
                onRequestClose={closeRegister}
                style={customStyles}
                contentLabel="Example Modal">
                <div className={"ModalContent"}>
                    <div>
                        <h1 className={"Heading"} style={{color:'#072448'}}>Register</h1>
                        <div style={{display:'flex', justifyContent:'center', maxHeight:'15vh'}}>
                            <img src="img/profile_pics/luffy.jpg"
                                 alt="Avatar" className="avatar"/>
                        </div>

                        <div className="loginRegisterContainer">
                            <div style={{paddingBottom:'1vh'}}>
                                <label><b style={{color:'#072448', fontFamily:'Patrick Hand'}}>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required/>
                            </div>

                            <div style={{paddingBottom:'1vh'}}>
                                <label><b style={{color:'#072448', fontFamily:'Patrick Hand'}}>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required/>
                            </div>

                            <div style={{paddingBottom:'1vh'}}>
                                <label><b style={{color:'#072448', fontFamily:'Patrick Hand'}}>Display Name</b></label>
                                <input type="text" placeholder="Enter Username" required/>
                            </div>

                            <div style={{paddingBottom:'1vh'}}>
                                <label><b style={{color:'#072448', fontFamily:'Patrick Hand'}}>Email To Recover Password</b></label>
                                <input type="text" placeholder="Enter Username" required/>
                            </div>

                            <div id={"Captchar"} style={{display:'flex', justifyContent:'row', paddingBottom:'1vh'}}>
                                <img src={'img/icons/captchar.jpg'} alt={"Captchar image"} style={{maxHeight:'5vh', paddingRight:'1vw'}}/>
                                <input type="text" placeholder="Captchar" required/>
                            </div>

                            <button type="submit" className={"loginRegisterButton"}>Register</button>
                        </div>
                    </div>

                    <div style={{backgroundColor:"#f1f1f1", display:"flex", justifyContent:"center", height:'12vh', alignItems:'center'}}>
                        <div><button className="cancelBtn" style={{marginLeft:'0'}} onClick={closeLogin}>Cancel</button></div>
                    </div>
                </div>
            </Modal>

            <div className="padding">
                <a id="night-mode">
                    <div className="night_mode" onClick={() => {Darkmodez()}}>
                        <embed className="moon" type="image/png" src={"img/icons/crescent.png"}/>
                            <h2>Night Mode</h2>
                    </div>
                </a>
            </div>

        </div>
    )
}

function ChangeZIndex(zIndex) {
    const right = document.getElementsByClassName("padding_right_arrow")
    // turn the collection into an array
    const rightElements = Array.from(right);

    // loop through the collection of elements
    // and style each element
    rightElements.forEach((element) => {
        element.style.zIndex = zIndex;
    });

    const left = document.getElementsByClassName("padding_left_arrow")
    const leftElements = Array.from(left);
    leftElements.forEach((element) => {
        element.style.zIndex = zIndex;
    })

    const mangaCover = document.getElementsByClassName("padding_manga_cover")
    const mangaCoverElements = Array.from(mangaCover);
    mangaCoverElements.forEach((element) => {
        element.style.zIndex = zIndex;
    })

    const content = document.getElementsByClassName("padding")
    const contentElements = Array.from(content);
    contentElements.forEach((element) => {
        element.style.zIndex = zIndex;
    })
}