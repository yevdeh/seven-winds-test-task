import { useState } from "react";
import { projects } from "./Sidebar.data";
import S from "./Sidebar.module.css";

export const Sidebar = () => {
  const [activeProjectId, setActiveProjectId] = useState(4);
  const [isOpened, setIsOpened] = useState(true);

  return (
    <aside className={S.Sidebar}>
      <button className={S.ToggleButton} onClick={() => setIsOpened(!isOpened)}>
        <span>
          Название проекта
          <span className={S.ToggleButtonSubtitle}>Аббревиатура</span>
        </span>
        <img className={S.ToggleButtonIcon} data-is-opened={isOpened} src="/icons/icon-expand.svg" alt="" />
      </button>
      <div className={S.ProjectsWrapper}>
        <ul className={S.Projects} data-is-opened={isOpened}>
          {projects.map((project, id) => (
            <li key={id}>
              <button
                className={S.Project}
                data-is-active={activeProjectId === id}
                onClick={() => setActiveProjectId(id)}
              >
                {project}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
