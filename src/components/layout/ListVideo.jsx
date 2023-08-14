import cl from '../styles/Components.module.css'

export default function ListVideo({video}) {

  return (
    <div className={cl.videoList}>
      <div className={cl.videoItem}>
        <img
          alt={video.snippet.title}
          src={video.snippet.thumbnails.high.url}
          width={300}
          height={220}
        />
        <div class={cl.videoDescription}>
          <h2>{video.snippet.title}</h2>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}
