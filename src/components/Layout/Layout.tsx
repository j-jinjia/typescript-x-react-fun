import { Link } from "react-router-dom";
import "./Layout.scss";

type LayoutProps = {
  navigation?: boolean;
};

const Layout: React.FC<LayoutProps> = ({ navigation = false, children }) => {
  return (
    <div className="layout">
      {navigation && (
        <>
          <Link to="/">Home</Link>
          <br />
          <Link to="/coaches">Coaches</Link>
        </>
      )}
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
