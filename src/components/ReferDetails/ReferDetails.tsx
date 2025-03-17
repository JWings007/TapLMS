type Referral = {
  id: number;
  friendName: string;
  course: string;
  status: "Pending" | "Registered" | "Rejected";
  date: string;
};

const referralsData: Referral[] = [
  {
    id: 1,
    friendName: "John Doe",
    course: "React Basics",
    status: "Registered",
    date: "1 / Jan / 2025",
  },
  {
    id: 2,
    friendName: "Jane Smith",
    course: "Full Stack Dev",
    status: "Pending",
    date: "10 / Dec / 2025",
  },
  {
    id: 3,
    friendName: "Alice Brown",
    course: "UI/UX Design",
    status: "Rejected",
    date: "2 / Apr / 2024",
  },
  {
    id: 4,
    friendName: "Mike Ross",
    course: "Cyber Security",
    status: "Registered",
    date: "31 / Jan / 2024",
  },
];

const ReferDetails = () => {
  return (
    <div className="w-full max-w-5xl px-5 bg-white py-5 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="">
          <h2 className="text-xl font-semibold">Referral History</h2>
          <p className="text-gray-500 text-sm">
            See your referral tracking history
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full rounded-lg overflow-hidden text-nowrap">
          <thead className="">
            <tr className="text-gray-600 text-left text-sm bg-gray-100 border border-gray-100">
              <th className="p-3">Friend's Name</th>
              <th className="p-3">Course</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {referralsData.map((referral) => (
              <tr key={referral.id} className="hover:bg-gray-50 border border-gray-100">
                <td className="p-3 text-sm">{referral.friendName}</td>
                <td className="p-3 text-sm">{referral.course}</td>
                <td className="p-3 text-sm">{referral.date}</td>
                <td className="p-3 text-xs flex items-center gap-2">
                  <span className={`px-3 rounded-full ${
                        referral.status === "Registered"
                          ? "bg-green-200"
                          : referral.status === "Rejected"
                          ? "bg-red-200"
                          : "bg-yellow-200"
                      } flex items-center gap-2 py-1`}>
                        <span><i className={`fi fi-rr-${
                      referral.status === "Registered"
                        ? "completed"
                        : referral.status === "Rejected"
                        ? "fail"
                        : "clock-three"
                    } flex items-center justify-center`}></i></span>
                    {referral.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferDetails;
