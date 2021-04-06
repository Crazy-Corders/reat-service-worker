const styles = {
  body: {
    margin: '0px',
    boxSizing: 'border-box',
    width: '95vw',
    height: '95vh',
    display: 'grid',
    placeItems: 'center',
    fontFamily: 'Tahoma'
  },
  background: {
    width: '80vw',
    maxWidth: '400px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    backgroundColor: 'rgb(0, 0, 15)'
  },
  title: {
    fontSize: '30px',
    fontWeight: '100',
    textAlign: 'center',
    margin: '30px',
    color: 'rgba(255, 255, 255, 1)'
  },
  description: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '20px',
    padding: '30px',
    margin: '0px'
  },
  button: {
    outline: 'none',
    border: 'none',
    width: '70%',
    height: '40px',
    margin: '30px 0px',
    borderRadius: '5px',
    color: 'white',
    backgroundColor: 'rgb(30, 255, 0, 0.5)',
    cursor: 'pointer'
  }
}

export default styles
