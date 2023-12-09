import { Link } from 'react-router-dom';
import { exampleList } from '../utils/example-list';

export default function ExamplePage() {
  return (
    <div className="p-4">
      {exampleList.map((data, index) => (
        <div key={index} className="card max-w-xs bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full max-h-[200px] object-cover"
              src={data.img}
              alt={data.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <Link to={data.url} target="_blank" rel="noreferrer">
                {data.title}
              </Link>
              <div className="badge badge-md badge-secondary">{data.type}</div>
            </h2>
            <p>{data.desc}</p>
            <div className="divider mt-0 mb-0" />
            <div className="card-actions justify-end">
              {data.language.map((badge, index) => (
                <figure key={index}>
                  <img src={badge} />
                </figure>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
