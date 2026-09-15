import Link from "next/link";

const fallbackImages = ["assets/images/blog/one.png", "assets/images/blog/two.png", "assets/images/blog/three.png"];
const delays = [0, 300, 600];

const defaultPosts = [
  {
    tag: "Motivation",
    title: "Why Teacher Motivation Matters More Than Teacher Training",
    author: "Ed Impact Team",
    readTime: "5 min read",
  },
  {
    tag: "Evidence",
    title: "What The 2025 Impact Evaluation Tells Us About Learning Outcomes",
    author: "Ed Impact Team",
    readTime: "7 min read",
  },
  {
    tag: "Systems",
    title: "Localisation In Practice: From STIR Education To Ed Impact Africa Foundation",
    author: "Ed Impact Team",
    readTime: "6 min read",
  },
];

const BlogOne = ({ posts = defaultPosts }) => {
  const items = posts.slice(0, 3);
  return (
    <section className='blog'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-documents' />
                Insight Production
              </span>
              <h2 className='title-animation_inner'>
                Policy Briefs &amp; <span>Insights</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='row gutter-40'>
          {items.map((post, index) => (
            <div className='col-12 col-lg-6 col-xl-4' key={post.id || index}>
              <div
                className='blog__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={delays[index % delays.length]}
              >
                <div className='blog__single van-tilt'>
                  <div className='blog__single-thumb'>
                    <Link href={`/insights/${post.id}`}>
                      <img
                        src={post.image?.url || fallbackImages[index % fallbackImages.length]}
                        alt='Image_inner'
                      />
                    </Link>
                    <div className='tag'>
                      <Link href='/data-evidence'>
                        <i className='fa-solid fa-tags' />
                        {post.tag}
                      </Link>
                    </div>
                  </div>
                  <div className='blog__single-inner'>
                    <div className='blog__single-meta'>
                      <p>
                        <i className='icon-user' />
                        {post.author}
                      </p>
                      <p>
                        <i className='icon-clock' />
                        {post.readTime}
                      </p>
                    </div>
                    <div className='blog__single-content'>
                      <h5>
                        <Link href={`/insights/${post.id}`}>{post.title}</Link>
                      </h5>
                    </div>
                    <div className='blog__single-cta'>
                      <Link
                        href={`/insights/${post.id}`}
                        aria-label='blog details'
                        title='blog details'
                      >
                        Read More
                        <i className='fa-solid fa-circle-arrow-right' />
                      </Link>
                    </div>
                  </div>
                  <img
                    src='assets/images/blog/spade.png'
                    alt='Image_inner'
                    className='spade-two'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='section__cta cta text-center'>
              <Link
                href='/data-evidence'
                aria-label='our blog'
                title='our blog'
                className='btn--primary'
              >
                View All <i className='fa-solid fa-arrow-right' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='blog-bg'>
        <img src='assets/images/blog/blog-bg.png' alt='Image_inner' />
      </div>
      <div className='spade'>
        <img
          src='assets/images/blog/spade-base.png'
          alt='Image_inner'
          className='base-img'
        />
      </div>
    </section>
  );
};

export default BlogOne;
