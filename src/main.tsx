import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.tsx'
import SidebarPlusContent from './pages/SidebarPlusContent/SidebarPlusContent.tsx';
import ThreeColumnFeed from './pages/ThreeColumnFeed/ThreeColumnFeed.tsx';
import FilterPlusGrid from './pages/FilterPlusGrid/FilterPlusGrid.tsx';
import MapPlusListSplit from './pages/MapPlusListSplit/MapPlusListSplit.tsx';

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
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
