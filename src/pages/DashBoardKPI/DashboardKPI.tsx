import DashBoardLeft from "./Components/DashBoardLeft"
import DashboardRight from "./Components/DashboardRight"

const DashboardKPI = () => {
  return (
    <div className="flex h-full">
        <DashBoardLeft />
        <DashboardRight />
    </div>
  )
}

export default DashboardKPI
