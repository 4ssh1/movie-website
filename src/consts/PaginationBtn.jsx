import { useSearchParams } from 'react-router-dom';
import { usePages } from '../../utilities/PaginationCxtProv';

function PaginationBtn() {
    const {count, setCount} = usePages()
    const [searchParams, setSearchParams] = useSearchParams()

    function handlePrev(){
      if (count >= 20 || count <= 1) return
      setCount(prev => prev - 1)   
      setSearchParams({page: count - 1})
    }

    function handleNext(){
      if (count == 20 || count < 1) return

      setCount(prev => prev + 1)   
      setSearchParams({page: count + 1})
    }

    console.log(count)

  return (
    <div className=' flex justify-center pb-10 gap-3 text-white text-sm'>
       <button className='bg-slate-600 px-2 py-1 rounded-md paytone cursor-pointer hover:bg-slate-500'
        onClick={handlePrev}>Prev</button>
       <button className='bg-slate-600 px-2 py-1 rounded-md paytone cursor-pointer hover:bg-slate-500' 
       onClick={handleNext}>Next</button>
       <button className='bg-slate-600 px-2 py-1 rounded-md paytone cursor-pointer hover:bg-slate-500'>
        {count} of 20</button>
    </div>
  )
}

export default PaginationBtn
