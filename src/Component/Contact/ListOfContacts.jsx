export default function ListOfContacts({ system }) {
  // const system = ["محمود احمدی", "09183399888", "ahmad@gmail.com", "استاد دانشگاه", "آشنا"]

  return (
    <>
      <div
        className={`cursor-pointer shadow-md w-full xl:w-[49%] mx-auto bg-red-700 h-20 rounded-[35px] border-r-[6px] flex flex-row justify-between pl-10 my-6 gap-6 relative break-words pr-[105px]`}
      >
        <img
          alt=""
          className={`absolute shadow-lg shadow-black z-10 right-0 -top-3 w-[100px] h-[100px] rounded-2xl`}
          src={system.photo}
        />

        {/* {system.map((sys, id) => ( */}
        <div
          className={`flex gap-1 pb-1 pt-2 flex-col items-start`}
          // ${ id === 0 ? "flex-col items-start" : "flex-col-reverse items-end"}
        >
          {system.fullname}
        </div>
        <div
          className={`flex gap-1 pb-1 pt-2 flex-col items-start`}
          // ${ id === 0 ? "flex-col items-start" : "flex-col-reverse items-end"}
        >
          {system.mobile}
        </div>
        <div
          className={`flex gap-1 pb-1 pt-2 flex-col items-start`}
          // ${ id === 0 ? "flex-col items-start" : "flex-col-reverse items-end"}
        >
          {system.email}
        </div>
        <div
          className={`flex gap-1 pb-1 pt-2 flex-col items-start`}
          // ${ id === 0 ? "flex-col items-start" : "flex-col-reverse items-end"}
        >
          {system.job}
        </div>
        {/* ))} */}
      </div>
    </>
  );
}
