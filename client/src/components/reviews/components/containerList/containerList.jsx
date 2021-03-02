import React from 'react';
import PropTypes from 'prop-types';
import styles from './containerList.css';
import ReviewsList from '../reviewsList/reviewsList.jsx';
import SortBy from '../sortBy/sortBy.jsx';
import MoreReviewsButton from '../moreReviewsButton/moreReviewsButton.jsx';
import AddReviewButton from '../addReviewButton/addReviewButton.jsx';
import FormPostReview from '../formPostReview/formPostReview.jsx';

const ContainerList = ({ reviews, metaReview, productID }) => (
  <div className={styles.containerList}>
    <SortBy />
    <ReviewsList reviews={reviews} />
    <MoreReviewsButton />
    <AddReviewButton />
    <FormPostReview productID={productID} metaReview={metaReview} />
  </div>
);

ContainerList.defaultProps = {
  reviews: [],
};

ContainerList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default ContainerList;
