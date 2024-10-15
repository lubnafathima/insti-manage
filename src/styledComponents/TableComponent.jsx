const TableComponent = ({ tableHeader, tableData }) => {
  return (
    <>
      <table className="w-full mt-4 bg-gray-300 border border-gray-300 rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            {tableHeader.map((header, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, dataIndex) => (
            <tr key={dataIndex} className="hover:bg-gray-50 bg-white">
              {data.map((cell, cellIndex) => (
                <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
