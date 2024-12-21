import { useRef } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];


const Navbar = () => {
   const navContainer= useRef(null);
  return (
    <div ref={navContainer} className=' fixed insert-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>

      <header className='absolute top-1/2 w-full -translate-y-1/2'>
         <nav className='flex size-full items-center justify-between'>
            <div className='flex items-center gap-7'>
               <img src="/img/logo.png" alt="logo" className='w-10'/>
               <Button title="Products" id="product-button" rightIcon={<TiLocationArrow/>} containerClass="bg-blue-50  md:flex hidden items-center justify-center gap-1"   />
            </div>


            <div className="flex h-full items-center">
               <div className="hidden md:block ">

                  {navItems.map(item=>(
                     <a key={item} className='nav-hover-btn !text-white' href={`#${item.toLowerCase()}`}>
                        {item}
                     </a>
                  ))}
               </div>

               <button className='ml-10 flex items-center space-x-0.5'></button>
            </div>

         </nav>

      </header>
      
    </div>
  )
}

export default Navbar
