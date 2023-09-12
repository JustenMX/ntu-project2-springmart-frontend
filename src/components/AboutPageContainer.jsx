import DevSocialCards from "./DevSocialCards";

function AboutPageContainer() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Meet our Team
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Professional software developers from Singapore 🇸🇬 with a passion
            for crafting robust and efficient solutions. 🚀 Committed to
            continuous learning and staying ahead in the dynamic world of
            technology. 💻 Dedicated to leveraging my expertise in software
            development to drive innovation and create impactful solutions.
            Strong believer in the power of teamwork and collaboration.
            Let&apos;s connect and build something remarkable together! 👨‍💻
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          <DevSocialCards
            devImgSrc="https://images.unsplash.com/photo-1567515004624-219c11d31f2e"
            devName="Justen Manni"
            devRole="Software Engineer"
            devLinkedIn="https://www.linkedin.com/in/justenmanni/"
            devGithub="https://github.com/JustenMX"
          />
          <DevSocialCards
            devImgSrc="https://images.unsplash.com/photo-1567515004624-219c11d31f2e"
            devName="Parry Chua"
            devRole="Software Engineer"
            devLinkedIn="https://www.linkedin.com/in/justenmanni/"
            devGithub="https://github.com/JustenMX"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPageContainer;
