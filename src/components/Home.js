import React from 'react'
import Masonry from 'react-masonry-css'
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchNews} from '../store/action/index';

export default function Home() {
  const allNews = useSelector((store)=> store.newsReducers.allNews);
  // console.log(allNews);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchNews());
  },[dispatch]);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <React.Fragment>
      <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          >   
          {allNews?allNews.map((ele,idx)=>{
              return(
                <div key={idx}>
                  <img className="responsive-img" src={ele.image} alt="" />
                  <div>
                        <span>{ele.author}</span>
                  </div>
                  <div className="content">
                    <div className="title">{ele.title}</div>
                    {/* <div className="excerpt">{ele.content}</div> */}
                    <LinkContainer to={`/news/${ele._id}`}>
                      <Button className='mt-3' variant="primary">Read More</Button>
                    </LinkContainer>
                  </div>
                </div>
              )
            }):null
          } 
      </Masonry>
    </React.Fragment>
  )
}
