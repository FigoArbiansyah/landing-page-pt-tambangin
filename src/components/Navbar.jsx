/* eslint-disable react/prop-types */
import React from 'react';

const Navbar = ({ moreThan100px }) => {
  return (
    <header className={`fixed top-0 w-full px-20 ${moreThan100px ? 'py-6' : 'py-12'} ${moreThan100px ? 'bg-black bg-opacity-75 backdrop-blur' : 'bg-transparent'} z-[2] transition-all ease duration-300`}>
        <nav className='flex justify-between'>
            <div>
                <h3 className="text-xl font-bold text-slate-100">PT. Tambangin</h3>
            </div>
        </nav>
    </header>
  )
};

export default React.memo(Navbar);