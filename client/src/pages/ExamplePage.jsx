import { exampleList } from '../utils/example-list';

export default function ExamplePage() {
  return (
    <div className="p-4 grid gap-2 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {exampleList.map((data, index) => (
        <div key={index} className="card max-w-xs bg-base-100 shadow-lg">
          <figure>
            <img
              className="w-full max-h-[200px] object-cover"
              src={data.img}
              alt={data.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.title}
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
            <a
              role="button"
              href={data.url}
              target="_blank"
              rel="noreferrer"
              className="btn mt-4 min-h-0 h-auto py-3 bg-primary text-white hover:bg-secondary"
            >
              Tautan Kode
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
