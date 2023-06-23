class PilasApp extends HTMLElement {
  modo = "Edición";

  elementos: any = {};

  constructor() {
    super();

    this.innerHTML = this.obtenerTemplate();

    this.elementos.botonEjecutar = this.querySelector("#boton-ejecutar");
    this.elementos.botonDetener = this.querySelector("#boton-detener");
    this.elementos.modo = this.querySelector("#modo");
 }

  obtenerTemplate() {
    return `

    <div id="barra-botones">
      <button id="boton-ejecutar">Ejecutar</button>
      <button id="boton-detener" class="dn">Detener</button>

      <div>Modo actual: <span id="modo">${this.modo}</span></div>
    </div>

    <div class="">
      <pilas-canvas width="800" height="800"/>
    </div>
    ` 
  }

  connectedCallback() {
    this.elementos.botonEjecutar.addEventListener("click", this.ejecutar.bind(this));
    this.elementos.botonDetener.addEventListener("click", this.detener.bind(this));
  }

  disconnectedCallback() {
    this.elementos.botonEjecutar.removeEventListener("click", this.ejecutar.bind(this));
    this.elementos.botonDetener.removeEventListener("click", this.detener.bind(this));
  }

  ejecutar() {
    var ejecutar = this.querySelector("#boton-ejecutar"); 
    var detener = this.querySelector("#boton-detener"); 

    this.elementos.modo.textContent = "Ejecución";
    document.dispatchEvent(new CustomEvent("comienza-ejecucion", {}));

    ejecutar.classList.add("dn");
    detener.classList.remove("dn");
  }

  detener() {
    var ejecutar = this.querySelector("#boton-ejecutar"); 
    var detener = this.querySelector("#boton-detener"); 

    this.elementos.modo.textContent = "Edición";
    document.dispatchEvent(new CustomEvent("finaliza-ejecucion", {}));

    detener.classList.add("dn");
    ejecutar.classList.remove("dn");
  }


}


export { PilasApp };
