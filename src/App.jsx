import { BrowserRouter, Routes, Route } from "react-router"
import { DashboardPage } from "./pages/DashboardPage"
import { UserProfilePage } from "./pages/UserProfilePage"
import { Header } from "./components/Header"
import { LoggedIn } from "./components/LoggedIn"
import { Register } from "./components/Register"
import { WorkoutTimer } from "./pages/WorkoutTimerPage"
import { Toaster }from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/userprofile" element={<UserProfilePage/>} />
        <Route path="/loggedin" element={<LoggedIn/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/workouttimer" element={<WorkoutTimer/>} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App