# Portafolio Web – Plantilla Profesional

Plantilla limpia, responsive y con modo oscuro pensada para programadores que desean mostrar:

- Información personal y CV descargable  
- Habilidades principales  
- Proyectos destacados con enlace a código y demo  
- Blog técnico (opcional)  
- Formulario de contacto validado  
- Modo oscuro y navegación móvil  

## Despliegue rápido

1. Clona o descomprime el proyecto  
2. Abre `index.html` en tu navegador, o sirve la carpeta con:

   ```bash 
   npx serve


`````


---

🖼️  capturas de pantalla 
En docs/screenshots/ tienes ejemplos de cómo se ve tu portafolio:

| Archivo                  | Descripción                           |
| ------------------------ | ------------------------------------- |
| `console-clean.png`      | Consola sin errores ni 404            |
| `hero-bg.jpg`            | Fondo hero correctamente referenciado |
| `menu-closed.png`        | Menú móvil cerrado                    |
| `qunit-tests-passed.png` | Pruebas QUnit todas OK                |

---
🧪 pruebas unitarias (QUnit)
Dentro de docs/tests/ encontrarás:

index.html: runner de QUnit

tests.js: tu suite de tests para el formulario de contacto

Para ejecutarlas, abre docs/tests/index.html en el navegador y verás el reporte de QUnit.

Tip: si quieres servir todo con un servidor local en vez de abrir ficheros directos puedes hacer:
npx serve
y luego navegar a http://localhost:5000/docs/tests/index.html.

---
📂 estructura de carpetas
.
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── contact.js
│   └── img/
│       ├── mifoto.png
│       ├── teacup.jpg
│       ├── wazitocorp.jpg
│       └── ShowChed.png
├── docs/
│   ├── screenshots/
│   │   ├── console-clean.png
│   │   ├── hero-bg.jpg
│   │   ├── menu-closed.png
│   │   └── qunit-tests-passed.png
│   └── tests/
│       ├── index.html
│       └── tests.js
├── index.html
├── about.html
├── projects.html
├── blog.html
└── README.md
