## The Login And Admin Operations In Idio

<p>The Koa2 web-server actually includes the cookies management package called cookies. The session service package, **koa-session** instantiates the session object for the context on each request whenever the `session` property is accessed, and uses cookies to store the info that is written to ``ctx.session``.</p>

<p>The cookies are signed which means that they are hashed and the key is sent to the user in a separate `{cookie-name}:sig` cookie. This ensures that users cannot see what's inside of the cookie, because the hash is signed with the key properties set at the start of the server. The keys configuration passed to the session object will be set on the ``app`` object, otherwise the session middleware constructor will throw an error.</p>

* [Session](https://github.com/idiocc/session) The session provides abstraction over cookies, manages the state in the cookie.
* [Cookies](https://github.com/idiocc/cookies) The underlying Koa-consumed library, which can use KeyGrip. The idio fork puts `cookies` and _Keygrip_ together.
* [Keygrip](https://github.com/idiocc/cookies/blob/71da62bc46a5cbd17be0cea0c0c38f68f97dd3ba/src/index.js#L31) The class to rotate and validate keys.

<Code src="example/session.js" />

The keys object can be a [Keygrip](https://github.com/idiocc/cookies#class-keygrip) instance, which must be imported from `@idio` as well, however the below is equivalent to passing the keys as an array:

<Code src="example/keygrip.js" />