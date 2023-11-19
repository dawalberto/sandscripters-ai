import './result.css'

export const Result = () => {
	return (
    <div>
      
	  <div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{
          padding: '20px',
          textAlign: 'center',
          margin: '10px'
        }}>
          <h3>Móvil</h3>
          {/* <img src="imagen-movil.jpg" alt="Imagen Móvil" style={{maxWidth:'360px', maxHeight:'340px', width: '100%', height: 'auto'}} /> */}
        </div>
        <div style={{
          padding: '20px',
          textAlign: 'center',
          margin: '10px'
        }}>
          <h3>Tablet</h3>
          {/* <img src="imagen-tablet.jpg" alt="Imagen Tablet" style={{maxWidth:'601px', maxHeight:'962px', width: '100%', height: 'auto'}} /> */}
        </div>
        <div style={{
          padding: '20px',
          textAlign: 'center',
          margin: '10px'
        }}>
          <h3>PC</h3>
          {/* <img src="imagen-pc.jpg" alt="Imagen PC" style={{maxWidth:'1280px', maxHeight:'720px', width: '100%', height: 'auto'}} /> */}
        </div>
      </div>
    </div>
    </div>

	)
}
