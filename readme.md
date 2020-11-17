# React Alongside Gulp MPA

Running this app generates the simple 2 page MPA with a shared <Menu> React component from [react-mpa-with-assets](https://github.com/slatron/webpack-examples/tree/react-mpa-with-assets) alongside an existing AngularJS application.

Both applications will live inside the same desitination `/app/` directory. Image, font and scss asset files will be shared by both applications. The entire build can be triggered from a single `$ gulp` command. I added a `webpack` task to the gulp process that runs in serial after the existing gulp process is complete.

Demonstrates the following:
- Gulp + AngularJS
- Webpack + React
- Single command to build application
- Existing commands (translations, units) continue to function
- Directory structure for organizaing files for the migration

# Prerequisites
- node v10 (tested on v10.22.1)

# Setup from cloned directory
- `$ npm install`
- `$ npx gulp`
- Application is built in /app/ directory
  - use a local server to view in browser (`$ npx serve app`)

# Proposed Combined Directory Structure
This directory structure builds off the existing structure. We need to share certain assets with the old and new applications (.scss, fonts, images).

- Directories & files with a * after the name are new for the migration
- Some unrelated files are omitted

```
├── app/
├── dev/
|   ├── components*/
|   |	  └── ComponentName/
|   |   |   ├── ComponentName.scss
|   |   |   └── ComponentName.js
|   |	  └── page_roots/
|   |       ├── ContactPage/
|   |       |   └── ContactPage.js
|   |       └── NewPage/
|   |           └── NewPage.js
|   ├── fonts/            
|   ├── images/
|   ├── js/
|   ├── pages*/
|   |   ├── contact.js
|   |   ├── contact.html
|   |   ├── index.js
|   |   └── index.html
|   ├── scss/
|   |   ├── main.scss
|   |   └── main-react.scss*
|   ├── scss/
|   ├── index.html
|   └── oldPage.html
|
├── gulpfile.js/
├── po/
├── tests/
├── webpack_config*/
├── package.json
├── units.conf.js
└── webpack.config.js*
```

## Webpack

The migration pages will be built with webpack alongside the gulp build. This is to allow us to keep the existing AngualrJS application as is while the new webpack build gradually takes over. It ensures the current application code will not be changed during the migration.

To keep the new pages looking and functioning the same, we need to share base scss, font and image files. This directory structure incorporates the existing application to demonstrate.

One  change is that we will be bundling react along with the application from dependencies. This simly replaces the manual way I've been adding the Angular javascript to the main.js file with gulp.

## Gulp

To keep the full build process she same across all enviromnents, I added a webpack task to the gulp process. This task runs the full webpack build after gulp is finished. It packages the React files alongside the existing files in the `/app/` directory.

I added a couple of file exceptions to the gulp process. There are exception entries in the `/gulpfile.js/config.js` paths object to let the gulp tasks skip these files.

## Pages

This is where each new page in the migration will go. In this setup, I have each page coupled with its own javascript file. We're using the `html-webpack-plugin` package to export each html page in `/dev/pages/` to it's own page, making this a milti-page application.

Like our current application, these are entry points for the application on each page. They will each load a Component in the `/dev/components/page_roots/` directory. This will  call the authentication module and load initail data while starting the UI component tree.

#### How to migrate a page

The process will involve creating a new html and js file under `/dev/pages/`. This will evemtually be named the same as the existing HTML page in the current application. It will fully replace the existing page this way.

Create a corresponding `/components/page_roots/` component to handle data initilization and an entry point for the UI tree. Depending on how we share application logic, there will be additional migration-specific directories for modules like authorizatoin and timezone.

As each page is built out, more react components and modules will be added to the `/components/` directory, making it easier to reuse logic and UI between application pages.

## Javascript

I added Babel to the project, whilch will allow us to write ES6 javascript but compile down to ES5 for older browsers like IE11.

One js file per page will prevent the single `main.[tag].js` file from being cached in the browser. Doing this allows each js file to be much smaller as it will only contain the javascript needed on that page, but the tradeoff is that the user's browser will have to fetch and cache a bundle for each page.

This may be percieved as an initial slower pageload the first time a user visits a page after a new release or their browser cache is cleared. We will need to revisit this. I left comments in the webpack config file on how to change this to a large single .js file if the js-per-page setup is too slow for some users. There are certainly optimizations that we can make as we get further on in the migration.

#### Pesky js folder

One large drawback in keeping the existing structure is that I named the main folder that contains the AngualrJS code "js". I'm ok living with this during the migration. Especailly since we should be able to slowly delete everything there as we go.

Everything in the `/dev/js`/ folder is for the AngularJS application. The only other AngularJS-specific files are the .html entry-points at the `/dev/` root and the specific `/dev/scss/main.scss` file. All other files in /`dev`/ are either shared resources or specic to the migration.

#### Migration file locations

The migration application files will be contained in specific directories. Currently, these are `/dev/pages/` and `/dev/components/`. The components directory contains all React components. The pages directory contains all the entry .html and .js files for the migration pages. There is also a migration-specific entry file, `/dev/scss/main-react.scss`.

The specific directoruy paths for migration files have entries in the gulp config.js file to easily exclude them from existing tasks.

I chose to split these up into multiple folders to better set us up for when the migration is complete. I could have put all of this in a single `/migration-files/` directoty to better separate concerns. I also could have used prefixes to namespace these to the migration. like `/dev/migration-components/` and `/dev/migration-pages/`.

I chose to go with the plain directory names with the intention that this will slowly take over the existing directories. At that point, I would rather have everything named appropriately then to deal with moving the tasks again after the migration.

### Components

React components go in the `/dev/components/` directory and can be imported by any other component in the application. Each component should be in its own folder alongside specialized CSS and tests for that component.

By React convention, each Component is a js file that shares the name of the component function exported. I'm carrying that convention to naming the subdirectories here as well. Any component subdirectory that contains a single component and its related files should be PascalCase. Other directories that contain multiple components will be in /snake_case/, like the current directory pattern.

## Styles

Styles are all written in scss. To reuse existing site styles while allowing for new style per component, I added a `main-react.scss`. This lives next to the `main.scss` file in `/dev/scss/`. Here, we can only call the base settings snd sitewide styles for state, layout and typography. We also set a path for webpack to resolve `url()` calls for background images, which are differnet in the react build.

CSS for individual components will be imported by that module or at the componet page level. This will let us keep the global, font, typography and layout styles while assessing more specific styles written per page. I suspect that much of these specific module styles are unneeded and can be removed as the migration progresses.

### Units

I have not addressed unit tests for the new components. This currently works with the existing AngularJS unit tests. The intention is to keep each spec file in the component's folder alongside any speific .js and .scss.

Since there are still items to set up before this can go in an actual repository branch, I'll add unit test examples between tasks.

### Next Steps

This is a demonstration on how I intend to manage the migration while keeping the current application untouched and separate. If this looks like a decent plan to the team, I'll start building this out on a branch of the existing application.

