# load dynamicall external angular module

## Prerequisites
  - npm install
  - npm start

## Check out dynamically loading 
  - open DevTool and click Network panel
  - click ABOUT menu on top
  - click "click dynamic module" menu
  - check out Network panel of DevTool and it download "dynamic.module.js"
  - rendering "html template of TestComponent from DynamicModule" on ABOUT page

## Code
  - Loader: app/about/about.component.ts 
  - Loaded Module: app/plugins/dynamic.module.js
    The module that loaded dynamically must be *.js that compiled.