# React MPA sample application
- Demonstrates multiple html pages in a React application with Styles and asset handling
- Uses same directory structure to reuse base css, images and fonts

# Prerequisites
- node v10 (tested on v10.22.1)

# Setup from cloned directory
- `$ npm install`
- `$ npm run start`
- Open `http://localhost:8080/` in a browser

# POC Takeaways
Looks like we'll have more control over the styles in the migration project. Any page can import the main styles to apply it to that tree. These use the same base styles as the main application. The existing base scss files (settings, mixins, normalize, print, etc...) can be shared by both new and old applications. Unique styles per component can be imported to that component. Same with unique page styles.

In the last POC where gulp will be living alongside the migration files, we can add a unique `main-react.scss` file to pull in the same base files while leaving the modules out.
