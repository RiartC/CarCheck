# 🚗 SymptoCar – Auto-Symptom-Diagnose-App

SymptoCar ist eine moderne Web-Anwendung zur Diagnose von Auto-Symptomen. Nutzer können Symptome eingeben und erhalten passende Ursachen aus einer umfangreichen Datenbank. Die App bietet vollständige CRUD-Funktionalität, React Hooks, Testing und ein ansprechendes UI - **komplett ohne externe Backend-Services**.

## 📌 Features & Funktionen

### 🔍 Diagnosesystem
- Nutzer geben ein Symptom ein (z.B. "Auto zieht nach links")
- Die App zeigt passende Ursachen aus der lokalen Datenbank
- Intelligente Suche über Symptome, Ursachen und Kategorien

### 📝 CRUD-Funktionalität
- ✅ **Create:** Neue Symptome erstellen
- ✅ **Read:** Symptome anzeigen und durchsuchen
- ✅ **Update:** Symptome bearbeiten
- ✅ **Delete:** Symptome löschen

### ⚛️ Modernes Frontend
- **Next.js 16** mit App Router
- **React 19** mit Hooks (useState, useEffect)
- **Tailwind CSS 4** für modernes Styling
- Dynamische UI-Komponenten
- Dark Mode Support
- Responsive Design

### 🧪 Testing
- **Jest** + **React Testing Library**
- Mindestens zwei Testfälle pro Komponente
- Given-When-Then-Struktur
- Positive und negative Szenarien

### 🎨 UI/UX
- Tab-Navigation (Diagnose / Symptome verwalten)
- Formularvalidierung mit Fehleranzeige
- Inline-Bearbeitung von Symptomen
- Kategorie-Tags für bessere Übersicht

## 🛠️ Installation & Startanleitung

### 📥 Projekt klonen

```bash
git clone https://github.com/RiartC/CarCheck.git
cd CarCheck/carcheck
```

### 📦 Abhängigkeiten installieren

```bash
npm install
```

### ▶️ Entwicklungsserver starten

```bash
npm run dev
```

Die App läuft unter: **http://localhost:3000**

### 🧪 Tests ausführen

```bash
# Alle Tests ausführen
npm run test:ci

# Tests im Watch-Modus
npm test
```

## 📁 Projektstruktur

```
carcheck/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root Layout
│   │   ├── page.js             # Hauptseite (Home)
│   │   └── globals.css         # Globale Styles
│   │
│   ├── components/
│   │   ├── SymptomForm.jsx         # Suchformular für Symptome
│   │   ├── DiagnosisResult.jsx     # Anzeige der Diagnoseergebnisse
│   │   ├── SymptomList.jsx         # Liste aller Symptome
│   │   └── AddSymptomForm.jsx      # Formular zum Hinzufügen neuer Symptome
│   │
│   ├── lib/
│   │   └── symptomsData.js         # Lokale Symptom-Datenbank
│   │
│   └── tests/
│       ├── SymptomForm.test.js     # Tests für SymptomForm
│       └── DiagnosisResult.test.js # Tests für DiagnosisResult
│
├── public/                     # Statische Assets
├── jest.config.js             # Jest Konfiguration
├── jest.setup.js              # Jest Setup
├── package.json               # Abhängigkeiten
└── README.md                  # Diese Datei
```

## 🧩 Testfälle (Given-When-Then)

### ✅ Positiver Test - SymptomForm

**Given:** Nutzer gibt "Auto zieht nach links" ein  
**When:** Er klickt auf "Diagnose anzeigen"  
**Then:** Die App ruft die onSearch-Funktion mit dem Symptom auf

### ❌ Negativer Test - SymptomForm

**Given:** Das Eingabefeld ist leer  
**When:** Nutzer klickt auf "Diagnose anzeigen"  
**Then:** Die App zeigt die Fehlermeldung "Bitte ein Symptom eingeben." an

### ✅ Positiver Test - DiagnosisResult

**Given:** Suchergebnisse sind vorhanden  
**When:** Komponente wird gerendert  
**Then:** Alle Symptome, Kategorien und Ursachen werden angezeigt

### ❌ Negativer Test - DiagnosisResult

**Given:** Keine Suchergebnisse gefunden  
**When:** Komponente wird gerendert  
**Then:** Meldung "Keine Ergebnisse gefunden" wird angezeigt

## 🖥️ Technologie-Stack

### Frontend
- **Next.js 16** - React Framework mit App Router
- **React 19** - UI Library
- **Tailwind CSS 4** - Utility-First CSS Framework

### State Management
- React Hooks (useState)
- Lokaler Component State

### Datenverwaltung
- Lokale JavaScript-Datenbank (kein Backend erforderlich)
- LocalStorage für benutzerdefinierte Symptome (optional erweiterbar)

### Testing
- **Jest 29** - Test Framework
- **React Testing Library 14** - Component Testing
- **@testing-library/jest-dom** - Custom Jest Matchers

### Development Tools
- ESLint - Code Linting
- PostCSS - CSS Processing

## 🚀 Deployment

Die App kann einfach über **Vercel** deployed werden:

1. Pushe dein Repository zu GitHub
2. Verknüpfe das Repository mit Vercel
3. Vercel führt automatisch `npm run build` aus
4. Die App ist verfügbar unter: `https://your-project.vercel.app`

Alternativ kann die App auch auf anderen Plattformen deployed werden:
- **Netlify**
- **Railway**
- **Render**

## 👥 Team / Autor:innen

- **Riart Çekaj**
- **Fabian Ott**

## 📘 Rahmenbedingungen

### 1.5.1 Allgemeine Anforderungen
✅ Iteratives Projekt mit Zwischenabgaben  
✅ Öffentliche Versionierung im GitHub-Repository

### 1.5.2 Funktionale Anforderungen
✅ CRUD-Funktionalität (Create, Read, Update, Delete)  
✅ State-Management mit React Hooks  
✅ Lokale Datenverwaltung (keine externe Datenbank erforderlich)  
✅ Mindestens zwei Tests mit Jest + RTL

### 1.5.3 Technische Anforderungen
✅ Framework: Next.js 16  
✅ Styling mit Tailwind CSS  
✅ Deployment über Vercel  
✅ GitHub mit Branch-Nutzung und sauberer Commit-Historie  
✅ README mit klar definierten Abschnitten

### 1.5.4 Testfälle
✅ Struktur: Given – When – Then  
✅ Positive & negative Szenarien  
✅ Mindestens 2 Testfälle pro Hauptkomponente

## 📈 Erweiterungsmöglichkeiten

- 🤖 **KI-gestützte Diagnose** mit OpenAI oder lokalen Modellen
- 📊 **Diagnose-Historie** pro Nutzer mit LocalStorage
- 🏷️ **Erweiterte Kategorien** (Motor, Elektronik, Fahrwerk, etc.)
- 📸 **Foto-Upload** zur visuellen Problemanalyse
- 🌍 **Mehrsprachigkeit** (i18n)
- 💾 **Persistente Speicherung** mit IndexedDB
- 📱 **Progressive Web App** (PWA) für Offline-Nutzung
- 🔔 **Wartungserinnerungen** basierend auf Kilometern/Zeit
- 🛠️ **Werkstatt-Finder** Integration

## 📄 Lizenz

Dieses Projekt wurde für Bildungszwecke erstellt.

## 🤝 Beiträge

Contributions sind willkommen! Bitte erstelle einen Pull Request oder öffne ein Issue.

---

**Viel Erfolg bei der Auto-Diagnose! 🚗💨**

