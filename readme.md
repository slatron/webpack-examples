# MPA Angular Example
- Demonstrates multiple html pages model for an Angular application

# Prerequisites
- node v10 (tested on v10.22.1)

# Setup
*Note* the application pages do not load in the browser. The last npm run build creates two Angular applications at `/dist/mpa-project/` and `/dist/mpa-project-two/`. Even when I leave out the Angualr router, the build here redirects to a single entry `.html` page. I'm seeing how Angular REALLY wants to force you into a SPA.

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

 Angular purpose is to buils single page applications. There really isn't any simple way to support traditional multiple page applications like ours. To get around this, I used their cli tool to build two separate Angular applications within the same project. The main index.html page would link to each other page in the application.

This already presents basic issues to solve with Angular. First, the URL structure would have to be further configured to not use a folder per page. This will require moving the js build for each page to a separate folder, which will involve customizing the Angular build. Second, each basic bundle here is already huge at >500MB. We'd have to spend some time figuring out a way to decouple common dependeincies beyond shared components. Even the gulp-webpack build trigger will have to be customized to build different page apps. Third, even when getting this built with multiple SPAs per page and no js router, my local Angular pages were redirecting back to the `index.htm` page.

Angular is also updated very regularly with a new major version every six months. This keeps the framework very up -to-date and stable, but only if you are using it in way set up through their CLI tool. By going pretty far outside the perscribed architecture, we'll have a tougher time keeping our customizations up-to-date. [I've read issue threads like this](https://github.com/angular/angular/issues/14745#issuecomment-356936378) where migrations from AngularJS to Angular had to use customized builds that were broken in minor version updates.

After this POC, I can only reccommend Anguar for a migration if we build a full single-page-application.
