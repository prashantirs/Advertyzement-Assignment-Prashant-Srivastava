import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
import User from './components/User';
import Footer from './components/Footer';


function App() {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const handelClick = () => {
    setPage(1);
    fetchUser();
    setCount(count+1);
  }


  const fetchUser = async () => {
    setLoading(true)
    const url = `https://reqres.in/api/users?page=${page}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    //Reading Array from parse Data
    setUser(parsedData.data);
    setLoading(false)
  }

  const [loading, setLoading] = useState(false)

  const fetchMoreUser = async () => {

    const url = `https://reqres.in/api/users?page=${page + 1}`;
    setLoading(true)
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setUser(user.concat(parsedData.data));
    setLoading(false);

  };


  const btnclick = () => {
    fetchMoreUser();
  }
  return (
    <>
      <Navbar handelClick={handelClick} />
      {loading && <Spinner />}
      <div className="container">
        <div className="row">
          {user.map((element) => {
            return (
              <div className="col-md-3 my-2" key={element.id}>
                <User email={element.email} first={element.first_name} last={element.last_name} avatar={element.avatar} />
              </div>
            )
          })
          }
        </div>
      </div>
      <div className="position-fixed bottom-0 end-0 my-3 mx-3">
        <button className='btn btn-primary pull-right' onClick={btnclick} disabled={page === 1 ? false : true}>Next</button>
      </div>
      <Footer count={count}/>
    </>
  );
}

export default App;
