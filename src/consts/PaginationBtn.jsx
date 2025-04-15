import { useSearchParams } from 'react-router-dom';
import { usePages } from '../../utilities/PaginationCxtProv';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function PaginationBtn() {
    const {count, setCount} = usePages()
    const [searchParams, setSearchParams] = useSearchParams()

    function handleChange(e){
        setCount(e.target.value)
        setSearchParams({page: e.target.value})
    }

  return (
    <div className=' flex justify-center pb-10 '>
        <Pagination count={10}
        page={count}
        onChange={()=>handleChange(e)}
        renderItem={(item) => (
            <PaginationItem className='hover:bg-slate-300 dark:text-white'
             slots={{ previous: ArrowBackIcon , next: ArrowForwardIcon }} {...item} />
        )}/>
    </div>
  )
}

export default PaginationBtn
