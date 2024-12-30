import SettingsIcon from "@svgs/settings.svg?react";
import SunIcon from "@svgs/sun.svg?react";
import Button from "@components/ui/Button";

const Header = ({}) => {
  return (
    <header>
      <div>
        <SettingsIcon />
        <SunIcon />
      </div>
      <Button>admin</Button>
    </header>
  );
};

export default Header;
