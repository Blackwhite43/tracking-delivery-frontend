import { useRouter } from "next/router";
import i18n from "@/services/i18n";
import Image from "next/image";
import { useState } from "react";
// import { Menu } from "@headlessui/react";

const BahasaSwitcher = () => {
  const router = useRouter();
  const [activeLang, setActiveLang] = useState(router.locale);

  if (router.locale) {
    i18n.changeLanguage(router.locale);
  }

  const { pathname, query } = router;

  const handleClick = (locale) => {
    setActiveLang(locale);
    router.push(
      {
        pathname: `/${locale}${pathname}`,
        query,
      },
      undefined,
      { locale }
    );
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative">
        <a
          onClick={toggleDropdown}
          className="nav-link dropdown-toggle"
          id="language-dropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <Image
            width={40}
            height={40}
            src={`/templates/assets/img/${activeLang}.png`}
            className="flag-width xs:w-40"
            alt="flag"
          />
        </a>
        {isOpen && (
          <div
            className="fixed right-100 mt-2 bg-white shadow-lg rounded"
            style={{ backgroundColor: "var(--warna-12)" }}
          >
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100">
                <a
                  className="dropdown-item flex flex-cols-reverse gap-2"
                  onClick={() => handleClick("en")}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/templates/assets/img/en.png"
                    className="flag-width"
                    alt="flag"
                  />
                  <span
                    className="align-self-center"
                    style={{ color: "var(--warna-9)" }}
                  >
                    &nbsp;English
                  </span>
                </a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <a
                  className="dropdown-item items-center flex flex-cols-reverse gap-2"
                  onClick={() => handleClick("id")}
                >
                  <Image
                    width={40}
                    height={40}
                    src="/templates/assets/img/id.png"
                    className="flag-width"
                    alt="flag"
                  />
                  <span
                    className="align-self-center"
                    style={{ color: "var(--warna-9)" }}
                  >
                    &nbsp;Indonesia
                  </span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* <li className="nav-item dropdown language-dropdown">
        <a
          onClick={toggleDropdown}
          className="nav-link dropdown-toggle"
          id="language-dropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <Image
            width={50}
            height={50}
            src={`/templates/assets/img/${activeLang}.png`}
            className="flag-width"
            alt="flag"
          />
        </a>
        <div
          className="dropdown-menu position-absolute"
          aria-labelledby="language-dropdown"
        >
          <a className="dropdown-item d-flex" onClick={() => handleClick("en")}>
            <Image
              width={50}
              height={50}
              src="/templates/assets/img/en.png"
              className="flag-width"
              alt="flag"
            />{" "}
            <span className="align-self-center">&nbsp;English</span>
          </a>
          <a className="dropdown-item d-flex" onClick={() => handleClick("id")}>
            <Image
              width={50}
              height={50}
              src="/templates/assets/img/id.png"
              className="flag-width"
              alt="flag"
            />{" "}
            <span className="align-self-center">&nbsp;Indonesia</span>
          </a>
        </div>
      </li> */}
    </>
  );
};

export default BahasaSwitcher;
