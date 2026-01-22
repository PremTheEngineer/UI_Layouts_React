
import Header from "./Components/Header";
import Customer from "./Components/Customer";
import Main from "./Components/Main";

const CRMRecordTable = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Customer />
      <Main />
    </div>
  );
};

export default CRMRecordTable;
