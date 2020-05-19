# Progressive Hydration Component
Easily implement Progressive Hydration as React Component

## Progressive Hydration?
Progressive Hydration is a term introduced at Google I/O 2019 by the concept to balance between client and server for the best performance.

By hydrate top priority component on server and then re-hydrate lesser priority component on the client.

By doing this, the first execution of JavaScript when landed on client is reduced which result better performance then lazily re-hydrate the component which is intersected on the client.

By implementing this strategy, the Time To Interactive is greatly improved, since only visible and top priority component is the only to be interactable while the other is active when need.

## Benefit
* Greatly improve JavaScript Time To Interactive
* Kind of Lazy load interaction
* Perfectly work with pre-render
* Built for Next.js
* Preact support
* First class TypeScript
* Tiny bundle size

## The downside
To rehydrate the component, the extra wrapper is introduced to use `ReactDOM.rehydrate` which result an extra auto-generated `<div>` as a wrapper for `progressive hydrated` component.

## Example
`Progressive Hydration Component` is imported as a React Component and introduced an extra `removeEvent` function to remove event from any React Component for pre-rendering and to be rehydrated later.
```javascript
import ProgressiveHydration, { removeEvent } from 'progressive-hydration-component'

import Button from 'components/button'

const Component = () => (
    <ProgressiveHydration
        // When in view, component is re-hydrate with event.
        component={() => import('components/button')}
    >
        {/* Pre-render at built time, no JavaScript is executed during first load. */}
        {removeEvent(Button)}
    </ProgressiveHydration>
)
```
###### Note: This example is tested with Next.js

## Resources
* [Google I/O 2019: Rendering on the Web: Performance Implications of Application Architecture](https://youtu.be/k-A2VfuUROg?t=970)
* [React DOM Hydrate](https://reactjs.org/docs/react-dom.html#hydrate)