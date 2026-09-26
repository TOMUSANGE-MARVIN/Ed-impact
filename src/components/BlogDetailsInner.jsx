import { mediaSrc } from "@/lib/image";
import Link from "next/link";

const defaultPost = {
  title: "Why Teacher Motivation Matters More Than Teacher Training",
  tag: "Motivation",
  readTime: "5 min read",
  publishedDate: "2026-03-12",
  body: "It is tempting to measure success by how many teachers we have trained. But training alone rarely changes what happens in a classroom. What changes it is motivation, a teacher's sense of autonomy, mastery and purpose in their own craft.\n\nWhen teachers feel supported, recognised, and connected to their purpose, motivation grows and classrooms thrive. That is why our model is built around role-modelling and peer networks, not one-off workshops.\n\nOver 3,000 teachers are now applying evidence-informed teaching practices, strengthening learning for thousands of children across Uganda.",
};

const fallbackImages = ["/assets/images/blog/one.webp", "/assets/images/blog/two.webp", "/assets/images/blog/three.webp"];

const formatDate = (dateValue) => {
  if (!dateValue) return "12 March 2026";
  const d = new Date(dateValue);
  if (Number.isNaN(d.getTime())) return "12 March 2026";
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
};

const BlogDetailsInner = ({ post: currentPost, posts = [] }) => {
  const post = currentPost || posts[0] || defaultPost;
  const otherPosts = posts.filter((p) => p.id !== post.id);
  const recentPosts = otherPosts.length ? otherPosts.slice(0, 3) : posts.length ? posts.slice(0, 3) : [defaultPost];
  const categories = Array.from(new Set(posts.map((p) => p.tag).filter(Boolean)));
  const paragraphs = (post.body || defaultPost.body).split(/\n\s*\n/).filter(Boolean);

  return (
    <section className='blog-main cm-details'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div className='cm-details__content'>
              <div
                className='cm-details__poster'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <img src={mediaSrc(post.image?.url) || "/assets/images/event/poster.webp"} alt='Image_inner' />
              </div>
              <div className='cm-details-meta'>
                <p>
                  <i className='fa-solid fa-calendar-days' />
                  {formatDate(post.publishedDate)}
                </p>
                <p>
                  <i className='fa-solid fa-clock' />
                  {post.readTime || defaultPost.readTime}
                </p>
              </div>
              <div className='cm-group cta'>
                <h3 className='title-animation_inner'>{post.title || defaultPost.title}</h3>
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {post.excerpt ? (
                <div className='cm-group cta'>
                  <div className='blockquote-wrapper'>
                    <blockquote>"{post.excerpt}"</blockquote>
                    <p>
                      <span className='line' />
                      <span className='quote-owner'>Ed Impact Africa Foundation</span>
                    </p>
                  </div>
                </div>
              ) : null}
              <div className='cm-img-group cta'>
                <div className='cm-img-single'>
                  <img src='/assets/images/event/pp-one.webp' alt='Image_inner' />
                </div>
                <div className='cm-img-single'>
                  <img src='/assets/images/event/pp-two.webp' alt='Image_inner' />
                </div>
              </div>
              <div className='details-footer cta'>
                <div className='details-tag'>
                  <div className='tag-header'>
                    <h6>Tags:</h6>
                  </div>
                  <div className='tag-wrapper'>
                    <Link href='/data-evidence'>{post.tag || defaultPost.tag}</Link>
                  </div>
                </div>
                <div className='details-tag'>
                  <div className='tag-header'>
                    <h6>Share:</h6>
                  </div>
                  <div className='social'>
                    <a
                      href='https://www.facebook.com/'
                      target='_blank'
                      aria-label='share us on facebook'
                      title='facebook'
                      rel='noreferrer'
                    >
                      <i className='fa-brands fa-facebook-f' />
                    </a>
                    <a
                      href='https://www.youtube.com/'
                      target='_blank'
                      aria-label='share us on youtube'
                      title='youtube'
                      rel='noreferrer'
                    >
                      <i className='fa-brands fa-youtube' />
                    </a>
                    <a
                      href='https://x.com/'
                      target='_blank'
                      aria-label='share us on twitter'
                      title='twitter'
                      rel='noreferrer'
                    >
                      <i className='fa-brands fa-x-twitter' />
                    </a>
                    <a
                      href='https://www.linkedin.com/'
                      target='_blank'
                      aria-label='share us on linkedin'
                      title='linkedin'
                      rel='noreferrer'
                    >
                      <i className='fa-brands fa-linkedin-in' />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='blog-comment'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div
                  className='comment__form'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='comment-header mb-40'>
                    <h4 className='mt-8 fw-6 title-animation_inner'>
                      Leave A Comment
                    </h4>
                  </div>
                  <form action='#' method='post'>
                    <div className='form-group'>
                      <div className='input-icon'>
                        <input
                          type='text'
                          required=''
                          name='comment-name'
                          id='commentName'
                          placeholder='Your Name'
                        />
                        <i className='fa-solid fa-user' />
                      </div>
                      <div className='input-icon'>
                        <input
                          type='email'
                          required=''
                          name='comment-email'
                          id='commentEmail'
                          placeholder='Enter Email'
                        />
                        <i className='fa-regular fa-envelope' />
                      </div>
                    </div>
                    <div className='input-icon input-icon-alt'>
                      <textarea
                        name='comment-message'
                        id='commentMessage'
                        cols={30}
                        rows={10}
                        placeholder='Type Your Comments...'
                        defaultValue={""}
                      />
                      <i className='fa-regular fa-comments' />
                    </div>
                    <div className='cta mt-40'>
                      <div className='btn-wrapper'>
                        <button type='submit' className='btn--secondary'>
                          Submit Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-4'>
            <div className='blog-main__sidebar'>
              <div
                className='cm-details-author cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='author-thumb'>
                  <img src='/assets/images/author-two.webp' alt='Image_inner' />
                </div>
                <div className='author-meta'>
                  <h6>Ed Impact Africa Foundation</h6>
                  <p>Research &amp; Communications Team</p>
                  <p>
                    We share policy briefs, evidence summaries and learning
                    reports from our work strengthening education systems
                    across Africa.
                  </p>
                </div>
                <div className='social'>
                  <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    aria-label='share us on facebook'
                    title='facebook'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-facebook-f' />
                  </a>
                  <a
                    href='https://vimeo.com/'
                    target='_blank'
                    aria-label='share us on vimeo'
                    title='vimeo'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-vimeo-v' />
                  </a>
                  <a
                    href='https://x.com/'
                    target='_blank'
                    aria-label='share us on twitter'
                    title='twitter'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-x-twitter' />
                  </a>
                  <a
                    href='https://www.linkedin.com/'
                    target='_blank'
                    aria-label='share us on linkedin'
                    title='linkedin'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-linkedin-in' />
                  </a>
                </div>
              </div>
              <div className='cm-details__sidebar'>
                <div
                  className='cm-sidebar-widget'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='intro'>
                    <h5>search here</h5>
                  </div>
                  <form action='#' method='post'>
                    <input
                      type='text'
                      name='search-product'
                      id='searchProduct'
                      placeholder='Search Here...'
                      required=''
                    />
                    <button type='submit'>
                      <i className='fa-solid fa-magnifying-glass' />
                    </button>
                  </form>
                </div>
                <div
                  className='cm-sidebar-widget'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='intro'>
                    <h5>Recent Posts</h5>
                  </div>
                  <div className='cm-sidebar-post'>
                    {recentPosts.map((p, index) => (
                      <div className='single-item' key={p.id || index}>
                        <div className='thumb'>
                          <Link href={p.id ? `/insights/${p.id}` : '/data-evidence'}>
                            <img
                              src={mediaSrc(p.image?.url) || fallbackImages[index % fallbackImages.length]}
                              alt='Image_inner'
                            />
                          </Link>
                        </div>
                        <div className='content'>
                          <p>
                            <i className='fa-solid fa-calendar-days' />{" "}
                            <span>{formatDate(p.publishedDate)}</span>
                          </p>
                          <p>
                            <Link href={p.id ? `/insights/${p.id}` : '/data-evidence'}>{p.title}</Link>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className='cm-sidebar-widget'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='intro'>
                    <h5>Categories</h5>
                  </div>
                  <div className='cm-categories'>
                    {(categories.length ? categories : ["Motivation", "Evidence", "Systems"]).map((category) => (
                      <Link href='/data-evidence' key={category}>
                        <span>{category}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div
                  className='cm-sidebar-widget'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className='intro'>
                    <h5>Popular Tags</h5>
                  </div>
                  <div className='tag-wrapper'>
                    <Link href='/data-evidence'>Teacher Motivation</Link>
                  <Link href='/data-evidence'>System Strengthening</Link>
                  <Link href='/data-evidence'>CPD</Link>
                  <Link href='/data-evidence'>Evidence &amp; Research</Link>
                  <Link href='/data-evidence'>Policy</Link>
                  <Link href='/data-evidence'>Ubuntu</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsInner;
