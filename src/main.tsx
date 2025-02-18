import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'
import App from './App.tsx'


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            // @ts-ignore :RUSHING TO DEPLOYMENT
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: 1,
            staleTime: 60 * 1000,
            cacheTime: 1000 * 60 * 60 * 24
        }
    }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
  </StrictMode>,
)
