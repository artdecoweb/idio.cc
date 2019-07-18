# Idio Web Server In Node.JS

The _Idio_ web server is a distribution of the Koa2 web server with strategic middleware. It has been compiled to not include any 3rd party dependencies, ie., after installing this package, there will be only 1 more dependency in `node_modules` (mime-db). This is achieved with the work done of annotating the Koa2-infrastructure for Closure Compiler, and using it to create a single library file.

The annotations are written as JSDoc and don't include Typings, but the context property is accessed in the middleware. However, they include the `import` statements, because this package was written for VSCode (or other editors that support TypeScript type syntax). Typings are too technological and contradict the purpose of the _Idio_ web server which to be use pure JavaScript in building great _Node.JS_ applications.

<img src="img/idio.gif" alt="Idio Web Server With Session And Custom Middleware With Access To Context Autocompletion." />

<p>The use-cases that can be achieved with the middleware include:</p>

<ul>
* [Session management](session)
* Multipart/form-data form submission and file upload
* Serving static pages
* Enabling compression
</ul>

<section-break/>