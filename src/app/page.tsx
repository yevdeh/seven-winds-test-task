"use client";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Table } from "@/components/Table/Table";
import { Toolbar } from "@/components/Toolbar/Toolbar";
import S from "./page.module.css";

const Home = () => (
  <main className={S.Main}>
    <Toolbar />
    <div className={S.SidebarAndTitleAndTable}>
      <Sidebar />
      <div className={S.TitleAndTable}>
        <div className={S.TitleWrapper}>
          <h1 className={S.Title}>Строительно-монтажные работы</h1>
        </div>
        <Table />
      </div>
    </div>
  </main>
);

export default Home;
