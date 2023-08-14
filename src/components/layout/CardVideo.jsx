import {Card} from '../antd/antd'
import cl from '../styles/Components.module.css'

export default function CardVideo({ video }) {
  const { Meta } = Card;
  return (
    <div className={cl.cards}>
      <Card
        hoverable
        style={{
          width: 280,
        }}
        cover={
          <img
            alt={video.snippet.title}
            src={video.snippet.thumbnails.high.url}
          />
        }
      >
        <Meta
          title={video.snippet.title}
          description={video.snippet.description}
        />
      </Card>
    </div>
  );
}