/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import glitch from "../assets/glitch.mp4";
import glitchimg from "../assets/glitchimg.png";

function DevSocialCards(props) {
  const { devImgSrc, devName, devRole, devLinkedIn, devGithub } = props;
  return (
    <div className="mx-6">
      <div className="hover:-translate-y-1 hover:scale-110 duration-200 transition ease-in-out delay-150">
        <div className="relative mb-2 h-80 w-80 overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
          <video
            autoPlay
            loop
            muted
            poster={glitchimg}
            className="h-full w-full object-cover object-center absolute inset-0 mix-blend-screen"
          >
            <source src={glitch} type="video/mp4" />
          </video>
          <img
            src={devImgSrc}
            loading="lazy"
            alt="dev image"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div>
        <h1 className="font-bold text-indigo-500 md:text-lg">{devName}</h1>
        <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
          {devRole}
        </p>

        {/* <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
          {devDescription}
        </p> */}

        <div className="flex">
          <div className="flex gap-4">
            <a
              href={devLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>

            <a
              href={devGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevSocialCards;
