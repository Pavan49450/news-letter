import { Link } from "react-router-dom";
import style from "./PDFTable.module.css";

const tableContent = [{ title: "Times of India", id: "n1" }];

const PDFTable = () => {
  return (
    <div className={style.PDFTableBlock}>
      <table className={style.Table}>
        <tbody>
          <tr className={style.mainRow}>
            <th>English paper in pdf</th>
          </tr>
          {tableContent.map((content) => (
            <tr className={style.rows} key={content.id}>
              <td className={style.rowData}>
                <p>{content.title}</p>
                <Link
                  to={`/downloads/${content.id}`}
                  title="News paper download"
                >
                  Download
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PDFTable;
