import { useParams } from 'react-router-dom';
import { featuresData } from '../data/index';

const EventDetails = () => {
  const { slug } = useParams();
  const eventDetail = featuresData.find((feature) => feature.slug === slug);

  return (
    <div className="flex flex-col">
      <div className="container p-auto mt-20 mx-auto p-4">
        {eventDetail ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800">{eventDetail.title}</h1>
            <p className="mt-4">{eventDetail.longDescription}</p>
          </>
        ) : (
          <h1 className="text-3xl font-bold text-gray-800">Event not found</h1>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
