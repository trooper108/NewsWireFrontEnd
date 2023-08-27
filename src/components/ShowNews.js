import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {fetchNewsById} from '../store/action/index' 
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import Moment from 'react-moment'


export default function ShowNews() {

  const params = useParams();
  const navigate = useNavigate();
  const deleteNewsFromDB = async () =>{
    try {
      await axios.delete(`https://newswirebackend.onrender.com/news/${params.id}`);
      navigate('/');
      toast.success('Successfully Deleted News!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    } catch (error) {
      console.log(error);
    }
  }

  const newsItem = useSelector((store)=>store.newsReducers.newsItem);
  // console.log(newsItem)
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      dispatch(fetchNewsById(params.id));
    },
    [dispatch,params]
  );
  return (
    <React.Fragment>
    {newsItem?
      <div className='article_container'>
      <h1>{newsItem.title}</h1>
      <div style={{ backgroundImage: `url(${newsItem.image})` }} className='image'></div>
      <div className="author">
        <span>Created by : {newsItem.author}</span>
        <div> 
          Created at : <Moment format="DD/MM/YYYY">{newsItem.createdAt}</Moment>
        </div>
      </div>
      <div className="content">
      {newsItem.content}
      </div>
      <LinkContainer to={`/news/${newsItem._id}/edit`}>
        <button className="btn btn-primary m-1">Edit</button>
      </LinkContainer>     
      <button onClick={deleteNewsFromDB} className="btn btn-secondary m-2">Delete</button>
  
    </div>
    :null
    }  
  </React.Fragment>
  )
}
