import {Container} from './styles'
import { RiAddLine, RiCloseFill } from 'react-icons/ri'

export function MovieItem({isNew=false, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button
        type="button"
        onClick={onClick}
        className={isNew? 'button-add' : 'button-delete'}
      >
        {isNew? <RiAddLine /> : <RiCloseFill />}
      </button>
    </Container>
  )
}