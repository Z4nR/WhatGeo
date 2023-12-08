import { Link } from 'react-router-dom';
import { exampleList } from '../utils/example-list';

export default function ExamplePage() {
  return (
    <div className="py-4 px-6">
      {exampleList.map((data, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <Link to={data.url} target="_blank" rel="noreferrer">
                {data.title}
              </Link>
              <div className="badge badge-secondary">{data.type}</div>
            </h2>
            <p>{data.desc}</p>
            <div className="card-actions justify-end">
              {data.language.map((badge, index) => (
                <div key={index} className="badge badge-outline">
                  {badge[index]}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
