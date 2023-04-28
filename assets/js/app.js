import * as UI from './interfaz.js';
import { obtenerDiaSemana, cumple, formateaFecha,  obtenerTotalHorasTrabajadas ,horasTrabajadas, tiempoTrabajado} from './funciones.js';

//primera parte
UI.boton.addEventListener("click", obtenerDiaSemana)
UI.boton.addEventListener("click", cumple)
UI.fechaInput.addEventListener('keyup', formateaFecha)
//UI.fechaEntradaInput.addEventListener('keyup', formateaFecha)
//UI.fechaActualInput.addEventListener('keyup', formateaFecha)

//segunda parte
// UI.boton2.addEventListener('click',()=>{ permanencia(UI.fechaEntradaInput.value, UI.fechaActualInput.value)})
UI.botonTiempoTrabajado.addEventListener('click', tiempoTrabajado)
// UI.boton2.addEventListener('click', permanencia(fechaEntradaInput, fechaActualInput))
//UI.#.addEventListener('click', edadEnMeses)

//item D horas trabajadas
UI.boton4.addEventListener('click', obtenerTotalHorasTrabajadas)


//item c horas por jornadas
UI.horatrabajo.addEventListener('click', horasTrabajadas)
