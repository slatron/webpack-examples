# React MPA sample application
- Demonstrates multiple html pages in a React application with Styles and asset handling

# Prerequisites
- node v10 (tested on v10.22.1)

# Setup from cloned directory
- `$ npm install`
- `$ npm run start`
- Open `http://localhost:8080/` in a browser

# POC Takeaways
Looks like we'll have more control over the styles in the migration project. Any page can import the main styles to apply it to that tree. These use the same base styles as the main application.

In the last POC where gulp will be living alongside the migration files, we can add a unique `main.scss` file to pull in the same base files to avoid having duplicate entries for the base scss files.
