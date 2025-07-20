# 💎 Bohemia App – Aplicación Móvil de Arriendo de Tocados de Matrimonio

Aplicación móvil desarrollada con **Ionic + Angular** para gestionar reservas de tocados de matrimonio de forma profesional.

---

## 🚀 Versión 3.1 – Documentación técnica

Esta versión incorpora mejoras específicas en la documentación técnica y metadatos de la aplicación, sin cambios funcionales sobre la versión 3.0.

### 📋 Inclusiones clave

- 🧪 **Estrategia de pruebas automatizadas documentada:**
  - 6 pruebas unitarias para validación de Login.
  - 1 flujo End-to-End completo hasta reserva (sin SQLite).
  - Configuración Cypress centralizada (`cypress.config.ts`) con `baseUrl` definido.

- 📱 **Configuración de emulación Android:**
  - Emulador usado: **Pixel 3a** (Android 11 por defecto).
  - Generación de artefactos `.apk` y `.aab` firmados desde Android Studio.
  - Firma con `bohemia_apk_firma.jks`, ubicada en `firma_bohemia/release/`.
  - Inclusión de `bundletool.jar` para validación de `.aab`.

- ⚙️ **Mejora de metadatos en `config.xml`:**
  - Inclusión de `version`, `author`, `description`, `access`.
  - Preparación para ajustes de accesibilidad (`contentDescription`, `orientation`, `theme`).

---

## 🚀 Versión 3.0 – Cambios y mejoras realizadas

La versión 3.0 consolida el ciclo de desarrollo de Bohemia App, incorporando pruebas automatizadas, distribución y buenas prácticas.

### 🆕 Novedades de la versión 3.0

- ✅ **Pruebas Cypress (unitarias y E2E).**
- 📦 **Generación de artefactos `.apk` y `.aab` en Android Studio.**
- 🔏 **Firma digital con `.jks` para distribución segura.**
- 📝 **Documentación de pruebas, build y estructura de carpetas.**
- 🗂️ **Organización clara del proyecto y protección de rutas críticas.**

### 🛠️ Tecnologías utilizadas en la versión 3.0

- **WebStorm**
- **Android Studio**
- **Cypress**

---

## 🚀 Versión 2.0 – Funcionalidades Avanzadas

La versión 2.0 integró recursos nativos y funcionalidades modernas:

### 🆕 Novedades de la versión 2.0

- 🗄️ **SQLite local** con Capacitor.
- 🌐 **API REST externa** para pedidos.
- 📸 **Plugins nativos:** cámara y geolocalización.
- 🗺️ **Mapa interactivo** con Google Maps.
- 🔐 **Route Guard** para proteger rutas.
- ✨ **Animaciones Lottie y CSS.**
- 🛡️ **Formularios validados con reglas personalizadas.**

### 📦 Tecnologías destacadas (v2.0)

- **Ionic Framework v8**
- **Angular v19**
- **Capacitor v7**
- **@capacitor-community/sqlite**
- **@capacitor-community/http**
- **Google Maps API**
- **Lottie**
- **Angular Material**
- **SCSS + Variables CSS personalizadas**

---

✨ Características Principales

- 🧠 Formularios validados: Login y datos de la novia (nombre, fecha, correo, tocado).
- 💍 Selección opcional de aros y estilo.
- 🔄 Enrutamiento y navegación protegida: Guards y redirecciones según flujo autenticado.
- 📦 Transferencia y persistencia de datos entre vistas: Servicios personalizados (DatosService) y almacenamiento con SQLite.
- 🌐 Consumo de API externa: Pedidos enviados a servidor remoto.
- 🗺️ Mapa interactivo: Visualización y geolocalización del usuario con Google Maps.
- 📸 Toma de fotografía y carga de imagen: Plugins nativos de cámara.
- 🎞️ Animaciones avanzadas: Lottie, ion-loading, transiciones y feedback visual.
- 🧪 Pruebas automatizadas: Cypress (unitarias y E2E), con cobertura desde login hasta confirmación de reserva.
- 📝 Documentación técnica completa: Estrategia de pruebas, configuración de emulación, metadatos y build.

📱 Páginas Incluidas

- Login Page: Inicio de sesión validado (campos y flujo autenticado).
- Datos Page: Formulario reactivo para ingreso y validación de datos de la novia, selección de fecha (Angular Material Datepicker), tocado y aros.
- Confirmar Arriendo Page: Resumen de reserva, visualización de ubicación, toma de foto, mapa y animación de carga.
- Mis Reservas Page: Listado, edición y eliminación de reservas guardadas en SQLite.
- Gracias Page: Mensaje final animado, número de seguimiento, datos de contacto.

🔧 Tecnologías y librerías usadas (versión final)

- Ionic Framework v8
- Angular v19
- Capacitor v7.2.0
- Angular Material (MatDatepicker, formularios, validaciones)
- @capacitor-community/sqlite (persistencia local)
- @capacitor-community/http (consumo de API REST externa)
- @capacitor/geolocation (ubicación GPS)
- @capacitor/camera (foto de seguridad)
- Google Maps API (mapas interactivos)
- @lottiefiles/lottie-player (animaciones SVG)
- ion-loading (carga y feedback visual)
- SCSS + Variables CSS personalizadas
- NgModel y ReactiveFormsModule (vinculación y validación de formularios)
- CUSTOM_ELEMENTS_SCHEMA (soporte de web components)
- Cypress (pruebas unitarias y E2E automatizadas)
- Servicios personalizados (DatosService, etc.)
