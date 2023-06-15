import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineUserGroup } from 'react-icons/hi';

const LandingPage = () => {
    return (
        <>
            <header className="header">
                <section className="Navbar">
                    <div className='d-flex justify-content-between' >
                        <div className='d-flex justify-content-between leftnav ' >
                            <div>
                                <span className='logo'>Durgesh</span>
                            </div>
                            <div className='browse' >
                                <span>BROWSE PROFILES BY <IoIosArrowDown /></span>
                            </div>
                            <div className='search'  >
                                <span >SEARCH <IoIosArrowDown /></span>
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
                <div>
                    <h1> Now, chat for free !</h1>
                    <span>Finding your perfect match just became easier </span>
                </div>
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
                            <h6>100% Manually Screened Profiles</h6>
                            <div class="microDiv bg_pink"></div>
                            <div className='linehei' >
                                <span>Search by location, community, profession & more from lakhs of active profiles</span>
                            </div>
                        </div>

                        <div>
                            <div className='bringIcon'>
                                <h1><HiOutlineUserGroup /></h1>
                            </div>
                            <h6>Verification by Personal Visit</h6>
                            <div class="microDiv bg_pink"></div>
                            <div className='linehei'>
                                <span>Special listing of profiles verified by our agents through personal visits</span>
                            </div>
                        </div>

                        <div>
                            <div className='bringIcon'>
                                <h1><HiOutlineUserGroup /></h1>
                            </div>
                            <h6>Control over Privacy</h6>
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
