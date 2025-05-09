// xyzM.js - Archivo principal
import * as Mimodulo from "./xM.js";
import { y } from './yM.js';
import { z } from './zM.js';

document.getElementById("app").textContent = "Aplicación cargada";
console.log(Mimodulo.x("abc"));
console.log(Mimodulo.xx("def"));
console.log(y("ghi"));
console.log(z("jkl"));