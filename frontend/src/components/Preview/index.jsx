import {Container, Description} from './styles'
import {RiStarFill, RiStarLine} from 'react-icons/ri'
import {Tag} from '../Tag'

export function Preview({data, onClick}) {
  const renderStars = (stars) => {
    const totalStars = 5;
    const filledStars = Array(stars).fill(<span><RiStarFill/></span>);
    const emptyStars = Array(totalStars - stars).fill(<span><RiStarLine/></span>);
    return (
      <>
        {filledStars}
        {emptyStars}
      </>
    )
  }
  return (
    <Container onClick={onClick}>
      <header>
        <h3>{data.title}</h3>
        {renderStars(data.rating)}
      </header>
      <Description>
        {data.description}
      </Description>
      <div>
        {
          data.tags &&
          <footer>
            {
              data.tags.map(tag => {
                return <Tag key={tag.id} title={tag.name} />
              })
            } 
          </footer>
        }
      </div> 
    </Container>
  )
}