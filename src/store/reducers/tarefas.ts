import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa(
        'estudar JavaScript',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        'estudar matematica',
        1
      ),
      new Tarefa(
        'estudar Typescript',
        enums.Prioridade.URGENTE,
        enums.Status.CONCLUIDA,
        'Rever aula 2 do modulo',
        2
      ),
      new Tarefa(
        'estudar React',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        'Praticar o useEffect',
        3
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
