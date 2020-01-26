# GlFrbsExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## Attention: Ghostlab Dev Team

Please follow the steps below to reproduce the following error in the browser console:  

![Error](screenshot-01.png?raw=true)

1. Clone this repo.
2. `npm install -g @angular/cli`
2. `cd` into cloned directory and run `npm install`
3. run `ng s --open` to confirm that the application generates without errors:
![Error](screenshot-02.png?raw=true)
4. In Ghostlab3, add http://localhost:4200 and launch.
5. Visit http://192.168.1.224:8005 and view the console. The Firebase related error will appear after 10 seconds.

Building the application and pointing Ghostlab to the dist folder yields the same results as in #6 above.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
