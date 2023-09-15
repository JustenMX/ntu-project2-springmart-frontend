import { useEffect } from "react";
import { TypeShuffle } from "../utils/TypeShuffle";
import { preloadFonts } from "../utils/utils";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import DevSocialCards from "./DevSocialCards";

function AboutPageContainer() {
  useEffect(() => {
    preloadFonts("biu0hfr").then(() => {
      console.log("Fonts preloaded successfully");
      const textElement = document.querySelector(".content");
      const ts = new TypeShuffle(textElement);
      ts.trigger("fx6");
    });
  }, []);

  return (
    <div className="content ">
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Meet our Team
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-sm">
              We are a dedicated team of software developers based in Singapore,
              specializing in crafting robust and efficient solutions. We are
              thrilled to introduce &apos;Spring Mart,&apos; a cutting-edge
              e-commerce platform that leverages the combined power of Java and
              Spring Boot for a resilient backend, seamlessly integrated with
              React for a dynamic frontend. Additionally, we&apos;ve
              incorporated PostgreSQL for robust data management and Stripe API
              for secure payment processing.
            </p>
          </div>

          <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-8 lg:gap-y-12 justify-center">
              <DevSocialCards
                devImgSrc="https://media.licdn.com/dms/image/C5103AQGmSjWRf4V12g/profile-displayphoto-shrink_400_400/0/1543214562119?e=1700092800&v=beta&t=bkB9LoFm2LTymwCRy8tDFkp-Z_3_TQBqCXf1hq_cRkc"
                devName="Justen Manni"
                devRole="Software Engineer"
                devLinkedIn="https://www.linkedin.com/in/justenmanni/"
                devGithub="https://github.com/JustenMX"
              />
              <DevSocialCards
                devImgSrc="https://media.licdn.com/dms/image/C4D03AQGT-XCiodiB3Q/profile-displayphoto-shrink_400_400/0/1655218149240?e=1700092800&v=beta&t=lGcHbHci8te8zuaVRsUbCojOMme13vkDSSOikLSsfmw"
                devName="Parry Chua"
                devRole="Software Engineer"
                devLinkedIn="https://www.linkedin.com/in/justenmanni/"
                devGithub="https://github.com/JustenMX"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPageContainer;
