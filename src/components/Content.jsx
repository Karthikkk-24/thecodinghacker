import "../../src/App.css";
import ContentContainer from "../../src/components/ContentContainer";
import Sidebar from "../../src/components/Sidebar";

export default function App() {
  return (
    <div className="content_div">
      <div className="sidebar_container">
        <Sidebar />
      </div>
      <div className="content">
        <ContentContainer />
      </div>
    </div>
  );
}
