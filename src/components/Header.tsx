import SettingsIcon from "@svgs/settings.svg?react";
import SunIcon from "@svgs/sun.svg?react";
import Button from "@components/ui/Button";
import toggleDarkMode from "../utils/toggleDarkMode";

const Header = ({}) => {
  return (
    <header className="bg-background flex p-2 px-4 sticky top-0">
      <div className="flex gap-4">
        <Button size={"icon"}>
          <SettingsIcon />
        </Button>
        <Button size={"icon"} onClick={toggleDarkMode}>
          <SunIcon />
        </Button>
      </div>
      <Button className="ml-auto">admin</Button>
    </header>
  );
};

export default Header;
