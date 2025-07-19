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

## ✨ Características Principales

- 🧠 **Formulario validado:** nombre, fecha, tipo de tocado.
- 💍 **Selección opcional de aros.**
- 🔄 **Enrutamiento entre páginas.**
- 📦 **Transferencia de datos entre vistas con `DatosService`.**
- 🎞️ **Animaciones Lottie y `ion-loading`.**

---

## 📱 Páginas Incluidas

1. **Login Page** – Inicio de sesión validado.
2. **Datos Page** – Datos de la novia y selección de tocado.
3. **Confirmar Arriendo Page** – Resumen y confirmación animada.
4. **Gracias Page** – Cierre con mensaje y contacto ficticio.

---

## 🔧 Tecnologías Usadas

- **Ionic Framework v8**
- **Angular v19**
- **Capacitor v7.2.0**
- **Angular Material**
- **@lottiefiles/lottie-player**
- **SCSS + Variables CSS personalizadas**
