import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="preload" />
          <link rel="canonical" href="https://www.cheikh-hussein.com" />
          <meta name="author" content="Hassan Cheikh Hussein" />
         
          <meta
            name='description'
            content='Web Developpeur - Hassan Cheikh-Hussein - Compétences, Portfolio, Services'
          />
          
          <link rel='icon' href='/favicon.ico' />
          <script type="application/ld+json">
            {`
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Hassan Cheikh Hussein",
        "url": "https://www.cheikh-hussein.com",
      }
      `}
          </script>
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
