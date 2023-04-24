import { createRoot } from 'react-dom/client'
import './styles.css'
import { App as Canvas } from './canvas'
import Overlay from './overlay'

createRoot(document.getElementById('root')).render(
  <>
    <Canvas />
    <Overlay />
  </>
)
