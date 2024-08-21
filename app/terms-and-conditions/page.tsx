import React from "react";
import Banner from "@/components/Banner";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laptop Rental For Events | Terms and Conditions",
  description: "",
  alternates: {
    canonical: "https://laptop-rental.com.au/terms-and-conditions",
  },
};

const TermsAndConditions = () => {
  return (
    <>
      <Banner
        title="Terms and Conditions"
        text="Please read these terms and conditions carefully before using Our Service."
        image={{
          url: "/Term-And-Conditions.png",
          alternativeText: "Terms and conditions banner",
        }}
      />
      <section className="container p-8 space-y-4">
        <h2 className="font-bold text-3xl text-center capitalize">
          Interpretation and Definitions
        </h2>

        <h3 className="text-2xl font-semibold">Interpretation</h3>
        <p className="text-gray-700">
          The words of which the initial letter is capitalised have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or plural.
        </p>
        <h3 className="text-2xl font-semibold">Definitions</h3>
        <p className="text-gray-700">
          For the purposes of this Privacy Policy:
        </p>

        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            <strong className="">Affiliate</strong> means an entity that
            controls is controlled by or is under common control with a party,
            where &quot;control&quot; means ownership of 50% or more of the
            shares, equity interest or other securities entitled to vote for
            election of directors or other managing authority.
          </li>
          <li className="">
            <strong className="">Country</strong> refers to the Australian
            Capital Territory, Australia
          </li>
          <li className="">
            <strong className="">Company</strong> (referred to as either
            &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot;, or
            &quot;Our&quot; in this Agreement) refers to Laptop Rental, Laptop
            Rental Oceania 19B Hinkler Road Mordialloc, Mordialloc Victoria
            3195, Australia.
          </li>
          <li className="">
            <strong className="">Device</strong> means any device that can
            access the Service, such as a computer, a cellphone or a digital
            tablet.
          </li>
          <li className="">
            <strong className="">Service</strong> refers to the Website.
          </li>
          <li className="">
            <strong className="">Terms and Conditions</strong> (also referred to
            as &quot;Terms&quot;) mean these Terms and Conditions that form the
            entire agreement between You and the Company regarding the use of
            the Service.
          </li>
          <li className="">
            <strong className="">Third-party Social Media Service</strong> means
            any services or content (including data, information, products or
            services) provided by a third party that may be displayed, included
            or made available by the Service.
          </li>

          <li className="">
            <strong className="">Website</strong> refers to Laptop Rental,
            accessible from{" "}
            <Link
              className="underline hover:text-primary-red focus-within:text-primary-red transition-all ease-in"
              href="https://laptop-rental.com.au/"
            >
              https://laptop-rental.com.au/
            </Link>
          </li>
          <li className="">
            <strong className="">You</strong> mean the individual accessing or
            using the Service, the company, or other legal entity on behalf of
            which such individual is accessing or using the Service, as
            applicable.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold">Acknowledgement</h3>
        <p className="text-gray-700">
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          Terms and Conditions set out the rights and obligations of all users
          regarding the use of the Service.{" "}
        </p>
        <p className="text-gray-700">
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions. These
          Terms and Conditions apply to all visitors, users and others who
          access or use the Service.{" "}
        </p>
        <p className="text-gray-700">
          By accessing or using the Service, You agree to be bound by these
          Terms and Conditions. If You disagree with any part of these Terms and
          Conditions,, you may not access the Service.
        </p>
        <p className="text-gray-700">
          You represent that you are over the age of 18. The Company does not
          permit those under 18 to use the Service.{" "}
        </p>
        <p className="text-gray-700">
          Your access to and use of the Service is also conditioned on Your
          acceptance of and compliance with the Privacy Policy of the Company.
          Our Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your personal information when You
          use the Application or the Website and tells You about Your privacy
          rights and how the law protects You. Please read Our Privacy Policy
          carefully before using Our Service.
        </p>

        <h3 className="text-2xl font-semibold">Links to Other Websites</h3>
        <p className="text-gray-700">
          Our Service may contain links to third-party websites or services that
          are not owned or controlled by the Company.{" "}
        </p>
        <p className="text-gray-700">
          The Company has no control over and assumes no responsibility for the
          content, privacy policies, or practices of any third-party websites or
          services. You further acknowledge and agree that the Company shall not
          be responsible or liable, directly or indirectly, for any damage or
          loss caused or alleged to be caused by or in connection with the use
          of or reliance on any such content, goods or services available on or
          through any such web sites or services.{" "}
        </p>
        <p className="text-gray-700">
          We strongly advise You to read the terms and conditions and privacy
          policies of any third-party websites or services You visit.{" "}
        </p>

        <h3 className="text-2xl font-semibold">Termination</h3>
        <p className="text-gray-700">
          We may terminate or suspend Your access immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if You breach these Terms and Conditions. Upon termination,
          Your right to use the Service will cease immediately.
        </p>

        <h3 className="text-2xl font-semibold">Limitation of Liability</h3>
        <p className="text-gray-700">
          Notwithstanding any damages that You might incur, the entire liability
          of the Company and any of its suppliers under any provision of this
          Terms and Your exclusive remedy for all of the foregoing shall be
          limited to the amount actually paid by You through the Service or 100
          USD if You haven&apos;t purchased anything through the Service.
        </p>
        <p className="text-gray-700">
          To the maximum extent permitted by applicable law, in no event shall
          the Company or its suppliers be liable for any special, incidental,
          indirect, or consequential damages whatsoever (including, but not
          limited to, damages for loss of profits, loss of data or other
          information, for business interruption, for personal injury, loss of
          privacy arising out of or in any way related to the use of or
          inability to use the Service, third-party software and/or third-party
          hardware used with the Service, or otherwise in connection with any
          provision of this Terms), even if the Company or any supplier has been
          advised of the possibility of such damages and even if the remedy
          fails of its essential purpose.
        </p>
        <p className="text-gray-700">
          Some states do not allow the exclusion of implied warranties or
          limitation of liability for incidental or consequential damages, which
          means that some of the above limitations may not apply. In these
          states, each party&apos;s liability will be limited to the greatest
          extent permitted by law.
        </p>

        <h3 className="text-2xl font-semibold">
          &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
        </h3>
        <p className="text-gray-700">
          The Service is provided to You &quot;AS IS&quot; and &quot;AS
          AVAILABLE&quot; and with all faults and defects without warranty of
          any kind. To the maximum extent permitted under applicable law, the
          Company, on its own behalf and behalf of its Affiliates and their
          respective licensors and service providers, expressly disclaims all
          warranties, whether express, implied, statutory or otherwise, with
          respect to the Service, including all implied warranties of
          merchantability, fitness for a particular purpose, title and
          non-infringement, and warranties that may arise out of course of
          dealing, course of performance, usage or trade practice. Without
          limitation to the foregoing, the Company provides no warranty or
          undertaking. It makes no representation of any kind that the Service
          will meet Your requirements, achieve any intended results, be
          compatible or work with any other software, applications, systems or
          services, operate without interruption, meet any performance or
          reliability standards or be error-free or that any errors or defects
          can or will be corrected.{" "}
        </p>
        <p className="text-gray-700">
          Without limiting the foregoing, neither the Company nor any of the
          Company&apos;s providers makes any representation or warranty of any
          kind, express or implied: (i) as to the operation or availability of
          the Service, or the information, content, and materials or products
          included thereon; (ii) that the Service will be uninterrupted or
          error-free; (iii) as to the accuracy, reliability, or currency of any
          information or content provided through the Service; or (iv) that the
          Service, its servers, the content, or e-mails sent from or on behalf
          of the Company are free of viruses, scripts, trojan horses, worms,
          malware, timebombs or other harmful components.
        </p>
        <p className="text-gray-700">
          Some jurisdictions do not allow the exclusion of certain types of
          warranties or limitations on applicable statutory rights of a
          consumer, so some or all of the above exclusions and limitations may
          not apply to You. But in such a case, the exclusions and limitations
          set forth in this section shall be applied to the greatest extent
          enforceable under applicable law.{" "}
        </p>

        <h3 className="text-2xl font-semibold">Governing Law </h3>
        <p className="text-gray-700">
          The laws of the Country, excluding its conflicts of law rules, shall
          govern these Terms and Your use of the Service. Your application use
          may also be subject to other local, state, national, or international
          laws.
        </p>
        <h3 className="text-2xl font-semibold">Disputes Resolution </h3>
        <p className="text-gray-700">
          If You have any concerns or disputes about the Service, You agree
          first to try to resolve the dispute informally by contacting the
          Company.
        </p>
        <h3 className="text-2xl font-semibold">
          For European Union (EU) Users
        </h3>
        <p className="text-gray-700">
          If You are a European Union consumer, you will benefit from any
          mandatory provisions of the law of the country in which You are
          resident.
        </p>
        <h3 className="text-2xl font-semibold">
          United States Legal Compliance
        </h3>
        <p className="text-gray-700">
          You represent and warrant that (i) You are not located in a country
          that is subject to the United States government embargo or that has
          been designated by the United States government as a &quot;terrorist
          supporting&quot; country, and (ii) You are not listed on any United
          States government list of prohibited or restricted parties.
        </p>

        <h3 className="text-2xl font-semibold">Severability and Waiver </h3>
        <h4 className="text-lg font-semibold">Severability </h4>
        <p className="text-gray-700">
          Suppose any provision of these Terms is held to be unenforceable or
          invalid. In that case, such provision will be changed and interpreted
          to accomplish the objectives of such provision to the greatest extent
          possible under applicable law, and the remaining provisions will
          continue in full force and effect.
        </p>
        <h4 className="text-lg font-semibold">Waiver</h4>
        <p className="text-gray-700">
          Except as provided herein, the failure to exercise a right or to
          require the performance of an obligation under these Terms shall not
          affect a party&apos;s ability to exercise such right or require such
          performance at any time thereafter, nor shall the waiver of a breach
          constitute a waiver of any subsequent breach.
        </p>

        <h3 className="text-2xl font-semibold">Translation Interpretation </h3>
        <p className="text-gray-700">
          These Terms and Conditions may have been translated if We have made
          them available to You on our Service. You agree that the original
          English text shall prevail in the case of a dispute.
        </p>

        <h3 className="text-2xl font-semibold">
          Changes to These Terms and Conditions{" "}
        </h3>
        <p className="text-gray-700">
          We reserve the right, at Our sole discretion, to modify or replace
          these Terms at any time. If a revision is material, We will make
          reasonable efforts to provide at least 30 days&apos; notice before any
          new terms take effect. What constitutes a material change will be
          determined at Our sole discretion.
        </p>
        <p className="text-gray-700">
          By continuing to access or use Our Service after those revisions
          become effective, You agree to be bound by the revised terms. If You
          do not agree to the new terms, in whole or part, please stop using the
          website and the Service.
        </p>

        <h2 className="font-bold text-3xl text-center capitalize">
          Contact Us{" "}
        </h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            <strong>By email: </strong>{" "}
            <Link
              className="underline hover:text-primary-red focus-within:text-primary-red transition-all ease-in"
              href="mailto:hire@laptop-rental.com.au"
            >
              hire@laptop-rental.com.au{" "}
            </Link>{" "}
          </li>
          <li className="">
            <strong>By visiting this page on our webiste:</strong>{" "}
            <Link
              className="underline hover:text-primary-red focus-within:text-primary-red transition-all ease-in"
              href="https://laptop-rental.com.au/"
            >
              https://laptop-rental.com.au/
            </Link>{" "}
          </li>
          <li className="">
            <strong>By phone number:</strong>{" "}
            <Link
              className="underline hover:text-primary-red focus-within:text-primary-red transition-all ease-in"
              href="tel:+61390711839"
            >
              +61-390-711-839
            </Link>{" "}
          </li>
          <li className="">
            <strong>By mail:</strong>{" "}
            <Link
              className="underline hover:text-primary-red focus-within:text-primary-red transition-all ease-in"
              href="https://maps.app.goo.gl/u9jbDtGNHLvpRMSq5"
              target="_blank"
            >
              19B Hinkler Road Mordialloc, Mordialloc Victoria 3195, Australia
            </Link>{" "}
          </li>
        </ul>
      </section>
    </>
  );
};

export default TermsAndConditions;
