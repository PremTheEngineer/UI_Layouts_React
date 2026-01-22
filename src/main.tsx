import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.tsx'
import SidebarPlusContent from './pages/SidebarPlusContent/SidebarPlusContent.tsx';
import ThreeColumnFeed from './pages/ThreeColumnFeed/ThreeColumnFeed.tsx';
import FilterPlusGrid from './pages/FilterPlusGrid/FilterPlusGrid.tsx';
import MapPlusListSplit from './pages/MapPlusListSplit/MapPlusListSplit.tsx';
import DashboardKPI from './pages/DashBoardKPI/DashboardKPI.tsx';
import CRMRecordTable from './pages/CRMRecordTable/CRMRecordTable.tsx';
import DataTable from './pages/DataTable/DataTable.tsx';
import KanbanBoard from './pages/KanbanBoard/KanbanBoard.tsx';
import ChatMessanger from './pages/ChatMessanger/ChatMessanger.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "/sidebar-plus-content",
    Component: SidebarPlusContent,
  },
  {
    path: "/three-column-feed",
    Component: ThreeColumnFeed,
  },
  {
    path: "/filter-plus-grid",
    Component: FilterPlusGrid,
  },
  {
    path: "/map-plus-list-split",
    Component: MapPlusListSplit,
  },
  {
    path: "/dashboard-kpi",
    Component: DashboardKPI,
  },
  {
    path: "/crm-record-table",
    Component: CRMRecordTable,
  },
  {
    path: "/data-table",
    Component: DataTable,
  },
  {
    path: "/kanban-board",
    Component: KanbanBoard,
  },
  {
    path: "/chat-messanger",
    Component: ChatMessanger,
  },
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
