import React from 'react'
import "./Content1.css"
import contentmain from '../assets/contentmain.jpg'
export default function Content1() {
    return (
        <>
            <div className='container'>
                <div className='row g-5'>
                    <div className='col-lg-8 '>
                        <img src={contentmain} className='contentMainimg'></img>
                        <div className='subc1'>
                            <div className='subc1h'>
                                <h2 className='subc1h2'>
                                    The Bringht Future of Web 3.0?
                                </h2>
                            </div>
                            <div>
                                <p className='subc1p'>
                                    We drive into the next evolution of the web that claims to put the power of the platform back into the hands of the people. But is it really fullfilling its promises?
                                </p>
                                <button className='subc1but'>
                                    {/* <h6 className='subc1buth6'>  */}
                                    READ MORE
                                    {/* </h6> */}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='sub2 col-lg-4'>
                        <h2 className='sub2h2'>New</h2>
                        <h5 className='sub2h5'>Hydrogen Vs Electric Cars</h5>
                        <p className='sub2p'>Will hydrogen-fueled cars ever catch up to<br></br> EV's?</p>
                        <h5 className='sub2h5'>The Downsides of AI Artistry</h5>
                        <p className='sub2p'>what are the possible adverse effect of<br></br> on demand AI image generation?</p>
                        <h5 className='sub2h5'>is VC Funding Drying Up?</h5>
                        <p className='sub2pp'>Private funding by VC frims is done 50%<br></br>YOY.we take a look at what that  means.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
