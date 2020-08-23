import { useGithubAuthRedirect } from 'react-tinacms-github';
import LoadingTextDots from 'components/loading-text-dots';

// Our GitHub app redirects back to this page with auth code
export default function Authorizing() {
  // Let the main app know, that we received an auth code from the GitHub redirect
  useGithubAuthRedirect();

  return (
    <div className="place-center min-h-screen p-4 text-center max-w-xs mx-auto">
      <div>
        <h2 className="text-4xl leading-none">
          Authorizing with{' '}
          <b className="text-primary text-6xl leading-none">GitHub</b>
        </h2>
        <p className="text-center">
          please wait
          <LoadingTextDots />
        </p>
      </div>
    </div>
  );
}
