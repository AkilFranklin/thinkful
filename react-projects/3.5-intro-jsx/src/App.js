import React, { useEffect, useState } from "react";

function App() {
  const [artworks, setArtworks] = useState([]);
  useEffect(() => {
    async function loadArtworks() {
      const response = await fetch("https://api.artic.edu/api/v1/artworks");
      const artworksFromApi = await response.json();
      // console.log(artworksFromApi);
      // console.log(artworksFromApi.data);
      setArtworks(artworksFromApi);
      console.log(artworks);
    }
    loadArtworks();
  }, []);

  return (
    <div className="App">
      <h2>Artworks</h2>
      <ul>
        {artworks.data.map((artwork) => (
          <li key="1">
            <a href={`${artworks.config.iiif_url}/${artwork.image_id}/full/200,/0/default.jpg`}>{artwork.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
