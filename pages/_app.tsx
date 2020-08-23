import TinyCmsProvider from 'components/tiny-cms-provider';
import { GithubClient } from 'react-tinacms-github';
import { TinaCMS } from 'tinacms';
import 'styles/globals.css';

function App({ Component, pageProps }) {
  const cms = new TinaCMS({
    enabled: !!pageProps.preview,
    apis: {
      github: new GithubClient({
        proxy: '/api/proxy-github',
        authCallbackRoute: '/api/create-github-access-token',
        clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        baseRepoFullName: process.env.NEXT_PUBLIC_REPO_FULL_NAME,
        authScope: 'repo', // normally defaults to 'public_repo'
      }),
    },
    sidebar: pageProps.preview,
    toolbar: pageProps.preview,
  });

  return (
    <TinyCmsProvider {...pageProps}>
      <Component {...pageProps} />
    </TinyCmsProvider>
  );
}

export default App;
