
import MainLayout from "@/layouts/MainLayout";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicyPage = () => {
  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Last Updated: May 15, 2023
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="prose prose-blue max-w-none">
              <p>
                At HandwritingGenius, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our handwriting analysis and generation services.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul>
                <li>Personal information such as name, email address, and profile information when you create an account</li>
                <li>Handwriting samples that you upload to our platform</li>
                <li>Text content that you input for handwriting generation</li>
                <li>Payment information when you subscribe to our premium services</li>
                <li>Communications you send to us</li>
              </ul>

              <p>
                We also automatically collect certain information about your device and how you interact with our platform, including:
              </p>
              <ul>
                <li>Device information such as IP address, browser type, and operating system</li>
                <li>Usage information about your activity on our platform</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing your transactions and managing your account</li>
                <li>Training our AI models to better recognize and generate handwriting</li>
                <li>Communicating with you about our services, updates, and promotions</li>
                <li>Personalizing your experience on our platform</li>
                <li>Monitoring and analyzing usage patterns and trends</li>
                <li>Protecting the security and integrity of our services</li>
              </ul>

              <h2>Data Retention and Security</h2>
              <p>
                We retain your personal information and handwriting samples as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Sharing Your Information</h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>With your consent or at your direction</li>
                <li>To comply with legal obligations</li>
                <li>In connection with a merger, sale, or acquisition</li>
              </ul>
              <p>
                We do not sell your personal information or handwriting samples to third parties.
              </p>

              <h2>Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Withdrawing your consent to our processing of your information</li>
                <li>Requesting a copy of your personal information</li>
                <li>Objecting to certain uses of your information</li>
              </ul>
              <p>
                You can exercise these rights by contacting us at privacy@handwritinggenius.com.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on our website and changing the "Last Updated" date at the top of this policy.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at:
              </p>
              <p>
                Email: privacy@handwritinggenius.com<br />
                Address: 123 AI Boulevard, Tech City, CA 94103<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPolicyPage;
