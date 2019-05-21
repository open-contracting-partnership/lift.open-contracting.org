# OC Lift Landing Page

This repo manages the landing page for OCP's Lift program.

## Structure

The landing page is an `index.html` file hosted on Github pages.

## Development

While the structure is bare bones, there are still some basic build processes involved. The page uses [Gulp](https://gulpjs.com/), so [Node.js](https://nodejs.org/en/) and Gulp's CLI will need to be installed before you're ready to start contributing. It the Gulp CLI isn't already installed run `sudo npm install --global gulp-cli`.

After cloning the repo to your computer `cd` to the directory and run `npm install`. This will install Gulp and its dependencies. Once everything is installed run `gulp watch` and BrowserSync will launch the page, and watch for changes to the SCSS files.

### CSS

All styles are created in `main.scss` and exported to `main.css` with Gulp. When editing any CSS make sure Gulp is running in your terminal.

## Contributing

Please report issues directly on Github.
