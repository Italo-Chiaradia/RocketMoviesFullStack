import {Container} from './styles'

export function Button({title, icon: Icon, loading=false, ...rest}) {
  return( 
    <Container
      type="button"
      disabled={loading}
      {...rest}
      
    >
      {Icon && <Icon/>}
      {title}
    </Container>
  )
}