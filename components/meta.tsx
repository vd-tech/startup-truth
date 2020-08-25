import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="theme-color" content="#000000" />

      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <meta
        name="description"
        content="The Real Truth of Life in a South African Startup"
      />
      <title>
        Startup Truth - The Real Truth of Life in a South African Startup
      </title>
      <meta property="og:image" content="/startup.jpg" />
    </Head>
  );
}
