import { getDestiny } from '@/utils/map-helper';

export default function ListDestiny({ destiny }) {
  const { style, type } = getDestiny(destiny?.destiny_type);
  return (
    <div className={`card border-2 ${style}`}>
      <div className="card-body">
        <div className="badge">{type}</div>
        <h4 className="text-lg font-medium text-ellipsis">
          {destiny?.place_name}
        </h4>
        <h4 className="text-xs">
          Koordinat Lokasi :{' '}
          <i className="text-xs">
            ({destiny?.latitude}, {destiny?.longitude})
          </i>
        </h4>
      </div>
    </div>
  );
}
