import Document, { Html, Head, Main, NextScript } from 'next/document';

class RecipeLogDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RecipeLogDocument;