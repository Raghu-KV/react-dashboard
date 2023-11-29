import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="basis-5/6">
        <NavBar />
        Container
      </div>
    </div>
  );
}

export default Home;
