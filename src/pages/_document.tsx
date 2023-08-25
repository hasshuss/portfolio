import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Hassan Cheikh Hussein",
        "familyName":"Cheikh Hussein",
        "givenName":"Hassan",
        "additionalName": "hassou",
        "url": "https://www.cheikh-hussein.com",
        "birthPlace": "Colombes",

    };

    return (
      <Html lang="fr">
        <Head>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="preload" />
          <link rel="canonical" href="https://www.cheikh-hussein.com" />
          <meta name="author" content="Hassan Cheikh Hussein" />
          <meta name="description" content="Web Developpeur - Hassan Cheikh-Hussein - Compétences, Portfolio, Services" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
