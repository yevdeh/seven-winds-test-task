import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Table } from "@/components/Table/Table";
import { Toolbar } from "@/components/Toolbar/Toolbar";
import S from "./page.module.css";

const Home = () => (
  <main className={S.Main}>
    <Toolbar />
    <div className={S.SidebarAndTable}>
      <Sidebar />
      <Table />
    </div>
  </main>
);

export default Home;
