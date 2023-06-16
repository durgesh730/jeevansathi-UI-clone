import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi';

const Introducing = () => {
    return (
        <>
            <div className='intro' >
                <div className='introImg' >
                    <h6>PERSONALISED MATCH-MAKING SERVICE</h6>
                    <h3>Introducing <span>  Exclusive  </span></h3>
                    <button>EXCLUSIVE</button>
                </div>

                <div className='introMeet' >
                    <div className='mgAu' >
                        <small className='fIcons' ><HiOutlineUserGroup /> </small>
                        <span>Meet Your Relationship Manager</span>
                        <p>Connect with our highly experienced advisor who manages your profile.</p>
                    </div>

                    <div className='mgAu' >
                        <small className='fIcons' ><HiOutlineUserGroup /></small>
                        <span> Communicate your preferences</span>
                        <p>Connect with our highly experienced advisor who manages your profile.</p>
                    </div>

                    <div className='mgAu' >
                        <small className='fIcons' ><HiOutlineUserGroup /> </small>
                        <span className='fw600' > Choose from handpicked profiles</span>
                        <p>Connect with our highly experienced advisor who manages your profile.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introducing
