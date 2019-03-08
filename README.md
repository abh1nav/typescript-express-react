Skeleton project to get started with an Express server + a React app in TypeScript.

To get started:

1. Clone this repo.
2. `make install`  
3. `make`  

## How does this work?

The `make` command will run:

1. `tsc` in watch mode that's responsible for compiling `src/server` and outputting to `dist/lib`.  
2. `nodemon` to watch changes to `dist/lib` and restart the node server after `tsc` is done compiling.  
3. `parcel` in watch mode that's responsible for compiling `src/client` and output to `dist/public`.

## Adding API Endpoints

To add new API endpoints, take a look at `src/server/server.js`. You can treat the `src/server` directory as you would any regular Express app.

## Adding React Components

To add new React components & containers, take a look at the `src/client` directory. It has a `components` folder preconfigured but you can modify the `src/client` structure to the way you like to structure your React apps. 
