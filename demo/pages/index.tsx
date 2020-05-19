import { Fragment } from 'react'

import ProgressiveHydration, { removeEvent } from 'components'

import Button from '../components/button'

const Landing = () => (
    <Fragment>
        <h1>Progressive Hydration</h1>
        <div style={{ height: '110vh' }} />
        <ProgressiveHydration
            // When intersect, component is re-hydrate with event.
            component={() => import('../components/button')}
        >
            {/* Compile at built time, no JavaScript is executed during load. */}
            {removeEvent(Button)}
        </ProgressiveHydration>
    </Fragment>
)

export default Landing
