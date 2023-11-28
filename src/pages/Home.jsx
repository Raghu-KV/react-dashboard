import SideBar from "../components/SideBar";
function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="border basis-5/6">Container</div>
    </div>
  );
}

export default Home;
