import Footer from "./footer/footer";
import Header from "./header/header";
import pages from "@/constants/pages";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header pages={pages} />
      {/* {children} */}
      <div>
        
     
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <Footer pages={pages} />
    </>
  );
};

export default Layout;
