import Markdown from "./components/markdown/Markdown"
import Pomodoro from "./components/pomodoro/pomodoro"

function App() {
  return (
    <div className='flex bg-gray-500'>
      <Pomodoro />
      <Markdown />
    </div>
  )
}

export default App
