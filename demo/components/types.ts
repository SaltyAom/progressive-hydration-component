import { FunctionComponent, ReactNode } from 'react'

export interface ProgressiveHydrationPropsWithoutLazy {
    children?: ReactNode
    component: Function
    lazy?: false
}

export interface ProgressiveHydrationPropsWithLazy {
    children?: null
    component: Function
    lazy?: true
}

export type ProgressiveHydrationProps =
    | ProgressiveHydrationPropsWithLazy
    | ProgressiveHydrationPropsWithoutLazy

type ProgressiveHydrationComponent = FunctionComponent<
    ProgressiveHydrationProps
>
export default ProgressiveHydrationComponent
