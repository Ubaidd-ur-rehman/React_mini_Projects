import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [term, setTerm] = useState('');
  let apikey = process.env.REACT_APP_PIXABAY_API_KEY;

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${apikey}&q=${term}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))

  });
  return (
    <div className='container mx-auto'>
      <ImageSearch SearchText={(text) => setTerm(text)} />
      <div className='grid grid-cols-3 gap-4'>
        {image.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
