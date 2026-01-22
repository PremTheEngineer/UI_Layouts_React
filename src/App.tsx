import { Link } from "react-router";

function App(): React.ReactElement {
  return (
    <div className="h-full flex items-center justify-center bg-neutral-400">
      <div className="w-140 border-2 rounded-md bg-neutral-200 p-4">
        <h1 className="text-center font-bold mb-2">
          UI Layouts assignment - React + React Router + TS + Tailwind
        </h1>
        <p>
          Link to the assignment:{" "}
          <a className="text-blue-500" href="https://6hm32p-5173.csb.app/">
            GO
          </a>
        </p>
        <p className="mb-2">
          Github repo for the same:{" "}
          <a
            className="text-blue-500"
            href="https://github.com/PremTheEngineer/UI_Layouts_React"
          >
            GO
          </a>
        </p>
        <h2 className="font-bold mb-2">
          Navigate to pages by clicking below 👇
        </h2>
        <div className="grid gap-2 grid-cols-2">
          <Link to="/three-column-feed">
            <div className="p-2 border rounded bg-amber-100">
              Three Column Feed
            </div>
          </Link>
          <Link to="/sidebar-plus-content">
            <div className="p-2 border rounded bg-amber-100">
              Sidebar Plus Content
            </div>
          </Link>
          <Link to="/filter-plus-grid">
            <div className="p-2 border rounded bg-amber-100">
              Filter Plus grid
            </div>
          </Link>
          <Link to="/map-plus-list-split">
            <div className="p-2 border rounded bg-amber-100">
              Map Plus List Split
            </div>
          </Link>
          <Link to="/dashboard-kpi">
            <div className="p-2 border rounded bg-amber-100">
              Dashboard KPI
            </div>
          </Link>
          <Link to="/crm-record-table">
            <div className="p-2 border rounded bg-amber-100">
              CRM Record Table
            </div>
          </Link>
          <Link to="/data-table">
            <div className="p-2 border rounded bg-amber-100">
              Data Table
            </div>
          </Link>
          <Link to="/kanban-board">
            <div className="p-2 border rounded bg-amber-100">
              Kanban Board
            </div>
          </Link>
          <Link to="/chat-messanger">
            <div className="p-2 border rounded bg-amber-100">
              Chat Messanger
            </div>
          </Link>
          <Link to="/profile-plus-feed">
            <div className="p-2 border rounded bg-amber-100">
              Profile Plus Feed
            </div>
          </Link>
          <Link to="/search-results">
            <div className="p-2 border rounded bg-amber-100">
              Search Results
            </div>
          </Link>
          <Link to="/video-player">
            <div className="p-2 border rounded bg-amber-100">
              Video Player
            </div>
          </Link>
          <Link to="/e-commerce-pdp">
            <div className="p-2 border rounded bg-amber-100">
              E-Commerce PDP
            </div>
          </Link>
          <Link to="/live-score">
            <div className="p-2 border rounded bg-amber-100">
              Live Score
            </div>
          </Link>
          <Link to="/settings-page">
            <div className="p-2 border rounded bg-amber-100">
              Settings Page
            </div>
          </Link>
          <Link to="/calendar">
            <div className="p-2 border rounded bg-amber-100">
              Calendar
            </div>
          </Link>
          <Link to="/form-builder">
            <div className="p-2 border rounded bg-amber-100">
              Form Builder
            </div>
          </Link>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
