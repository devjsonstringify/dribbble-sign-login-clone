import * as React from 'react'

export interface LeftSidebarCtxInterface {
  accentText: string
  accentBg: string
  isSignedView: boolean
  onHandleToggleView: () => void
}

const LeftSidebarCtx = React.createContext<LeftSidebarCtxInterface | null>(null)

export default LeftSidebarCtx
