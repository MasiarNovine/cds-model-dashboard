'use client';

import React from "react";
import {
  DataTable,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell
} from '@carbon/react';

const SampleTable = ({rows, headers, className}) => {
  return (
    <DataTable rows={rows} headers={headers} isSortable={true} size={"md"}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <TableContainer title="Data table" description="Loaded sample data for model fitting."  className={className}>
            <TableToolbar>
              <TableToolbarContent>
                <TableToolbarSearch>
                </TableToolbarSearch>
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow {...getRowProps({ row })}>
                    {row.cells.map((cell) => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                </TableRow>
              ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
    </DataTable>
  );
};

export default SampleTable;