import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'
import ThemeContext from './context/ThemeContext'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
