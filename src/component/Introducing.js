import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi';

const Introducing = () => {
    return (
        <>
            <div className='intro' >
                <div className='introImg' >
                    <h6>PERSONALISED MATCH-MAKING SERVICE</h6>
                    <h3 className='my-2' >Introducing <span>  Exclusive  </span></h3>
                    <button>EXCLUSIVE</button>
                </div>

                <div className='introMeet' >
                    <div className='mgAu' >
                        <div className='d-flex align-items-center'>
                            <small className='fIcons' ><HiOutlineUserGroup /> </small>
                            <span className='mx-1' >Meet Your Relationship Manager</span>
                        </div>
                        <p>Connect with our highly experienced advisor who manages your profile.</p>
                    </div>

                    <div className='mgAu' >
                        <div className='d-flex align-items-center' >
                            <small className='fIcons'><HiOutlineUserGroup /></small>
                            <span className='mx-1' > Communicate your preferences</span>
                        </div>
                        <p>Connect with our highly experienced advisor who manages your profile.</p>
                    </div>

                    <div className='mgAu' >
                        <div className='d-flex align-items-center' >
                            <small className='fIcons' ><HiOutlineUserGroup /> </small>
                            <span className='fw600 mx-1' > Choose from handpicked profiles</span>
                        </div>
                        <p>Connect with our highly experienced advisor who manages your profile.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introducing
