import React from 'react'
import about from "../../images/ABOUTchips.jpeg";

function AboutUs() {
  return (
    <div>
      <div className="w-[80%] justify-between lg:flex mx-auto rounded-xl hover:shadow-[#b49e9c] shadow-lg p-5 ">
      <div className=" p-5  h-full my-auto  text-sm lg:text-lg">
      <h1 className="font-bold lg:text-3xl text-center  text-xl text-[#012366] ">
                {" "}
                About
              </h1>
              <img src={about} alt="" className=' p-2 w-full shadow-lg shadow-zinc-400 rounded-xl mb-12'  style={{position:'relative',height:'400px', backgroundColor:'whitesmoke', top:'10px'}} />
              <p className="mt-2 " style={{textAlign:"justify"}}>
                Chhattisgarh Infotech Promotion Society (CHiPS) is the nodal
                agency and prime mover for propelling IT growth & implementation
                of the IT & e-Governance projects in the State of Chhattisgarh.
                CHiPS is involved in the end-to-end implementation of some mega
                IT Projects like, SDC, SSDG, SWAN, GIS, CHOi CE, e-Procurement
                etc. A professional approach is being adopted for the
                implementation of IT Projects using the services of e-governance
                experts and consultants from corporate and academia.
                Chhattisgarh State with wide-ranging socio-economic disparities
                is now witnessing the ongoing Information Technology (IT)
                revolution. Information and Communication Technology (ICT) is a
                particularly important medium for the state in reaching out and
                improving livelihoods specially for its overwhelming SC / ST
                population across 44% forest area, which had largely remained
                untouched by modern development. An overwhelming proportion of
                this population is dependent upon agriculture and forest for
                their basic livelihood. Despite significant bottlenecks of
                limited access to market related information, monsoon forecasts,
                government schemes, information on modern farming practices,
                agriculture and forest contribute significantly to the State’s
                income. ICT has the potential to significantly improve this
                contribution. In doing so, Government of Chhattisgarh seeks to
                create an IT environment in the state wherein investments in IT
                are not only encouraged but actively facilitated. We aim to
                achieve quality and excellence in state government services to
                citizens, state transactions with citizens and businesses, and
                internal state governmental operations/functions through the
                strategic deployment of information technologies. The State of
                Chhattisgarh recognizes the importance of Information and
                Communication Technology as a key enabler in its economic
                development and improving the quality of life. With a view to
                make Chhattisgarh an IT enabled state progressively, CHi PS has
                come up with the “Electronics, IT and ITeS Investment Policy of
                Chhattisgarh 2014 – 2019”.
              </p>
      </div>
      </div>
      <div className="w-[90%] justify-between lg:flex mx-auto  mt-20 mb-10 p-2">
            <div className=" h-1/2 my-auto text-sm lg:text-lg">
              <h1 className="font-bold  text-xl lg:text-3xl text-center text-[#012366]">
                {" "}
                Background
              </h1>
              <p className="m-3 " style={{textAlign:"justify"}}>
                The objective of <b>Chhattisgarh Center of Geoinformatics (CGCOG)</b> is insertion of GIS/ Geospatial technology in 
                Chhattisgarh State for effective planning, monitoring, management of natural resources, efforts optimization, 
                GIS capacity building among Departments and Development of Geo-Ecosystem.
                 It will help to optimize collection, collation, compilation and centralization of spatial data. This project will facilitate
                 Spatial Data Infrastructure (SDI) of Chhattisgarh State.
              </p>

    </div>
    </div>
    </div>
  )
}

export default AboutUs

