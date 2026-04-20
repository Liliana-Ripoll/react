type Column<T> = {
  key: keyof T;
  label: string;
};

type DataTableProps<T> = {
  data: T[];
  columns: readonly Column<T>[];
};

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <table border={1}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={String(col.key)}>{String(row[col.key])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}