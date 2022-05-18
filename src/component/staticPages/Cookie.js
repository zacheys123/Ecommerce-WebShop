import React from 'react'
import {CookieDiv,Divbutton} from '../../styled/MainWrapper'
function Cookie(props) {

  return (
    <div>
            <CookieDiv>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We as the Marketplace organisation value so much what our users and visitors acquire from us.Thus we through ours cookiess you are free to come back later and still enjoy what we have to offer.If you have read the terms and conditions of our Cookies click on Add Cookie</p>
      <Divbutton>
      <button style={{background:'transparent',color:'white'}} onClick={()=>props.dispatch('REMOVE_COOKIE')} className=''>Dont Accept Cookies</button>
      <button style={{background:'transparent',color:'white'}}  onClick={()=>props.dispatch('REMOVE_COOKIE')} className=''>Accept Cookies</button>
      </Divbutton>
      </CookieDiv>
      
    </div>
  )
}

export default Cookie
