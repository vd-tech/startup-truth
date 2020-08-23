import React from 'react';
import { useCMS } from 'tinacms';
import { InlineWysiwygFieldProps } from 'react-tinacms-editor';

export function InlineWysiwyg(props: InlineWysiwygFieldProps) {
  const cms = useCMS();
  const [{ InlineWysiwyg }, setEditor] = React.useState<any>({});

  React.useEffect(() => {
    if (!InlineWysiwyg && cms.enabled) {
      import('react-tinacms-editor').then(setEditor);
    }
  }, [cms.enabled]);

  if (InlineWysiwyg) {
    return <InlineWysiwyg {...props} />;
  }

  return props.children;
}
