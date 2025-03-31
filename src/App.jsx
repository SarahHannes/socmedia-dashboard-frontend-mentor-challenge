import { useState } from "react";

import data from "/data.json";
import upIcon from "/icon-up.svg";
import downIcon from "/icon-down.svg";

import Account from "./components/Account";
import Toggle from "./components/Toggle";
import Overview from "./components/Overview";

function App() {
  // checked = light
  const [darkMode, setDarkMode] = useState(true);

  const curMode = darkMode ? "dark" : "light";

  const [accountsData, todaysData] = data;
  console.log(accountsData, todaysData);

  function formatNumber(val) {
    if (Number(val) > 10000) {
      return (Number(val) / 1000).toString() + "k";
    } else {
      return val;
    }
  }

  const deltaVariant = {
    up: {
      icon: upIcon,
      alt: "Up Arrow",
      class: "text-(--color-lime-green)",
    },
    down: {
      icon: downIcon,
      alt: "Down Arrow",
      class: "text-(--color-bright-red)",
    },
  };

  const colorVariant = {
    light: {
      // Dashboard
      dashboardBg:
        "bg-(--color-lightmode-white-bg) p-7 min-h-screen lg:px-30 lg:py-10",
      dashboardTitle:
        "font-bold text-2xl text-(--color-lightmode-dark-blue-text) lg:text-5xl",
      dashboardSubtitle: `font-semibold text-md lg:text-2xl text-(--color-lightmode-blue-text)
                          pb-4 mb-0 border-b-1 border-(--color-lightmode-blue-text)
                          lg:border-none`,
      dashboardToggleText:
        "font-bold text-(--color-lightmode-blue-text) lg:text-xl",

      // Section
      sectionHText: "font-bold text-3xl text-(--color-lightmode-blue-text)",

      // Cards
      card5xlText: "font-bold text-5xl text-(--color-lightmode-dark-blue-text)",
      card2xlText: "font-bold text-2xl text-(--color-lightmode-dark-blue-text)",
      handleText: "font-bold text-(--color-lightmode-blue-text)",
      semiBoldText: "font-semibold text-(--color-lightmode-blue-text)",
      wideText:
        "font-light tracking-[0.15rem] text-(--color-lightmode-blue-text)",
      accCard:
        "basis-full rounded-sm text-center mb-5 lg:m-0  bg-(--color-lightmode-blue-card-bg)",

      overviewCard:
        "p-4 my-4 lg:m-0 rounded-sm text-center mb-5 bg-(--color-lightmode-blue-card-bg)",
    },

    dark: {
      dashboardBg:
        "p-7 bg-(--color-darkmode-blue-bg) min-h-screen lg:px-30 lg:py-10",

      dashboardTitle:
        "font-bold text-2xl text-(--color-darkmode-white-text) lg:text-5xl",
      dashboardSubtitle: `font-semibold text-md lg:text-2xl text-(--color-darkmode-blue-text)
                          pb-4 mb-0 border-b-1 border-(--color-darkmode-blue-text)
                          lg:border-none`,
      dashboardToggleText:
        "font-bold text-(--color-darkmode-blue-text) lg:text-xl",
      card5xlText: "font-bold text-5xl text-(--color-darkmode-white-text)",
      card2xlText: "font-bold text-2xl text-(--color-darkmode-white-text)",
      sectionHText: "font-bold text-3xl text-(--color-darkmode-white-text)",
      handleText: "font-bold text-(--color-darkmode-blue-text)",
      semiBoldText: "font-semibold text-(--color-darkmode-blue-text)",
      wideText:
        "font-light tracking-[0.15rem] text-(--color-darkmode-blue-text)",
      accCard:
        "basis-full rounded-sm text-center mb-5 lg:m-0 bg-(--color-darkmode-blue-card-bg)",
      overviewCard:
        "p-4 my-4 lg:m-0 rounded-sm text-center mb-5 bg-(--color-darkmode-blue-card-bg)",
    },
  };

  const accountList = accountsData.map((d) => {
    return (
      <Account
        key={d.account}
        {...d}
        darkMode={darkMode}
        deltaVariant={deltaVariant}
        colorVariant={colorVariant}
        formatNumber={formatNumber}
      />
    );
  });

  const overviewList = todaysData.map((d) => {
    let id = d.account + "-" + d.item.toLowerCase().replace(" ", "");
    return (
      <Overview
        key={id}
        {...d}
        darkMode={darkMode}
        deltaVariant={deltaVariant}
        colorVariant={colorVariant}
        formatNumber={formatNumber}
      />
    );
  });

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <main className={`${colorVariant[curMode].dashboardBg}`}>
      <h1 className={`${colorVariant[curMode].dashboardTitle}`}>
        Social Media Dashboard
      </h1>

      <div className="lg:flex items-center justify-between">
        <h3 className={`${colorVariant[curMode].dashboardSubtitle}`}>
          Total Followers: 23,004
        </h3>

        <div className="flex gap-5 items-center justify-between lg:justify-end p-0 mb-6">
          <div className={`${colorVariant[curMode].dashboardToggleText}`}>
            Dark Mode
          </div>
          <Toggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="lg:flex gap-10 justify-evenly">{accountList}</div>

      <div className="mt-10 mb-4">
        <h2 className={`${colorVariant[curMode].sectionHText}`}>
          Overview - Today
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-4 lg:grid-flow-row-dense lg:gap-6">
        {overviewList}
      </div>
    </main>
  );
}

export default App;
