import { useEffect } from "react";
import { data } from "./Table.data";
import S from "./Table.module.css";

export const Table = () => {
  useEffect(() => {
    const handleClickOutsideInput = (e: MouseEvent) => {
      if ((e.target as HTMLElement).hasAttribute("data-input")) return;
      const activeTr = document.querySelector('tr[data-is-edited="true"]');
      if (!activeTr) return;
      (activeTr as HTMLTableRowElement).dataset.isEdited = "false";
      activeTr.querySelectorAll("[data-input]").forEach((nodeInput) => {
        (nodeInput as HTMLDivElement).contentEditable = "false";
      });
    };
    document.addEventListener("click", handleClickOutsideInput);
    return () => {
      document.removeEventListener("click", handleClickOutsideInput);
    };
  }, []);

  const handleInputDoubleClick = (e: React.MouseEvent) => {
    const tr = (e.target as HTMLElement).closest("tr")!;
    tr.dataset.isEdited = "true";
    tr.querySelectorAll("[data-input]").forEach((nodeInput) => {
      (nodeInput as HTMLDivElement).contentEditable = "plaintext-only";
    });
  };

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
              <td>
                <div className={S.Input} onDoubleClick={handleInputDoubleClick} data-input data-name="rowName">
                  {row.rowName}
                </div>
              </td>
              <td>
                <div className={S.Input} onDoubleClick={handleInputDoubleClick} data-input data-name="salary">
                  {row.salary}
                </div>
              </td>
              <td>
                <div className={S.Input} onDoubleClick={handleInputDoubleClick} data-input data-name="equipmentCosts">
                  {row.equipmentCosts}
                </div>
              </td>
              <td>
                <div className={S.Input} onDoubleClick={handleInputDoubleClick} data-input data-name="overheads">
                  {row.overheads}
                </div>
              </td>
              <td>
                <div className={S.Input} onDoubleClick={handleInputDoubleClick} data-input data-name="estimatedProfit">
                  {row.estimatedProfit}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
