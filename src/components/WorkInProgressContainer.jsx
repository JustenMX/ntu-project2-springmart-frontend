import panarello from "../assets/panarello.mp4";

function WorkInProgress() {
  return (
    <div>
      <section className="h-screen bg-cover bg-no-repeat bg-blend-multiply relative flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={panarello} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative px-4 mx-auto max-w-screen-xl text-center z-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-9xl">
            Work in Progress
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Explore a curated selection of products where technology meets
            style. At Spring Mart, we&apos;re passionate about delivering
            cutting-edge innovations for your everyday needs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default WorkInProgress;
