import { useSearchParams } from 'react-router-dom';
import { usePages } from '../context/ContextProvAll';

function PaginationBtn() {
    const {count, setCount, totalPages} = usePages()
    const [searchParams, setSearchParams] = useSearchParams()

    function handlePrev(){
      if (count >= totalPages || count <= 1) return
      setCount(prev => prev - 1)   
      setSearchParams({page: count - 1})
    }

    function handleNext(){
      if (count == totalPages || count < 1) return
      setCount(prev => prev + 1)   
      setSearchParams({page: count + 1})
    }

    console.log(count, totalPages)

  return (
    <div className=' flex justify-center pb-10 gap-3 text-white text-sm'>
       <button className={`bg-slate-600 px-2 py-1 rounded-md paytone cursor-pointer hover:bg-slate-500 
       ${count === 1 ? "cursor-not-allowed hover:bg-slate-700 bg-slate-700": ""}`}
        onClick={handlePrev}>Prev</button>
       <button className='bg-slate-600 px-2 py-1 rounded-md paytone cursor-pointer hover:bg-slate-500' 
       onClick={handleNext}>Next</button>
       <button className='bg-slate-600 px-2 py-1 rounded-md paytone cursor-pointer hover:bg-slate-500'>
        {count} of {totalPages}</button>
    </div>
  )
}

export default PaginationBtn
