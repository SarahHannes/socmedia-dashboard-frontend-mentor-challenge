export default function Toggle(props) {
  const { darkMode, toggleTheme } = props;

  const colorVariants = {
    dark: `hover:cursor-pointer
        relative w-(--toggle-w) h-(--toggle-h) rounded-(--toggle-bradius) bg-linear-to-r from-(--color-toggle-dark1) to-(--color-toggle-dark2)
        after:content-[''] after:absolute after:top-0 after:left-0 after:bg-(--color-darkmode-blue-bg)
        after:m-(--after-fill-m) after:rounded-(--toggle-bradius)
        after:h-(--after-fill-w) after:w-(--after-fill-w)
        after:transition duration-100
        peer-checked:after:translate-x-(--toggle-h)`,

    light: `hover:cursor-pointer
        relative w-(--toggle-w) h-(--toggle-h) rounded-(--toggle-bradius) bg-(--color-toggle-light)
        after:content-[''] after:absolute after:top-0 after:left-0 after:bg-(--color-lightmode-white-bg)
        after:m-(--after-fill-m) after:rounded-(--toggle-bradius)
        after:h-(--after-fill-w) after:w-(--after-fill-w)
        after:transition duration-100
        peer-checked:after:translate-x-(--toggle-h)`,
  };

  const curMode = darkMode ? "dark" : "light";

  return (
    <div
      className="
      -translate-y-3
      hover:cursor-pointer
      inline-block
      ">
      {/* toggle */}
      <label>
        {/* toggle input */}
        <input
          className="peer h-0 w-0"
          type="checkbox"
          name="darkmode"
          id="darkmode"
        />

        {/* toggle fill */}
        <div
          onClick={toggleTheme}
          className={`${colorVariants[curMode]} ...`}></div>
      </label>
    </div>
  );
}
