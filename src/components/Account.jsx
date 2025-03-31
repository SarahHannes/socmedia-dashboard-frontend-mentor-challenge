export default function Account(props) {
  const {
    account,
    followers,
    handle,
    icon,
    today,
    darkMode,
    deltaVariant,
    colorVariant,
    formatNumber,
  } = props;

  const curMode = darkMode ? "dark" : "light";
  const delta = today.slice(0, 1) === "+" ? "up" : "down";
  const deltaValue = today.slice(1);

  const AccColorVariant = {
    facebook: "rounded-t-xl h-1 bg-(--color-facebook)",
    twitter: "rounded-t-xl h-1 bg-(--color-twitter)",
    instagram:
      "rounded-t-xl h-1 bg-linear-to-r from-(--color-instagram1) to-(--color-instagram2)",
    youtube: "rounded-t-xl h-1 bg-(--color-youtube)",
  };

  return (
    <div className={`${colorVariant[curMode].accCard} ...`}>
      <div className={`${AccColorVariant[account]} ...`}></div>
      <div className="flex gap-3 justify-center m-3">
        <img className="self-center" src={icon} alt={`${account} icon`} />
        <h3 className={`${colorVariant[curMode].handleText} ...`}>{handle}</h3>
      </div>

      <h2 className={`${colorVariant[curMode].card5xlText} ...`}>
        {formatNumber(followers)}
      </h2>
      <p className={`${colorVariant[curMode].wideText} ...`}>
        {account != "youtube" ? "FOLLOWERS" : "SUBSCRIBERS"}
      </p>
      <div className="flex gap-2 justify-center items-center font-bold m-2 p-3">
        <img
          className={`${deltaVariant[delta].class} ...`}
          src={deltaVariant[delta].icon}
          alt={deltaVariant[delta].alt}
        />
        <p className={`${deltaVariant[delta].class} ...`}>{deltaValue} Today</p>
      </div>
    </div>
  );
}
