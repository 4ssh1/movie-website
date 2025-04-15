

function Footer() {
  return (
    <div className="relative h-[50vh] bg-[url('/collage.jpg')]">
        <div className="absolute bg-slate-800 -z-10  w-full h-full"></div>
        <div className="text-white  backdrop-blur-[4px] h-full flex justify-center
         gap-10 items-center leading-10 [&>div>p]:cursor-pointer font-bold">
            <div>
                <p><a href="#">Home</a></p>
                <p><a href="#">Contact us</a></p>
                <p><a href="#">Terms of Service</a></p>
            </div>
            <div>
                <p><a href="#">Live</a></p>
                <p><a href="#">FAQ</a></p>
                <p><a href="#">Premium</a></p>
            </div>
            <div>
                <p>A<a href="#">bout us</a></p>
                <p><a href="#">Recent Release</a></p>
                <p><a href="#">Most Watched</a></p>
            </div>
        </div>
    </div>
  )
}

export default Footer
