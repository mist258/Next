import { FC, PropsWithChildren } from "react";
import { Header } from "./components/header";

interface IProps extends PropsWithChildren {}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: 64 }}>{children}</main>
    </div>
  );
};

export default Layout;
