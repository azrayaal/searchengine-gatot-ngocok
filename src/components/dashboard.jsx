import React, { useState } from 'react';
import 'boxicons';
import gatotngocok from './gatotngocok.png';
import { useEffect } from 'react';
// import gatotgatau from './gatotGatau.png';
const axios = require('axios');

export default function Dashboard() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});
  const [yaNdakTau, setYaNdakTau] = useState('');

  // async function handleSearch(e) {
  //   e.preventDefault();
  //   if (search === '') {
  //     setYaNdakTau(
  //       <>
  //         <h1 className="text-center text-white text-4xl my-16">Ya ndak tau ko tanya saya...</h1>
  //       </>
  //     );
  //   }
  //   const response = await axios.get(`http://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`);

  //   const json = await response.json();
  //   console.log('Json', json);

  //   setResults(json.query.search);
  //   setSearchInfo(json.query.searchinfo);

  //   console.log('data=>', response);
  // }

  // useEffect(() => {
  //   handleSearch();
  // }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === '') {
      setYaNdakTau(
        <>
          <h1 className="text-center text-white text-4xl my-16">Ya ndak tau ko tanya saya...</h1>
        </>
      );
    }
    const endpoint = `http://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
    const response = await fetch(endpoint);
    const json = await response.json();

    setResults(json.query.search);
    setSearchInfo(json.query.searchinfo);

    // console.log('data=>', response);
  };

  return (
    <>
      <div className="py-5 sm:mt-28 mt-20 flex-grow">
        <div class="flex flex-wrap justify-center ">
          {/* <div class="absolute "> */}
          <div class="w-7/12 sm:w-72 px-4 absolute z-0 sm:top-14 top-16">
            <img src={gatotngocok} alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
          </div>
          <h1 className="pb-8 text-center text-5xl font-bold text-slate-200 z-10" style={{ textShadow: '4px 4px black' }}>
            Gatot Ngocok
          </h1>
        </div>
        {/* input */}
        <div className="flex justify-center">
          <div className="mb-3 xl:w-1/3 w-80">
            <label class="relative block">
              <form onSubmit={handleSearch}>
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <box-icon name="search-alt-2" color="#5c5c5c"></box-icon>
                </span>
                <input
                  className="rounded-full placeholder:italic placeholder:text-slate-400 block bg-slate-50 w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
                  placeholder="Coba kocok..."
                  type="search"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
            </label>
          </div>
        </div>
        {/* ends of input */}

        {/* button */}
        <form onSubmit={handleSearch}>
          <div className="flex space-x-2 py-2 pb-5 justify-center">
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-lg leading-tight  rounded-full shadow-xl hover:bg-slate-700  focus:bg-slate-700 focus:outline-none focus:ring-0 active:bg-slate-800 transition duration-150 ease-in-out "
              onChange={(e) => setSearch(e.target.value)}
            >
              Kocok dulu
            </button>
          </div>
        </form>
        {/* ends of button */}

        {searchInfo.totalhits ? <p className="text-center text-white pt-5 pb-3">Hasil kocokan: {searchInfo.totalhits}</p> : ''}

        {/* cards */}

        {results.map((result, i) => {
          const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
          return (
            <a className="a" href={url} target="_blank" rel="nofollow">
              <div className="flex justify-center py-2 mx-5" key={i}>
                <div className="block p-6 rounded-lg shadow-lg bg-slate-100 hover:bg-slate-300 max-w-4xl ">
                  <h5 className="text-sky-600 text-xl leading-tight font-medium mb-2">{result.title}</h5>
                  <p className="text-gray-700 text-base mb-4" dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                </div>
              </div>
            </a>
          );
        })}
        {/* ends of cards */}

        <p className="text-center pb-5 text-slate-500">
          Gatot nawarin versi: <span className="text-sky-600">Ngapak, Jaksel</span>
        </p>

        {/* ya Ndak Tau */}
        <h1>{yaNdakTau}</h1>
        {/* end of ya Ndak Tau */}
      </div>
    </>
  );
}
