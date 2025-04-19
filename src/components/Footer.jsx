

function Footer() {
  return (
    <div className="relative sm:h-[50vh] h-[30vh] bg-[url('/collage.jpg')]">
        <div className="absolute bg-slate-800 -z-10  w-full h-full"></div>
        <div className="text-white  backdrop-blur-[4px] h-full flex justify-center
         sm:gap-10 gap-5 items-center leading-10 [&>div>p]:cursor-pointer sm:font-bold">
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
