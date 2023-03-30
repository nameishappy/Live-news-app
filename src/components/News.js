import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=>{

  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // document.title = `${this.capitalizeFirstLetter(props.category)}-NewsLines`
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);

  const updateNews=async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=IN&category=${props.category}&apiKey=b6f0ddcbd11540178d1707534a25ab28&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
  }
  useEffect(()=>{
    updateNews()
  },[])
 
 const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=IN&category=${props.category}&apiKey=b6f0ddcbd11540178d1707534a25ab28&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 className="text-center" style={{marginTop:'70px'}}>NewsLines-Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">

            <div className="row my-9">
              {articles.map((element, index) => {
                return <div className="col-md-4" key={index}>
                  <NewsItem title={element.title.slice(0,75)} description={!element.description?element.description:element.description.slice(0,150)} imageUrl={element.urlToImage ? element.urlToImage : "https://i.ytimg.com/vi/87ORsmVj29Y/maxresdefault.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })
              }
            </div>
          </div>
        </InfiniteScroll>

      </>
    )
  }

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number

}
News.defaultProps = {
  pageSize: 6,
  category: "general"
}

export default News