//Evento1: Click en botón
class EventoClick extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = `
      <div class="evento-card">
        <h3 class="evento-titulo">EVENTO CLICK</h3>
        <p class="evento-descripcion">Click me! (click event)</p>
        <button class="btn-click" id="btn">Haz clic aquí</button>
        <div class="resultado" id="resultado"></div>
      </div>
    `;
    
    this.querySelector('#btn').addEventListener('click', () => {
      this.querySelector('#resultado').textContent = '✅ Acción ejecutada: Click detectado';
      console.log('Evento Click activado');
    });
  }
}
customElements.define("evento-click", EventoClick);

//Evento2: Hover en tarjeta
class EventoHover extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = `
      <div class="evento-card">
        <h3 class="evento-titulo">EVENTO HOVER</h3>
        <p class="evento-descripcion">Hover over (mouseover event)</p>
        <div class="tarjeta-hover" id="card">Pasa el mouse aquí</div>
        <div class="estado" id="estado"></div>
      </div>
    `;
    
    const card = this.querySelector('#card');
    card.addEventListener('mouseover', () => {
      this.querySelector('#estado').textContent = '🖱️ Hover activo';
    });
    card.addEventListener('mouseout', () => {
      this.querySelector('#estado').textContent = '';
    });
  }
}
customElements.define("evento-hover", EventoHover);

//Evento3: Keypress en input
class EventoKeypress extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = `
      <div class="evento-card">
        <h3 class="evento-titulo">EVENTO KEYPRESS</h3>
        <p class="evento-descripcion">Double click here (dblclick event)</p>
        <input type="text" class="input-keypress" id="input" placeholder="Escribe algo...">
        <div class="contador" id="contador">Caracteres: 0</div>
      </div>
    `;
    
    const input = this.querySelector('#input');
    input.addEventListener('keydown', (e) => {
      console.log(`Tecla presionada: ${e.key}`);
    });
    input.addEventListener('input', () => {
      this.querySelector('#contador').textContent = `Caracteres: ${input.value.length}`;
    });
  }
}
customElements.define("evento-keypress", EventoKeypress);

//Evento4: Submit de formulario
class EventoSubmit extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = `
      <div class="evento-card">
        <h3 class="evento-titulo">EVENTO SUBMIT</h3>
        <p class="evento-descripcion">Type here (keydown event)</p>
        <form class="form-submit" id="form">
          <input type="email" class="input-keypress" id="email" placeholder="Tu email" required>
          <button type="submit" class="btn-submit">Enviar</button>
        </form>
        <div class="mensaje" id="mensaje"></div>
      </div>
    `;
    
    this.querySelector('#form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = this.querySelector('#email').value;
      this.querySelector('#mensaje').textContent = `✅ Formulario enviado: ${email}`;
      console.log('Evento Submit: Formulario enviado con', email);
    });
  }
}
customElements.define("evento-submit", EventoSubmit);

//Evento5: Load de página
class EventoLoad extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = `
      <div class="evento-card">
        <h3 class="evento-titulo">EVENTO LOAD</h3>
        <p class="evento-descripcion">Focus on (focus event)</p>
        <div id="contenido" class="loader">⏳ Cargando...</div>
      </div>
    `;
    
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.querySelector('#contenido').innerHTML = '✅ Página cargada completamente';
        this.querySelector('#contenido').classList.remove('loader');
        console.log('Evento Load: Recursos listos');
      }, 1000);
    });
  }
}
customElements.define("evento-load", EventoLoad);

//Evento6: Change en select
class EventoChange extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = `
      <div class="evento-card">
        <h3 class="evento-titulo">EVENTO CHANGE</h3>
        <p class="evento-descripcion">Leave input (blur event)</p>
        <select class="select-change" id="select">
          <option value="">Selecciona una opción</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
          <option value="3">Opción 3</option>
        </select>
        <div class="seleccion" id="seleccion">Ninguna opción seleccionada</div>
      </div>
    `;
    
    this.querySelector('#select').addEventListener('change', (e) => {
      const valor = e.target.value;
      const texto = e.target.options[e.target.selectedIndex].text;
      this.querySelector('#seleccion').textContent = `📋 Seleccionaste: ${texto}`;
      console.log(`Evento Change: Valor seleccionado ${valor}`);
    });
  }
}
customElements.define("evento-change", EventoChange);

//Evento7: Focus en input
class EventoFocus extends HTMLElement{
  constructor(){
    super();
  }
  
  connectedCallback(){
    this.innerHTML = `
      <div class="evento-card">
        <h3 class="evento-titulo">EVENTO FOCUS</h3>
        <p class="evento-descripcion">Submit form (submit event)</p>
        <input type="text" class="input-focus" id="input" placeholder="Haz clic para escribir">
        <div class="ayuda" id="ayuda">💡 Ingresa tu información aquí</div>
      </div>
    `;
    
    const input = this.querySelector('#input');
    const ayuda = this.querySelector('#ayuda');
    
    input.addEventListener('focus', () => {
      ayuda.textContent = '✏️ Escribe ahora...';
      ayuda.style.color = '#2c3e50';
    });
    input.addEventListener('blur', () => {
      ayuda.textContent = '💡 Ingresa tu información aquí';
      ayuda.style.color = '#666';
    });
  }
}
customElements.define("evento-focus", EventoFocus);

//Evento8: Scroll en ventana
class EventoScroll extends HTMLElement{
  constructor(){
    super();
    this.ultimoScroll = 0;
  }
  
  connectedCallback(){
    this.innerHTML = `
      <div class="evento-card">
        <h3 class="evento-titulo">EVENTO SCROLL</h3>
        <p class="evento-descripcion">Change value (change event)</p>
        <div class="resultado" id="scrollInfo">Scroll: 0%</div>
      </div>
    `;
    
    this.boundHandleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.boundHandleScroll, { passive: true });
    this.handleScroll();
  }
  
  handleScroll(){
    const scrollY = window.scrollY;
    const alturaDocumento = document.documentElement.scrollHeight - window.innerHeight;
    const porcentaje = Math.min(100, Math.round((scrollY / alturaDocumento) * 100));
    
    this.querySelector('#scrollInfo').textContent = `📜 Scroll: ${porcentaje}%`;
    
    if(scrollY > this.ultimoScroll){
      console.log('🔽 Scrolleando hacia abajo');
    } else if(scrollY < this.ultimoScroll){
      console.log('🔼 Scrolleando hacia arriba');
    }
    this.ultimoScroll = scrollY;
  }
  
  disconnectedCallback(){
    window.removeEventListener('scroll', this.boundHandleScroll);
  }
}
customElements.define("evento-scroll", EventoScroll);