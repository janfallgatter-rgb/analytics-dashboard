# Analytics Dashboard

> A productivity analytics dashboard generated entirely by **Qwen3.5-27b** running locally — created as an LLM performance test.

## About

This project was generated in a single prompt session using the **Qwen3.5-27b** large language model running locally (via Ollama / llama.cpp). It serves as a benchmark to evaluate the code quality, design coherence, and feature completeness achievable by a locally hosted open-source LLM.

The dashboard visualizes team productivity data across 7 categories with interactive charts, search, and dark/light mode — all without a build step.


## The Original Prompt

The following prompt was submitted verbatim to Qwen3.5-27b (locally hosted). This repository contains the model's output.

<details>
<summary>Show full prompt</summary>

```
TASK: Autonomous Visual Data Dashboard Development
Du bist ein Senior Software Engineer Agent mit vollem Zugriff auf das lokale Dateisystem (via MCP/Shell). Dein Ziel ist es, eine funktionsfähige, visuell beeindruckende Single-Page-Browser-App (Dashboard) autonom zu entwickeln und im aktuellen Verzeichnis zu speichern.

1. TECHNISCHER STACK (Vorgabe)
Framework: Vanilla JS oder React (Vite-Setup, falls npm verfügbar).

Styling: Tailwind CSS v4 (CDN-Link für schnelles Prototyping erlaubt).

Icons: Lucide-Icons (via CDN/ESM).

Charts: Chart.js oder Recharts.

2. ORDNERSTRUKTUR
Erstelle zwingend folgende Struktur im Verzeichnis ./analytics-dashboard:

/src (HTML, JS, CSS)

/data (Hier sollst du eine raw_data.json mit 50 fiktiven Datensätzen generieren)

/assets (Stylesheets/Bilder)

3. FUNKTIONALE ANFORDERUNGEN
Generiere zuerst eine JSON-Datei mit fiktiven "Produktivitäts-Daten" (Datum, Aufgabe, Dauer, Kategorie).

Erstelle ein Dashboard, das diese JSON einliest und visualisiert.

Implementiere ein "Dark Mode"-Toggle, das die Einstellung in einer lokalen settings.json speichert und beim Laden wieder ausliest.

Das Dashboard muss eine Sidebar, eine Top-Nav und ein Grid aus mindestens 4 Chart-Karten enthalten.

4. VISUELLE ANFORDERUNGEN ("Visually Appealing")
Nutze moderne Design-Prinzipien: Große Abstände (Gaps), abgerundete Ecken (XL-Corners), subtile Schatten und Glasmorphismus-Effekte.

Verwende eine professionelle Farbpalette (z.B. Slate-900 für Background, Indigo-500 für Akzente).

Die App muss voll responsiv sein.

5. AUTONOMIE-REGELN (Wichtig!)
Nutze deine Tools (write_to_file, make_directory, execute_command), um das Projekt ohne meine Hilfe aufzubauen.

Falls Fehler auftreten (Syntax, fehlende Dateien), korrigiere sie selbstständig durch Analyse der Logs oder Testläufe.

Gib mir erst Bescheid, wenn die index.html fertig ist und im Browser geöffnet werden kann.

ANTWORTE NICHT MIT "Ich werde...", sondern beginne sofort mit dem ersten Schritt (Ordnererstellung).

START JETZT.
```

</details>

## Features

- **4 interactive charts** — bar charts for hours/task count per category, a line chart for daily productivity, and a doughnut chart for top tasks
- **Live search** — filter tasks and charts by name or category in real time
- **Dark / Light mode** — persisted via `localStorage`
- **Glassmorphism UI** — built with Tailwind CSS utility classes
- **No build step** — pure HTML + Vue 3 + Chart.js via CDN
- **Responsive** — collapsible sidebar, mobile-friendly layout

## Tech Stack

| Library | Version | Delivery |
|---|---|---|
| [Vue 3](https://vuejs.org/) | 3.x | CDN |
| [Chart.js](https://www.chartjs.org/) | 4.4.1 | CDN |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x | CDN |

## Project Structure

```
analytics-dashboard/
├── assets/
│   └── styles.css        # Glassmorphism, animations, custom scrollbar
├── data/
│   └── raw_data.json     # Sample task dataset (50 entries)
└── src/
    ├── index.html        # App shell & Vue template
    └── main.js           # Vue app, chart logic, computed stats
```

## Getting Started

No `npm install`, no build step — just a local HTTP server is required because the HTML file references assets via absolute paths.

### Option 1 — Python (recommended, no dependencies)

```bash
git clone https://github.com/janfallgatter-rgb/analytics-dashboard.git
cd analytics-dashboard
python3 -m http.server 8080
```

Then open [http://localhost:8080/src/index.html](http://localhost:8080/src/index.html) in your browser.

### Option 2 — Node.js / npx

```bash
git clone https://github.com/janfallgatter-rgb/analytics-dashboard.git
cd analytics-dashboard
npx serve . -p 8080
```

Then open [http://localhost:8080/src/index.html](http://localhost:8080/src/index.html).

### Option 3 — VS Code Live Server

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Open the project folder in VS Code
3. Right-click `src/index.html` → **Open with Live Server**

> **Note:** Opening `index.html` directly via `file://` will **not** work because the CSS and JS are referenced with absolute paths (`/assets/styles.css`, `/src/main.js`).

## Data Format

The dashboard reads from an in-memory dataset embedded in `src/main.js`. Each entry follows this schema:

```json
{
  "id": 1,
  "datum": "2026-01-05",
  "aufgabe": "Code Review PR #423",
  "dauer": 90,
  "kategorie": "Entwicklung"
}
```

| Field | Type | Description |
|---|---|---|
| `id` | number | Unique task identifier |
| `datum` | string | Date (YYYY-MM-DD) |
| `aufgabe` | string | Task name |
| `dauer` | number | Duration in minutes |
| `kategorie` | string | Category (see below) |

### Categories

`Entwicklung` · `Meeting` · `Testing` · `Dokumentation` · `Sicherheit` · `Support` · `DevOps`

## License

[MIT](LICENSE) © janfallgatter-rgb
