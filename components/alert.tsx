import Container from './container';
import cn from 'classnames';

export default function Alert({ preview }) {
  if (!preview) return null;
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          This is page is a preview.{' '}
          <a
            href="/api/reset-preview?redirect=true"
            className="underline hover:text-cyan duration-200 transition-colors"
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </div>
      </Container>
    </div>
  );
}
