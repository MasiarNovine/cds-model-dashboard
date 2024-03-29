'use client';

import {
  Grid,
  Column,
  FileUploader,
  FileUploaderItem,
} from '@carbon/react';
import { useState } from 'react';
import React from 'react';

export function uploadFiles(input, files = []) {
  Object.defineProperty(input, 'files', {
    writable: true,
    value: files,
  });

  Object.defineProperty(input, 'value', {
    set(newValue) {
      if (!newValue) {
        input.files.length = 0;
      }
    },
  });
}

export default function DashboardPage() {
  const [currentStatus, setCurrentStatus] = useState("");
  const [isLoaded, setLoaded] = useState(false);


  function onFileChanged(file) {
    if (file == "complete") {
      console.log("Loaded");
    }
  }

  const fileUploaderProps = {
    labelTitle: 'Upload files',
    buttonLabel: 'Add file',
    size: 'md',
    labelDescription: 'Max file size 1mb. Only .rds files are supported.',
    accept: ['.rds'],
    multiple: false,
    onChange: onFileChanged(currentStatus),
    filenameStatus: currentStatus,
    uuid: "file"
  }

  const fileUploader = <FileUploader {...fileUploaderProps} className='dashboard-page__file-uploader'/>;
  //const input = fileUploader.querySelectorAll('input');

  //const fileReader = FileReader();
  const array = new Array(1,2,3);
  console.log(fileUploader.input);

  return(
    <Grid className='dashboard-page' fullWidth>
      <Column lg={16} md={8} sm={4} className="dashboard-page__banner">
      {/*Dashboard Heading*/}
      <h1 className='dashboard-page__heading'>Dashboard</h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="dashboard-page__r2">
      {/*File loader*/}
      {fileUploader}
      </Column>
      <Column lg={16} md={8} sm={4} className="dashboard-page__r3">
      {/*Bottom*/}
      </Column>
    </Grid>
  )
}