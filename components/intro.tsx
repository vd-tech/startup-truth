import { BLOG_NAME, BLOG_DESCRIPTION } from '../lib/constants';

export default function Intro() {
  return (
    <section className="my-10">
      <h1 className="text-3xl font-extrabold">{BLOG_NAME}</h1>
      <h4>{BLOG_DESCRIPTION}</h4>
    </section>
  );
}
