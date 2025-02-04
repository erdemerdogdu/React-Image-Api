import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImagesRequest } from '../store/actions';
import '../components/galery.css';

const Galery = () => {
  const { images, after, loading } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

  useEffect(() => {
    if (images.length === 0) {
      dispatch(fetchImagesRequest(after)); 
    }
  }, [images.length, after, dispatch]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading && after !== null
    ) {
      dispatch(fetchImagesRequest(after)); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, after]);

  return (
    <div className="container">
      <h1>Infinite Scroll Image Gallery</h1>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img.image} alt={img.title} className="gallery-item" />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      
    </div>
  );
};

export default Galery;
