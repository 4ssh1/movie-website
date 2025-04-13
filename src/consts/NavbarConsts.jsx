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
    icon: <SearchIcon />
  },
  {
    path: "",
    icon: <AccountCircleIcon />
  }
 
]

