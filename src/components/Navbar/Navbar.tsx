function Navbar() {
  return (
    <div className="w-full sm:flex justify-between items-center py-4 px-5 hidden">
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center gap-10">
        <div>
          <button className="flex items-center justify-center gap-3 font-main">
            <span>User</span>
            <i className="fi fi-rr-circle-user flex items-center justify-center text-4xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
