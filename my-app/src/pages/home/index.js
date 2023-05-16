import React, {useState, useEffect} from 'react'
import Whack from '@/components/Whack'
import ShipmentTracking from '@/components/ShipmentTracking'
import SidePanel from '@/components/SidePanel'

const HomePage = () => {
    const [activePanel, setActivePanel] = useState("Shipment Tracking")

    const Panels = {
        "Whack A Mole": <Whack />,
        "Shipment Tracking": <ShipmentTracking />,
    
    }

    return (
        <div className="flex flex-row">
            <SidePanel activePanel={activePanel} setActivePanel={setActivePanel} />
            <div className="w-4/5 h-screen">
            {Panels[activePanel]}
            </div>
        </div>
    )
}

export default HomePage