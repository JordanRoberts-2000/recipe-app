import SettingsIcon from "@svgs/settings.svg?react";
import SunIcon from "@svgs/sun.svg?react";
import Button from "@components/ui/Button";
import toggleDarkMode from "../utils/toggleDarkMode";

const Header = ({}) => {
  return (
    <header className="dark:bg-purple-500">
      <div>
        <Button size={"icon"}>
          <SettingsIcon />
        </Button>
        <Button size={"icon"} onClick={toggleDarkMode}>
          <SunIcon />
        </Button>
      </div>
      <Button>admin</Button>
    </header>
  );
};

export default Header;
