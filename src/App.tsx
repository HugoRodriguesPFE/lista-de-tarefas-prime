import BarraLateral from './contayners/BarraLateral'
import ListaDeTarefa from './contayners/ListaDeTarefa'
import EstiloGlobal, { Container } from './styles/index'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefa />
      </Container>
    </Provider>
  )
}
export default App
