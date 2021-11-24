import * as React from 'react'

export interface IHasError {
  isError: boolean
  message: string
}
export interface LayoutCtxInterface {
  accentText: string
  accentBg: string
  isSignedView: boolean
  hasError?: IHasError
  openReminder: boolean
  onHandleToggleView: () => void
  onHandleError: (value: IHasError) => void
  onHandleOpenReminder: () => void
}

const LayoutCtx = React.createContext<LayoutCtxInterface | null>(null)

export default LayoutCtx
