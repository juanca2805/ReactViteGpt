import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Conoce mas de Chatbots, <br /> Aqui te dejamos informacion<br/>sobre los chatbots.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
    
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="" />
      </div>
    </div>
  </div>
);

export default Blog;
