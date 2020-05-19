import { FunctionComponent, VNode } from 'preact'

export interface ProgressiveHydrationPropsWithoutLazy {
    children?: VNode
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
