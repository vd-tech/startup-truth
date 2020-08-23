import React, { useEffect } from 'react';
import { useCMS } from 'tinacms';
import { useRouter } from 'next/router';
import styles from 'styles/components/loading-text-dots.module.css';

export default function Login() {
  const cms = useCMS();
  const router = useRouter();

  useEffect(() => {
    if (cms.enabled) {
      // router.push('/');
    } else {
      cms.enable();
    }
  }, [cms, router]);

  return (
    <div className="place-center min-h-screen p-4 text-center max-w-sm mx-auto">
      <div>
        <h2 className="text-4xl leading-none  mb-4">
          Login with{' '}
          <b className="text-primary text-6xl leading-none font-extrabold">
            STRAPI
          </b>
        </h2>

        <p className="text-center">
          please wait
          <span className={styles.dots}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps({ preview, previewData }) {
  if (preview) {
    return {
      props: { preview, ...previewData },
    };
  }

  return {
    props: { preview: false },
  };
}
