import { useEffect } from 'react'

import 'styles/init.styl'

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        document.addEventListener('touchstart', () => null, false)

        if (
            'serviceWorker' in navigator &&
            process.env.NODE_ENV === 'production' &&
            typeof window !== 'undefined'
        )
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('service-worker.js', {
                    scope: '/',
                })
            })
    }, [])

    return <Component {...pageProps} />
}

export default App
