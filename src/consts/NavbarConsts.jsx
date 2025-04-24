import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export  const Menu = [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Movies",
        path: "/movies",
      },
      {
        title: "TV Shows",
        path: "/shows",
      },
  ]


export const icons = [
  {
    path: "/search",
    icon: <SearchIcon className='text-xs'/>
  },
  {
    path: "",
    icon: <AccountCircleIcon  className='text-xs'/>
  }
 
]

