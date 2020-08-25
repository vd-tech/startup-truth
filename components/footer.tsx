import Container from './container';
import { FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-col items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Subscribe to the Newsletter
          </h3>
          <div className="flex flex-col lg:flex-row justify-center lg:pl-4 lg:w-1/2 items-center">
            <input
              placeholder="Your first name"
              className="mx-3 bg-white hover:bg-white hover:text-black border border-accent-2 text-white  py-3 px-12 lg:px-8 duration-200 transition-colors mb-4 lg:mb-0"
            />
            <input
              placeholder="Your email address"
              className="mx-3 bg-white hover:bg-white hover:text-black border border-accent-2 text-white  py-3 px-12 lg:px-8 duration-200 transition-colors mb-4 lg:mb-0"
            />
            <a className="mx-3 bg-black hover:bg-white hover:text-black border border-accent-2 text-white py-3 px-12 lg:px-8 duration-200 transition-colors mb-4 lg:mb-0 rounded-full">
              Subscribe
            </a>
          </div>
          <h4 className="mb-2 md:mt-28">follow us</h4>
          <div className="flex">
            <a
              href="https://twitter.com/lightbody_james"
              rel="noopener nofollow"
              target="_blank"
              className="mx-2 text-2xl"
            >
              <FiTwitter />
            </a>
            <a
              href="http://www.linkedin.com/in/james-lightbody"
              rel="noopener nofollow"
              target="_blank"
              className="mx-2 text-2xl"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </Container>
      <div className={'border-b bg-black border-accent-7 text-white'}>
        <Container>
          <div className="py-1 text-sm sm:flex justify-between text-center items-center">
            <a href="https://vandyk.fr" target="_blank" rel="noopener nofollow">
              Made with <span className="text-red-600">❤️</span> by Paul
            </a>
            <div className="text-white font-hairline text-xs">
              Startup Truth ⓒ {new Date().getFullYear()}. All rights reserved.
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
