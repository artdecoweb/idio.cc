import idio from '@idio/idio'

(async () => {
  await idio({
    session: { use: true, keys:
        [ 'NON | example',
          'PROD| keys'] },
  })
})()