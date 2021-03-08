// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public', // swの出力ディレクトリ
    // キャッシュの設定
    // runtimeCaching: []
  },
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
})
