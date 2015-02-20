# grunt-doxy

> It'll generate dox for your project and wash yer dishes too!

grunt-doxy is a grunt plugin for generating markdown documentation for your
project using [dox](https://github.com/tj/dox) and
[doxme](https://github.com/tmcw/doxme).

This plugin is written with ES6 using [babel](http://babeljs.io/).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install dox --save-dev
npm install grunt-doxy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-doxy');
```

## The "doxy" task

In your project's Gruntfile, add a section named `doxy` to the data object
passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  doxy: {
    options: {
      doxme: {
        // These options go to doxme.
      }
    },
    target: {
      files: [{
        expand: true,
        cwd: 'lib/',
        src: ['**/.js']
      }]
    },
  },
});
```
