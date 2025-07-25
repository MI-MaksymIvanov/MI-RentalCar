import Navigation from "../Navigation/Navigation.jsx";

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main id="main">{children}</main>
    </>
  );
}

export default Layout;
