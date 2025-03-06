import S from "./Toolbar.module.css";

export const Toolbar = () => {
  return (
    <div className={S.Toolbar}>
      <img src="/icons/icon-grid.svg" alt="" />
      <img src="/icons/icon-revert.svg" alt="" />
      <div className={S.Tabs}>
        <div className={S.Tab} data-is-active="true">
          Просмотр
        </div>
        <div className={S.Tab}>Управление</div>
      </div>
    </div>
  );
};
