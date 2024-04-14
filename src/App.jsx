import Counter from './pages/Counter'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Crud from './pages/Crud';
import { useSelector } from 'react-redux';
const App = () => {
  const {isDarkTheme} = useSelector((store)=>store.counterReducer);
  return (
    <div>
      <BrowserRouter>
      <div className={isDarkTheme ? 'bg-dark text-white' :'bg-white text-dark'}>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Counter/>}/>
        <Route path={'/crud'} element={<Crud/>}/>
      </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App
