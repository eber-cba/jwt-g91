import "../css/NavSup.css";

const NavSup = () => {
  return (
    <head id="BarraDeNavegacion">
      <nav id="Navegador">
        <ul className="ListaNav">
          <button className="Links">Productos</button>
          <button className="Links">Nosotros</button>
          <button className="Links">Contacto</button>
          <button className="Links">Login</button>
        </ul>
      </nav>
    </head>
  );
};

export default NavSup;
