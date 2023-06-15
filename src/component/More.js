import React from 'react'
import pic1 from '../images/match-hour.svg'
import pic2 from '../images/video-profile.svg'
import pic3 from '../images/voice-call.svg'
import Find from './Find'

const More = () => {
    return (
        <>
            <div className='mauto mainwid'>
                <div className='mainShadow mb48 mainwid' >
                    <section class="FeaturesSection">
                        <div class="FeaturesSection__Body">
                            <header class="FeaturesSection__Header">
                                <h5 class="FeaturesSection__SubTitle">
                                    Meet From Home
                                </h5>
                                <h2 class="FeaturesSection__Title">
                                    Impress them Over the  <span class="text-pink">Distance</span>
                                </h2>
                            </header>
                            <div class="FeaturesSection__List">
                                <a href="#milan-samaroh" class="FeaturesSection__List__Feature FeaturesSection__List__Feature--active">
                                    <h3 class="FeaturesSection__List__Feature__Header">
                                        Jeevansathi Match Hour
                                    </h3>
                                    <p class="FeaturesSection__List__Feature__Description">
                                        Register to join an online event to connect with members of
                                        your community in a short time
                                    </p>
                                </a>
                                <a href="#voice-and-video-calling" class="FeaturesSection__List__Feature">
                                    <h3 class="FeaturesSection__List__Feature__Header">
                                        Voice &amp; Video Calling
                                    </h3>
                                    <p class="FeaturesSection__List__Feature__Description">
                                        Enjoy secure conversations using our voice &amp; video calling
                                        services without revealing your number
                                    </p>
                                </a>
                                <a href="#video-profiles" class="FeaturesSection__List__Feature">
                                    <h3 class="FeaturesSection__List__Feature__Header">
                                        Introducing Video Profiles
                                    </h3>
                                    <p class="FeaturesSection__List__Feature__Description">
                                        Stand out amongst others and engage faster! Introduce yourself
                                        by adding a video to your profile
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div class="FeaturesSection__Images">
                            <div id="milan-samaroh" class="FeaturesSection__Images__Wrapper">
                                <img loading="lazy" src={pic1} alt="Match Hour - feature promotion mockup" class="FeaturesSection__Images__Wrapper__Image" />
                            </div>
                            <div id="voice-and-video-calling" class="FeaturesSection__Images__Wrapper">
                                <img loading="lazy" src={pic3} alt="Voice &amp; Video Calling - feature promotion mockup" class="FeaturesSection__Images__Wrapper__Image" />
                            </div>
                            <div id="video-profiles" class="FeaturesSection__Images__Wrapper">
                                <img loading="lazy" src={pic2} alt="Video Profile - feature promotion mockup" class="FeaturesSection__Images__Wrapper__Image" />
                            </div>
                        </div>
                    </section>

                    <Find />

                    <article>
                        <div class="txtc bg15 padInnerDiv">
                            <h3>
                                <div class="f28 cabin_sem_bold"><span class="color5">Membership </span>Plans</div>
                            </h3>
                            <div class="fcolorgrey f16 cabin_reg pb40 lh24">Upgrade your plan as per your customized requirements. With a paid membership, you can seamlessly connect with your prospects and get more responses. Here are some key benefits:</div>

                            <div class="_m230 disp-flex a_items_center j_center">
                                <div class="w286 txtl freeDivPadding z3 freeDivShadow bg-white brrad-4" >
                                    <div class="microDiv bg_pink"></div>
                                    <div class="pb20 f28 pt8 cabin_reg">Free</div>
                                    <div class="pb18 disp-flex a_items_center"><div class="materialIcons pr5 pinktick w24 h24 cursp"></div>Browse Profiles</div>
                                    <div class="pb18 disp-flex a_items_center"><div class="materialIcons pr5 pinktick w24 h24 cursp"></div>Shortlist &amp; Send Interest</div>
                                    <div class="pb18 disp-flex a_items_center"><div class="materialIcons pr5 pinktick w24 h24 cursp"></div>Message and chat with unlimited users</div>
                                    <span class="fcolorgreylight">
                                        <div class="pb18 disp-flex a_items_center"><div class="materialIcons pr5 greyCross w24 h24 cursp"></div>Get up to 3x more matches daily</div>
                                        <div class="pb18 disp-flex a_items_center"><div class="materialIcons pr5 greyCross w24 h24 cursp"></div>Unlock access to advanced search</div>
                                        <div class="pb18 disp-flex a_items_center"><div class="materialIcons pr5 greyCross w24 h24 cursp"></div>View contact details</div>
                                        <div class="pb18 disp-flex a_items_center"><div class="materialIcons pr5 greyCross w24 h24 cursp"></div>Make unlimited voice and video calls</div>
                                    </span>
                                    <a href="/profile/registration_new.php?source=gnb_plans" className='textdeco' ><div class="txtc freeRegister mr10 hgt35 disp-flex textdeco j_center a_items_center brrad-3 cabin_bold colrw" id="register_mem" data-qa="register_freeMem">Register Free</div></a>
                                </div>

                                <div class="bg_pink colrw txtl z3 paidDivPadding  brrad-4 w329 pinkDivShadow">
                                    <div class="microDiv bg-white"></div>
                                    <div class="pb21 f28 pt8 cabin_reg">Paid</div>
                                    <div class="pb27 disp-flex a_items_center"><div class="materialIcons pr5 whiteTick w24 h24 cursp"></div>Browse Profiles</div>
                                    <div class="pb27 disp-flex a_items_center"><div class="materialIcons pr5 whiteTick w24 h24 cursp"></div>Shortlist &amp; Send Interest</div>
                                    <div class="pb27 disp-flex a_items_center"><div class="materialIcons pr5 whiteTick w24 h24 cursp"></div>Message and chat with unlimited users</div>
                                    <div class="pb27 disp-flex a_items_center"><div class="materialIcons pr5 whiteTick w24 h24 cursp"></div>Get up to 3x more matches daily</div>
                                    <div class="pb27 disp-flex a_items_center"><div class="materialIcons pr5 whiteTick w24 h24 cursp"></div>Unlock access to advanced search</div>
                                    <div class="pb27 disp-flex a_items_center"><div class="materialIcons pr5 whiteTick w24 h24 cursp"></div>View contact details</div>
                                    <div class="pb27 disp-flex a_items_center"><div class="materialIcons pr5 whiteTick w24 h24 cursp"></div>Make unlimited voice and video calls</div>
                                    <a href="/membership/jspc" className='textdeco' >
                                        <div class=" color5 wid90p hgt35 disp-flex j_center a_items_center brrad-3 cabin_sem_bold  " id="browse_mem" data-qa="mem_plans">Browse Membership Plans</div></a>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div class="bg5 h232 z1"></div>
                    
                </div>
            </div>
        </>
    )
}

export default More
