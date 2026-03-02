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
TASK: Autonomous Visual Dashboard with 5x5 Hierarchy & Mock Data

Du bist ein Senior Software Engineer Agent mit vollem Zugriff auf das
lokale Dateisystem (via MCP/Shell). Dein Ziel ist es, eine
funktionsfähige, visuell beeindruckende Single-Page-App autonom zu
entwickeln, die eine strikte hierarchische Navigation besitzt und mit
selbst generierten Daten gefüllt ist.

1. PHASE 1: DATEN-GENERIERUNG (Zwingend)
Erstelle ein Skript (Python oder JS), das eine Datei
data/analytics_core.json erzeugt.

Die Daten müssen mindestens 150 realistische Datensätze für 5
verschiedene Geschäftsbereiche enthalten.

Führe das Skript autonom aus, bevor du mit dem UI beginnst.

2. PHASE 2: STRUKTURELLE ANFORDERUNG (Die "5x5" Regel)
Implementiere ein Navigationssystem mit exakt zwei Ebenen:

  Ebene 1 (Sidebar): 5 Hauptmenüpunkte
  (z.B. Dashboard, Sales, Team, Infrastructure, Reports).

  Ebene 2 (Content): Jeder der 5 Hauptpunkte muss beim Anklicken 5
  spezifische Untersektionen oder Daten-Karten laden
  (insgesamt 25 Unterelemente).

  Jede Untersektion muss eine eigene kleine Visualisierung oder ein
  Daten-Widget aus der JSON-Datei enthalten.

3. TECHNISCHER STACK & STYLING
  Framework: Vanilla JS oder React (Vite). Styling: Tailwind CSS v4.
  Charts: Chart.js oder Recharts.
  Design: "Professional Dark Mode". Nutze Indigo-Akzente,
  Glasmorphismus (backdrop-blur) und XL-Corners für die Karten.

4. DATEISYSTEM-INTERAKTION
  Erstelle die Ordnerstruktur: /src, /data, /config.
  Speichere die App-Konfiguration (aktueller Tab, Farb-Präferenz) in
  einer lokalen config/app_state.json. Die App muss diese Datei beim
  Laden auslesen.

5. AUTONOMIE-REGELN
  Nutze deine Tools (write_to_file, execute_command), um alles ohne
  meine Hilfe aufzubauen.
  Korrigiere Pfadfehler oder Syntaxprobleme selbstständig durch
  Analyse der Fehlermeldungen.
  Melde erst Vollzug, wenn die index.html fertig ist und alle 30
  Navigationsknoten (5x5 + Main) funktionieren.

START JETZT MIT DER ORDNERSTRUKTUR UND DEM DATENSKRIPT.
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
