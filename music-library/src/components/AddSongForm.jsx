import { useState } from 'react';

const AddSongForm = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_SONG', payload: { title, artist, album } });
    setTitle('');
    setArtist('');
    setAlbum('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 dark:bg-gray-700 rounded mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block mb-2 p-2 border dark:bg-gray-800 dark:text-white"
        required
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        className="block mb-2 p-2 border dark:bg-gray-800 dark:text-white"
        required
      />
      <input
        type="text"
        placeholder="Album"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        className="block mb-2 p-2 border dark:bg-gray-800 dark:text-white"
        required
      />
      <button type="submit" className="bg-green-500 text-white p-2">Add Song</button>
    </form>
  );
};

export default AddSongForm;