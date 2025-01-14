import { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = ['Nexus', 'About', 'Feature', 'Story', 'Contact'];


const Navbar = () => {
   const navContainer= useRef(null);
   const audioElementRef = useRef(null);
   const [isAudioPLaying, setIsAudioPLaying] = useState(false);
   const [isIndicatorActive, setisIndicatorActive] = useState(false);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [isNavVisible, setIsNavVisible] = useState(true);

   const {y: currentScrollY} = useWindowScroll();

   useEffect(()=>{
      if(currentScrollY==0){
         setIsNavVisible(true);
         navContainer.current.classList.remove('floating-nav');
      }else if(currentScrollY > lastScrollY){
         setIsNavVisible(false);
         navContainer.current.classList.add('floating-nav');
      }else if(currentScrollY < lastScrollY){
         setIsNavVisible(true);
         navContainer.current.classList.add('floating-nav');
      }

      setLastScrollY(currentScrollY);
   },[currentScrollY, lastScrollY])

   useEffect(()=>{
      gsap.to(navContainer.current, {
         y: isNavVisible ? 0: -100,
         opacity: isNavVisible ? 1: 0,
         duration: 0.25
      })
   },[isNavVisible])

   const toggleAudio = ()=>{
      setIsAudioPLaying(prev=> !prev);
      setisIndicatorActive(prev=> !prev)
   };

   useEffect(()=>{
      if(isAudioPLaying){
         audioElementRef.current.play();
      }else{
         audioElementRef.current.pause();
      }
   },[isAudioPLaying])


  return (
    <div ref={navContainer} className=' fixed insert-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>

      <header className='absolute top-1/2 w-full -translate-y-1/2'>
         <nav className='flex size-full items-center justify-between'>
            <div className='flex items-center gap-7 ml-4'>
               <img src="/img/logo.png" alt="logo" className=' w-10'/>
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

               <button onClick={toggleAudio} className='ml-8 mr-4 flex items-center space-x-0.5'>
                  <audio src="/audio/loop.mp3" ref={audioElementRef} className='hidden' loop / >
                  {[1,2,3,4].map(bar =>(
                     <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active': ''}`} style = {{animationDelay: `${bar * 0.1}s`}} />

                    
                  ))}
               </button>
            </div>

         </nav>

      </header>
      
    </div>
  )
}

export default Navbar
