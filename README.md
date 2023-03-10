# Open Contracting Lift 

## Installation

The site uses Node.js for development functions. If you don't already have it installed [start there](https://nodejs.org/en/). You'll also want a text editor for modifying site content. [VS Code](https://code.visualstudio.com/) is a good one.

- Clone the repository using Git.
- Navigate to the repository's root directory and run `npm install`. 

That's it–the site should be installed locally.

- `npm run start` launches a local version at localhost:8000. This script run in the background to watch for changes an live reload the site until you end the script. To end it press `control` + `c`.
- `npm run build` builds all static HTML files

## Site Pages

Pages are created in the `src/pages` directory. Each page uses the Handlebars templating syntax to pull in `partials`.

The `partials` files are the smallest unit of templates that allow for content variables to be easily translated from data files. The variables use the [Handlebars](https://handlebarsjs.com/) templating syntax to pull in content from the `data` folder.

## The Docs Folder

The `docs` folder serves the static HTML. The files in this folder are generated, therefore they should never be edited directly as any changes will be overwritten by files in `src` when the site is built. 

## Managing Web Copy

The primary data source for content is the language YAML file in the `data` folder. Let's use the English file for example `data/en.yml`.

This file contains all English web copy—all pages in one file.

YAML is very particular about indentation. If there are any issues with building the site after modifying a YAML file indentation is very likely the culprit. When editing take care not to accidentally modify level of indentation. Special characters (like colons) can be another source of quirks and require special care. Sections using special characters should use a `>` character then indent on a new line below like this:
```
text: >
  Characters that need to be escaped: colons
```

### FAQ Page

Questions use Panini's `{{#each}}` function. This allows the YAML file to define the number of questions without need to modify any HTML files. `{{#each}}` requires a unique key for each element which is why questions are appended with a number e.g. `Question1`, `Question2`. When adding a new question please make sure to follow this format. Note that the order is determined by the order in which questions appear in the YAML file. Numbers don't affect order, only serve as a unique key for each.  

Details for each question are often lengthy and use multiple paragraphs and lists. Because of this they should be added with HTML tags in the YAML file and being on a new indented line preceeded by a `>` character.

### Committing changes via Github

After making any changes to the site the final step is always to run `npm run build`. This will package and optimize files for the `docs` folder. Only after successfully building the site are files ready to be committed to the repository. 
