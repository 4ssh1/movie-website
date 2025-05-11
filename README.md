# Movie Website

This repository contains the source code for a dynamic Movie Website. It is built using modern web development technologies to deliver a seamless and interactive user experience.

## 🎬 Features

- 🔥 **Trending Filter** – Dynamically view movies by _Today_, _This Week_, _Popular_, or _Top Rated_.
- 🔍 **Search Functionality** – Instantly search for movies or shows by title.
- ✅ **User Authentication** – Login with Google to access personalized features.
- 🎯 **Watchlist Management** – Add or remove movies from your watchlist with a single click.
- 💾 **Persistent State** – Watchlist and preferences are saved per user, even on refresh.

<img src="/src/assets/live.png" alt="Movie Preview" width="100%" />



## Technologies Used
- React
- Tailwind Css
- Firebase
- React Router & Icon
- Material UI


## Installation

To get started, follow these steps:

1. Clone the repository:
   ```bash
     git clone https://github.com/4ssh1/movieWebsite.git
     cd movieWebsite
   ```
   

2. Install dependencies:
   ```bash
     npm install
   ```

3. Start the server:
   ```bash
     npm run dev
   ```


# Movie-website Project Structure

```text
movie-website/
eslint.config.js
index.html
package-lock.json
package.json
postcss.config.mjs
public
├── collage.jpg
├── movie.jpg
├── noImage.jpg
├── youtube.svg
README.md
src
├── api
│   ├── api.js
├── App.jsx
├── assets
│   ├── desktop.ini
│   ├── live.png
├── components
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Layout.jsx
│   ├── MovieHero.jsx
│   ├── Navbar
│   │   ├── DynamicBar.jsx
│   │   ├── MenuBar.jsx
│   │   ├── ThemeButton.jsx
│   ├── Navbar.jsx
│   ├── Profile.jsx
│   ├── ProtectedRoute.jsx
│   ├── SearchBar.jsx
│   ├── ShowsHero.jsx
│   ├── VideoComponent.jsx
├── consts
│   ├── NavbarConsts.jsx
│   ├── PaginationBtn.jsx
├── context
│   ├── AppContent.jsx
│   ├── ContextProvAll.jsx
│   ├── ContextWrapper.jsx
│   ├── ThemeContextProvider.jsx
├── index.css
├── main.jsx
├── pages
│   ├── Details.jsx
│   ├── HomePage.jsx
│   ├── MoviePage.jsx
│   ├── ProfilePage.jsx
│   ├── SearchPage.jsx
│   ├── TvShowsPage.jsx
├── routes
│   ├── DetailsRoutes.jsx
│   ├── MainRoutes.jsx
│   ├── SearchRoutes.jsx
├── RoutesConfig.jsx
├── services
│   ├── firebase.js
│   ├── fireStore.js
tailwind.config.js
vercel.json
vite.config.js
```



## Contributing
We welcome contributions! To contribute:

1. Fork the repository.
   
2. Create a new branch:
   ```bash
    git checkout -b feature-name
   ```

3. Commit your changes and push them to your fork.
4. Create a pull request.

## License
This project is licensed under the MIT License.


