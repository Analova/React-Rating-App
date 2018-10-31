
import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import movies from './movies'
 
class App extends React.Component {
  constructor() {
    super();

    this.state = {
    rating: new Array(movies.length).fill(0)
      
    };
  }

  onStarClick(index, nextValue) {
    this.setState(prevState => ({rating: [
           ...prevState.rating.slice(0, index),
           nextValue,
           ...prevState.rating.slice(index + 1)
       ]
   }));
  }

  render() {
   const { rating } = this.state;

    return (                
      <div>

        <h2>Top 10 movies</h2>
        {movies.map((c, index) => (
          <div>
            <p key={c.name}>
              {c.name}
            </p>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating[index]}
          onStarClick={this.onStarClick.bind(this, index)} 

        />
          </div>
        ))}
      </div>
    );
  }
}






 export default App;