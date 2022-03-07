import React from 'react';
import { Blog } from '../../datas/blogDatas';
import './blog-visuals.css'
export default function BlogVisuals() {
  return <div className="blogs">
       {Blog.map((item,index)=>(
            <section key={index}>
              <img src={item.img} alt="img" />
              <p>{item.text}</p>
              </section>
      ))}
  </div>;
}
