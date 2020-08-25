import { InlineWysiwyg } from 'react-tinacms-editor';
import ReactMarkdown from 'react-markdown';
import styles from 'styles/components/markdown.module.css';
export default function PostBody({ content }) {
  return (
    <div className={`markdown-container max-w-2xl mx-auto ${styles.markdown}`}>
      <InlineWysiwyg
        name="content"
        format="markdown"
        // imageProps={{
        //   parse: (filename) => {
        //     console.log(filename);
        //     return `${process.env.NEXT_PUBLIC_API_URL}/${filename}`;
        //   },
        // }}
      >
        <ReactMarkdown
          source={content}
          // transformImageUri={(uri) =>
          //   `${process.env.NEXT_PUBLIC_API_URL}${uri}`
          // }
        />
      </InlineWysiwyg>
    </div>
  );
}
