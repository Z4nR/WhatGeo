import { getProvDetailById } from '@/utils/network';
import { useQuery } from '@tanstack/react-query';

export default function DetailProvCard({ setDetail, provId }) {
  const { data } = useQuery({
    queryKey: ['prov-detail', provId],
    queryFn: async () => await getProvDetailById(provId),
    gcTime: Infinity,
  });

  return (
    <div className="card w-full mt-4 bg-gray-100 shadow-lg">
      <div className="card-body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute right-5 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setDetail(false);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        <div className="card-title justify-center">
          <h2>Provinsi {data?.province}</h2>
        </div>
        <div className="divider mt-0 mb-0" />
        <div className="flex w-full">
          <div className="flex-[3] card">
            <h3 className="font-medium text-center mb-2">Detil</h3>
            <div className="flex flex-row gap-1">
              <div className="flex-grow-[2]">
                <h4 className="text-sm">Diresmikan </h4>
                <h4 className="text-sm">Ibukota </h4>
                <h4 className="text-sm">Koordinat Ibukota </h4>
                <h4 className="text-sm">Slogan </h4>
              </div>
              <div className="flex-grow-[8]">
                <h4 className="text-sm">
                  : <b>{data?.created}</b>
                </h4>
                <h4 className="text-sm">
                  : <b>{data?.capital}</b>
                </h4>
                <h4 className="text-sm">
                  :{' '}
                  <i className=" text-xs">
                    ({data?.lat}, {data?.long})
                  </i>
                </h4>
                <h4 className="text-sm">
                  : <b>{data?.slogan}</b>
                </h4>
              </div>
            </div>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex-[7] card max-h-40">
            <h3 className="font-medium text-center mb-2">Ringkasan</h3>
            <div className="overflow-y-scroll">
              <h4 className="text-sm text-justify">{data?.desc}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
