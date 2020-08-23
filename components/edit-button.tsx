import React from 'react';
import { useCMS } from 'tinacms';
import { FiEdit2 } from 'react-icons/fi';
import { VscClose } from 'react-icons/vsc';
export default function EditButton() {
  const cms = useCMS();
  return (
    <button
      onClick={() => (cms.enabled ? cms.disable() : cms.enable())}
      className="rounded-md  hover:text-primary hover:border-purple-800 flex items-center px-4 py-2 h-6 "
    >
      {cms.enabled ? (
        <>
          <VscClose className="mr-2" /> Stop Editing{' '}
        </>
      ) : (
        <>
          <FiEdit2 className="mr-2" /> Edit this article
        </>
      )}
    </button>
  );
}
