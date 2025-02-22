
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 771, hash: 'e95d9cdab7e0e808c74a155a0c0b00fbb7654ff3ca8fb3fc3c3706799b0ddcd2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1284, hash: '703791b59d69401bf8e907a0cc58ef0029c8e3a054ad415966bc666e1a094b4a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22976, hash: '1d8e7d54eac806b1c1e1c5afe45fbe179bf23d21b3ec24850592c4fb592263bb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
