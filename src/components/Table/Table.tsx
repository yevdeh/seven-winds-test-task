import { data } from "./Table.data";
import S from "./Table.module.css";

export const Table = () => {
  return (
    <div className={S.TableWrapper}>
      <table className={S.Table}>
        <thead>
          <tr>
            <th>Уровень</th>
            <th>Наименование работ</th>
            <th>Основная з/п</th>
            <th>Оборудование</th>
            <th>Накладные расходы</th>
            <th>Сметная прибыль</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.rowName}>
              <td>
                <div className={S.IconWrapper} data-level={row.level}>
                  <img src="/icons/icon-file.svg" alt="" />
                  <img src="/icons/icon-trash.svg" alt="" />
                </div>
              </td>
              <td>{row.rowName}</td>
              <td>{row.salary}</td>
              <td>{row.equipmentCosts}</td>
              <td>{row.overheads}</td>
              <td>{row.estimatedProfit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
