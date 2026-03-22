# Documentación Técnica — Ecosistema Digital Consell de l'Estudiantat UJI

> Guía completa para editar contenido, gestionar archivos y entender el funcionamiento técnico del sitio web.

---

## Índice

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Los tres universos (páginas principales)](#2-los-tres-universos)
3. [Cómo editar contenido en cada página](#3-cómo-editar-contenido-en-cada-página)
   - [Junta Permanente](#junta-permanente)
   - [Pleno](#pleno)
   - [Transparencia](#transparencia)
   - [Noticias](#noticias)
   - [Documentos y Actas](#documentos-y-actas)
   - [Servicios](#servicios)
   - [Paellas 2026](#paellas-2026)
   - [La Casa](#la-casa)
4. [Base de datos — Tablas y campos](#4-base-de-datos--tablas-y-campos)
5. [API REST — Referencia completa](#5-api-rest--referencia-completa)
6. [Cómo añadir, eliminar y ordenar archivos/documentos](#6-cómo-añadir-eliminar-y-ordenar-archivosdocumentos)
7. [Cómo añadir y ordenar miembros](#7-cómo-añadir-y-ordenar-miembros)
8. [Cómo añadir noticias](#8-cómo-añadir-noticias)
9. [Cómo añadir servicios](#9-cómo-añadir-servicios)
10. [Datos hardcodeados (sin base de datos)](#10-datos-hardcodeados-sin-base-de-datos)
11. [Sistema de diseño](#11-sistema-de-diseño)

---

## 1. Estructura del proyecto

```
/
├── client/                     # Frontend React
│   ├── src/
│   │   ├── pages/              # Una página por ruta
│   │   │   ├── Home.tsx              → /
│   │   │   ├── Noticias.tsx          → /noticias
│   │   │   ├── Actas.tsx             → /actas
│   │   │   ├── Normativas.tsx        → /normativas
│   │   │   ├── Transparencia.tsx     → /transparencia
│   │   │   ├── Servicios.tsx         → /servicios
│   │   │   ├── JuntaPermanente.tsx   → /junta-permanente
│   │   │   ├── Pleno.tsx             → /pleno
│   │   │   ├── CasaEstudiantat.tsx   → /casa
│   │   │   └── Paellas2026.tsx       → /paellas
│   │   ├── components/         # Componentes reutilizables
│   │   └── App.tsx             # Registro de rutas
├── server/
│   ├── routes.ts               # Endpoints de la API
│   ├── storage.ts              # Capa de acceso a base de datos
│   ├── seed.ts                 # Datos iniciales (se ejecuta una sola vez)
│   └── db.ts                   # Conexión a PostgreSQL
├── shared/
│   └── schema.ts               # Modelos de datos (tablas)
└── DOCUMENTACION.md            # Este archivo
```

---

## 2. Los tres universos

| Universo | Ruta | Descripción |
|---|---|---|
| **El Consell** | `/` | Sede institucional — miembros, noticias, documentos, servicios |
| **La Casa** | `/casa` | Espacio estudiantil — agenda, espacios, proyectos, campañas |
| **Paellas 2026** | `/paellas` | Página del festival XXXV Aniversari UJI — tema oscuro con acentos naranja/ámbar |

---

## 3. Cómo editar contenido en cada página

### Junta Permanente

**Archivo:** `client/src/pages/JuntaPermanente.tsx`

Los datos de los 9 miembros de la Junta (más el técnico de soporte) están **hardcodeados directamente en el archivo** — no se leen de la base de datos. Para cambiar un nombre, cargo, email o descripción, edita el array `juntaMembers` que encontrarás al inicio del componente.

**Estructura de cada miembro:**

```typescript
{
  name: "Mohamed Al Howaidi Nasralla",   // Nombre completo
  role: "Portaveu",                       // Cargo
  email: "malhowaidi@uji.es",            // Email institucional
  description: "Texto descriptivo...",    // Aparece en la tarjeta
  order: 1,                               // Posición (1 = primero)
}
```

**Para cambiar el orden:** modifica el campo `order` de cada miembro. Se ordenan de menor a mayor.

**Para cambiar la foto:** el campo `image` acepta una URL externa (Unsplash, etc.) o una ruta local dentro de `/client/public/`.

---

### Pleno

**Archivo:** `client/src/pages/Pleno.tsx`

También usa **datos hardcodeados**. Hay tres secciones con arrays separados:

- `claustralsMembers` — los 32 estudiantes claustrales
- `cceMembers` — los 4 miembros del Consell de Coordinació d'Estudis
- `cgeMembers` — los 8 miembros del Consell de Govern de l'Estudiantat
- `commissions` — las 30 comisiones UJI con sus representantes
- `centerCommissions` — las 4 comisiones de centre (tribunals y comités de qualitat)

Para **añadir un miembro** a cualquier lista, añade un objeto al array correspondiente. Para **eliminar uno**, bórralo del array. Para **reordenar**, cambia el orden dentro del array.

---

### Transparencia

**Archivo:** `client/src/pages/Transparencia.tsx`

La mayor parte del contenido es **hardcodeado** (cifras del presupuesto, convenios, miembros de la Comisión Económica, cuentas bancarias de referencia). Para cambiar cualquier dato:

- **Presupuesto total:** busca `40.500€` y cámbialo
- **Convenios:** busca el array `convenios` o similar y edita los nombres
- **Comisión Económica:** busca el array con los miembros de la comisión

Los documentos económicos (presupuestos, informes, liquidaciones) se cargan **desde la base de datos** mediante la API `/api/documents?category=Económico`.

---

### Noticias

**Archivo:** `client/src/pages/Noticias.tsx`

Las noticias se cargan **desde la base de datos**. Para añadir una noticia, ver la sección [Cómo añadir noticias](#8-cómo-añadir-noticias).

Las categorías disponibles actualmente son:
- `Institucional`
- `Cultura`
- `Voluntariado`

Para añadir una nueva categoría, simplemente crea una noticia con una categoría nueva — aparecerá automáticamente en el filtro.

La **noticia destacada** (la grande en portada) es la noticia más reciente que tenga `featured: true` en la base de datos.

---

### Documentos y Actas

**Archivo:** `client/src/pages/Actas.tsx`

Se cargan desde la base de datos mediante `/api/documents`. Los tipos disponibles son:

| `type` | `category` | Dónde aparece |
|---|---|---|
| `acta` | `Pleno`, `Junta Permanente`, `Comisión` | Pestaña Actas |
| `resolución` | `Resolución` | Pestaña Resoluciones |
| `memoria` | `Memoria` | Pestaña Memorias |
| `convocatoria` | `Convocatoria`, `Electoral`, `Reunión` | Pestaña Convocatorias |

Para ver la gestión completa de documentos, consulta la sección [Cómo añadir, eliminar y ordenar archivos](#6-cómo-añadir-eliminar-y-ordenar-archivosdocumentos).

---

### Normativas

**Archivo:** `client/src/pages/Normativas.tsx`

Se cargan desde la base de datos con `/api/documents?category=Fundamental` (y otras categorías de tipo normativa). Los documentos con `type: "normativa"` aparecen aquí.

Las categorías de normativas disponibles son: `Fundamental`, `Interna`, `Derechos`, `Electoral`, `Académica`, `Económica`.

---

### Servicios

**Archivo:** `client/src/pages/Servicios.tsx`

Los servicios se cargan desde la base de datos con `/api/services`. Ver sección [Cómo añadir servicios](#9-cómo-añadir-servicios).

El campo `icon` acepta el nombre de cualquier icono de la librería **Lucide React** (por ejemplo: `Scale`, `GraduationCap`, `Calculator`, `MessagesSquare`, `HeartHandshake`, `Briefcase`).

---

### Paellas 2026

**Archivo:** `client/src/pages/Paellas2026.tsx`

Todo el contenido es **hardcodeado** en el propio archivo. Para cambiar:

- **Horario del festival:** busca el array `schedule` o similar
- **Precios de entradas:** busca las cifras de precio en el JSX
- **FAQ:** busca el array `faqs`
- **Normativa:** busca el array `rules`
- **Transporte:** busca la sección de transporte en el JSX

---

### La Casa

**Archivo:** `client/src/pages/CasaEstudiantat.tsx`

Todo el contenido es **hardcodeado** (agenda, espacios, proyectos, campañas). Para editar cualquier sección, modifica directamente los arrays/objetos correspondientes en el archivo.

---

## 4. Base de datos — Tablas y campos

### Tabla `members` — Miembros del Consell

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | integer (auto) | Identificador único, generado automáticamente |
| `name` | text | Nombre completo del miembro |
| `role` | text | Cargo o rol (ej: "Portaveu", "Secretari") |
| `organ` | text | Órgano al que pertenece (`junta`, `pleno`, etc.) |
| `center` | text | Centro o facultad (opcional) |
| `email` | text | Correo institucional (opcional) |
| `image` | text | URL de la foto de perfil (opcional) |
| `bio` | text | Texto de presentación (opcional) |
| `display_order` | integer | Orden de aparición (menor = primero) |

### Tabla `news` — Noticias

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | integer (auto) | Identificador único |
| `title` | text | Título de la noticia |
| `excerpt` | text | Resumen corto (aparece en las tarjetas) |
| `content` | text | Contenido completo (opcional) |
| `image` | text | URL de la imagen (opcional) |
| `category` | text | Categoría: `Institucional`, `Cultura`, `Voluntariado`, etc. |
| `author` | text | Autor o área responsable |
| `featured` | boolean | Si es `true`, aparece como noticia destacada en portada |
| `published_at` | timestamp | Fecha de publicación (por defecto: ahora) |

### Tabla `documents` — Documentos

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | integer (auto) | Identificador único |
| `title` | text | Título del documento |
| `description` | text | Descripción breve (opcional) |
| `type` | text | Tipo: `acta`, `resolución`, `memoria`, `presupuesto`, `informe`, `convocatoria`, `normativa` |
| `category` | text | Categoría (determina dónde aparece en la web) |
| `file_url` | text | URL o ruta del archivo (opcional, puede ser externa) |
| `file_size` | text | Tamaño legible del archivo, ej: `"2.4 MB"` (opcional) |
| `published_at` | timestamp | Fecha de publicación |

### Tabla `services` — Servicios

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | integer (auto) | Identificador único |
| `title` | text | Nombre del servicio |
| `description` | text | Descripción del servicio |
| `icon` | text | Nombre del icono Lucide React (ej: `"Scale"`) |
| `color` | text | Clase CSS de color de fondo (ej: `"bg-purple-600"`) |
| `link` | text | URL de enlace (opcional) |
| `display_order` | integer | Orden de aparición |

---

## 5. API REST — Referencia completa

Todos los endpoints están bajo `/api`. Solo aceptan peticiones GET (lectura).

### Miembros

```
GET /api/members
GET /api/members?organ=junta
GET /api/members/:id
```

**Parámetros opcionales:**
- `organ` — filtra por órgano (ej: `junta`, `pleno`)

**Ejemplo de respuesta:**
```json
[
  {
    "id": 1,
    "name": "Mohamed Al Howaidi Nasralla",
    "role": "Portaveu",
    "organ": "junta",
    "center": null,
    "email": "malhowaidi@uji.es",
    "image": "https://...",
    "bio": "Nuestra misión es...",
    "display_order": 1
  }
]
```

---

### Noticias

```
GET /api/news
GET /api/news?category=Institucional
GET /api/news?limit=5
GET /api/news?category=Cultura&limit=3
GET /api/news/featured
GET /api/news/:id
```

**Parámetros opcionales:**
- `category` — filtra por categoría (ej: `Institucional`, `Cultura`)
- `limit` — número máximo de resultados (por defecto: 50)

**Ejemplo de respuesta:**
```json
[
  {
    "id": 1,
    "title": "La UJI aprueba el nuevo calendario académico",
    "excerpt": "El Consell logra incluir las principales demandas...",
    "content": "Texto completo...",
    "image": "https://...",
    "category": "Institucional",
    "author": "Redacción Consell",
    "featured": true,
    "publishedAt": "2026-02-18T00:00:00.000Z"
  }
]
```

---

### Documentos

```
GET /api/documents
GET /api/documents?category=Pleno
GET /api/documents?category=Económico
GET /api/documents/:id
```

**Parámetros opcionales:**
- `category` — filtra por categoría (ej: `Pleno`, `Económico`, `Normativa`, `Electoral`)

**Ejemplo de respuesta:**
```json
[
  {
    "id": 1,
    "title": "Acta Pleno Ordinario Febrero 2026",
    "description": "Acta completa del pleno ordinario...",
    "type": "acta",
    "category": "Pleno",
    "fileUrl": "https://drive.google.com/...",
    "fileSize": "2.4 MB",
    "publishedAt": "2026-02-18T00:00:00.000Z"
  }
]
```

---

### Servicios

```
GET /api/services
GET /api/services/:id
```

**Ejemplo de respuesta:**
```json
[
  {
    "id": 1,
    "title": "Asesoría Jurídica",
    "description": "¿Problemas con la normativa?...",
    "icon": "Scale",
    "color": "bg-purple-600",
    "link": null,
    "display_order": 1
  }
]
```

---

## 6. Cómo añadir, eliminar y ordenar archivos/documentos

Los documentos **no se suben físicamente** al servidor mediante la web. El flujo correcto es:

1. **Sube el archivo** a un servicio externo (Google Drive, OneDrive, web de la UJI, servidor propio, etc.)
2. **Copia el enlace directo** de descarga o visualización del archivo
3. **Registra el documento** en la base de datos con ese enlace en el campo `file_url`

### Añadir un documento (SQL directo)

Conéctate a la base de datos PostgreSQL y ejecuta:

```sql
INSERT INTO documents (title, description, type, category, file_url, file_size, published_at)
VALUES (
  'Acta Pleno Ordinario Marzo 2026',
  'Acta completa del pleno de marzo',
  'acta',
  'Pleno',
  'https://drive.google.com/file/d/XXXXXXXX/view',
  '1.8 MB',
  '2026-03-15'
);
```

### Añadir un documento (desde código — server/seed.ts o una ruta POST)

Si prefieres hacerlo desde el código, puedes añadir el documento al array en `server/seed.ts` (solo se ejecuta si la base de datos está vacía) o crear una ruta POST en `server/routes.ts`:

```typescript
app.post("/api/documents", async (req, res) => {
  const parsed = insertDocumentSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error);
  const doc = await storage.createDocument(parsed.data);
  res.json(doc);
});
```

Luego llama al endpoint con:

```bash
curl -X POST http://localhost:5000/api/documents \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Acta Pleno Marzo 2026",
    "description": "Acta del pleno de marzo",
    "type": "acta",
    "category": "Pleno",
    "fileUrl": "https://...",
    "fileSize": "1.8 MB"
  }'
```

### Eliminar un documento (SQL directo)

```sql
-- Primero busca el ID del documento
SELECT id, title FROM documents WHERE title LIKE '%Marzo%';

-- Luego elimínalo
DELETE FROM documents WHERE id = 42;
```

### Ordenar documentos

Los documentos se ordenan automáticamente por `published_at` de más reciente a más antiguo. Para controlar el orden manualmente, cambia la fecha de publicación:

```sql
-- Haz que un documento aparezca primero (fecha más reciente)
UPDATE documents SET published_at = NOW() WHERE id = 42;

-- Haz que aparezca después (fecha más antigua)
UPDATE documents SET published_at = '2024-01-01' WHERE id = 43;
```

### Tipos y categorías de documentos

| Sección web | `type` | `category` |
|---|---|---|
| Actas de Pleno | `acta` | `Pleno` |
| Actas de Junta | `acta` | `Junta Permanente` |
| Actas de Comisión | `acta` | `Comisión` |
| Resoluciones | `resolución` | `Resolución` |
| Memorias | `memoria` | `Memoria` |
| Convocatorias | `convocatoria` | `Convocatoria` |
| Documentos electorales | `convocatoria` | `Electoral` |
| Presupuestos | `presupuesto` | `Económico` |
| Informes económicos | `informe` | `Económico` |
| Normativa fundamental | `normativa` | `Fundamental` |
| Normativa interna | `normativa` | `Interna` |
| Normativa de derechos | `normativa` | `Derechos` |
| Normativa electoral | `normativa` | `Electoral` |
| Normativa académica | `normativa` | `Académica` |
| Normativa económica | `normativa` | `Económica` |

---

## 7. Cómo añadir y ordenar miembros

> **Importante:** Los miembros de **Junta Permanente** y **Pleno** están hardcodeados en sus archivos `.tsx`. Si quieres añadir miembros al **módulo de la base de datos** (para la página Home u otros usos futuros), usa los pasos a continuación.

### Añadir un miembro (SQL directo)

```sql
INSERT INTO members (name, role, organ, center, email, image, bio, display_order)
VALUES (
  'Nombre Apellidos',
  'Vocal',
  'junta',
  NULL,
  'email@uji.es',
  'https://imagen.jpg',
  'Texto de presentación del miembro.',
  5
);
```

### Modificar el orden de un miembro

```sql
-- Cambia el número de display_order (menor = aparece antes)
UPDATE members SET display_order = 2 WHERE id = 5;
```

### Eliminar un miembro

```sql
DELETE FROM members WHERE id = 5;
```

### Órganos disponibles

| Valor `organ` | Descripción |
|---|---|
| `junta` | Junta Permanente |
| `pleno` | Pleno del Consell |

---

## 8. Cómo añadir noticias

### Añadir una noticia (SQL directo)

```sql
INSERT INTO news (title, excerpt, content, image, category, author, featured, published_at)
VALUES (
  'Título de la noticia',
  'Resumen breve que aparece en la tarjeta.',
  'Contenido completo de la noticia (puede ser largo).',
  'https://images.unsplash.com/photo-XXXXXXXX',
  'Institucional',
  'Junta Permanente',
  false,
  NOW()
);
```

### Hacer que una noticia sea la destacada

Solo puede haber una noticia destacada principal. Primero quita el destacado de las anteriores:

```sql
-- Quita el destacado de todas
UPDATE news SET featured = false;

-- Pon el destacado en la nueva
UPDATE news SET featured = true WHERE id = 15;
```

### Eliminar una noticia

```sql
DELETE FROM news WHERE id = 15;
```

### Categorías de noticias

Las categorías son texto libre. Las que existen actualmente son:
- `Institucional`
- `Cultura`
- `Voluntariado`

Puedes añadir categorías nuevas simplemente usándolas — aparecerán automáticamente en el filtro de la página de noticias.

---

## 9. Cómo añadir servicios

### Añadir un servicio (SQL directo)

```sql
INSERT INTO services (title, description, icon, color, link, display_order)
VALUES (
  'Nombre del servicio',
  'Descripción del servicio para el estudiantado.',
  'Landmark',
  'bg-indigo-600',
  'https://enlace-del-servicio.es',
  7
);
```

### Iconos disponibles (Lucide React)

Usa cualquier nombre de icono de [lucide.dev](https://lucide.dev/icons/). Ejemplos comunes:

| Nombre | Uso sugerido |
|---|---|
| `Scale` | Asesoría jurídica |
| `GraduationCap` | Banco de apuntes |
| `Calculator` | Calculadoras |
| `MessagesSquare` | Comunicación / buzones |
| `HeartHandshake` | Voluntariado |
| `Briefcase` | Bolsa de trabajo/alojamiento |
| `BookOpen` | Biblioteca / recursos |
| `Globe` | Internacional / movilidad |
| `Landmark` | Institucional |

### Colores disponibles (Tailwind CSS)

| Clase CSS | Color visual |
|---|---|
| `bg-purple-600` | Morado |
| `bg-blue-500` | Azul |
| `bg-green-500` | Verde |
| `bg-red-500` | Rojo |
| `bg-orange-500` | Naranja |
| `bg-teal-600` | Verde azulado |
| `bg-indigo-600` | Índigo |
| `bg-yellow-500` | Amarillo |
| `bg-pink-500` | Rosa |

### Cambiar el orden de los servicios

```sql
UPDATE services SET display_order = 3 WHERE id = 2;
```

### Eliminar un servicio

```sql
DELETE FROM services WHERE id = 2;
```

---

## 10. Datos hardcodeados (sin base de datos)

Las siguientes páginas o secciones **no leen de la base de datos** y deben editarse directamente en el código fuente:

| Página / Sección | Archivo | Contenido hardcodeado |
|---|---|---|
| Junta Permanente | `client/src/pages/JuntaPermanente.tsx` | Todos los miembros (9 + técnico) |
| Pleno | `client/src/pages/Pleno.tsx` | Claustrals, CCE, CGE, comisiones UJI, comisiones de centre |
| Transparencia (parcial) | `client/src/pages/Transparencia.tsx` | Presupuesto total, convenios, Comisión Económica |
| Paellas 2026 | `client/src/pages/Paellas2026.tsx` | Horario, precios, FAQ, normativa, transporte |
| La Casa | `client/src/pages/CasaEstudiantat.tsx` | Agenda, espacios, proyectos, campañas |

Para modificar estos contenidos, busca los arrays y objetos de datos al inicio del componente en cada archivo.

---

## 11. Sistema de diseño

### Paleta de colores institucional UJI

| Variable / Clase | Hex | Uso |
|---|---|---|
| `#013764` | Azul oscuro | Color principal institucional |
| `#215077` | Azul medio | Secundario / glassmorphism |
| `#1a56db` (Tailwind `blue-600`) | Azul brillante | Acentos y CTAs |

### Tipografía

- **Archivo Black** — Títulos grandes, display, tipografía cinética
- **Montserrat** — Cuerpo de texto, navegación, descripciones

### Estilo visual

- **Glassmorphism:** `backdrop-blur`, `bg-white/10`, `border border-white/20`
- **Bordes:** `rounded-3xl` (tarjetas grandes), `rounded-2xl` (tarjetas pequeñas), `rounded-xl` (botones)
- **Sombras:** `shadow-2xl`, `shadow-lg`
- **Gradientes:** `from-[#013764] to-[#215077]`

### Mascota

El dragón institucional (mascota del Consell) aparece como imagen decorativa. Las versiones disponibles son:
- `dragon_halal.png` — dragón de pie
- `dragon_acostado.png` — dragón tumbado

Las imágenes están en `attached_assets/` y se importan mediante el alias `@assets`.
