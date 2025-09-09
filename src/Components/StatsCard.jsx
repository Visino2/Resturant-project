const StatsCard = ({ title, value, subtitle }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col hover:shadow-xl transition-shadow duration-200">
      <h3 className="text-gray-600">{title}</h3>
      <p className="text-2xl font-bold my-2">{value}</p>
      <p className="text-gray-400 text-sm">{subtitle}</p>
    </div>
  );
};

export default StatsCard;


