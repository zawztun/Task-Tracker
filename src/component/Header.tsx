type HeaderProps = {
  themeSwitch: () => void;
};

const Header = ({ themeSwitch }: HeaderProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-white text-3xl tracking-[20px] font-semibold">
          TODO
        </h2>
        <div className="w-[30px] h-[30px]" onClick={themeSwitch}>
          {localStorage.theme === "dark" ? (
            <img src="/image/icon-moon.svg" alt="test" />
          ) : (
            <img src="/image/icon-sun.svg" alt="test" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
