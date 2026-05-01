# 🚀 Setup-Anleitung — Gaetano Reale Immobilien

Mit dieser Anleitung wird deine Website live — alle Änderungen sind sofort
für jeden sichtbar. Dauert ca. 15 Minuten.

---

## Schritt 1 — Supabase (Datenbank)

### 1.1 Account erstellen
→ https://supabase.com → „Start your project" → kostenlos registrieren

### 1.2 Neues Projekt anlegen
- Name: `gaetano-reale`
- Datenbank-Passwort: sicheres Passwort wählen und notieren
- Region: `Central EU (Frankfurt)` wählen
- → „Create new project" klicken
- Warten bis das Projekt bereit ist (~1 Minute)

### 1.3 Datenbank einrichten
1. Im Supabase-Dashboard links auf **SQL Editor** klicken
2. Den gesamten Inhalt der Datei `supabase-setup.sql` kopieren
3. In den Editor einfügen → **Run** klicken
4. „Success" erscheint → fertig ✓

### 1.4 API-Zugangsdaten kopieren
1. Links auf **Settings** → **API** klicken
2. Folgendes notieren:
   - **Project URL** → z.B. `https://abcdefgh.supabase.co`
   - **anon / public** Key → langer Text unter „Project API keys"

---

## Schritt 2 — index.html anpassen

Öffne `index.html` in einem Text-Editor (z.B. VS Code oder Notepad).

Suche diese zwei Zeilen (ganz oben im JavaScript-Bereich):

```javascript
const SUPABASE_URL = 'DEINE_SUPABASE_URL';
const SUPABASE_KEY = 'DEIN_SUPABASE_ANON_KEY';
```

Ersetze sie mit deinen echten Werten:

```javascript
const SUPABASE_URL = 'https://abcdefgh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

Datei speichern.

---

## Schritt 3 — Netlify (Hosting)

### 3.1 Account erstellen
→ https://netlify.com → „Sign up" → kostenlos mit GitHub registrieren

### 3.2 Website hochladen
**Option A — Drag & Drop (einfachster Weg):**
1. Netlify Dashboard öffnen
2. Den Ordner `gaetano-reale-github` auf das Drop-Feld ziehen
3. Netlify gibt dir eine URL wie `https://random-name.netlify.app`
4. Fertig — die Website ist live ✓

**Option B — GitHub (empfohlen für Updates):**
1. GitHub-Account erstellen (github.com)
2. Neues Repository anlegen
3. Alle Dateien hochladen
4. In Netlify: „New site from Git" → GitHub verbinden → Repository wählen
5. Build-Einstellungen leer lassen → Deploy

---

## Schritt 4 — Eigene Domain verknüpfen

### Domain kaufen (falls noch nicht vorhanden)
Empfehlung: https://namecheap.com oder https://united-domains.de
Empfohlener Name: `reale-immobilien.de` oder `gaetano-reale.de`

### Domain mit Netlify verbinden
1. Netlify Dashboard → deine Website → **Domain settings**
2. → „Add custom domain" → Domain eingeben → bestätigen
3. Bei deinem Domain-Anbieter:
   - **CNAME Record:** `www` → `deineseite.netlify.app`
   - **A Record:** `@` → `75.2.60.5`
4. Warten (10–60 Minuten bis DNS aktiv ist)
5. Netlify aktiviert HTTPS (SSL) automatisch ✓

---

## Schritt 5 — Kontaktformular (echte E-Mails)

### Formspree einrichten
1. → https://formspree.io → kostenlosen Account erstellen
2. „New Form" → Name: `Kontakt Gaetano Reale`
3. Die **Form ID** kopieren (z.B. `xpwzgkqb`)
4. Im Admin-Panel → Einstellungen → E-Mail → Formspree ID eintragen → speichern
5. Jetzt landen alle Kontaktanfragen per E-Mail ✓

---

## Zusammenfassung der Kosten

| Service | Kosten |
|---------|--------|
| Supabase | Kostenlos (bis 500 MB, 2 GB Transfer) |
| Netlify | Kostenlos (bis 100 GB Transfer) |
| Formspree | Kostenlos (bis 50 Mails/Monat) |
| Domain (.de) | ~10–15 € / Jahr |
| **Gesamt** | **~10–15 € / Jahr** |

---

## Admin-Zugang

Nach dem Live-Gang:
- Personen-Icon oben rechts auf der Website
- **Benutzername:** `Gaetano Reale`
- **Passwort:** `170709` (im Admin-Panel ändern!)

Alle Änderungen sind sofort für **alle Besucher** sichtbar.

---

*Bei Fragen: Diese Anleitung wurde für Gaetano Reale Immobilien erstellt.*
