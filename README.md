# Basic Webpack development environment
## Includes
 Setup for Babel + SASS + React + LuciadRIA v2020

## It does NOT Include
 ESLint, Prettier
 
## Description 
This basic webpack setup  demonstrate how to integrate the LuciadRIA 2020 API.  
The setup can deal with js, jsx, css, scss and multiple static files (eot|svg|ttf|woff|woff2|png|jpg).

In this sample an empty map is added to the webpage page

## How to install.  
Simply download or clone this project from Github.   
NOTE: If you have instaleld the git commandline your can type
```
git clone https://github.com/luciaddevelopmentplatform/react2020luciadria.git
```
Change directory to the location of the repository and install your npm dependencies.

## To setup the LuciadRIA API  type
```
npm install --save file_path_to_your_luciadria_package
```
### For the main package (NOTE: Addap the path to your local LuciadRIA folder)
```
npm install --save C:\luciad\LuciadRIA_2020.0.01\packages\es6\ria
```
### Optional packages (NOTE: Addap the path to your local LuciadRIA folder)
```
npm install --save C:\luciad\LuciadRIA_2020.0.01\packages\es6\geometry
npm install --save C:\luciad\LuciadRIA_2020.0.01\packages\es6\symbology
```

### Add LuciadMap controls from Github (optional)
```
npm install luciaddevelopmentplatform/luciadmapcontrols --save
```
### LuciadRIA license configuration

Simply copy a valid LuciadRIA license file into the folder './src/license'.
Make sure your license file is called 'luciadria_development.txt'

## Available Scripts

* npm start: Start development environment
* npm run build: Build for production
* npm run serve: Serve the production built

## Key functionality

- Parses and bundle js (Javascript)  and jsx (React)
- Development server with hot reload
- Bundle code for production
- Test server for production
- This environment can be used as starting point for web applications or libraries
- CSS/SCSS code is split from the final JS bundle for production
- Static files are served as files (not bundled)
- Integrated with LuciadRIA 2020
- It shows an empty 3D map
