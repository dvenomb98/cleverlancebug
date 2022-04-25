import React from 'react'
import { PhoneOutgoingIcon } from '@heroicons/react/outline'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <header className="border border-gray-400/50">
        <div className="container mx-auto px-3 py-5 flex justify-between items-center">


        
            <Link className="flex items-center gap-2" to="/">
              <img className="w-10 h-10 " src="https://www.cleverlance.cz/cz/PublishingImages/news/cleverlance-piktogram.jpg?fbclid=IwAR1RH-JP6ULbYK-IaHjx_5MRfPkajn5snHvn0DfX0vJnaErw5oyOQRO6xGE" alt="" />
                  <h1 className="font-bold leading-4">Cleverlance</h1>
            </Link>
        

        <h2 className="font-semibold text-xl hidden sm:block">Online sjednání <span className="font-bold">CHYTRÉHO účtu</span></h2>

        <PhoneOutgoingIcon className="w-12 h-12 p-2 rounded-full bg-yellow-300" />

        
        </div>
    </header>
  )
}

export default Navbar