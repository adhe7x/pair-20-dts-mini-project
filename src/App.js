import './App.css';

import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';
import theme from './themes/theme';
import MovieList from './containers/MovieList';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <MovieList />
      </div>
    </ThemeProvider>
  );
}

export default App;