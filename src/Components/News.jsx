import React, { useState, useEffect } from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

function News(props) {
  const [data, setData] = useState([]);
  const [odata, setOdata] = useState({
    page: 1,
    country: "in",
    totalarticle: 0,
  });
  const [loading, setLoading] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getData = async () => {
    setLoading(true);
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${odata.country}&category=${props.catagory}&apiKey=284957f0c97a45889013c3a74f3a36b1&page=${odata.page}&pagesize=6`
    );

    const adata = await res.json();
    setData(adata.articles);
    setOdata({
      page: 1,
      country: "in",
      totalarticle: adata.totalResults,
    });
    console.log(odata + "form firest");

    document.title = `${capitalizeFirstLetter(props.catagory)} -PandaNews`;
    setLoading(false);
  };

  const fetchMoreData = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${odata.country}&category=${
        props.catagory
      }&apiKey=284957f0c97a45889013c3a74f3a36b1&page=${
        odata.page + 1
      }&pagesize=6`
    );

    const adata = await res.json();
    setData(data.concat(adata.articles));

    setOdata((prev) => {
      return {
        ...prev,
        page: prev.page + 1,
      };
    });
  };

  // const handleOnNext = () => {
  //   setOdata((prev) => {
  //     return {
  //       ...prev,
  //       page: prev.page + 1,
  //       country: "in",
  //     };
  //   });
  //   getData();
  // };

  // const handleOnPrev = () => {
  //   setOdata((prev) => {
  //     return {
  //       ...prev,
  //       page: prev.page - 1,
  //       country: "in",
  //     };
  //   });
  //   getData();
  // };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">
          Top Headlines Form {capitalizeFirstLetter(props.catagory)}
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={data.length !== odata.totalarticle || data.length === 0}
          loader={<Spinner/>}
        >
          <div className="row">
            {data.map((curr, i) => {
              return <Card curr={curr} key={i} />;
            })}
          </div>
        </InfiniteScroll>

        {/* <div className="d-flex container justify-content-between my-4">
            <button
              disabled={odata.page === 1}
              onClick={handleOnPrev}
              type="button"
              className="btn btn-dark"
            >
              prev
            </button>
            <button
              type="button"
              className="btn btn-dark"
              disabled={odata.page > Math.ceil(odata.totalarticle / 9)}
              onClick={handleOnNext}
            >
              Next
            </button>
          </div> */}
      </div>
    </>
  );
}

export default News;
