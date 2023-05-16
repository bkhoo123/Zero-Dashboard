import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import Table from './Table'
import axios from 'axios'

const ShipmentTracking = () => {
    const [tracking, setTracking] = useState(null)

    
    const fetchData = async () => {
        const payload = {
          tracking: "1Z0VE5970308924257",
          carrier: "UPS",
        };
      
        try {
          const response = await axios.post('/api/ShipmentTracking', payload);
          console.log(response.data);
          setTracking(response.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      

    useEffect(() => {
        fetchData();
    }, []);

    return (
    <div className='bg-slate-100 h-screen'>
        <Navbar />

        <div className="flex flex-row gap-12 p-8 ml-6 ">
            <button className="bg-cyan-700 text-white p-2 px-4 rounded-md font-semibold">Shipments</button>
            <button className="bg-cyan-700 text-white p-2 px-4 rounded-md font-semibold">Add Shipments</button>
        </div>
        
        <div className="border-t-2 border-slate-400"/>

        <Table />

    </div>
  )
}

export default ShipmentTracking