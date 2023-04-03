import { statsData } from '../../utils/constants';

const Stats = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto -translate-y-[50%] mb-20">
      <div className="mx-4 flex flex-wrap md:flex-nowrap justify-center gap-y-5 bg-slate-500/90 rounded-3xl p-2 text-white text-sm md:text-base">
        {statsData.map((stats) => {
          return (
            <p
              key={stats.id}
              className="w-[50%] max-w-[300px] min-h-[80px] px-4 text-center flex flex-col justify-center items-center odd:border-r-2 md:border-r-2 md:last:border-r-0 hover:shadow-2xl"
            >
              <span className="font-bold text-xl md:text-2xl lg:text-3xl">
                {stats.value}
              </span>
              {stats.text}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default Stats;
