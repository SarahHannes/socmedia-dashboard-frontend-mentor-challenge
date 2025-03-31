export default function Overview(props) {
  console.log("props in overview", props);
  const {
    account,
    icon,
    item,
    percentage,
    value,
    darkMode,
    deltaVariant,
    colorVariant,
    formatNumber,
  } = props;

  const curMode = darkMode ? "dark" : "light";
  const delta = percentage.slice(0, 1) === "+" ? "up" : "down";
  const percValue = percentage.slice(1);
  console.log("curMode", curMode);
  console.log(
    "colorVariant[curMode].semiBoldText",
    colorVariant[curMode].semiBoldText
  );

  return (
    <div className={`${colorVariant[curMode].overviewCard}`}>
      <div className="flex items-center justify-between">
        <h3 className={`${colorVariant[curMode].semiBoldText} ...`}>{item}</h3>
        <img src={icon} alt={account} />
      </div>
      <div className="mt-2 flex justify-between">
        <h2 className={`${colorVariant[curMode].card2xlText} ...`}>
          {formatNumber(value)}
        </h2>
        <div className="flex gap-1 items-center justify-end">
          <img
            src={`${deltaVariant[delta].icon}`}
            alt={`${deltaVariant[delta].alt}`}
          />
          <span className={`${deltaVariant[delta].class}`}>{percValue}</span>
        </div>
      </div>
    </div>
  );
}
