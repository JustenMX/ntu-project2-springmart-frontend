import { Link } from "react-router-dom";
function PrivacyContainer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

      <section className="my-5 text-xs">
        <h2 className="text-sm font-semibold mb-2">Information We Collect</h2>
        <p>We may collect the following types of personal information:</p>
        <ul className="list-disc pl-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Contact information</li>
          <li>Billing information</li>
          <li>Usage data (e.g., pages visited, interactions)</li>
          <li>Device information (e.g., browser type, IP address)</li>
          <li>Cookies and tracking technologies</li>
        </ul>
      </section>

      <section className="my-5 text-xs">
        <h2 className="text-sm font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p>We may use your personal information for the following purposes:</p>
        <ul className="list-disc pl-6">
          <li>Provide, maintain, and improve the Service</li>
          <li>Process transactions and send notifications</li>
          <li>Respond to your requests, comments, or questions</li>
          <li>Send newsletters, promotions, and marketing materials</li>
          <li>Monitor and analyze usage patterns and trends</li>
        </ul>
      </section>

      <section className="my-5 text-xs">
        <h2 className="text-sm font-semibold mb-2">Information Sharing</h2>
        <p>We may share your personal information with:</p>
        <ul className="list-disc pl-6">
          <li>Service providers and partners for business operations</li>
          <li>Legal authorities for compliance with legal obligations</li>
          <li>Third-party analytics providers for data analysis</li>
        </ul>
      </section>

      <section className="my-5 text-xs">
        <h2 className="text-sm font-semibold mb-2">Your Choices</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6">
          <li>Access, correct, or delete your personal information</li>
          <li>Opt-out of marketing communications</li>
          <li>Disable cookies in your browser settings</li>
        </ul>
      </section>

      <section className="my-5 text-xs">
        <h2 className="text-sm font-semibold mb-2">Security</h2>
        <p>
          We implement security measures to protect your personal information
          from unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="my-5 text-xs">
        <h2 className="text-sm font-semibold mb-2">Changes to this Policy</h2>
        <p>
          We may update this Policy from time to time. We will notify you of any
          significant changes by posting the new Policy on this page.
        </p>
      </section>

      <section className="my-5 text-xs">
        <h2 className="text-sm font-semibold mb-2 ">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Policy, please
          contact us at{" "}
          <span className="text-blue-600">
            <a href="mailto:contact@example.com">support@springmart.com</a>.
          </span>
        </p>
      </section>
      <div className="text-blue-600 underline text-sm">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default PrivacyContainer;
