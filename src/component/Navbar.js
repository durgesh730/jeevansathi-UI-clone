import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineUserGroup } from 'react-icons/hi';

const LandingPage = () => {

    const [dropdown, setdropdown] = useState(false);
    const [drop, setdrop] = useState(false);

    function handledropdown() {
        if (dropdown === false) {
            document.getElementById("profileOption").style.height = "fit-content";
            setdropdown(true);
        }
    }

    const handledropdown2 = () => {
        document.getElementById("profileOption").style.height = "0px";
        setdropdown(false);
    }

    function handledrop2() {
        if (drop === false) {
            document.getElementById("SearchOption").style.height = "fit-content";
            setdrop(true);
        }
    }

    const handledrop = () => {
        document.getElementById("SearchOption").style.height = "0px";
        setdrop(false);
    }

    return (
        <>
            <header className="header">
                <section className="Navbar">
                    <div className='d-flex justify-content-between' >
                        <div className='d-flex justify-content-between leftnav ' >
                            <div>
                                <span className='logo'>Durgesh</span>
                            </div>

                            <div onMouseLeave={handledropdown2} onMouseEnter={handledropdown} className='browse'>
                                <span className='arrow' >BROWSE PROFILES BY <IoIosArrowDown /></span>
                                <div className="profile-options" id="profileOption">
                                    <ul>
                                        <li>
                                            <a style={{ cursor: "pointer" }} to="/profiledetails">Durgesh</a>
                                        </li>

                                        <li>
                                            <a to="/help">Durgesh</a>
                                        </li>
                                        <li >
                                            <a style={{ cursor: "pointer" }}>Durgesh</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='search' onMouseLeave={handledrop} onMouseEnter={handledrop2}>
                                <span className='arrow'>SEARCH <IoIosArrowDown /></span>
                                <div className="search-options" id="SearchOption">
                                    <ul>
                                        <li>
                                            <a style={{ cursor: "pointer" }} to="/profiledetails">Durgesh</a>
                                        </li>

                                        <li>
                                            <a to="/help">Durgesh</a>
                                        </li>
                                        <li >
                                            <a style={{ cursor: "pointer" }}>Durgesh</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='help' >
                                <span  >HELP</span>
                            </div>
                        </div>

                        <div className='rightnav' >
                            <span>REGISTER</span>
                        </div>
                    </div>
                </section>
            </header>


            <div className='text-landing' >
                <h1> Now, chat for free !</h1>
                <span>Finding your perfect match just became easier </span>
            </div>

            <div className='bring' >
                <div className='bringpadding' >

                    <div className='opefive' >
                        <span>MORE THAN 20 YEARS OF</span>
                    </div>
                    <h4>Bringing People <span> Together </span></h4>

                    <div className='together' >
                        <div>
                            <div className='bringIcon'>
                                <h1><HiOutlineUserGroup /></h1>
                            </div>
                            <h6 className='my-1' >100% Manually Screened Profiles</h6>
                            <div class="microDiv bg_pink"></div>
                            <div className='linehei' >
                                <span>Search by location, community, profession & more from lakhs of active profiles</span>
                            </div>
                        </div>

                        <div>
                            <div className='bringIcon'>
                                <h1><HiOutlineUserGroup /></h1>
                            </div>
                            <h6 className='my-1' >Verification by Personal Visit</h6>
                            <div class="microDiv bg_pink"></div>
                            <div className='linehei'>
                                <span>Special listing of profiles verified by our agents through personal visits</span>
                            </div>
                        </div>

                        <div>
                            <div className='bringIcon'>
                                <h1><HiOutlineUserGroup /></h1>
                            </div>
                            <h6 className='my-1' >Control over Privacy</h6>
                            <div class="microDiv bg_pink"></div>
                            <div className='linehei'  >
                                <span>Restrict unwanted access to contact details & photos/videos</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
