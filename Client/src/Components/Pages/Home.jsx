import React from "react";
import Sliderr from "../Container/Sliderr";
import Card from "../Container/Card";
import Footer from "./Footer";

function Home() {
  return (
// Updated upstream
 
   
  <>
     <div className='w-full {styles.nunitoFont} h-full '>
      <Sliderr/>
     <section className='mt-10 mb-10 w-[80%] mx-auto'>
      {/* <h1 className='text-center font-bold text-gray-500 text-4xl'>Chhattisgarh GEO Serivces </h1> */}
      <h1 className="text-center font-bold text-[#012366] text-4xl">
              Chhattisgarh GEO Serivces{" "}
            </h1><br/>
      <div>
      <ul className=" text-2xl">
                  <li>
                    {" "}
                <b>Why You Should Visit CH𝓲PS GIS!</b>
                  </li>
                  </ul>
        <p class="mb-4" style={{textAlign: 'justify'}}>
                The newly formed State of Chhattisgarh is endowed with natural resources like forest, mineral resources, flora and fauna, wide range of crops and cropping patterns, and rich cultural diversity. The population of 
                Chhattisgarh is divided in <b>27 districts with 149 tehsils and 20379 revenue villages </b>. The multiplicity of natural resources, 
                their uses has competing and conflicts interests that may arise between the various stakeholders makes compulsory to 
                enable planning at multiple levels.
                Government of Chhattisgarh through its nodal agency, Chhattisgarh InfoTech & biotech Promotion Society (CH𝓲PS) an autonomous organization under theDepartment of Information Technology, in consultation with Department of Panchyat and Rural Development (P&RD), and Department of Land Revenue (LRD), has generated Natural Resources Database (NRD), Infrastructure Resource Database and Cadastral Database for the State of Chhattisgarh on various scale from 1:50000 scale for natural resource, 1:4000 for rural cadastral maps to 1:1000 for urban amenities using IRS LISS-III/IV and CARTOSET data made available by NRSA(ISRO). These databases of Natural Resources (NRD), Socio-economics, Infrastructure and other collateral information has helped in project planning, implementation and impact assessment. The land parcel layer in this vector data base has been integrated with the tenancy records of B-1 and Khasra. The delivery of these maps and land records has been made possible in the state for the first time. The secured printing of maps and handling of vector required for capturing mutation data has been done for the first time in the country.
</p>
    
  
</div>
<div className="w-full h-full flex flex-wrap justify-evenly  p-3 ">
<div class="relative flex flex-col mt-6 text-black-700 bg-white shadow-md bg-clip-border shadow-[#000000] rounded-xl w-96">
    <div class="p-6">
      <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Natural Resources Database for the state of Chhattisgarh
      </h5>
      <p class="mb-4" style={{textAlign: 'justify'}}>
      Generation of thematic layers on 1:50,000 scale as per NRIS standards for the entire state viz. Drainage and Watershed, Surface Water body, Slope and Aspect, Soils, Mineral Resources, Land use/Land cover, Wasteland map, Transport Network, Settlement Location and Village Boundary, Rainfall and Climate (Data from IMD), Socio Economic Data Base as per NRIS, Census data and other socio economic data. The digital database generated was as per the standards confirming NRIS codification and also confirming to standard GIS format. The layers of lithology, structure, geomorphology and groundwater 
      potential were also integrated with the database and made available to Drinking Water Mission.
      </p>
    </div>

  </div>
  <div class="relative flex flex-col mt-6 text-black-700 bg-white shadow-md bg-clip-border shadow-[#000000] rounded-xl w-96">
    <div class="p-6">
      <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Geo-referencing of Village maps
      </h5>
      <p class="mb-4" style={{textAlign: 'justify'}}>
      Input maps were taken from land record department, and scanning, digitization and registration of cadastral maps, submission of check plots for quality check to LRD, geo-referencing of cadastral maps, submission of sheet-wise plots on 1:4000 scale, generation of tehsil-wise/revenue circle-wise mosaic of cadastral maps. This was subsequently overlaid on Satellite data indented covering the entire study area from National Data Centre, NRSA, Hyderabad. Geo-referencing of satellite data, Generation of enhanced color composites using IRS PAN & LISS-III data was done to identify geographic details up to parcel level.
      </p>
    </div>
  </div>
  
</div>
</section>
{/* <Footer/> */}
      </div>

  </>

  );
{/* >>>>>>> 5a9ca97f843a69121b4049fd5004bda7adc404bc */}
}

export default Home;
