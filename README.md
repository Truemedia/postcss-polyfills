postcss-polyfills
=================

A PostCSS plugin which implement polyfills recommended on caniuse.com into your CSS where applicable

This library aims to fill the void left by polyfills for several browsers that require javascript work-arounds which can be invoked using CSS classes and custom CSS properties.

Think of it as the next best thing to have alongside autoprefixer using polyfills your already familliar with, without having to type a single line of custom CSS.

This is a very early work in progress but the idea is to approach this using the same API as autoprefixer, with some modifications to allow certain polyfill javascript libraries to be injected into your project using a single script entry point.

== Few aims of the project ==

- Build an ie.htc (google .htc files and you'll understand why) incorporating as much functionality as possible from existing IE polyfill projects such as CSS3PIE and background-size-polyfill

- Wrap .htc property invokers inside classes that require a polyfill from the .htc file (the above 2 projects would be a good start for this)

- Ignore existing polyfills and maybe recommend removing them (if the API supports them)