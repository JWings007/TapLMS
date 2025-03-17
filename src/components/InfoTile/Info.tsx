function Info(props: {
  title: string;
  value: string;
  type: string;
  icon: string;
  description: string;
}) {
  return (
    <div
      className={`relative overflow-hidden flex flex-col justify-between gap-8 shadow-lg font-main h-full px-4 sm:px-8 py-5 rounded-4xl ${
        props.type === "green"
          ? "bg-gradient-to-l from-green-200 to-green-50"
          : props.type === "red"
          ? "bg-gradient-to-l from-red-200 to-red-50"
          : props.type === "purple"
          ? "bg-gradient-to-l from-purple-200 to-purple-50"
          : "bg-gradient-to-l from-yellow-200 to-yellow-50"
      } `}
    >
      <div className="flex items-center gap-3 z-10">
        <i
          className={`fi fi-rr-${
            props.icon === "coin"
              ? "coins"
              : props.icon === "days"
              ? "daily-calendar"
              : props.icon === "rupee"
              ? "indian-rupee-sign"
              : "laurel-user"
          } flex items-center text-lg ${
            props.icon === "coin"
              ? "bg-red-200 text-red-500"
              : props.icon === "days"
              ? "bg-yellow-200 text-yellow-500"
              : props.icon === "rupee"
              ? "bg-green-200 text-green-500"
              : "bg-purple-200 text-purple-500"
          } w-fit rounded-full p-2`}
        ></i>
        <h1 className="w-1/2 font-medium">{props.title}</h1>
      </div>
      <div className="z-10">
        <h1 className="text-3xl font-medium">{props.value}</h1>
        <p className="text-sm text-gray-500">{props.description}</p>
      </div>
      {/* <i
        className={`fi fi-rr-${
          props.icon === "coin"
            ? "coins"
            : props.icon === "days"
            ? "daily-calendar"
            : props.icon === "rupee"
            ? "indian-rupee-sign"
            : "laurel-user"
        } flex items-center text-lg sm:text-2xl ${
          props.icon === "coin"
            ? "bg-red-300 text-red-500"
            : props.icon === "days"
            ? "bg-yellow-300 text-yellow-500"
            : props.icon === "rupee"
            ? "bg-green-300 text-green-500"
            : "bg-purple-300 text-purple-500"
        } w-fit rounded-full p-2`}
      ></i>
      <div className="flex flex-col">
        <span className="text-xs tracking-wide lg:text-sm">{props.title}</span>
        <span className="text-2xl sm:text-4xl">{props.value}</span>
      </div> */}
    </div>
  );
}

export default Info;

{
  /* 
  
  
*/
}
