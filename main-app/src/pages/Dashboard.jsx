import { Suspense, lazy, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { SongsContext } from '../contexts/SongsContext'; // Import SongsContext

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { songs, dispatch } = useContext(SongsContext);
  const MusicLibrary = lazy(() => import('../../../music-library/src/MusicLibrary'));

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Music Library Dashboard</h1>
      <Suspense fallback={<div>Loading Music Library...</div>}>
        <MusicLibrary role={user.role} songs={songs} dispatch={dispatch} />
      </Suspense>
    </div>
  );
};

export default Dashboard;