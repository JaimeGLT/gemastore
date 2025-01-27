import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './productsShowcase.scss';

const ProductsShowcase = () => {
  const [startSlice, setStartSlice] = useState(0);
  const [finishSlice, setFinishSlice] = useState(4); // Default: Show 4 images for larger screens
  const [imagesToShow, setImagesToShow] = useState(4); // Control images per view
  const navigate = useNavigate();

  const { data, loading } = useFetch(
    '/products?fields[0]=titulo&fields[1]=esNuevo&fields[2]=precio&fields[3]=precio_con_descuento&populate[img][fields][0]=url&populate[img2][fields][1]=url'
  );

  // Adjust the number of images shown based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setImagesToShow(1); // Show 1 image for mobile
      } else if (window.innerWidth <= 1024) {
        setImagesToShow(2); // Show 2 images for tablets
      } else {
        setImagesToShow(4); // Default: Show 4 images for desktop
      }
    };

    // Initialize and listen for window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update `finishSlice` dynamically when `imagesToShow` changes
  useEffect(() => {
    setFinishSlice(startSlice + imagesToShow);
  }, [startSlice, imagesToShow]);

  const prevImage = () => {
    setStartSlice(startSlice <= 0 ? data.length - imagesToShow : startSlice - 1);
    setFinishSlice(startSlice <= 0 ? data.length : finishSlice - 1);
  };

  const nextImage = () => {
    setStartSlice(startSlice < data.length - imagesToShow ? startSlice + 1 : 0);
    setFinishSlice(finishSlice < data.length ? finishSlice + 1 : imagesToShow);
  };

  return (
    <div className="productShowcase">
      <div className="presentation">
        <h1>Exhibición de Productos</h1>
        <p>Explore nuestros últimos modelos y compre sus favoritos.</p>
      </div>

      <div className="products">
        {loading
          ? 'Cargando...'
          : data?.slice(startSlice, finishSlice).map((item) => (
              <div className="link" key={item.id}>
                <div
                  className="image"
                  onClick={() => {
                    navigate(`/product/${item.documentId}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.esNuevo && <span className="nuevo">Nuevo</span>}
                  <img
                    src={import.meta.env.VITE_API_UPLOAD + item.img?.url}
                    className="mainImage"
                  />
                  <img
                    src={import.meta.env.VITE_API_UPLOAD + item.img2?.url}
                    className="secondImage"
                  />
                </div>
                <div className="info-price">
                  <h2>{item.titulo}</h2>
                  <div className="price">
                    <span
                      className={
                        item.precio_con_descuento > 0 ? 'last-price' : ''
                      }
                    >
                      $ {item.precio}
                    </span>
                    {item.precio_con_descuento !== null && (
                      <span>$ {item.precio_con_descuento}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        <div className="icon">
          <ArrowBackIcon onClick={prevImage} className="item-icon" />
        </div>
        <div className="icon2">
          <ArrowForwardIcon onClick={nextImage} className="item-icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductsShowcase;
