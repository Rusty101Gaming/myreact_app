import {Routes, Route} from 'react-router'
import Header from '../components/Header'
import JoinNowForm from '../components/JoinNowForm'

function Router() {
  return (
    <Routes>
      <Route path="/" element={Header} />
      <Route path="/JoinNowForm" element={JoinNowForm} />
    </Routes>
  )
}

export default Router
