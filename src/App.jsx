import { BrowserRouter, Routes, Route } from "react-router"
import { DashboardPage } from "./pages/DashboardPage"
import { UserProfilePage } from "./pages/UserProfilePage"
import { Header } from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/userprofile" element={<UserProfilePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App