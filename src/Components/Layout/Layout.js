import Navbar from "./Navbar";

const Layout = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Navbar />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default Layout;
