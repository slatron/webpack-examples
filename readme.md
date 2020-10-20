# MPA setup with single bundle
- demonstrates multiple html pages with shared bundle
- each page shares API method
  - called with different endpoint from html button data-load

# Prerequisites
- node v10 (tested on v10.22.1)

# Setup
- `$ npm install`
- `$ npm run start`
- Open `http://localhost:8080/` in a browser

Click on the load button on each page to call an api

API response Results are displayed in console

### POC Takeaways

<p>
  This MPA model is closest the current gulp build. Each page of the application calls the same javascript bundle.
</p>

<p>
  Compared to the <a href="https://github.com/slatron/webpack-examples/tree/mpa-agnostic-multiple-bundles" target="_blank">multiple bundle example</a>, this uses a data-load attribute on each html page button. Clicking the button calls the same method to call the API with a different parameter.
</p>

<p>
  If we go with a MPA approach, we should use this model to keep the number of bundles at one. If we need greater isolation between pages, we can try a multiple bundle approach at that time.
</p>
