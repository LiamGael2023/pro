# 📊 AdminPro - Panel Administrativo Profesional

Plantilla administrativa profesional y empresarial basada en **Tabler.io**, el framework de dashboards más moderno y completo.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Tabler](https://img.shields.io/badge/Tabler-206bc4?style=flat-square&logo=tabler&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![ApexCharts](https://img.shields.io/badge/ApexCharts-00E396?style=flat-square&logo=apexcharts&logoColor=white)

## ✨ Características

### 🎯 Diseño Profesional y Serio
- **Tabler.io Framework**: Framework de administración de código abierto, profesional y probado
- **Diseño Limpio**: Interfaz minimalista y enfocada en la productividad
- **Bootstrap 5**: Construido sobre Bootstrap para máxima compatibilidad
- **Totalmente Responsive**: Optimizado para escritorio, tablet y móvil

### 📊 Componentes Empresariales
- ✅ Sidebar navegable con menús desplegables
- ✅ Header con breadcrumbs y acciones rápidas
- ✅ Tarjetas estadísticas con métricas clave
- ✅ Gráficos profesionales con ApexCharts
- ✅ Tablas de datos con búsqueda y paginación
- ✅ Lista de actividades en tiempo real
- ✅ Sistema de notificaciones (toasts)
- ✅ Badges de estado profesionales

### 🚀 Tecnologías

#### Tabler.io
- Framework de administración profesional
- +500 componentes UI prediseñados
- Sistema de diseño consistente
- Iconos Tabler integrados

#### Bootstrap 5
- Grid system responsive
- Componentes interactivos
- Utilidades CSS
- JavaScript plugins

#### ApexCharts
- Gráficos interactivos modernos
- Altamente personalizables
- Responsive por defecto
- Animaciones fluidas

#### HTML5 & JavaScript ES6+
- Código semántico y accesible
- JavaScript moderno vanilla
- No requiere frameworks adicionales
- Performance optimizado

## 📦 Estructura del Proyecto

```
admin-dashboard/
├── index.html          # Dashboard principal
├── css/
│   └── styles.css      # Personalizaciones CSS
├── js/
│   └── main.js         # Funcionalidad JavaScript
├── README.md           # Documentación
└── .gitignore         # Archivos ignorados
```

## 🚀 Inicio Rápido

### 1. Clonar el Repositorio

```bash
git clone [url-del-repositorio]
cd admin-dashboard
```

### 2. Abrir en Navegador

No requiere instalación ni compilación. Simplemente abre `index.html`:

```bash
# Abre directamente el archivo
open index.html

# O con un servidor local
python -m http.server 8000
# Luego visita: http://localhost:8000
```

### 3. Personalizar

Todo está listo para personalizar según tus necesidades.

## 🎨 Personalización

### Cambiar el Logo

Edita en `index.html`:

```html
<h1 class="navbar-brand navbar-brand-autodark">
    <a href=".">
        <!-- Tu logo SVG aquí -->
        <span class="navbar-brand-text">TuEmpresa</span>
    </a>
</h1>
```

### Modificar Colores

Los colores se gestionan a través de Tabler. Para cambiar el color principal, puedes sobrescribir en `css/styles.css`:

```css
:root {
    --tblr-primary: #tu-color;
}
```

### Agregar Nuevas Páginas de Navegación

En `index.html`, dentro del `<ul class="navbar-nav">`:

```html
<li class="nav-item">
    <a class="nav-link" href="tu-pagina.html">
        <span class="nav-link-icon">
            <i class="ti ti-tu-icono"></i>
        </span>
        <span class="nav-link-title">Tu Página</span>
    </a>
</li>
```

### Personalizar Gráficos

En `js/main.js`, modifica las opciones de ApexCharts:

```javascript
const options = {
    series: [{
        name: 'Serie',
        data: [tus, datos, aquí]
    }],
    chart: {
        type: 'area', // line, bar, pie, donut, etc.
        height: 300
    },
    // Más opciones...
};
```

## 📊 Componentes Incluidos

### Dashboard Principal
- **4 Tarjetas de Estadísticas**: Con métricas, tendencias y barras de progreso
- **Gráfico de Ventas**: Área chart interactivo con datos mensuales
- **Feed de Actividades**: Lista scrolleable con eventos recientes
- **Tabla de Pedidos**: Con búsqueda, paginación y acciones

### Navegación
- **Sidebar Vertical**: Con menús simples y desplegables
- **Header Responsive**: Con breadcrumbs y botones de acción
- **Menús Dropdown**: Para filtros de fecha y acciones

### Interactividad
- **Búsqueda en Tablas**: Filtrado en tiempo real
- **Contadores Animados**: Números que se animan al cargar
- **Notificaciones Toast**: Sistema de alertas elegante
- **Navegación Activa**: Estados visuales claros

## 🌐 Navegadores Compatibles

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Opera (últimas 2 versiones)

## 📱 Breakpoints Responsive

- **Desktop**: ≥ 992px
- **Tablet**: 768px - 991px
- **Mobile**: < 768px

El sidebar colapsa automáticamente en móvil con un botón hamburguesa.

## 🎯 Casos de Uso

Esta plantilla es perfecta para:

- **Dashboards Corporativos**: Monitoreo de KPIs empresariales
- **Paneles de Administración**: Gestión de contenido y usuarios
- **Sistemas ERP/CRM**: Interfaces de gestión empresarial
- **Plataformas SaaS**: Backends de aplicaciones web
- **Analítica de Datos**: Visualización de métricas y reportes

## 📚 Recursos

### Tabler.io
- [Documentación Oficial](https://tabler.io/docs)
- [Componentes](https://preview.tabler.io/docs/components.html)
- [Iconos Tabler](https://tabler-icons.io/)

### ApexCharts
- [Documentación](https://apexcharts.com/docs/installation/)
- [Ejemplos](https://apexcharts.com/javascript-chart-demos/)

### Bootstrap 5
- [Documentación](https://getbootstrap.com/docs/5.0)
- [Componentes](https://getbootstrap.com/docs/5.0/components/)

## 🔧 Próximas Funcionalidades

- [ ] Modo oscuro/claro toggle
- [ ] Más páginas de ejemplo (Usuarios, Productos, etc.)
- [ ] Formularios avanzados con validación
- [ ] Modales y diálogos
- [ ] Sistema de notificaciones avanzado
- [ ] Integración con APIs REST
- [ ] Autenticación de ejemplo
- [ ] Exportación de datos (PDF, Excel)

## 📄 Licencia

Este proyecto utiliza:
- **Tabler.io**: MIT License
- **Bootstrap 5**: MIT License
- **ApexCharts**: MIT License

El código personalizado de este proyecto también está bajo Licencia MIT.

## 👨‍💻 Desarrollo

### Stack Tecnológico
```
Frontend:
- HTML5 (Semántico)
- Tabler.io Framework
- Bootstrap 5.3
- ApexCharts
- Vanilla JavaScript ES6+

Dependencias:
- Tabler Core CSS/JS (CDN)
- Tabler Icons (CDN)
- ApexCharts (CDN)
- Bootstrap 5 (incluido en Tabler)
```

### Sin Dependencias de Build
Esta plantilla **NO requiere**:
- ❌ Node.js
- ❌ npm/yarn
- ❌ Webpack/Vite
- ❌ Compilación
- ❌ Instalación de paquetes

Todo funciona directamente en el navegador.

## 🙏 Créditos

- [Tabler.io](https://tabler.io/) - Framework de administración
- [Bootstrap](https://getbootstrap.com/) - Framework CSS
- [ApexCharts](https://apexcharts.com/) - Librería de gráficos
- [Tabler Icons](https://tabler-icons.io/) - Set de iconos

## 📞 Soporte

Para dudas sobre:
- **Tabler.io**: [GitHub Issues](https://github.com/tabler/tabler/issues)
- **Bootstrap**: [Documentación oficial](https://getbootstrap.com/)
- **ApexCharts**: [Documentación oficial](https://apexcharts.com/)

---

⭐ **Si este proyecto te es útil, considera darle una estrella en GitHub**

Desarrollado con enfoque en profesionalismo y productividad empresarial.
