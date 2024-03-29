'use client';

import {
  Grid,
  Column,
  FileUploader,
  FileUploaderItem,
  Pagination
} from '@carbon/react';
import { useState } from 'react';
import React from 'react';
import SampleDataTable from '@/app/datatable/SampleTable.js'

// Sample table
const rows = [
  {
    id: "1",
    class: "1st",
    sex: "Male",
    age: "Child",
    survived: "No",
    freq: "0"
  },
  {
    id: "2",
    class: "1st",
    sex: "Male",
    age: "Child",
    survived: "No",
    freq: "0"
  },
  {
    id: "3",
    class: "1st",
    sex: "Male",
    age: "Child",
    survived: "No",
    freq: "35"
  },
  {
    id: "4",
    class: "Crew",
    sex: "Male",
    age: "Child",
    survived: "No",
    freq: "0"
  },
  {
    id: "5",
    class: "1st",
    sex: "Female",
    age: "Child",
    survived: "No",
    freq: "0"
  },
  {
    id: "6",
    class: "2nd",
    sex: "Female",
    age: "Child",
    survived: "No",
    freq: "0"
  },
  {
    id: "7",
    class: "3nd",
    sex: "Female",
    age: "Child",
    survived: "No",
    freq: "17"
  },
  {
    id: "8",
    class: "Crew",
    sex: "Female",
    age: "Child",
    survived: "No",
    freq: "0"
  }
]

const headers = [
  {
    key: "class",
    header: "Class"
  },
  {
    key: "sex",
    header: "Sex"
  },
  {
    key: "age",
    header: "Age"
  },
  {
    key: "survived",
    header: "Survived"
  },
  {
    key: "freq",
    header: "Freq"
  }
]

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
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
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
    labelDescription: 'Max file size 1mb. Only .json files are supported.',
    accept: ['.json'],
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
      <SampleDataTable
        headers={headers}
        rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
        className="dashboard-page__sample_table"
      />
      <Pagination
        totalItems={rows.length}
        backwardText='Previous page'
        forwardText='Next page'
        pageSize={currentPageSize}
        pageSizes={[5, 10, 15, 25]}
        itemsPerPageText='Items per page'
        onChange={({ page, pageSize  }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));
        }}
      />
      </Column>
    </Grid>
  )
}