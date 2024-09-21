import Dashboard from "../../assets/explorePlatform/dashboard.jpg";
const ExplorePlatform = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#fdfdff] to-[#fbfcfe] w-full">
      <h1 className="text-[30px] sm:text-[33px] md:text-[43px] lg:text-[53px] text-[#293745] font-bold mb-2  md:leading-[66px]">
        All of your work in <br /> one place
      </h1>
      <p className="text-[1.25rem] text-[#293745] py-4 mx-8 sm:mx-16">
        Digitize every element of your operation and find areas <br /> of
        improvement every step of the way
      </p>
      <button className="bg-[#6559ff] text-white px-5 py-3 rounded-lg text-[1rem] mb-14 mt-4">
        Explore the platform
      </button>
      <img src={Dashboard} alt="" />
    </div>
  );
};
export default ExplorePlatform;
