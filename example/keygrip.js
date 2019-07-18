import idio from '@idio/idio'

(async () => {
  /* start example */
  import { Keygrip } from '@idio/idio'

  const keys = new Keygrip(['rotat1', 'rotat2'])
  const { app, url } = await idio({
    session: { use: true, keys },
  })
  /* end example */
  console.log(url)
  app.destroy()
})()