import { getProvDetailById } from '@/utils/network';
import { useQuery } from '@tanstack/react-query';

export function DetailCardProv({ setDetail, provId }) {
  const { data } = useQuery({
    queryKey: ['prov-detail', provId],
    queryFn: async () => await getProvDetailById(provId),
    gcTime: Infinity,
  });

  return (
    <div className="card w-full mt-4 bg-base-100 shadow-lg">
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
          <div className="flex-grow-0 card">
            <h3 className="font-medium text-center mb-2">Detil</h3>
            <h4 className="text-sm">
              Diresmikan : <b>{data?.date_created}</b>
            </h4>
            <h4 className="text-sm">
              Ibu kota : <b>{data?.capital}</b>{' '}
              <i className=" text-xs">
                ({data?.lat}, {data?.long})
              </i>
            </h4>
            <h4 className="text-sm">Slogan :</h4>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="flex-grow card">
            <h3 className="font-medium text-center mb-2">Ringkasan</h3>
            <h4 className="text-sm">{data?.desc}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DetailCradCity() {
  return (
    <div className="card w-full mt-4 bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title justify-center">Kota Tangerang</h2>
        <div className="divider mt-0 mb-0" />
        <div className="collapse collapse-arrow bg-gray-100">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-base font-medium">Deskripsi</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-gray-100">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-base font-medium">Destinasi</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default { DetailCardProv, DetailCradCity };
