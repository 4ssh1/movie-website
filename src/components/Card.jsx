import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material';

function Cards({src, alt}) {
  const theme = useTheme()
  const isDark = theme.palette.mode === "dark"

  return (
    <div>
        <Card sx={{ 
          maxWidth: 200 ,
          backgroundColor: "transparent",
          }}>
            <CardMedia
                sx={{ 
                  height: 300,
                  objectFit: 'contain',
                  width: "100%"
                }}
                image={src}
                component="img"
                alt={`${alt}-img`}
                className='object-cover'
            />
        </Card>
        <div className="h-10 mt-2 w-50">
            <p className={`text-sm font-xs paytone text-center truncate ${isDark ? "text-slate-400": " text-slate-600"}`}>
              {alt || '\u00A0'}
            </p>
        </div>
    </div>
  )
}

export default Cards


