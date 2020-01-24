# Basic Webpack development environment
## Includes
 Setup for Babel + SASS + React + LuciadRIA v2020

## It does NOT Include
 ESLint, Prettier
 
## Description this basic Webpack
It demonstrate how to add the LuciadRIA 2020 API.  
This basic setup can deal with js, jsx, css, scss and multiple static files (eot|svg|ttf|woff|woff2|png|jpg).

In this sample an empty map is added to the page

## How to use.  
Simply download or clone your this project from Github
To setup LuciadRIA type

* npm install --save file_path_to_your_luciadria_package

Example:

### Main package

* npm install --save C:\luciad\LuciadRIA_2020.0.05b\packages\es6\ria

### Optional packages
* npm install --save C:\luciad\LuciadRIA_2020.0.05b\packages\es6\geometry
* npm install --save C:\luciad\LuciadRIA_2020.0.05b\packages\es6\symbology

### LuciadRIA license setup

Simply copy a valid  LuciadRIA license in the folder './src/license'.
Make sure your license file is called 'luciadria_development.txt'

##Scripts:

* npm start: Start development environment
* npm run build: Build for production
* npm run serve: Serve the production built

## Key functionality

- Parses and bundle js (Javascript)  and jsx (React)
- Bundle code for production
- Test server for production
- This environment can be used as starting point for web applications or libraries
- CSS/SCSS code is split from the final JS bundle for production
- Static files are served as files (not bundled)
- Easy to integrate with LuciadRIA 2020



 
 
