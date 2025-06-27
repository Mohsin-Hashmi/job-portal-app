

const JobCardSkeleton = () => {
  return (
    <div className="bg-[#2c2c2c] p-6 rounded-lg mb-4 animate-pulse">
      <div className="w-16 h-16 rounded-full bg-gray-700 mb-4" />
      <div className="h-5 bg-gray-700 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-700 rounded w-1/4 mb-2" />
      <div className="h-4 bg-gray-700 rounded w-2/3 mb-4" />
      <div className="h-10 w-40 bg-gray-700 rounded-xl" />
      <div className="h-10 w-40 bg-gray-700 rounded-xl mt-3" />
    </div>
  );
};
export default JobCardSkeleton;