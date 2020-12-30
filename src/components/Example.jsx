import React from 'react';
import { useTable, useSortBy } from 'react-table';

export default function Example() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns: [], data: []}, useSortBy);

  return (
    <table {...getTableProps()} className={classes.table}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr key="" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                key=""
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                <Box display="flex" alignItems="center">
                  {column.render('Header')}
                  {column.canSort && <Icon name="sort" size="small" />}
                </Box>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key="" {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td key="" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
