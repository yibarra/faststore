import { useMemo, type PropsWithChildren, type ReactElement } from 'react'

import { usePageViewEvent } from './sdk/analytics/hooks/usePageViewEvent'
import '@soma-vertical-web/core-components/styles'
import '@soma-vertical-web/foundations/src/styles/_root.scss'

function Layout({ children }: PropsWithChildren) {
  const props = useMemo(() => (children as ReactElement)?.props, [])
  usePageViewEvent(props)

  return <>{children}</>
}

export default Layout
