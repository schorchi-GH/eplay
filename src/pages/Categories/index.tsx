import React from 'react'
import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const {
    data: actionGames,
    error: actionError,
    isLoading: actionLoading
  } = useGetActionGamesQuery()
  const {
    data: fightGames,
    error: fightError,
    isLoading: fightLoading
  } = useGetFightGamesQuery()
  const {
    data: rpgGames,
    error: rpgError,
    isLoading: rpgLoading
  } = useGetRpgGamesQuery()
  const {
    data: simulationGames,
    error: simulationError,
    isLoading: simulationLoading
  } = useGetSimulationGamesQuery()
  const {
    data: sportGames,
    error: sportError,
    isLoading: sportLoading
  } = useGetSportGamesQuery()

  if (
    actionLoading ||
    fightLoading ||
    rpgLoading ||
    simulationLoading ||
    sportLoading
  ) {
    console.log('Loading data...')
    return <h4>Carregando</h4>
  }

  if (actionError || fightError || rpgError || simulationError || sportError) {
    console.error('Error loading data:', {
      actionError,
      fightError,
      rpgError,
      simulationError,
      sportError
    })
    return <h4>Erro ao carregar dados</h4>
  }

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    console.log('Data loaded successfully:', {
      actionGames,
      fightGames,
      rpgGames,
      simulationGames,
      sportGames
    })
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportGames} title="Esportes" background="gray" />
        <ProductsList games={fightGames} title="Luta" background="black" />
        <ProductsList games={rpgGames} title="RPG" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
