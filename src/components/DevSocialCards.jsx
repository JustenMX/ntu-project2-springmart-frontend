/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function DevSocialCards(props) {
  const { devImgSrc, devName, devRole, devLinkedIn, devGithub } = props;
  return (
    <div>
      <div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
        <img
          src={`${devImgSrc}?auto=format&q=75&fit=crop&w=500`}
          loading="lazy"
          alt="dev image"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div>
        <div className="font-bold text-indigo-500 md:text-lg">{devName}</div>
        <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">
          {devRole}
        </p>

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
