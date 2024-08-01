"use client";

import { Button } from "@/components/ui/button";
import { getLocalStorage, setLocalStorage } from "@/lib/localStorageHelper";
import Link from "next/link";
import React from "react";

const CookieConsentPopup = () => {
  const [cookieConsent, setCookieConsent] = React.useState<boolean | null>(
    null
  );
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    if (storedCookieConsent !== null) {
      setCookieConsent(storedCookieConsent);
    }
    setLoading(false);
  }, []);

  React.useEffect(() => {
    if (cookieConsent !== null) {
      const newValue = cookieConsent ? "granted" : "denied";

      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });

      setLocalStorage("cookie_consent", cookieConsent);
    }
  }, [cookieConsent]);

  if (loading) {
    return null; // Render nothing while loading
  }

  if (cookieConsent !== null) {
    return null;
  }

  return (
    <div className="my-4 mx-auto w-4/5 sm:w-3/4 fixed bottom-0 left-0 right-0 flex px-3 md:px-4 py-3 justify-between items-center flex-col gap-4 bg-primary-red/75 backdrop-blur-lg rounded-sm shadow z-50">
      <div className="text-center text-white-200">
        <p className="text-white">
          This website uses cookies to enhance your browsing experience, analyze
          site traffic, and serve better user experiences. By continuing to use
          this site, you consent to our use of cookies. Learn more in our{" "}
          <Link
            href="/"
            className="font-bold hover:text-white/60 transition-all duration-200 underline"
          >
            cookie policy
          </Link>{" "}
          on our site.
        </p>
      </div>

      <div className="flex gap-2 flex-col-reverse sm:flex-row w-full">
        <Button
          variant="outline"
          className="px-5 py-2 rounded-sm text-primary-red border-white hover:bg-transparent hover:text-white"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </Button>
        <Button
          className="py-2 text-white rounded-sm bg-primary-red border border-transparent hover:border-white hover:bg-transparent"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </Button>
      </div>
    </div>
  );
};

export default CookieConsentPopup;
