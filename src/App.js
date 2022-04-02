import { useState } from "react";
import Toolbar from "../../react-assessment-client/src/components/toolbar/toolbar";
import Drawer from "../../react-assessment-client/src/components/drawer/drawer";
import Backdrop from "../../react-assessment-client/src/components/backdrop/backdrop";
import "./App.css";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

 const toggleDrawer = () => {
      setDrawerOpen(true);
    };
  const backdropClickHandler = () => {
    setDrawerOpen(false)
  }

  let drawer;
  let backdrop;

  if (drawerOpen === true) {
    drawer = <Drawer />;
    backdrop = <Backdrop click={backdropClickHandler}/>;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={toggleDrawer} />
      {drawer}
      {backdrop}

      <main style={{ marginTop: "56px" }}>
        <p>Click on the avatar!</p>
      </main>
    </div>
  );
}

export default App;
