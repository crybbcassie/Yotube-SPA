import {Card} from '../antd/antd'
import cl from '../styles/Components.module.css'

export default function CardVideo(){
    const { Meta } = Card;
    return (
      <div className={cl.cards}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img
              alt="example"
              src="https://i.pinimg.com/564x/dd/40/cf/dd40cf545534d6b4512b1d8e706a629c.jpg"
            />
          }
        >
          <Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
      </div>
    );
}