import data from '../data/components.json';

export default function Sappackage() {
  return (
    <>
      <table className="table-fixed mt-8 border border-collapse" id="dataTable">
        <thead>
          <tr className="border bg-indigo-900 text-white">
            <th className="border px-4 py-2 w-4">#</th>
            <th className="border px-4 py-2 text-left">
              SAP TCodes by Package
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr className="border" key={key}>
                <td className="border px-4 py-2 text-indigo-900">
                  {val.key + '.'}
                </td>
                <td className="border px-4 py-2 text-left">
                  <a
                    href={'/saptcodes/' + val.name}
                    className="text-indigo-500 hover:underline"
                  >
                    {val.name}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
