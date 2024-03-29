'use client';

import {
  FileUploader
} from '@carbon/react';

const DataLoader = () => {
  return(
    <FileUploader
        labelTitle='Upload files'
        buttonLabel='Add file'
        size = 'md'
        labelDescription='Max file size 1mb. Only .rds files are supported.'
        accept={['.rds']}
        multiple={false}
        filenameStatus={filenameStatus}
        onClick={() => ({})}
        onLoadedData={()=>({})}
        uuid = "uploadFile"
    />
  );
}