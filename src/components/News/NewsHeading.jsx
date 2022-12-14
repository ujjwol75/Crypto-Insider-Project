import React from 'react'

const NewsHeading = (props) => {
  return (
    <>
    <div style={{fontSize:'2rem', fontWeight:'bold', marginTop:'15px'}}>
        {props?.title}
    </div>
    <div style={{fontSize:'1rem', color:'gray', marginTop:'8px'}}>
    Purchases of Ethereum Continue Ahead of Landmark Merge
    </div>
    <div style={{fontSize:'12px', color:'gray', marginTop:'8px', marginTop:'8px'}}>
    BY <span style={{color:'blue', fontWeight:'bold', fontSize:'14px', marginLeft:'4px', marginRight:'4px'}}>NICHOLAS SAY</span>
      - {props?.created}
    </div>
    </>
  )
}

export default NewsHeading