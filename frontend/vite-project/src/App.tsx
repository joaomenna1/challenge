import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/themes/theme-providers'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="tracker-theme" defaultTheme="dark">
        <Helmet titleTemplate='%s | website.tracker'/>
        <Toaster richColors/>
        <RouterProvider router={router}/>
      </ThemeProvider>
      
    </HelmetProvider>
  )
}
