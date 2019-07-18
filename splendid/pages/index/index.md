# Idio Web Server In Node.JS

<p>The _Idio_ web server is a distribution of the Koa2 web server with strategic middleware. It has been compiled to not include any 3rd party dependencies, ie., after installing this package, there will be only 1 more dependency in `node_modules` (mime-db). This is achieved with the work done of annotating the Koa2-infrastructure for Closure Compiler, and using it to create a single library file.</p>

<p>The annotations are written as _JSDoc_ and don't include Typings, but the context property is accessed in the middleware. However, _JSDoc_ comments include the `import` statements (``@type {import('package').Type}``), because this package was written for VSCode (or other editors that support TypeScript type syntax). Typings are too technological and contradict the purpose of the _Idio_ web server which to be use pure JavaScript in building great _Node.JS_ applications. </p>
<block-quote>The End User Experience For Hints Is Great</block-quote>
<block-quote> * Support for middleware session configuration documentation from within the IDE;</block-quote>
<block-quote> * Access to all Koa's context property in any middleware.</block-quote>
<block-quote> * Control the order in which the middleware is instantiated.</block-quote>
<block-quote> * Don't `use` middleware for all paths, just set the middleware functions up and return them in the ``middleware`` object, which can then be passed to router.</block-quote>

```js
const { middleware: MIDDLEWARE, app } = await idio({
  SESSION: {
    use: true, /* default false */
    config: {
      // ... config
    }
    keys: ['a', 'b'],
  },
  MIDDLEWARE: { // any existing middleware
    use: false,
    config: {
      // ... config
    }
    optionA: process.env.DATA_STORE,
    // ...options,
  },
  // always will be used
  async asFunction(ctx, next) {
    ctx.body = 'hello-world'
    await next()
  }
})
app.use(async (ctx, next) => {
  if (ctx.path == 'access') {
    return await MIDDLEWARE()
  }
  await next()
})
```

<img src="img/idio.gif" alt="Idio Web Server With Session And Custom Middleware With Access To Context Autocompletion." />

<p>The use-cases that can be achieved with the middleware include:</p>

<ul>
* [Session management](session)
* Multipart/form-data form submission and file upload
* Serving static pages
* Enabling compression
</ul>

<section-break/>