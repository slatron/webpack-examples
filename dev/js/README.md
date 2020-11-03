js
==========

During the gulp scripts task, .js files in here will be compiled to /app/assets/js. This will result in both a main.js and main.min.js file.

The order of file concatentation is important for some js dependencies to function. This order is set in `gulp/tasks/scripts`.

There are useful subdirectories herein:

##### angular_base/

    This is where base angular dependencies are kept. This ensures that the angular library will be included before any other javascript. We also include jquery and jquery-ui libraries here as they are required to be loaded before angular.js.

    Because source order is crucial, all files in this directory should be referenced directly in the gulp scripts task to ensure proper build order on the resulting `main.js` files.

##### vendor/

    These are .js files that come from an external vendor but do not need to be included before angular.js. Gulp scripts will add these files to `main.js` after files in `angular_base/` but before files in `angular_app/`. Angular modules and external libraries should be included here.

##### angular_app/

    This is where all of the individual angular js files should go. Subdirectories can be managed in any way that makes sense as these files can be compiled in any order. Angular JS internally handles dependency injection for all these files in the browser.

    The subfolders in angular_app each contain a type of angular module. (api handling goes in /api/, directives go in /directives/ etc...).

    Each file should start with a multi-line comment describing the implementation of the function.

    Each file here should end with a reference to the main app module: `angular.module('Example')`. This adds the function to the angular app. You can drop new angular files here knowing that they will be automatically compiled to the final build. This is the folder you should be working in the most during development.

##### angular_app/api/

This contains the apiCalls factory. It is the only place in the applicaion where we make calls to the API. It is located here as opposed to the other factories to reinforce it's key role in server communication.

##### angular_app/constants/

This contains all UI application data that will not come from the API.

Most of these are actually factories. They still live in the constants to imply their purpose as application settings. They were made into factories to accomodate importing gettext. This way, client-side translations on common settings strings can be done within these files.

##### angular_app/directives/

   Directives are the "building blocks" of angular applications. The /directive/ folder contains two subfolders for /managers/ and /elements/.

   **Element directives** are defined in HTML files as new nodes. For example, you can create the drawer element by adding a <drawer></drawer> node to the HTML file. The directive will replace the <drawer> node with the html contained in the /directives/elements/drawer/drawer.html template. Alongside the HTML template file are any .js files needed to define the directive's functionality. There should also be a Spec.js file that defines the unit tests for that directive.

   Charts are an exception in that they are element directives that have no associated HTML template file. This is because the visual charts are generated as SVG graphics in the link function. No HTML is needed.

   *NOTE* - This pattern involves keeping .html tempates in /js subfolders. It makes the directive HTML easily accessible by developers in the same place as the .js file. We always keep html template directives and the associated .js files in the same directory.

   **Manager directives** are attributes on existing HTML nodes. See the body tag page-manager attribute for an example. These directives do not have associated html files and act similarily to controllers for a segment of the page. They are used to share functionality across a section of the application

  *NOTE* - This is the role that factories are supposed to play in Anavo. A goal of the platform architecture is to eliminate these manager directives and refactor them into factories as much as possible.

##### angular_app/filters/

Filters are used for formatting data displayed to the user. There are several [built-in filters](https://docs.angularjs.org/api/ng/filter) already in angular. The filters here are custom built for our application.

Our filters are commonly used in html templates to format strings. Most filters take a `text` parameter and return an augmented string. The [date](https://github.com/Wellspring-Worldwide/anavo-client/blob/master/dev/js/angular_app/filters/displayDateFilter.js) and [currency](https://github.com/Wellspring-Worldwide/anavo-client/blob/master/dev/js/angular_app/filters/currencyFilter.js) filters are common examples used throuought the application.

##### angular_app/factories/

Factories are the data management services of Anavo. If you want multiple directives to share the same data, that data should be maintained by a factory.

A factory returns a single object that contains all the getter and setter functions for accessing and maniipulating the contained data.

##### angular_app/translations/

Files here are generated by gettext during the gulp `process-translations` task. These are then used witin the client to replace matching strings in translate directives with the non-english versions.

##### Root app.js file

There is also an app.js file in this directory at the root. This contains a setter for the Anavo app module that will be referenced by each file in `angular_app/`. This file is called directly by the gulp build process so it compiles after `angular_base/` and `vendor/` but before `angular_app/`.

***
