# MPA Angular Example
- Demonstrates multiple html pages model for an Angular application

# Prerequisites
- node v10 (tested on v10.22.1)

# Setup
*Note* the application pages do not load in the browser. The last npm run build creates two Angular applications at `/dist/mpa-project/` and `/dist/mpa-project-two/`. To see in a local server, I have to see what's preventing the usual webpack webserver from serving up files form those Angular `/dist` folders.

I don't recommend going through this process unless you want to see a starting point towards building multiple side-by-side Angular applications as SPAs within an MPA. It's also missing the /app folder from each `/mpa-project-*` folder from the .gitignore.

After cloning the repo, from the root...
- `$ cd mpa-project`
- `$ npm install`
- `$ ng build`
- `$ cd ../mpa-project-two`
- `$ npm install`
- `$ ng build`
- `$ cd ..`
- `$ npm install`
- `$ npm run build`

# POC Takeaways

<p>
  Angular is built to make single page applications. There really isn't any support for traditional multiple page applications like ours. To get around this, I used their cli tool to build two separate Angular applications within the same project. The main index.html page would link to each other page in the application.
</p>

<p>
  This already presents basic issues to solve with Angular. First, the URL structure would have to be further configured to not use a folder per page. This will require moving the js build for each page to a separate folder, which will involve customizing the Angular build. Second, each basic bundle here is already huge at >500MB. We'd have to spend some time figuring out a way to decouple common dependeincies beyond shared components. Even the gulp-webpack build trigger will have to be customized to build different page apps.
</p>

<p>
  Angular is also updated very regularly with a new major version every six months. This keeps the framework very up -to-date and stable, but only if you are using it in way set up through their CLI tool. By going pretty far outside the perscribed architecture, we'll have a tougher time keeping our customizations up-to-date.
</p>

<p>
  After this POC, I can only reccommend Anguar for a migration if we build a full single-page-application.
</p>
