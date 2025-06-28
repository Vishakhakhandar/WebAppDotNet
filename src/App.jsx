import { BrowserRouter } from "react-router-dom";

import { MainLayout } from "./MainLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainLayout/>
      </BrowserRouter>
    </>
  )
}
export default App;