/* eslint-disable import/no-extraneous-dependencies */
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["firstPage", "secondPage", "thirdPage"];

function App() {
  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
    />
  )
}

export default App;
