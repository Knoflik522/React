import React, { useState } from 'react';

function ShowFullItem({ item, convertToUSD, onShowItem }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const priceInUSD = convertToUSD(item.price);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim()) {
      setComments(prevComments => [...prevComments, comment]);
      alert(`Ваш відгук: «${comment}» додано успішно!`);
      setComment('');
    }
  };

  return (
    <div className='full-item'>
      <div>
        <img src={`./img/${item.img}`} onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>
          {item.desc} <br /> Price: <b>{item.price} UAH / {priceInUSD} USD</b>
        </p>
        <div className="comments-section">
          <h3>Add your comment</h3>
          <form onSubmit={handleSubmit}>
            <textarea 
              value={comment} 
              onChange={handleCommentChange} 
              placeholder="Write your comment..."
            />
            <button type="submit">Send</button>
          </form>
          <div className="comments-list">
            <h3>Comments:</h3>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))
            ) : (
              <p>There are no comments yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowFullItem;
