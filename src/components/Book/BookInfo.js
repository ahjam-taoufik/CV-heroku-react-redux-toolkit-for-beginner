import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const PostInfo = ({ data }) => {

   const payload=useSelector(s=>s);
   const length1=payload.books.books.length
  return (
    <Fragment>
      <h2>Book Details</h2>
      {data && length1>0 ? (
        <div>
          <p className='fw-bold'>Title: {data.title}</p>
          <p className='fst-italic'>Price: {data.price}</p>
          <p className='fst-italic'>Auther: {data.auther}</p>

          <p className='fw-light'>Description: {data.description}</p>
        </div>
      ) : (
        <div className='alert alert-secondary' role='alert'>
          There is no book selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default React.memo(PostInfo);
