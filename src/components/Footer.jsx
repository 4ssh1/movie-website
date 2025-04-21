import {Link} from 'react-router-dom'

const links = ["Home", "Contact us", "Terms of Service", "Live", "FAQ", "Premium", "About us", "Recent Release","Most Watched"]

function Footer() {
  return (
    <div className="relative sm:h-[40vh] h-[30vh] bg-[url('/collage.jpg')]">
        <div className="absolute bg-slate-800 -z-10  w-full h-full"></div>
        <div className='backdrop-blur-[4px] h-full flex flex-col  justify-center items-center gap-2'>
            {[0,3,6,9].map((no)=>(
            <div key={no} className="text-white
               leading-10 [&>div>p]:cursor-pointer sm:font-bold space-x-20">
                {links.slice(no, no + 3).map((link)=>(
                    <Link to={'/'} key={link} className='bg-slate-500 '>{link}</Link>
                ))}
            </div>
               ))}
        </div>
    </div>
  )
}

export default Footer
