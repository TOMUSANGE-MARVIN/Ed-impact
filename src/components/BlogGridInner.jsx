import { mediaSrc } from "@/lib/image";
import Link from "next/link";

const fallbackImages = ["assets/images/blog/one.webp", "assets/images/blog/two.webp", "assets/images/blog/three.webp"];
const delays = [0, 300, 600, 900];

const defaultPosts = [
  { tag: "Motivation", title: "Why Teacher Motivation Matters More Than Teacher Training", author: "Ed Impact Team", readTime: "5 min read" },
  { tag: "Evidence", title: "What The 2025 Impact Evaluation Tells Us About Learning Outcomes", author: "Ed Impact Team", readTime: "6 min read" },
  { tag: "Systems", title: "Localisation In Practice: From STIR Education To Ed Impact Africa Foundation", author: "Ed Impact Team", readTime: "5 min read" },
];

const formatDate = (dateValue) => {
  if (!dateValue) return "";
  const d = new Date(dateValue);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

const BlogGridInner = ({ posts = defaultPosts }) => {
  const basePosts = posts.length ? posts : defaultPosts;
  const gridPosts = Array.from({ length: 8 }, (_, i) => basePosts[i % basePosts.length]);
  const recentPosts = basePosts.slice(0, 3);

  return (
    <section className='blog-main blog cm-details'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div className='row gutter-30'>
              {gridPosts.map((post, index) => (
                <div className='col-12 col-lg-6' key={post.id ? `${post.id}-${index}` : index}>
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
                            src={mediaSrc(post.image?.url) || fallbackImages[index % fallbackImages.length]}
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
                        src='assets/images/blog/spade.webp'
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
                <div
                  className='pagination-wrapper'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <ul className='pagination main-pagination'>
                    <li>
                      <button>
                        <i className='fa-solid fa-angles-left' />
                      </button>
                    </li>
                    <li>
                      <Link href='/data-evidence'>1</Link>
                    </li>
                    <li>
                      <Link href='/data-evidence' className='active'>
                        2
                      </Link>
                    </li>
                    <li>
                      <Link href='/data-evidence'>3</Link>
                    </li>
                    <li>
                      <button>
                        <i className='fa-solid fa-angles-right' />
                      </button>
                    </li>
                  </ul>
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
                  <img src='assets/images/author-two.webp' alt='Image_inner' />
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
                    {recentPosts.map((post, index) => (
                      <div className='single-item' key={post.id || index}>
                        <div className='thumb'>
                          <Link href={`/insights/${post.id}`}>
                            <img
                              src={mediaSrc(post.image?.url) || fallbackImages[index % fallbackImages.length]}
                              alt='Image_inner'
                            />
                          </Link>
                        </div>
                        <div className='content'>
                          <p>
                            <i className='fa-solid fa-calendar-days' />{" "}
                            <span>{formatDate(post.publishedDate)}</span>
                          </p>
                          <p>
                            <Link href={`/insights/${post.id}`}>{post.title}</Link>
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
                    <Link href='/data-evidence'>
                      <span>Donation</span>
                      <span>05</span>
                    </Link>
                    <Link href='/data-evidence'>
                      <span>Charity</span>
                      <span>02</span>
                    </Link>
                    <Link href='/data-evidence'>
                      <span>Volunteer</span>
                      <span>09</span>
                    </Link>
                    <Link href='/data-evidence'>
                      <span>Health</span>
                      <span>07</span>
                    </Link>
                    <Link href='/data-evidence'>
                      <span>Education</span>
                      <span>04</span>
                    </Link>
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

export default BlogGridInner;
