import './App.css'
import Child from './component/Child/Child'
import GrandChild from './component/GrandChild/GrandChild'
import GrandParent from './component/GrandParent/GrandParent'
import Parent from './component/Parent/Parent'

function App() {
  return (
    <>
      <GrandParent></GrandParent>
      <Parent></Parent>
      <GrandChild></GrandChild>
      <Child></Child>
    </>
  )
}

export default App