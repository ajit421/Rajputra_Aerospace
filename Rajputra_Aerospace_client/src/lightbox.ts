import { createContext } from 'react'

// Opens a picture (by its src) in the full-size viewer. Provided by <Lightbox> in App.
export const LightboxContext = createContext<(src: string) => void>(() => {})
