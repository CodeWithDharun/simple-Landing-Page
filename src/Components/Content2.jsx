import React from 'react'
import './Content2.css'
import multimg1 from '../assets/multimg1.jpg'
import multimg2 from '../assets/multimg2.jpg'
import multimg3 from '../assets/multimg3.jpg'
export default function Content2() {
    return (
        <>
            <div className='multicont container '>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='sub-multi'>
                            <img className='sub-multi-img' src={multimg1}></img>
                            <div className='multi-div'>
                                <h2 className='multi-h1'>01</h2>
                                <h5 className='multi-h5'>Lorem ipsum dolor sit </h5>
                                <p className='multi-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='sub-multi'>
                            <img className='sub-multi-img' src={multimg2}></img>
                            <div className='multi-div'>
                                <h2 className='multi-h1'>02</h2>
                                <h5 className='multi-h5'>Lorem ipsum dolor sit </h5>
                                <p className='multi-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>  <div className='col-lg-4 col-md-6 col-sm-12'>
                        <div className='sub-multi'>
                            <img className='sub-multi-img' src={multimg3}></img>
                            <div className='multi-div'>
                                <h2 className='multi-h1'>03</h2>
                                <h5 className='multi-h5'>Lorem ipsum dolor sit </h5>
                                <p className='multi-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
