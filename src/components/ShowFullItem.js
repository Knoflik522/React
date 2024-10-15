import React, { Component } from 'react';

export class ShowFullItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',  
      comments: []  
    };

    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCommentChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();  
    const newComment = this.state.comment;
    if (newComment.trim()) {
      this.setState(prevState => ({
        comments: [...prevState.comments, newComment],  
        comment: ''  
      }));
      alert(`Ваш відгук: «${newComment}» додано успішно!`);
    }
  }

  render() {
    const priceInUSD = this.props.convertToUSD(this.props.item.price);
    return (
      <div className='full-item'>
        <div>
          <img src={"./img/"+this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc} <br></br> Price:
          <b>{this.props.item.price} UAH / {priceInUSD} USD</b></p>
          
        <div className="comments-section">
          <h3>Add your comment</h3>
          
          <form onSubmit={this.handleSubmit}>
            <textarea 
              value={this.state.comment} 
              onChange={this.handleCommentChange} 
              placeholder="Write your comment..."
            />
            <button type="submit">Send</button>
          </form>

          <div className="comments-list">
            <h3>Comments:</h3>
            {this.state.comments.length > 0 ? (
              this.state.comments.map((comment, index) => (
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
}

export default ShowFullItem;
