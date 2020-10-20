# MPA setup with single bundle
- demonstrates multiple html pages with bundle for each page
- each page calls same method in different js file
- different endpoints are in the js files

# Prerequisites
- node v10 (tested on v10.22.1)

# Setup
- `$ npm install`
- `$ npm run start`
- Open `http://localhost:8080/` in a browser

Click on the load button on each page to call an api

API response Results are displayed in console

# POC Takeaways
<p>
  Compared to the <a href="https://github.com/slatron/webpack-examples/blob/mpa-agnostic-single-bundle/readme.md" target="_blank">single bundle example</a>, this removes the data-load attribute from the buttons on the html pages. Each page relies on its own javascript flie to call the separate APIs. This js bundle per page could be used to compleetly isolate each page of the APP as its own SPA.
</p>

<p>
  At this time, we should stop persuing this path. It seems very wasteful to generate so many bundles. We should remember this model in case we see a reason to strongly isolate MPA pages.
</p>
