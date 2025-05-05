# Movie Website

This repository contains the source code for a dynamic Movie Website. It is built using modern web development technologies to deliver a seamless and interactive user experience.

## Features
- Dynamic Movie Listings: Browse and search for movies with detailed information.
- Responsive Design: Optimized for desktop and mobile devices using CSS.
- Interactive User Interface: Built with JavaScript to ensure a smooth user experience.

## Technologies Used
- React
- Tailwind Css

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


# MovieWebsite Project Structure

```text
movieWebsite/
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
├── components
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Layout.jsx
│   ├── movie
│   │   ├── MovieHero.jsx
│   ├── navbar
│   │   ├── DynamicBar.jsx
│   │   ├── MenuBar.jsx
│   │   ├── Navbar.jsx
│   │   ├── ThemeButton.jsx
│   ├── Profile.jsx
│   ├── ProtectedRoute.jsx
│   ├── search
│   │   ├── SearchBar.jsx
│   ├── shows
│   │   ├── ShowsHero.jsx
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
│   ├── home
│   │   ├── HomePage.jsx
│   ├── movie
│   │   ├── MoviePage.jsx
│   ├── ProfilePage.jsx
│   ├── SearchPage.jsx
│   ├── shows
│   │   ├── TvShowsPage.jsx
├── routes
│   ├── DetailsRoutes.jsx
│   ├── MainRoutes.jsx
│   ├── SearchRoutes.jsx
├── RoutesConfig.jsx
├── services
│   ├── firebase.js
tailwind.config.js
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


