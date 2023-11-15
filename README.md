[![Web Starter Kit](https://user-images.githubusercontent.com/25930200/63020667-68e27c00-bea7-11e9-8047-a9d595ad9c1a.jpg)](https://github.com/justcoded/web-starter-kit/releases)

>  A modern Web starter kit to build projects, ready for WordPress.

![node](http://img.shields.io/badge/node-14.x.x-blue.svg) ![npm](https://img.shields.io/badge/npm-6.x.x-blue.svg)  [![release](https://img.shields.io/github/release/justcoded/web-starter-kit-wp.svg)](/releases) ![SCSS](http://img.shields.io/badge/SCSS-3.x.x-c6538c.svg) [![license](http://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![license](http://img.shields.io/badge/autoprefixer-included-blue.svg)](https://www.npmjs.com/package/autoprefixer) [![readme](http://img.shields.io/badge/readme-md-blue.svg)](/README.md) [![requests](http://img.shields.io/badge/PRs-welcome-green.svg)](/pulls)


## Overview

Web Starter Kit (WSK) - is an opinionated boilerplate for web development. Tools for building a great experience across many devices. A solid starting point for both professionals and newcomers to the industry.

## Table of Contents
1. [Install](#install)
2. [Commands](#commands)
3. [Structure](#structure)
4. [Templating](#templating)
5. [Styles](#styles)
6. [JavaScript](#javascript)
7. [Watching](#watching)
8. [Tasks](#tasks)
9. [Troubleshooting](#troubleshooting)
10. [Contributing](#contributing)
11. [License](#license)


## Install

Instruction for installation WSK please read in main repo [README.md](https://github.com/justcoded/web-starter-kit/blob/master/README.md#install)


## Commands

There are few commands available to help you build and test sites:


### Test

Test run with logs

```sh
$ npm run test
```

### Development mode

Watch For Changes & Automatically Refresh Across Devices

```sh
$ npm run dev
```

`dev` creates the `assets` folder in the root of the project.
This includes linting as well as image, script, stylesheet and HTML optimization.
Also, a [browsersync](https://browsersync.io/) script will be automatically generated, which will take care of precaching your sites resources.


### Build (production) mode

Serve the Fully Built & Optimized Site

```sh
$ npm run build
```

`build` creates the `production` folder in the root of the project with **minifying** files from `assets`. It will help you to create clear instances of code for the **production** or **further implementation**.


### Lint for HTML

```sh
$ npm run lint-html
```

### Lint & fix for JS

```sh
$ npm run lint-js
```

`lint-js` run the separate lint for JS files.  
Included in `dev` and `build`.

```sh
$ npm run fix-js
```

`fix-js` run lint and auto-fix (eslint method) for JS files.  
**Not included in any mode**.


### Lint for HTML & JS

```sh
$ npm run lint
```

## Structure

Your folder structure for WSK:
If you want to use our WSK, you need to know something about the structure.

```
├── assets                        #Root folder with project files & folders
  ├── html
     ├── partials                 #Folder for html components, that we can include into the templates
     ├── templates                #Folder for source html templates of pages
  ├── js                          #Folder for storing js files
     ├── modules                  #Folder for storing js modules
     ├── app.js                   #Main js file
  ├── scss
     ├── abstracts                #Folder for storing scss files
        ├── functions.scss        #Sass functions
        ├── helpers.scss          #Sass helpers
        ├── mixins.scss           #Sass mixins
        ├── variables.scss        #Sass variables that we can use in our scss files
     ├── base                     #Folder for storing base styles
        ├── forms.scss            #Sass styles for forms
        ├── main.scss             #Main scss file for base styles
        ├── reset.scss            #Sass reset
        ├── typography.scss       #Sass styles for text
     ├── components               #Global Reusable Presentational Components
     ├── layout                   #Global layout
     ├── pages                    #Global styles for pages
     ├── styles.scss              #Main scss file (can be used for importing another files)
  ├── system_files                #Folder with system files
  ├── tasks                       #Folder with tasks for gulpfile
  ├── vendor_entries              #Folder for vendor entries (plugins)
    ├── vendor.scss               #File for plugins styles
  ├── .babelrc                    #Config for Babel
  ├── .browserslistrc             #Config for autoprefixer
  ├── .editorconfig               #Config file for IDE
  ├── .eslintignore               #Eslint ignore list
  ├── .eslintrc                   #Config for eslint
  ├── .gitattributes              #Git config for defining attributes per path
  ├── .gitignore                  #Git ignore list
  ├── CONTRIBUTING.md
  ├── gulp-config.js              #Config for gulp
  ├── gulpfile.js                 #File with gulp tasks
  ├── LICENSE
  ├── package.json                #File with dependencies
  └── README.md
├── public                        #Folder with files after compiling
  ├── css                         #Folder with compiled styles
  ├── js                          #Folder with compiled js
  ├── custom-folder               #Folder with your sources, witch are not compiling (like - images, fonts, videos, audios)
  └── index.html                  #Compiled html file

```

In `package.json` you can find all the dependencies. In `assets` folder (`web-starter-kit` after renaming) you can find all sources for the project.  
In `public` folder (created after running `gulp`) you will find compiled files.
And in `public` folder you will put your custom folders with sources (like - images, fonts, videos, audios).

Use `assets/js/modules` to add your javascript modules (don't forget to include it in app.js), `assets/scss` folder to add your styles for the project. You can create, delete files and folders in `assets/scss`, but don't forget to include them in `assets/scss/styles.scss` file.

Use `assets/vendor_entries` to include plugins into your project.

## Templating

In our WSK you can use [gulp-file-include](https://github.com/haoxins/gulp-file-include) for **templating html** files. It's simple, just see [example](https://github.com/haoxins/gulp-file-include#examples) or demo example in our WSK folder `src/html`.

For linting html files in WSK used [HTMLHint](https://github.com/htmlhint/HTMLHint). 

## Styles

In our WSK you can use [Sass](http://sass-lang.com/) ([Dart-Sass](https://sass-lang.com/dart-sass) version compiler). Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

Sass is a CSS preprocessor — a layer between the stylesheets you author and the .css files you serve to the browser. Sass (short for Syntactically Awesome Style Sheets) plugs the holes in CSS as a language, allowing you to write DRY code that’ll be faster, more efficient, and easier to maintain. In our WSK we follow [Sass guidelines](https://sass-guidelin.es/#architecture).

So while normal CSS doesn’t yet allow things like variables, mixins (reusable blocks of styles), and other goodies, Sass provides a syntax that does all of that and more—enabling “super functionality” in addition to your normal CSS.

* All custom **scss** files locate in `assets/scss/` folder;
* Entry point for all scss is `assets/scss/styles.scss` you can **import** all your `.scss` files from here;
* All **extensions** must be installed by the [npm](https://docs.npmjs.com/cli/install);
* After installing the extension you must **include** its **css** or **sass** files in `assets/vendor_entries/vendor.scss` using `@import`.

You are able to add your own **custom sass files** and optionally **disable/enable** [postcss-sort-media-queries](https://github.com/solversgroup/postcss-sort-media-queries).
You can see this property `getFilesForStylesCustom` in the `gulp-config.js` file:

![image](https://user-images.githubusercontent.com/38295556/72220657-88b3c400-355b-11ea-90d7-4cbb5edb0f43.png)

Please don't forget to link all your **styles custom files** in **html** file:

![image](https://user-images.githubusercontent.com/38295556/72220723-4b036b00-355c-11ea-841a-ce218c304aed.png)

Also, you might want to add these sass files to the ignore list (check `getFilesToCopyProd` and `getFilesToCopy` properties in the `gulp-config.js` file). By default they will be copied to the `public/css` without grouping css media queries.

In our WSK you can use [PostCSS](https://postcss.org/). PostCSS is a tool for transforming CSS with JavaScript. Currently, PostCSS has more than 200 plugins. You can find all of the plugins in the [plugins list](https://github.com/postcss/postcss/blob/master/docs/plugins.md).

* You **don't need** to write **prefixes** for different browsers like `-webkit` it will be done by the [autoprefixer](https://github.com/postcss/autoprefixer).

In **build (production)** mode we use:

* **Group and sort CSS media queries** by [postcss-sort-media-queries](https://github.com/solversgroup/postcss-sort-media-queries). By **default** we use `desktop-first` sorting type, but you can change it in `gulp-config.js` to `mobile-first`.

In our WSK we use **CSS3 custom properties** and **relative units** `rem`. By default `1rem = 10px`.

## JavaScript

 In our WSK you can use ES6+. ES6+ isn't introducing anything other than improvements to the JavaScript language and a few new features.

 It is not an alternative syntax or language like CoffeeScript or TypeScript. It's good ol' fashioned JavaScript. The reason so many people are excited is that this version introduces a lot of much-needed improvements to the language.

 For bundling and transpiling `.js` files in our WSK we used [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/).

* All custom **javascript** files are located in `js` folder;
* Entry point for javascript is `assets/js/app.js` you can **import** all your **javascript** files from here using [ES6 import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) feature;
* All **javascript** is **babelified** so yes! You can use all kind of [ES6 features](https://babeljs.io/docs/learn-es2015/) here.
* All **extensions** must be installed by the [npm](https://docs.npmjs.com/cli/install);
* All third party libraries from `node_modules` and `src/vendor_entries`, are automatically separate in `vendor.js`.

For linting javascript files in WSK used [esLint](https://eslint.org/). esLint a linter tool for identifying and reporting on patterns in JavaScript (used [airbnb-base rules](https://www.npmjs.com/package/eslint-config-airbnb-base)) and some custom rules in file configuration `.eslintrc`.

## Watching

After run `gulp` by default gulp watching for your files in `assets` and `public` folders.
For `js`, `scss`, `html` and `vendors_entries` folders after change in included files, watcher run they tasks for compiling. For other folders and files in `public` watcher reload browser.

## Tasks

|Task | Description |
| --- | --- |
| browser-sync-server | Browsersync can watch your files as you work. Changes you make will either be injected into the page (CSS & images) or will cause all browsers to do a full-page refresh.|
| build-html | Compiles all html templates into html files. |
| build-js | Compiles all custom js from `assets/js` to `public/js` folder. Automatically separate your code and vendors. |
| build-styles | Compiles all scss from `assets/scss` to `public/css` folder. |
| build-styles-custom | Compiles all custom scss from `assets/scss` to `public/css` folder. |
| build-styles-vendors | Compiles all vendor styles from `assets/vendor_entries` to `public/css` folder. |
| clean-build | Removing all compiled files & folders from `public` and html files in root folder. |
| lint-html | Need to lint html files. |
| lint-js | Need to lint & fix js files. |
| watch | Task for watching all the changes. |

## Troubleshooting

If you find yourself running into issues during installation or running the tools, please check our [Troubleshooting](https://github.com/justcoded/web-starter-kit/wiki/Troubleshooting) guide and then open an [issue](https://github.com/justcoded/web-starter-kit/issues). We would be happy to discuss how they can be solved.


## Contributing

Contributions, questions and comments are all welcome and encouraged. For code contributions to Web Starter Kit, please see our [Contribution guide](CONTRIBUTING.md) before submitting a pull request. [Website](https://github.com/justcoded/web-starter-kit) related issues should be filed on the [Web Fundamentals](https://github.com/justcoded/web-starter-kit/issues) issue tracker.

## License

The MIT License (MIT).

Copyright (c) 2020 JustCoded the IP provided on other devices on your network.

