import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Categories } from './components/Categories';

function App() {
  return (
    <div className="body bg-light">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col d-flex">
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-01.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-02.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-03.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-04.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-05.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-06.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-07.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-08.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-09.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-10.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-11.png" />
          <Categories img_link="https://k.nooncdn.com/cms/pages/20210619/3d0e124b2ffdb4b7e1815f485726fdb7/en_mb-category-12.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
