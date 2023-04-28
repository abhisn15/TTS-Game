import React from 'react';

const NavbarBottom = () => {
    return (
        <header className="fixed bottom-0 left-0 right-0 z-10 border-4 h-32 rounded-none rounded-t-[176px] border-cyan-400">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center h-16">
                    <div className="tems-center mt-5">
                        <h1 className='title'>Jawabannya adalah:</h1>
                        <input className='mt-4 border-2 rounded-xl border-cyan-500'></input>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavbarBottom;
