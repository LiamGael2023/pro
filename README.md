# 🚀 Admin Dashboard Pro

Plantilla administrativa moderna y responsive con las últimas tendencias en diseño web.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

## ✨ Características

### 🎨 Diseño Moderno
- **Glassmorphism**: Efectos de vidrio esmerilado con backdrop blur
- **Gradientes Modernos**: Paleta de colores vibrante y profesional
- **Animaciones Suaves**: Transiciones y efectos fluidos
- **Dark/Light Mode**: Tema oscuro y claro intercambiable

### 📱 Responsive Design
- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints Inteligentes**: Adaptación perfecta en todos los tamaños
- **Touch Friendly**: Interacciones optimizadas para pantallas táctiles

### 🛠️ Componentes Incluidos
- ✅ Sidebar navegable con iconos
- ✅ Barra superior con búsqueda
- ✅ Tarjetas estadísticas animadas
- ✅ Gráficos interactivos con Chart.js
- ✅ Tablas de datos responsivas
- ✅ Lista de actividades
- ✅ Sistema de notificaciones
- ✅ Badges y estados

### 🚀 Tecnologías

#### HTML5
- Semántica moderna
- Estructura accesible
- Meta tags optimizados

#### CSS3
- CSS Variables (Custom Properties)
- Flexbox y Grid Layout
- Backdrop Filter para glassmorphism
- Animaciones y transiciones
- Media queries responsivas

#### JavaScript ES6+
- Vanilla JavaScript puro
- Event Delegation
- Intersection Observer API
- LocalStorage para preferencias
- Chart.js para gráficos

## 📦 Estructura del Proyecto

```
admin-dashboard/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── main.js         # Funcionalidad JavaScript
└── README.md           # Documentación
```

## 🚀 Inicio Rápido

### 1. Clonar o Descargar

```bash
git clone [url-del-repositorio]
cd admin-dashboard
```

### 2. Abrir en Navegador

Simplemente abre `index.html` en tu navegador favorito. No requiere instalación ni compilación.

```bash
# Con Live Server (si tienes instalado)
live-server

# O simplemente abre el archivo
open index.html
```

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary: #6366f1;      /* Color principal */
    --success: #10b981;      /* Color éxito */
    --warning: #f59e0b;      /* Color advertencia */
    --danger: #ef4444;       /* Color peligro */
}
```

### Modificar el Logo

En `index.html`, busca la sección del logo:

```html
<div class="logo">
    <i class="fas fa-rocket"></i>
    <span class="logo-text">TuNombre</span>
</div>
```

### Agregar Nuevas Páginas

1. Crea un nuevo archivo HTML
2. Copia la estructura base de `index.html`
3. Modifica el contenido del `<main>`
4. Actualiza la navegación en el sidebar

## 📊 Gráficos

Los gráficos utilizan **Chart.js**. Para personalizar:

```javascript
// En js/main.js
const salesChart = new Chart(ctx, {
    type: 'line',  // Cambia el tipo: line, bar, pie, doughnut
    data: {
        labels: ['Ene', 'Feb', 'Mar', ...],
        datasets: [{
            data: [12500, 19000, 15000, ...]
        }]
    }
});
```

## 🎯 Funcionalidades JavaScript

### Toggle Sidebar
```javascript
// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
```

### Cambiar Tema
```javascript
// Dark/Light mode
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});
```

### Mostrar Notificaciones
```javascript
// Usar la función global
window.adminDashboard.showNotification('Tu mensaje aquí', 'info');
```

## 🌐 Navegadores Compatibles

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Opera (últimas 2 versiones)

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎨 Paleta de Colores

### Dark Theme (Default)
- Background: `#0f172a` → `#1e293b`
- Text: `#f1f5f9`
- Primary: `#6366f1`
- Accent: `#8b5cf6`

### Light Theme
- Background: `#f8fafc` → `#ffffff`
- Text: `#0f172a`
- Primary: `#6366f1`
- Accent: `#8b5cf6`

## 🔧 Mejoras Futuras

- [ ] Sistema de autenticación
- [ ] Integración con API REST
- [ ] Más tipos de gráficos
- [ ] Formularios avanzados
- [ ] Exportación de datos
- [ ] Múltiples layouts
- [ ] Temas personalizables
- [ ] PWA (Progressive Web App)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente en proyectos personales y comerciales.

## 👨‍💻 Autor

Desarrollado con ❤️ usando las últimas tecnologías web.

## 🙏 Agradecimientos

- [Font Awesome](https://fontawesome.com/) - Iconos
- [Google Fonts](https://fonts.google.com/) - Tipografía Inter
- [Chart.js](https://www.chartjs.org/) - Gráficos
- [UI Avatars](https://ui-avatars.com/) - Avatares generados

## 📞 Soporte

Si tienes preguntas o sugerencias, no dudes en abrir un issue o contactar.

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!
