# React MPA sample application
- demonstrates multiple html pages in a React application
- each page shares common navigation React component
- Each page has its own js file to keep bundle size limited
- Can be changed in webpack.config.js to combine page bundles into larger modules
  - we could set up admin, charts, records bundles to optimize when needed
- Much easier to to configure than with Angular

# Prerequisites
- node v10 (tested on v10.22.1)

# Setup from cloned directory
- `$ npm install`
- `$ npm run start`
- Open `http://localhost:8080/` in a browser

The unstyled navigation links come from a common Menu conponent. This is very basic, but demonstrates how we can build a multi-page-application from React.

# POC Takeaways
With React, I was able to accomplish in an hour what I'm still having trouble building in Angular. Its clear that if we want to keep the migration focused on a straightforward path, we should stick to MPA URLs. And if this is the case, we should migrate to React instaed of Angular.

I can already use webpack to customize how we want our app to build. This is critical to support a smooth page-by-page migration. I'll be moving forward with MPA + React on the next two POCs. First, to set up a more robust webpack + React application that includes a model for styles, fonts and images in addition to HTML and js.

After that, the last POC needed (fingers-crossed) is a full build with an AngularJS application built in gulp alongside the new application replacing pages as they are ready with webpack.
