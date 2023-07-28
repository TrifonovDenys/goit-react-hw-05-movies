// import React, { useEffect, useState } from 'react'
// import { Link, useLocation} from 'react-router-dom'
// import { theMovieSearchAPI } from 'servises/api'
// import css from './styles/HomePage.module.css'

// const MoviesPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [arr, setArr] = useState([]);
//   const location = useLocation()

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await theMovieSearchAPI(`?query=${searchQuery}`);
//         setArr(response);
//       } catch (error) {
//         console.error('Ошибка при загрузке данных:', error);
//       }
//     };
//     fetchData();
//   }, [searchQuery]);

//   return (
//     <>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         placeholder='search movie'
//       />

//       <ul className={css.list}>
//         {arr && arr.map(({ id, title }) => <li key={id} className={css.item}>
//           <Link className={css.link} to={`${id}`} state={{ from: location }}>
//             {title}
//           </Link>
//         </li>)}
//       </ul>
//     </>
//   );
// };

// export default MoviesPage; версия без кнопки поиска


import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { theMovieSearchAPI } from 'servises/api'
import css from './styles/HomePage.module.css'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('query');
  const [searchQuery, setSearchQuery] = useState('');
  const query = searchParams.get('query') ?? '';

  const [arr, setArr] = useState([]);
  const location = useLocation()

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await theMovieSearchAPI(`?query=${query}`);
        console.log(response);
        setArr(response);
    //     if( response.length === 0 ) toast.error('No movie for you search', {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //       style: {
    //       fontSize: '20px'
    //   },
    // })
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };
    fetchData();
  }, [query])

  const handleSearch = () => {
    setSearchParams({ query: searchQuery });

  }
  return (
    <>
      {/* <ToastContainer /> */}
      <input
        className={css.input}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='search movie'
      />
      <button className={css.button_search} onClick={handleSearch}>Search</button>

      <ul className={css.list}>
        {arr.map(({ id, title }) => <li key={id} className={css.item}>
          <Link className={css.link} to={`${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>)} 
      </ul>
    </>
  );
};

export default MoviesPage;