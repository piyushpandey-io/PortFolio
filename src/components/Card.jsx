import React from "react";
import { instaLogo, gitLogo, xLogo, inLogo,css, js,html,rea,tail } from '../assets'
function Card({Lang,Logo}){
    return (
       <div className="group inline-flex items-center justify-start bg-blue-950 m-1.5 p-3 w-fit max-w-fit border-2 border-black gap-3 text-gray-400 transition-all duration-300 hover:scale-105 hover:bg-blue-900 hover:border-white">
    {/* Image Border Wrapper */}
    <div className="shrink-0 border-2 border-black p-1 transition-all duration-300 group-hover:border-white">
        <img src={Logo} alt={`${Lang} logo`} className="h-12 w-12 object-contain" />
    </div>
    
    {/* Text Wrapper */}
    <div>
        <h2 className="text-2xl transition-all duration-300 group-hover:text-4xl text-gray-400 group-hover:text-white">
            {Lang}
        </h2>
    </div>
</div>
    )
}

export default Card