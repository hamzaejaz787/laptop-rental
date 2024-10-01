import Banner from "@/components/Banner";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Laptop Rental For Events | Privacy Policy",
  description: "",
  alternates: {
    canonical: "https://laptop-rental.com.au/privacy-policy",
  },
  other: { title: "Laptop Rental For Events | Privacy Policy" },
};

const PrivacyPolicy = () => {
  return (
    <>
      <Banner
        title="Privacy Policy"
        text="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."
        image={{
          url: "/Privacy-Policy.png",
          alternativeText: "Privacy policy banner",
        }}
      />
      <Breadcrumbs className="sr-only" currentPage="Privacy Policy" />

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
            <strong className="">Account</strong> means a unique account created
            for You to access our Service or parts of our Service.
          </li>
          <li className="">
            <strong className="">Affiliate</strong> means an entity that
            controls is controlled by or is under common control with a party,
            where &quot;control&quot; means ownership of 50% or more of the
            shares, equity interest or other securities entitled to vote for
            election of directors or other managing authority.
          </li>
          <li className="">
            <strong className="">Company</strong> (referred to as either
            &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot;, or
            &quot;Our&quot; in this Agreement) refers to Laptop Rental, Laptop
            Rental Oceania 19B Hinkler Road Mordialloc, Mordialloc Victoria
            3195, Australia.
          </li>
          <li className="">
            <strong className="">Cookies</strong> are small files that are
            placed on Your computer, mobile device or any other device by a
            website, containing the details of Your browsing history on that
            website among its many uses.
          </li>
          <li className="">
            <strong className="">Country</strong> refers to the Australian
            Capital Territory, Australia
          </li>
          <li className="">
            <strong className="">Device</strong> means any device that can
            access the Service, such as a computer, a cellphone or a digital
            tablet.
          </li>
          <li className="">
            <strong className="">Personal Data</strong> is any information that
            relates to an identified or identifiable individual.
          </li>
          <li className="">
            <strong className="">Service</strong> refers to the Website.
          </li>
          <li className="">
            <strong className="">Service Provider</strong> means any natural or
            legal person who processes the data on behalf of the Company. It
            refers to third-party companies or individuals employed by the
            Company to facilitate the Service, to provide the Service on behalf
            of the Company, to perform services related to the Service or to
            assist the Company in analysing how the Service is used.
          </li>
          <li className="">
            <strong className="">LP AU - Privacy Policy</strong> refers to any
            website or any social network website through which a User can log
            in or create an account to use the Service.
          </li>
          <li className="">
            <strong className="">Usage Data</strong> refers to data collected
            automatically, either generated by the use of the Service or from
            the Service infrastructure itself (for example, the duration of a
            page visit).
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
        <h2 className="font-bold text-3xl text-center capitalize">
          Collecting and Using Your Personal Datas{" "}
        </h2>
        <h3 className="text-2xl font-semibold">Types of Data Collected</h3>
        <h4 className="text-lg font-semibold">Personal Data</h4>
        <p className="text-gray-700">
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
        </p>{" "}
        <ul className="space-y-4 list-disc list-inside">
          <li className="">Email address</li>
          <li className="">First name and last name</li>
          <li className="">Phone number</li>
          <li className="">Address, State, Province, ZIP/Postal code, City</li>
          <li className="">Usage Data</li>
        </ul>
        <h4 className="text-lg font-semibold">Personal Data</h4>
        <p className="text-gray-700">
          Usage Data is collected automatically when using the Service. <br />{" "}
          Usage Data may include information such as Your Device&apos;s Internet
          Protocol address (e.g. IP address), browser type, browser version, the
          pages of our Service that You visit, the time and date of Your visit,
          the time spent on those pages, unique device identifiers and other
          diagnostic data. <br />
          When You access the Service by or through a mobile device, We may
          collect certain information automatically, including, but not limited
          to, the type of mobile device You use, Your mobile device&apos;s
          unique ID, the IP address of Your mobile device, Your mobile operating
          system, the type of mobile Internet browser You use, unique device
          identifiers and other diagnostic data. <br />
          We may also collect information that Your browser sends whenever You
          visit our Service or when You access the Service by or through a
          mobile device.
        </p>
        <h4 className="text-lg font-semibold">
          Information from Third-Party Social Media Services
        </h4>
        <p className="text-gray-700">
          The Company allows You to create an account and log in to use the
          Service through the following Third-party Social Media Services:{" "}
        </p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">Google</li>
          <li className="">Facebook</li>
          <li className="">Instagram</li>
          <li className="">Twitter</li>
          <li className="">LinkedIn</li>
        </ul>
        <p className="text-gray-700">
          Suppose You decide to register through or otherwise grant us access to
          a Third-Party Social Media Service. In that case, We may collect
          Personal data that is already associated with Your Third-Party Social
          Media Service account, such as Your name, email address, activities or
          contact list associated with that account.
        </p>
        <p className="text-gray-700">
          You may also have the option of sharing additional information with
          the Company through Your Third-Party Social Media Service&apos;s
          account. Suppose You choose to provide such information and Personal
          Data during registration or otherwise. In that case, You are giving
          the Company permission to use, share, and store it in a manner
          consistent with this Privacy Policy.
        </p>
        <h4 className="text-lg font-semibold">
          Tracking Technologies and Cookies{" "}
        </h4>
        <p className="text-gray-700">
          We use Cookies and similar tracking technologies to track the activity
          on Our Service and store certain information. Tracking technologies
          used are beacons, tags, and scripts to collect and track information
          and to improve and analyse Our Service. The technologies We use may
          include:{" "}
        </p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            <strong>Cookies or Browser Cookies</strong> A cookie is a small file
            placed on Your Device. You can instruct Your browser to refuse all
            Cookies or to indicate when a cookie is being sent. However, if You
            do not accept Cookies, You may be unable to use some parts of our
            Service. Unless you have adjusted Your browser setting so that it
            will refuse cookies, our Service may use Cookies.
          </li>
          <li className="">
            <strong>Web Beacons</strong> Certain sections of our Service and our
            emails may contain small electronic files known as web beacons (also
            referred to as clear gifs, pixel tags, and single-pixel gifs) that
            permit the Company, for example, to count users who have visited
            those pages or opened an email and for other related website
            statistics (for example, recording the popularity of a certain
            section and verifying system and server integrity).
          </li>
        </ul>
        <p className="text-gray-700">
          Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies.
          Persistent Cookies remain on Your personal computer or mobile device
          when You go offline, while Session Cookies are deleted as soon as You
          close Your web browser. <br />
          <br /> We use both Session and Persistent Cookies for the purposes set
          out below:
        </p>
        <div className="">
          <h4 className="text-lg font-semibold pb-3">
            Necessary / Essential Cookies
          </h4>

          <p className="text-gray-700">
            <strong>Type:</strong> Session Cookies <br />
            <strong>Administered by:</strong> Us <br />
            <strong>Purpose:</strong> These Cookies are essential to provide You
            with services available through the Website and to enable You to use
            some of its features. They help to authenticate users and prevent
            fraudulent use of user accounts. Without these Cookies, the services
            that You have asked for cannot be provided, and We only use these
            Cookies to provide You with those services.
          </p>
        </div>
        <div className="">
          <h4 className="text-lg font-semibold pb-3">
            Cookies Policy / Notice Acceptance Cookies{" "}
          </h4>

          <p className="text-gray-700">
            <strong>Type:</strong> Persistent Cookies <br />
            <strong>Administered by:</strong> Us <br />
            <strong>Purpose:</strong> These Cookies identify if users have
            accepted the use of cookies on the Website.
          </p>
        </div>
        <div className="">
          <h4 className="text-lg font-semibold pb-3">Functionality Cookies </h4>

          <p className="text-gray-700">
            <strong>Type:</strong> Persistent Cookies <br />
            <strong>Administered by:</strong> Us <br />
            <strong>Purpose:</strong> These Cookies allow us to remember choices
            You make when You use the Website, such as remembering your login
            details or language preference. The purpose of these Cookies is to
            provide You with a more personal experience and to avoid having to
            re-enter your preferences every time You use the Website.
          </p>
        </div>
        <p className="text-gray-700">
          For more information about the cookies we use and your choices
          regarding cookies, please visit our Cookies Policy or the Cookies
          section of our Privacy Policy.{" "}
        </p>
        <h4 className="text-lg font-semibold">Use of Your Personal Data </h4>
        <p className="text-gray-700">
          The Company may use Personal Data for the following purposes:
        </p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            <strong>To provide and maintain our Service</strong>, including
            monitoring the usage of our Service.
          </li>
          <li className="">
            <strong>To manage Your Account:</strong> to manage Your registration
            as a user of the Service. The Personal Data You provide can give You
            access to different functionalities of the Service that are
            available to You as a registered user.
          </li>
          <li className="">
            <strong>For the performance of a contract:</strong> the development,
            compliance and undertaking of the purchase contract for the
            products, items or services You have purchased or of any other
            contract with Us through the Service.
          </li>
          <li className="">
            <strong>To contact You:</strong> To contact You by email, telephone
            calls, SMS, or other equivalent forms of electronic communication,
            such as a mobile application&apos;s push notifications regarding
            updates or informative communications related to the
            functionalities, products or contracted services, including the
            security updates, when necessary or reasonable for their
            implementation.
          </li>
          <li className="">
            <strong>TTo provide You</strong> with news, special offers and
            general information about other goods, services and events which we
            offer that are similar to those that you have already purchased or
            enquired about unless You have opted not to receive such
            information.
          </li>
          <li className="">
            <strong>To manage Your requests:</strong> To attend and manage Your
            requests to Us.
          </li>
          <li className="">
            <strong>For business transfers:</strong> We may use Your information
            to evaluate or conduct a merger, divestiture, restructuring,
            reorganisation, dissolution, or other sale or transfer of some or
            all of Our assets, whether as a going concern or as part of
            bankruptcy, liquidation, or similar proceeding, in which Personal
            Data held by Us about our Service users is among the assets
            transferred.
          </li>
          <li className="">
            <strong>For other purposes:</strong> We may use Your information for
            other purposes, such as data analysis, identifying usage trends,
            determining the effectiveness of our promotional campaigns and
            evaluating and improving our Service, products, services, marketing
            and your experience.
          </li>
        </ul>
        <p className="text-gray-700">
          The Company may use Personal Data for the following purposes:
        </p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">
            <strong>With Service Providers:</strong> We may share Your personal
            information with Service Providers to monitor and analyse the use of
            our Service to contact You.
          </li>
          <li className="">
            <strong>For business transfers:</strong> We may share or transfer
            Your personal information in connection with, or during negotiations
            of, any merger, sale of Company assets, financing, or acquisition of
            all or a portion of Our business to another company.
          </li>
          <li className="">
            <strong>With Affiliates:</strong> We may share Your information with
            Our affiliates, in which case we will require those affiliates to
            honour this Privacy Policy. Affiliates include Our parent company
            and any other subsidiaries, joint venture partners or other
            companies that We control or are under common control with Us.
          </li>
          <li className="">
            <strong>With business partners:</strong> We may share Your
            information with Our business partners to offer You certain
            products, services or promotions.
          </li>
          <li className="">
            <strong>With other users:</strong> When you share personal
            information or otherwise interact in public areas with other users,
            such information may be viewed by all users and may be publicly
            distributed outside. Suppose You interact with other users or
            register through a Third-Party Social Media Service. In that case,
            Your contacts on the Third-Party Social Media Service may see Your
            name, profile, pictures and description of Your activity. Similarly,
            other users will be able to view descriptions of Your activity,
            communicate with You and view Your profile.
          </li>
          <li className="">
            <strong>With Your consent:</strong> We may disclose Your personal
            information for any other purpose with Your consent.
          </li>
        </ul>
        <h4 className="text-lg font-semibold">
          Retention of Your Personal Data
        </h4>
        <p className="text-gray-700">
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.{" "}
        </p>
        <p className="text-gray-700">
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.{" "}
        </p>
        <h4 className="text-lg font-semibold">
          Transfer of Your Personal Data{" "}
        </h4>
        <p className="text-gray-700">
          Your information, including Personal Data, is processed at the
          Company&apos;s operating offices and in any other places where the
          parties involved in the processing are located. It means that this
          information may be transferred to — and maintained on — computers
          located outside of Your state, province, country or other governmental
          jurisdiction where the data protection laws may differ from those from
          Your jurisdiction.
        </p>
        <p className="text-gray-700">
          Your consent to this Privacy Policy, followed by Your submission of
          such information, represents Your agreement to that transfer.
        </p>
        <p className="text-gray-700">
          The Company will take all steps reasonably necessary to ensure that
          Your data is treated securely and in accordance with this Privacy
          Policy, and no transfer of Your Personal Data will take place to an
          organisation or a country unless there are adequate controls in place,
          including the security of Your data and other personal information.
        </p>
        <h4 className="text-lg font-semibold">Delete Your Personal Data </h4>
        <p className="text-gray-700">
          You have the right to delete or request that We assist in deleting the
          Personal Data We have collected about You. Our Service may give You
          the ability to delete certain information about You from within the
          Service.{" "}
        </p>
        <p className="text-gray-700">
          You may update, amend, or delete Your information at any time by
          signing in to Your Account if you have one and visiting the account
          settings section that allows you to manage Your personal information.
          You may also contact Us to request access to, correct, or delete any
          personal information that You have provided to Us.{" "}
        </p>
        <p className="text-gray-700">
          Please note, however, that We may need to retain certain information
          when we have a legal obligation or lawful basis to do so.{" "}
        </p>
        <h3 className="text-2xl font-semibold">
          Disclosure of Your Personal Data
        </h3>
        <h4 className="text-lg font-semibold">Business Transactions</h4>
        <p className="text-gray-700">
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </p>
        <h4 className="text-lg font-semibold">Law enforcement</h4>
        <p className="text-gray-700">
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g. a court or a government agency).
        </p>
        <h4 className="text-lg font-semibold">Other legal requirements</h4>
        <p className="text-gray-700">
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </p>
        <ul className="space-y-4 list-disc list-inside">
          <li className="">Comply with a legal obligation</li>
          <li className="">
            Protect and defend the rights or property of the Company
          </li>
          <li className="">
            Prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li className="">
            Protect the personal safety of Users of the Service or the public
          </li>
          <li className="">Protect against legal liability</li>
        </ul>
        <h3 className="text-2xl font-semibold">
          Security of Your Personal Data{" "}
        </h3>
        <p className="text-gray-700">
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.{" "}
        </p>
        <h3 className="text-2xl font-semibold">Children&apos;s Privacy </h3>
        <p className="text-gray-700">
          Our Service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If You are a parent or guardian and You are aware
          that Your child has provided Us with Personal Data, please contact Us.
          Suppose We become aware that We have collected Personal Data from
          anyone under the age of 13 without verification of parental consent.
          In that case, we remove that information from Our servers.
        </p>
        <p className="text-gray-700">
          If We need to rely on consent as a legal basis for processing Your
          information and Your country requires consent from a parent, We may
          require Your parent&apos;s consent before We collect and use that
          information.
        </p>
        <h3 className="text-2xl font-semibold">Links to Other Websites</h3>
        <p className="text-gray-700">
          Our Service may contain links to other websites that are not operated
          by Us. If You click on a third-party link, You will be directed to
          that third-party&apos;s site. We strongly advise You to review the
          Privacy Policy of every site You visit.{" "}
        </p>
        <p className="text-gray-700">
          We have no control over and assume no responsibility for the content,
          privacy policies or practices of any third-party sites or services.{" "}
        </p>
        <h3 className="text-2xl font-semibold">
          Changes to this Privacy Policy
        </h3>
        <p className="text-gray-700">
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p className="text-gray-700">
          We will let You know via email and/or a prominent notice on Our
          Service prior to the change becoming effective and update the
          &quot;Last updated&quot; date at the top of this Privacy Policy.
        </p>
        <p className="text-gray-700">
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.{" "}
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
              Hire@laptop-rental.com.au{" "}
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

export default PrivacyPolicy;
