import Link from "next/link";

const images = [
  { file: "one.webp", alt: "Students seated at desks during a lesson" },
  { file: "two.webp", alt: "Classroom of learners in Uganda" },
  { file: "three.webp", alt: "A learner focused on classwork" },
  { file: "four.webp", alt: "A learner smiling at the chalkboard" },
  { file: "five.webp", alt: "Learners writing in their notebooks" },
  { file: "six.webp", alt: "Learners working together at their desks" },
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
