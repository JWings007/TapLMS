function Info(props: {
  title: string;
  value: string;
  type: string;
  icon: string;
}) {
  return (
    <div
      className={`flex flex-col gap-3 shadow-lg font-main ${
        props.type === "green"
          ? "bg-gradient-to-l from-green-200 to-green-50"
          : props.type === "red"
          ? "bg-gradient-to-l from-red-200 to-red-50"
          : "bg-gradient-to-l from-yellow-200 to-yellow-50"
      } px-5 sm:py-5 sm:px-10 py-2 rounded-b-4xl rounded-tr-4xl`}
    >
      <i
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
            : props.icon === "days"
            ? "bg-green-300 text-green-500"
            : "bg-green-300 text-green-500"
        } w-fit rounded-full p-2`}
      ></i>
      <div className="flex flex-col">
        <span className="text-xs tracking-wide lg:text-sm">{props.title}</span>
        <span className="text-2xl sm:text-4xl">{props.value}</span>
      </div>
    </div>
  );
}

export default Info;
