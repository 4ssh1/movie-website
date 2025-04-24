import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export  const Menu = [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Movies",
        path: "/movie",
      },
      {
        title: "TV Shows",
        path: "/tv",
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

