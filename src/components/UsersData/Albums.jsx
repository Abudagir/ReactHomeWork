import { useEffect, useState } from "react";
import { fetchData } from './api';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/albums", setAlbums);
  }, []);

  return (
    <div>
          <h1>Albums:</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Albums
