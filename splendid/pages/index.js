/**
 * @type {import('splendid').Page}
 */
export const main = {
  title: 'Idio Web Server In Node.JS',
  url: 'index.html',
  file: 'index',
  menuUrl: '/',
  og: {
    description: 'The compiled distribution of Koa2 and essential web middleware that installs just a single other dependency.',
  },
}

/** @type {Object<string,import('splendid').Page>} */
const d = {
  'session': {
    file: 'session',
    title: 'Session Management',
    url: 'session.html',
    og: {
      description: 'Signed Logins and Admins In Idio Node.JS Web Server',
    },
  },
}

export default d