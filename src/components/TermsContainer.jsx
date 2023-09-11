import { Link } from "react-router-dom";
function TermsContainer() {
  return (
    <div className="container mx-auto px-4 py-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>

      <section className="my-10 text-xs">
        <h2 className="text-sm font-semibold mb-2">1. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are
          owned by Spring Mart and are protected by international copyright,
          trademark, patent, trade secret, and other intellectual property or
          proprietary rights laws.
        </p>
      </section>

      <section className="my-10 text-xs">
        <h2 className="text-sm font-semibold mb-2">2. User Content</h2>
        <p>
          You grant Spring Mart a non-exclusive, worldwide, royalty-free,
          irrevocable, sub-licensable license to use, reproduce, adapt, publish,
          translate, and distribute your user content in any existing or future
          media. You also grant Spring Mart the right to sub-license these
          rights and the right to bring an action for infringement of these
          rights.
        </p>
      </section>

      <section className="my-10 text-xs">
        <h2 className="text-sm font-semibold mb-2">3. Prohibited Activities</h2>
        <p>
          You may not access or use the Service for any purpose other than that
          for which we make the Service available. You are not allowed to:
        </p>
        <ul className="list-disc pl-6">
          <li>Violate any applicable laws, rules, or regulations.</li>
          <li>Infringe on the rights of others.</li>
          <li>
            Harass, abuse, insult, harm, defame, slander, disparage, intimidate,
            or discriminate based on gender, sexual orientation, religion,
            ethnicity, race, age, national origin, or disability.
          </li>
          <li>Submit false or misleading information.</li>
          <li>
            Upload or transmit viruses or any other type of malicious code that
            will or may be used in any way that will affect the functionality or
            operation of the Service or of any related website, other websites,
            or the Internet.
          </li>
          <li>Collect or track the personal information of others.</li>
        </ul>
      </section>

      <section className="my-10 text-xs">
        <h2 className="text-sm font-semibold mb-2">4. Governing Law</h2>
        <p>
          This Agreement (and any further rules, policies, or guidelines
          incorporated by reference) shall be governed and construed in
          accordance with the laws of Singapore without giving effect to any
          principles of conflicts of law.
        </p>
      </section>
      <div className="text-blue-600 underline text-sm">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default TermsContainer;
