import * as React from 'react'

export interface LayoutCtxInterface {
  accentText: string
  accentBg: string
  isSignedView: boolean
  onHandleToggleView: () => void
}

const LayoutCtx = React.createContext<LayoutCtxInterface | null>(null)

export default LayoutCtx
