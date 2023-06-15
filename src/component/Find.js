import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi';

const Find = () => {
    return (
        <>
            <div className='find' >
                <div className='findpadding' >

                    <div className='opefive' >
                        <span>THREE SIMPLE STEPS TO</span>
                    </div>
                    <h4>Find the <span> One for You </span></h4>

                    <div className='findAll' >
                        <div>
                            <div className='findIcons'>
                                <h1><HiOutlineUserGroup /></h1>
                            </div>
                            <small> <span> 01. </span> Define Your Partner Preferences</small>
                        </div>

                        <div>
                            <div className='findIcons'>
                                <h1><HiOutlineUserGroup /></h1>
                            </div>
                            <small> <span> 02. </span> Browse Profiles</small>
                        </div>

                        <div>
                            <div className='findIcons'>
                                <h1><HiOutlineUserGroup /></h1>
                            </div>
                            <small><span> 03. </span> Send Interests & Connect</small>
                        </div>

                    </div>

                    <div className='btn-start text-center' >
                        <button>Get Start</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Find
