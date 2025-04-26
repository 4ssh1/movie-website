import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

function Cards({src, alt, type, id}) {
  const theme = useTheme()
  const isDark = theme.palette.mode === "dark"

  return (
    <Link to={`/${type}/${id}`}>
      <div className='w-[135px]'>
          <div className='relative w-[135px]'>
            <Card sx={{
              maxWidth: 135,
              width: 135,
              backgroundColor: "transparent",
              }}>
                <CardMedia
                    sx={{
                      height: 200,
                    }}
                    image={src}
                    component="img"
                    alt={`${alt}-img`}
                    className='object-contain'
                />
            </Card>
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black opacity-90'>
              <div className='h-full opacity-0 hover:opacity-100 w-full flex justify-center
               items-center transition-all ease-in delay-100'>
                      <img src="youtube.svg" alt="" className=' block size-14 bg-transparent '/>
              </div>
            </div>
          </div>
          <div className="h-10 mt-2 w-full">
              <p className={`text-[13px] font-xs paytone text-center truncate ${isDark ? "text-slate-400"
                :
                 " text-slate-600"}`}>
                {alt || '\u00A0'}
              </p>
          </div>
      </div>
    </Link>
  )
}

export default Cards


