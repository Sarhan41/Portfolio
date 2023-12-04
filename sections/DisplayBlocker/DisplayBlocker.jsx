const DisplayBlocker = () => {
  return (
    <div className="fixed inset-0 
    max-[270px]:flex items-center justify-center bg-gray-800 bg-opacity-95 z-50 hidden ">
      <p className="text-white font-bold text-lg text-center">
        <span>Please change</span> <br />
        <span>your screen width to</span> <br />
        <span>access information</span>
      </p>
    </div>
  );
};

export default DisplayBlocker;
