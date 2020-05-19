import React, { useEffect, useRef, useState } from 'react'
import { hydrate } from 'react-dom'

import ProgressiveHydrationComponent from './types'

export const removeEvent = (ReactComponent: any) => {
    let component = Object.assign({}, ReactComponent())

    Object.keys(component.props).forEach((key) => {
        if (key.startsWith('on'))
            try {
                delete component.props[key]
            } catch (err) {
                Object.assign(component, {
                    [key]: () => null
                })
            }
    })

    return component
}

const ProgressiveHydration: ProgressiveHydrationComponent = ({
    children,
    component,
    lazy = false
}) => {
    let root = useRef<HTMLDivElement>(null),
        [parsedChild, updateChild] = useState(null)

    useEffect(() => {
        if (root === null) return

        let { current } = root

        let observer = new IntersectionObserver(
            async ([{ isIntersecting }]) => {
                if (!isIntersecting) return

                let { default: child } = await component()
                hydrate(child(), current)

                observer.disconnect()
            }
        )

        if (typeof children === 'undefined' && !lazy)
            (async () => {
                let { default: child } = await component()

                updateChild(removeEvent(child))
            })()

        observer.observe(current as HTMLDivElement)
    }, [])

    return (
        <div ref={root}>
            {typeof children !== 'undefined' ? children : parsedChild}
        </div>
    )
}

export default ProgressiveHydration
