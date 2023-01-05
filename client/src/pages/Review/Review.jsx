import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import moment from 'moment';
import { getReview } from '../../http/reviewsAPI';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [content, setContent] = useState();
  const [texts, setTexts] = useState();
  const [headers, setHeaders] = useState();
  const [images, setImages] = useState();

  const params = useParams();
  const reviewId = params.id;
  useEffect(() => {
    const fetchReview = async () => {
      const { data } = await getReview(reviewId);
      console.log(data);
      console.log(reviewId);
      setContent(data);
      setTexts(data[0].text);
      setHeaders(data[0].headers);
      setImages(data[0].imagesURL);
    };
    fetchReview();
  }, []);

  useEffect(() => {
    if (texts) {
      // const { headers, imagesURL, text } = content[0];
      // JSON.parse(headersReview);
      setTexts(texts.map((item) => JSON.parse(item)));
      setHeaders(headers.map((item) => JSON.parse(item)));
      setImages(images.map((item) => JSON.parse(item)));
      console.log(texts);
    }
  }, [content]);
  useEffect(() => {
    console.log(texts);
  }, [texts]);

  return (
    <div className="review">
      <Header />
      <div className="container">
        <h3 className="title">title</h3>
        <div className="author__date">
          <div className="author">userName</div>
          <div className="date">moment().format('DD MMM YYYY', createdAt)</div>
        </div>
        <div className="content">
          <div className="cover_image">
            <img src="coverURL" alt="" srcset="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Review;
