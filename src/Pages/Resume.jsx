import React from 'react'
import { FaFileDownload } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import { Link } from 'react-router-dom'
function Resume() {
  return (
    <div>
      <div style={{height:"100vh"}}>
        <h1 className='text-center mt-5'>Create an ATS Friendly resume in Minutes with AI</h1>
        <div className='container'>
          <div className='row mt-5'>
            <div className="col-lg-1"></div>
             <div className="col-lg-4 rounded shadow text-center p-5">
              <IoDocumentText className='fs-1 mb-3 text-primary'/>
              <h4>Add your details</h4>
              <p>Our AI will generate Skills and SUmmary</p>
              <h4>Step 1</h4>
             </div>
              <div className="col-lg-2"></div>
               <div className="col-lg-4 rounded shadow text-center p-5">
                <FaFileDownload className='fs-1 mb-3 text-danger'/>
                <h4>Download your resume</h4>
                <p>Download PDF and start applying</p>
                <h5>Step 2</h5>
               </div>
                <div className="col-lg-1"></div>
          </div>       
        </div>
        <div className='text-center mt-5'>
          <Link to={'/resume-details'} style={{backgroundColor:'#421c03'}} className='btn text-light mt-5 rounded'>LET'S START </Link>
        </div>    
      </div>
    </div>

  )
}

export default Resume