export default function CustomInfoWindow({ title, content }) {
    let cont = parseInt(content * 100),
      col = content <= 0.5 ? `rgba(${255 * content * 2},255,60,.8)` : `rgba(255,${255 - (content - 0.5) * 510},60,.8)`;
  
    return (
      <div className="info">
        <div className="info-text">
          <h3>Contenedor {title}</h3>
          <p>Nivel {cont}%</p>
        </div>
        <div className="info-image">
          <div className="contain">
            <div style={{ height: cont + '%', backgroundColor: col }} className="content" />
          </div>
        </div>
      </div>
    );
  }