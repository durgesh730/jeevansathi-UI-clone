import React from 'react'
import pic from '../images/Group_64_new.png'
import img from '../images/logo apple.png'

const MyApp = () => {
    return (
        <>
            <article>
                <div class="bg5 colrw disp-flex j_space-between h390 " >
                    <div class="wid36p pl55 pt28 pb55 fl">
                        <h3>
                            <div class="f14 pb4 cabin_bold opa60 ls175">STAY CONNECTED WITH</div>
                            <div class="f28 pb3 cabin_med">Jeevansathi Apps</div></h3>
                        <div class="pb20 f16 lh27 opa90">Access quick &amp; simple search, instant updates and a great user experience on your phone. Download our apps rated best in the online matrimony segment.</div>
                        <div class="disp-flex j_space-between wid90p pb19">
                            <div class="">
                                <a target="_blank" href="#"><div class="appsSprite apps1">
                                    <img src={img} alt='images' />
                                </div></a>
                            </div>
                            <div class="">
                                <a target="_blank" href="#"><div class="appsSprite apps2">
                                    <img src={img} alt='images' />
                                </div></a>
                            </div>
                        </div>
                        <div class="f16"><a href="#" className='textdeco' ><span class="cabin_med colrw">Click here </span></a><span class="opa70">to view more about Apps</span></div>
                    </div>
                    <div class="wid52p pt20 pos-rel">
                        <img id="grp64" class="pos_abs btm0"  src={pic} data-was-processed="true" />
                    </div>
                </div>
            </article>
        </>
    )
}

export default MyApp
