import { routeConfig } from "@shared/config/routeConfig";
import { BrowserRouter, Route, Routes, } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {Object.values(routeConfig).map(({path, element}) => <Route path={path} key={path} element={element} />)}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
