# React MPA sample application
- Demonstrates multiple html pages in a React application
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
  - (ex.. /dev/js/, /dev/templates/)

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

## Pages

## Javascript

### Components

## Styles

### Fonts

### Background Images

### Next Steps
