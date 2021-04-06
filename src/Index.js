// import PropTypes from 'prop-types'

import React from 'react'

import useServiceWorker from './components/useServiceWorker'

export default function index ({ title, description, customStyles }) {

  const content = useServiceWorker(title, description, customStyles)

  return (
    <div>
      {content}
    </div>
  )
}

index.defaultProps = {
  name: 'PWA',
  description: (() => {
    return (
      <ul style={{ listStyleType: 'circle', color: 'rgba(255, 255, 255, 0.8)' }}>
        {[
          'Short loading time',
          'Good performance in poor network conditions',
          'Small size',
          'App-like features (add to home screen, offline mode, push notifications)',
          'Avoid app aggregators (Google Play, App Store, etc.)',
          'Instant updates'
        ].map(point => (
          <li style={{ padding: '10px 20px' }}>{point}</li>
        ))}
      </ul>
    )
  })
}

/*

 - Move useServiceWorker and serviceWorkerRegistration inside hooks folder

*/