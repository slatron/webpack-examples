# React MPA sample application

Running this app generates a simple 2 page MPA with a shared \<Menu\> React component.

- Demonstrates multiple html pages in a webpack React application
  - Feature and directory/file structre here intended to be used alongside exisiting build
  - Allow re-use of existing shared asset files: .scss, images, fonts
  - Uses common HTML <head> string for base pages

- Not yet included
  - Gulp AngularJS application running in same build
  - Translation files
  - Unit tests

# Prerequisites
- node v10 (tested on v10.22.1)

# Setup from cloned directory
- `$ npm install`
- `$ npm run start`
- Open `http://localhost:8080/` in a browser

# Proposed Directory Structure
This directory structure builds off the existing structure. We need to share certain assets with the old and new applications (.scss, fonts, images).

- Directories & files with a * after the name are new for the migration
- Other directories listed already exist and contain shared resources from existing app
- Existing directories not used in this build not in pictured structure
  - (ex.. `/dev/js/`, `/dev/templates/`)

```
├── config*/
├── dev
|   ├── fonts/            
|   ├── images/
|   ├── scss/
|       ├── main.scss
|       └── main-react.scss*
|   ├── components*/
|   	   └── ComponentName/
|           ├── ComponentName.scss
|           └── ComponentName.js
|   	   └── page_roots/
|           ├── ContactPage/
|               └── ContactPage.js
|           └── IndexPage/
|               └── IndexPage.js
|   └── pages*/
|       ├── contact.js
|       ├── contact.html
|       ├── index.js
|       └── index.html
├── package.json
└── webpack.config.js*
```

## Webpack

The migration pages will be built with webpack alongside the gulp build. This is to allow us to keep the existing AngualrJS application as is while the new webpack build gradually takes over. It ensures the current application code will not be changed during the migration.

Most of this effort covered shared asset resources. To keep the new pages looking and functioning the same, we need to share base scss, font and image files. This directory structure incorporates the existing application to demonstrate.

## Pages

This is where each new page in the migration will go. In this setup, I have each page coupled with its own javascript file. We're using the `html-webpack-plugin` package to export each html page in `/dev/pages/` to it's own page, making this a milti-page application.

Like our current application, these are entry points for the application on each page. They will each load a Component in the `/dev/components/page_roots/` directory. This will  call the authentication module and load initail data while starting the UI component tree.

## Javascript

I added Babel to the project, whilch will allow us to write ES6 javascript but compile down to ES5 for older browsers like IE11.

One js file per page will prevent the single `main.[tag].js` file from being cached in the browser. Doing this allows each js file to be much smaller as it will only contain the javascript needed on that page, but the tradeoff is that the user's browser will have to fetch and cache a bundle for each page. This may be percieved as an initial slower pageload the first time a user visits a page after a new release or their browser cache is cleared. We will need to revisit this. I left comments in the webpack config file on how to change this to a large single .js file if the js-per-page setup is too slow for some users.

### Components

React omponents go in the `/dev/components/` directory and can be imported by any other component in the application. Each component should be in its own folder alongside specialized CSS and tests for that component.

By React standards, each Component is a js file that shares the name of the component function exported. I'm carrying that convention to naming the subdirectories here as well. Any component subdirectory that contains a single component and its related files should be PascalCase. Other directories that contain multiple components will be in /snake_case/, like the current directory pattern.

## Styles

Stypes are all written in scss. To reuse existing site styles while allowing for new style per component, I added a `main-react.scss`. This will live next to the `main.scss` file in `/dev/scss/`. Here, we can only call the base settings snd sitewide styles for state, layout and typography. We also set a path for webpack to resolve `url()` calls for background images.

CSS for individual components will be imported by that module or at the componet page level.

### Next Steps

The last anticipated POC will show how this application can live side-by-side with the current application and be triggered after the current application is built in the same repo.
