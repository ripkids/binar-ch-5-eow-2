import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

const Home = () => {
  return (
    <div className="row">
      <div className="d-none col-md">
        <SideBar />
      </div>
      <div className="col d-lg-none">
        <TopBar />
      </div>
    </div>
  )
}

export default Home;

