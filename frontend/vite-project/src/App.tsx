import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/themes/theme-providers'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="tracker-theme" defaultTheme="dark">
        <Helmet titleTemplate='%s | website.tracker'/>
        <Toaster richColors/>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
        </QueryClientProvider>
        
      </ThemeProvider>
      
    </HelmetProvider>
  )
}
