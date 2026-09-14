import Link from "next/link";

const images = [
  { file: "one.png", alt: "Students seated at desks during a lesson" },
  { file: "two.png", alt: "Classroom of learners in Uganda" },
  { file: "three.png", alt: "A learner focused on classwork" },
  { file: "four.png", alt: "A learner smiling at the chalkboard" },
  { file: "five.png", alt: "Learners writing in their notebooks" },
  { file: "six.png", alt: "Learners working together at their desks" },
];

const GalleryOne = () => {
  return (
    <div className='gallery'>
      <div className='gallery__inner'>
        <div className='gallery__slider'>
          {[...images, ...images].map((image, index) => (
            <div className='gallery__single' key={index}>
              <img src={`/assets/images/gallery/${image.file}`} alt={image.alt} />
              <Link href='/'>
                <i className='fa-brands fa-instagram' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryOne;
