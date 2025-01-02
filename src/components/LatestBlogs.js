import React from 'react';
import './LatestBlogs.css';

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      image: '/imgBlog1.jpg',
      title: 'Why Do Platelet Count Decrease In Dengue?',
      link: '#'
    },
    {
      id: 2,
      image: '/imgBlog2.jpg',
      title: 'What Does Dengue Ns1 Antigen Positive Means?',
      link: '#'
    },
    {
      id: 3,
      image: '/imgBlog3.jpg',
      title: 'What Does Dengue IgM Positive Mean?',
      link: '#'
    },
    {
      id: 4,
      image: '/imgBlog4.jpg',
      title: 'सुखी खाँसी के लिए कौनसी सिरप लें',
      link: '#'
    },
    {
      id: 5,
      image: '/imgBlog5.jpg',
      title: 'What Are The Uses Of Crocin In Cold And Flu?',
      link: '#'
    }
  ];

  return (
    <section className="latest-blogs">
      <div className="blogs-container">
        <h2>Read Our Latest Blogs</h2>
        <p>Expert Opinions and Latest Trends in Healthcare</p>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <a href={blog.link} className="read-more">
                  Read More
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">View All Blogs</button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs; 