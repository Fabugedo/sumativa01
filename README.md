🚀 Versión 3.0 – Cambios y mejoras implementados

La versión 3.0 consolida el ciclo de desarrollo de Bohemia App, incorporando pruebas automatizadas, preparación para distribución y mejores prácticas de seguridad y documentación técnica.
🆕 Novedades de la versión 3.0

    ✅ Pruebas unitarias y E2E con Cypress:
    Se diseñaron y ejecutaron pruebas unitarias en el módulo de Login, verificando validación de campos, estados del botón de envío y el flujo de autenticación. Además, se automatizó el flujo End-to-End desde el login hasta la sección de reservas, validando la integración y respuesta de los componentes principales.

    📦 Preparación y generación de artefactos para distribución:
    Compilación y generación de APK y App Bundle (.aab) en Android Studio, asegurando compatibilidad con dispositivos físicos y emuladores Android.

    🔏 Firma digital para publicación:
    Proceso de firma digital implementado mediante archivo .jks, cumpliendo los estándares de seguridad requeridos para Google Play Store y entornos de distribución oficiales.

    📝 Mejoras en documentación y trazabilidad:
    Registro detallado del proceso de pruebas, resultados y limitaciones encontradas con SQLite/emulación en entorno web. Se agregaron capturas y evidencia del proceso de firma y build final, dejando trazabilidad completa del ciclo de entrega.

    🗂️ Buenas prácticas de estructura y mantenimiento:
    Estructuración clara de carpetas (código fuente, pruebas, firma, builds), y refuerzo de las validaciones y protección de rutas críticas.

# 🚀 Versión 2.0 – Funcionalidades Avanzadas Bohemia App

**¡Ahora Bohemia App integra características avanzadas y recursos nativos para una experiencia móvil completa y profesional!**

---

## 🆕 Novedades de la versión 2.0

- 🗄️ **Persistencia local real:** almacenamiento de reservas y datos de usuario usando SQLite (con Capacitor), garantizando funcionamiento offline y datos seguros.
- 🌐 **Integración API REST externa:** envío de pedidos a un servidor externo mediante HTTP, cumpliendo estándares de apps modernas.
- 📸 **Plugins nativos:** cámara y geolocalización (Capacitor), con posibilidad de tomar foto de seguridad y capturar la ubicación para coordinar la entrega.
- 🗺️ **Mapa interactivo:** visualización de la ubicación del usuario usando Google Maps embebido.
- 🔐 **Route Guard:** protección de rutas críticas con seguridad a nivel de navegación, evitando accesos directos no autorizados.
- ✨ **Animaciones avanzadas:** integración de Lottie y animaciones CSS para una experiencia visual más rica.
- 🛡️ **Mejoras en validación:** formularios aún más robustos y validaciones personalizadas.

---

## 📦 Tecnologías y librerías destacadas (v2.0)
- **Ionic Framework v8**
- **Angular v19**
- **Capacitor v7**
- **@capacitor-community/sqlite**
- **@capacitor-community/http**
- **Google Maps API**
- **Lottie**
- **Angular Material**
- **SCSS + Variables CSS personalizadas**

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



# 💎 Bohemia App – Aplicación Móvil de Arriendo de Tocados de Matrimonio

Aplicación móvil desarrollada con **Ionic + Angular**
---

## ✨ Características Principales

- 🧠 **Formulario con validaciones** para ingreso de nombre, fecha de matrimonio y tipo de tocado.
- 💍 **Selección de aros opcionales** 
- 🔄 **Navegación entre páginas** con enrutamiento controlado.
- 📦 **Transferencia de datos entre vistas** usando un servicio (`DatosService`).
- 🎞️ **Animaciones** con `Lottie` y `ion-loading`.


---

## 📱 Páginas Incluidas

1. **Login Page** – Inicio de sesión con validaciones personalizadas.
2. **Datos Page** – Ingreso de datos de la novia (nombre, fecha, tipo de tocado, uso de aros).
3. **Confirmar Arriendo Page** – Resumen con datos ingresados y botón de confirmación animado.
4. **Gracias Page** – Mensaje de cierre con agradecimiento y posible contacto.


---

## 🔧 Tecnologías Usadas

- **Ionic Framework v8**
- **Angular v19**
- **Capacitor v7.2.0**
- **Angular Material** (para `MatDatepicker`)
- **@lottiefiles/lottie-player** (para animaciones visuales)
- **SCSS + Variables CSS personalizadas**

