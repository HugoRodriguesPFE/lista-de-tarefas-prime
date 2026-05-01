import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={3} />
        <FiltroCard legenda="urgentes" contador={4} />
        <FiltroCard legenda="importantes" contador={2} />
        <FiltroCard legenda="normal" contador={0} />
        <FiltroCard legenda="todas" contador={10} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
