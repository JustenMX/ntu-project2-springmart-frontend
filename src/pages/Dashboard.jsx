import NavSideBar from "../components/NavSideBar";

function Dashboard() {
  return (
    <>
      <NavSideBar />
      <div className="p-4 sm:ml-64">
        {/* <ToastContainer /> */}
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <h1 className="text-center font-bold text-2xl mb-5">Dashboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4"></div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
