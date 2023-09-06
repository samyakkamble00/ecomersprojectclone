import React from 'react'

const Footer = () => {
  return (
    <div className='Footer' style={{display:'flex', justifyContent:'space-evenly',backgroundColor:'#08082b'}}>
      <div style={{lineHeight:'2',paddingTop:'30px',paddingBottom:'30px',color:'white'}}>
        <span style={{fontWeight:'bold'}}>Get to Know Us</span><br></br>About us<br></br>Careers<br></br>Press Releases<br></br>Amazon Science
      </div>
      <div style={{lineHeight:'2',paddingTop:'30px',paddingBottom:'30px',color:'white'}}>
       <span style={{fontWeight:'bold'}}>Connect with Us</span><br></br>Facebook <br></br> Twitter <br></br> Instagram
      </div>
      <div style={{lineHeight:'2',paddingTop:'30px',paddingBottom:'30px',color:'white'}}>
        <span style={{fontWeight:'bold'}}>Make money with Us</span><br></br>
        Sell on Amazon<br></br>Sell under Amazon Accelerator<br></br>Amezon Pay on Merchants<br></br> Advertise Your Products
      </div>
      <div style={{lineHeight:'2',paddingTop:'30px',paddingBottom:'30px',color:'white'}}>
        <span style={{fontWeight:'bold'}}>Let Us Help You</span><br></br>
        COVID-19 and Amezon <br></br> Your Account <br></br> Returns Center<br></br> 100% Purchase Protection
      </div>
    </div>
  )
}

export default Footer
