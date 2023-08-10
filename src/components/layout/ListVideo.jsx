import cl from '../styles/Components.module.css'

export default function ListVideo() {
  return (
      <div className={cl.videoList}>
        <div className={cl.videoItem}>
          <img
            src="https://i.pinimg.com/564x/dd/40/cf/dd40cf545534d6b4512b1d8e706a629c.jpg"
            alt="video"
            width={300}
          />
          <div class={cl.videoDescription}>
            <h2>TITLE</h2>
            <p>Architect & Engineer</p>
            <p>Architect & Engineer</p>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
  );
}
