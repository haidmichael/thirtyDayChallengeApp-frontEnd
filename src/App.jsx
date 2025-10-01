import { BrowserRouter, Routes, Route } from "react-router"
import { DashboardPage } from "./pages/DashboardPage"
import { UserProfilePage } from "./pages/UserProfilePage"
import { Header } from "./components/Header"
import { LoggedIn } from "./components/LoggedIn"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/userprofile" element={<UserProfilePage/>} />
        <Route path="/loggedin" element={<LoggedIn/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App