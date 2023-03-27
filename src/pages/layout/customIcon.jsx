import AccountSvg from "../../assets/menu/account.svg";
import DashboardSvg from "../../assets/menu/dashboard.svg";
import DocumentationSvg from "../../assets/menu/documentation.svg";
import GuideSvg from "../../assets/menu/guide.svg";
import PermissionSvg from "../../assets/menu/permission.svg";

export const CustomIcon = (props) => {
  const { type } = props;
  let com = <GuideSvg />;

  if (type === "guide") {
    com = <img src={GuideSvg} alt="GuideSvg" />;
  } else if (type === "permission") {
    com = <img src={PermissionSvg} alt="PermissionSvg" />;
  } else if (type === "dashboard") {
    com = <img src={DashboardSvg} alt="DashboardSvg" />;
  } else if (type === "account") {
    com = <img src={AccountSvg} alt="AccountSvg" />;
  } else if (type === "documentation") {
    com = <img src={DocumentationSvg} alt="DocumentationSvg" />;
  } else {
    com = <img src={GuideSvg} alt="GuideSvg" />;
  }

  return <span className="anticon">{com}</span>;
};
