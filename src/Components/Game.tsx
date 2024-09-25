import { useState } from 'react';
import '../Styles/Game.css';
import NavBar from "./NavBar";
import StarMap from "./StarMapPage";
import ProfilePage from './ProfilePage';
import ContractsPage from './ContractsPage';
import GamePageContextProvider, { Page } from '../Context/GamePageContext';
import ContractContextProvider from '../Context/ContractContext';
import ShipyardPage from './ShipyardPage';
import ShipyardContextProvider from '../Context/ShipyardContext';

function Game()
{
  const [page, setPage] = useState<Page>("Profile");

  const LoadPage = () =>
  {
    switch (page)
    {
      case "Profile":
        return <ProfilePage />
      case "StarMap":
        return <StarMap />
      case "Contracts":
        return <ContractsPage />
      case "Shipyard":
        return <ShipyardPage />
    }
  }

    return (
    <GamePageContextProvider page={page} setPage={setPage}>
    <ContractContextProvider>
    <ShipyardContextProvider>
      <div className="mainGame">
        <NavBar />
        {LoadPage()}
      </div> 
    </ShipyardContextProvider>
    </ContractContextProvider>
    </GamePageContextProvider>
    );
}

export default Game