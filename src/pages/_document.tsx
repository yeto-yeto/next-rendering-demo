import type { DocumentContext, DocumentInitialProps } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta name="description" content="Next.jsのレンダリングのデモ。勉強用" />
          <meta property="og:type" content=" website" />
          <meta property="og:title" content="Next Rendering Demo" />
          <meta property="og:description" content="Next.jsのレンダリングのデモ。勉強用" />
          <meta property="og:site_name" content="Next Rendering Demo" />
          <meta property="og:image" content="/svg/monster_home.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// eslint-disable-next-line import/no-default-export
export default MyDocument
