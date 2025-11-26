# CarCheck

# 🚗 SymptoCar – Auto-Symptom-Diagnose-App

SymptoCar ist eine Web-Anwendung, mit der Nutzer Autosymptome eingeben können, um mögliche Ursachen angezeigt zu bekommen.
Die App unterstützt CRUD-Funktionalität, Supabase-Integration, React Hooks, Testing und ein modernes UI.

## 📌 Features & Funktionen

### 🔍 Diagnosesystem

Nutzer geben ein Symptom ein (z. B. „Auto zieht nach links“)

Die App zeigt passende Ursachen aus der Datenbank

### 📝 CRUD-Funktionalität

Symptome erstellen

Symptome anzeigen

Symptome bearbeiten

Symptome löschen

### 🔐 Supabase-Integration

Login / Registrierung via Supabase Auth

Speicherung von Symptomen und Ursachen

Optional: Upload von Bildern über Storage

### ⚛️ Modernes Frontend

Next.js

React Hooks (useState, useEffect, Custom Hooks optional)

Dynamische UI-Komponenten

### 🧪 Testing

Zwei Testfälle mit Jest + React Testing Library

Positive und negative Szenarien

Given-When-Then-Struktur

## 🛠️ Installation & Startanleitung
### 📥 Projekt klonen
```
git clone https://github.com/RiartC/CarCheck.git
cd <repo>
```

### 📦 Abhängigkeiten installieren
```
npm install
```

### ⚙️ Supabase konfigurieren

Erstelle eine .env.local Datei im Projektroot:
```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### ▶️ Entwicklungsserver starten
```
npm run dev
```

Die App läuft unter:
```
http://localhost:3000
```

### 🧪 Tests ausführen
```
npm run test
```

## 📁 Projektstruktur

```
src/
├─ components/
│  ├─ SymptomForm.jsx
│  ├─ SymptomList.jsx
│  ├─ DiagnosisResult.jsx
│
├─ lib/
│  ├─ supabaseClient.js
│
├─ pages/
│  ├─ index.jsx
│  ├─ login.jsx
│
├─ tests/
│  ├─ SymptomForm.test.js
│  ├─ DiagnosisResult.test.js
│
├─ styles/
│  ├─ globals.css
│
└─ public/
   ├─ icons/
   └─ weitere Dateien
```



## 🧩 Testfälle (Given-When-Then)
### ✅ Positiver Test

Given: Nutzer gibt „Auto zieht nach links“ ein
When: Er klickt auf „Diagnose anzeigen“
Then: Die App zeigt Ursachen wie „Spureinstellung falsch“ an

### ❌ Negativer Test

Given: Das Eingabefeld ist leer
When: Nutzer klickt auf „Diagnose anzeigen“
Then: Die App zeigt die Fehlermeldung „Bitte ein Symptom eingeben.“ an

## 🖥️ Technologie-Stack
Frontend

Next.js

React

Tailwind CSS oder Shadcn/UI (optional)

Backend / SaaS

Supabase (Datenbank, Auth, Storage)

Optional: UploadThing / Wasabi

Testing

Jest

React Testing Library

Deployment

Vercel

## 🚀 Deployment

Die App wird über Vercel deployed.
Nach dem Deployment erhältst du eine öffentlich erreichbare URL, z. B.:

https://symptocar.vercel.app

## 👥 Team / Autor:innen
### Riart Çekaj
### Fabian Ott

# 📘 1.5 Rahmenbedingungen
### 1.5.1 Allgemeine Anforderungen

Iteratives Projekt mit Zwischenabgaben

Öffentliche Versionierung im GitHub-Repository

### 1.5.2 Funktionale Anforderungen

CRUD-Funktionalität

State-Management mit React Hooks

Integration mindestens eines SaaS-Services (Supabase etc.)

Mindestens zwei Tests mit Jest + RTL

### 1.5.3 Technische Anforderungen

Framework: Next.js oder React mit Vite

Styling optional mit Tailwind/Shadcn/UI

Deployment über Vercel

GitHub mit Branch-Nutzung und sauberer Commit-Historie

README mit klar definierten Abschnitten

### 1.5.4 Testfälle

Struktur: Given – When – Then

Positive & negative Szenarien

## 📈 Erweiterungsmöglichkeiten

KI-gestützte Diagnose (OpenAI, Modelle, Matching-Algorithmen)

Diagnose-Historie je Nutzer

Kategorien wie Motor, Elektronik, Fahrwerk

Upload von Fotos zur problemorientierten Analyse

Mobile-optimierte UI mit Shadcn oder Tailwind-Komponenten
