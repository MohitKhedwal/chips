import React from 'react'
// import Marquee from 'react-fast-marquee';

function Info() {
    const customStyle = {
        backgroundColor: 'rgb(255, 235, 233)',
      };
      const marqueeStyle = {
        display: 'flex', 
        justifyContent: 'flex-end', 
        width: '70%', 
        marginRight: '0', 
        overflow: 'hidden', 
        fontSize: '14px', 
        fontWeight: 'normal',
      };

  return (
    <div>
      <div style={customStyle} class="p-4 min-h-4 m-2 font-semibold flex">
        <div className="inline w-40 mr-0 text-xs hover:text-red-900">
            <a href='https://cgstate.gov.in/' target="_blank">Govt. of Chhattisgarh छत्तीसगढ़ सरकार  </a>
        </div>
        <div className="inline space-x-0 mr-2 w-60 text-xs hover:text-red-900">
            <a href='https://dst.gov.in/chhattisgarh' target="_blank">Department of Science and Technology विज्ञान एवं प्रौद्योगिकी विभाग</a>
        </div>
        {/* <div className="w-60 text-xs" style={marqueeStyle}>
            <Marquee speed={50}>Developed a web based system to search, view and download geo-refrenced digital khasra maps</Marquee>
        </div> */}
      </div>
    </div>
  )
}

export default Info