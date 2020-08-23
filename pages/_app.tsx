import 'styles/index.css';

import {
  StrapiMediaStore,
  StrapiProvider,
  StrapiClient,
} from 'react-tinacms-strapi';
import { TinaCMS, TinaProvider } from 'tinacms';

import { useCMS } from '@tinacms/react-core';
import { useMemo } from 'react';

export default function MyApp({ Component, pageProps }) {
  const cms = useMemo(
    () =>
      new TinaCMS({
        sidebar: false,
        toolbar: pageProps.preview,
        enabled: pageProps.preview,
        apis: {
          strapi: new StrapiClient(process.env.NEXT_PUBLIC_STRAPI_URL),
        },
        media: {
          store: new StrapiMediaStore(process.env.NEXT_PUBLIC_STRAPI_URL),
        },
      }),
    [pageProps.preview]
  );
  return (
    <TinaProvider cms={cms}>
      <StrapiProvider onLogin={enterEditMode} onLogout={exitEditMode}>
        <Component {...pageProps} />
      </StrapiProvider>
    </TinaProvider>
  );
}

const enterEditMode = () => {
  return fetch(`/api/preview`).then(() => {
    window.location.href = window.location.pathname;
  });
};

const exitEditMode = () => {
  return fetch(`/api/reset-preview`).then(() => {
    window.location.reload();
  });
};
