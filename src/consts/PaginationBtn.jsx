import { useSearchParams } from 'react-router-dom';
import { usePages } from '../../utilities/PaginationCxtProv';

function PaginationBtn({currentPage = 1, pages = 20}) {
    const {count, setCount} = usePages()
    const [searchParams, setSearchParams] = useSearchParams()

    function handleChange(e){
        setCount(e.target.value)
        setSearchParams({page: e.target.value})
    }

  return (
    <div className=' flex justify-center pb-10 gap-3 text-white text-xs sm:text-sm'>
       <button className='bg-slate-600 px-2 py-1 rounded-md paytone cursor-pointer hover:bg-slate-500'>Prev</button>
       <button className='bg-slate-600 px-2 py-1 rounded-md paytone cursor-pointer hover:bg-slate-500'>Next</button>
       <button className='bg-slate-600 px-2 py-1 rounded-md paytone cursor-pointer hover:bg-slate-500'>{currentPage} of {pages}</button>
    </div>
  )
}

export default PaginationBtn
