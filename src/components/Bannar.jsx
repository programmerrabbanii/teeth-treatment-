import bannarImg from "../assets/beautiful-girl-sitting-dentist-s-office.jpg";

const Bannar = () => {
  return (
    <div className="hero  w-11/12 mx-auto py-7">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between lg:items-center">
        {/* Image section */}
        <img
          src={bannarImg}
          className="lg:w-1/2 w-full  rounded-lg shadow-2xl"
          alt="Dental Care"
        />
        {/* Content section */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold">
            Exceptional dental care for every stage of your journey
          </h1>
          <p className="py-6">
            We are committed to providing top-notch dental care in a comfortable and friendly environment.
          </p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
