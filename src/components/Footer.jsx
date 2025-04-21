import {Link} from 'react-router-dom'

const links = ["Home", "Contact us", "Terms of Service", "Live", "FAQ", "Premium", "About us", "Recent Release","Most Watched"]

function Footer() {
  return (
    <div className="relative sm:h-[40vh] h-[30vh] bg-[url('/collage.jpg')]">
        <div className="absolute bg-slate-800 -z-10  w-full h-full"></div>
        <div className='backdrop-blur-[4px] h-full flex flex-col  justify-center items-center gap-4'>
            {[0,3,6,9].map((no)=>(
            <div key={no} className="text-white
               leading-10 roboto text-xs tracking-wider space-x-20">
                {links.slice(no, no + 3).map((link)=>(
                    <Link to={'/'} key={link} className=' bg-slate-800 cursor-pointer px-4 
                    py-2 rounded-full hover:opacity-60 ease-in'
                    >{link}</Link>
                ))}
            </div>
               ))}
        </div>
    </div>
  )
}

// [&>div>p]: a select format in tailwind

export default Footer
