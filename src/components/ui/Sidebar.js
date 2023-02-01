import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
 
const Sidebar = () => {
 
    const urlActual= useLocation().pathname
 
    return ( 
        <div className="md:w-2/6 xl:w-1/5 bg-gray-800">
 
            
            <div className="p-6">
                <p className="text-white mb-2 text-2xl tracking-wide text-center font-bold uppercase">RestaurantApp</p>
 
                <p className="mt-3 text-gray-400">Administra tu restaurant en las siguientes opciones:</p>
 
                <nav className="mt-10">
                    
                <NavLink 
                    className={`${urlActual === '/' ? 'text-yellow-400' : 'text-gray-400'} 
                    p-1 block 
                    hover:bg-yellow-400`}
                    to="/"
                >   Ordenes
                </NavLink>
 
                <NavLink
                    className={`${urlActual === '/menu' ? 'text-yellow-400' : 'text-gray-400'} 
                    p-1 block 
                    hover:bg-yellow-400`}
                    to="/menu"
                >Menu
                </NavLink>
 
                </nav>
            </div>
        </div>
        
 
     );
}
 
export default Sidebar;
