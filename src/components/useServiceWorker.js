import React, { useState, useEffect } from 'react'

import styles from './styles'

import * as serviceWorker from './serviceWorkerRegistration'

export default function useServiceWorker (title, description, customStyles) {
  // PWA Update
  const [waitingWorker, setWaitingWorker] = useState()
  const [newVersionAvailable, setNewVersionAvailable] = useState()

  const onServiceWorkerUpdate = registration => {
    setWaitingWorker(registration && registration.waiting)
    setNewVersionAvailable(true)
  }

  const updateServiceWorker = () => {
    waitingWorker && waitingWorker.postMessage({ type: 'SKIP_WAITING' })
    setNewVersionAvailable(false)
    window.location.reload()
  }

  // PWA Install
  useEffect(() => {
    // service worker
    if (process.env.NODE_ENV === 'production') {
      serviceWorker.register({ onUpdate: onServiceWorkerUpdate })
    }
  }, [newVersionAvailable])

  const [promptInstall, setPromptInstall] = useState(null)

  useEffect(() => {
    const handler = e => {
      e.preventDefault()
      setPromptInstall(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('transitionend', handler)
  }, [])

  const onClick = async evt => {
    evt.preventDefault()
    if (!promptInstall) {
      return
    }
    promptInstall.prompt()
    // Wait for the user to respond to the prompt
    const { outcome } = await promptInstall.userChoice
    if (outcome === 'accepted') {
      setPromptInstall(null)
    }
  }

  if (newVersionAvailable) {
    return (
      <div style={{...styles.body, ...customStyles?.body}}>
        <div style={{...styles.background, ...customStyles?.background}}>
          <h1 style={{...styles.title, ...customStyles?.title}}>{title ? title : example.title}</h1>
          {description && <p style={{...styles.description, ...customStyles?.description}}>{description}</p>}
          {!description && <example.description />}
          <button style={{...styles.button, ...customStyles?.button}} onClick={onClick}> Install </button>
          <button onClick={updateServiceWorker}> Update </button>
        </div>
      </div>
    )
  }
}
