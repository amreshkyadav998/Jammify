import { useContext } from 'react';

const SongItem = ({ song, role, dispatch }) => {
  const handleDelete = () => {
    dispatch({ type: 'DELETE_SONG', payload: song.id });
  };

  return (
    <li className="flex justify-between items-center p-2 border-b dark:border-gray-600">
      <span>{song.title} - {song.artist} ({song.album})</span>
      {role === 'admin' && (
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      )}
    </li>
  );
};

export default SongItem;