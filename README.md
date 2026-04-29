# Gaetano Reale GmbH — Website

Eine moderne, Apple-inspirierte Single-Page-Website für die Gaetano Reale GmbH, ein Bauunternehmen und Immobilienentwickler aus Tübingen.

## Projektstruktur

```
gaetano-reale-website/
├── index.html      # HTML-Struktur
├── styles.css      # Eigene Styles + Responsive
├── script.js       # GSAP-Animationen, Lenis, Interaktionen
├── assets/
│   └── images/     # Lokale Bilder (austauschbar)
└── README.md       # Diese Datei
```

## Tech-Stack

- **HTML5** + semantische Struktur
- **Tailwind CSS** (via CDN) für Utility-Klassen
- **Eigenes CSS** (`styles.css`) für komplexe Animationen, Hover-Effekte, Responsive-Fixes
- **Vanilla JavaScript** (`script.js`)
- **GSAP + ScrollTrigger** für smooth Animationen
- **Lenis** für butter-weiches Scrolling
- **Fonts**: Fraunces (Display) + Inter Tight (Body) via Google Fonts

## Lokal starten

Einfach `index.html` im Browser öffnen. Es ist kein Build-Step erforderlich — alle externen Bibliotheken werden via CDN geladen.

Für lokale Entwicklung mit Live-Reload:

```bash
# Mit Python
python3 -m http.server 8000

# Oder mit Node
npx serve
```

Dann `http://localhost:8000` aufrufen.

## Deployment

Die Website ist statisch und kann auf jedem Hosting-Anbieter deployed werden:

- **Vercel**: Drag & Drop des Ordners auf [vercel.com](https://vercel.com)
- **Netlify**: Ordner auf [app.netlify.com/drop](https://app.netlify.com/drop) ziehen
- **GitHub Pages**: Repo mit `index.html` im Root erstellen, Pages aktivieren
- **FTP**: Alle Dateien auf den Webserver hochladen

## Vor dem Live-Gang anpassen

1. **Kontaktdaten** in `index.html`: Telefonnummer, E-Mail, Adresse (Platzhalter ersetzen)
2. **Projektbilder**: Unsplash-URLs durch echte Projektfotos ersetzen (in `assets/images/` ablegen)
3. **Impressum & Datenschutz**: Eigene Seiten erstellen und im Footer verlinken
4. **Kontaktformular**: An Backend anbinden (z.B. Formspree, eigenen Endpoint)
5. **Google Maps**: OpenStreetMap-iframe optional durch echtes Maps-Embed ersetzen

## Browser-Kompatibilität

Modernste Browser (Chrome, Safari, Firefox, Edge ab den letzten zwei Major-Versionen). Smooth Scroll und Backdrop-Filter erfordern aktuelle Versionen.

## Lizenz

© Gaetano Reale GmbH, Tübingen. Alle Rechte vorbehalten.
