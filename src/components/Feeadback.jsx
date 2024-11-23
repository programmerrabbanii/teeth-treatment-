const Feedback = ({ feed }) => {
    const { name, image, feedback, date, rating } = feed;
  
    return (
      <div className="mt-10">
        <h3 className="text-2xl text-center mb-6 font-bold text-gray-800">
          Customer Feedback
        </h3>
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col md:flex-row items-center gap-6">
          {/* Feedback Image */}
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          {/* Feedback Content */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
            <p className="mt-3 text-gray-600">{feedback}</p>
            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <div className="rating flex">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`mask mask-star-2 ${
                      index < rating ? "bg-orange-400" : "bg-gray-200"
                    } w-6 h-6`}
                  ></span>
                ))}
              </div>
              <span className="text-sm text-gray-500">({rating}/5)</span>
            </div>
            {/* Date */}
            <p className="mt-2 text-sm text-gray-500">Reviewed on: {date}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Feedback;
  