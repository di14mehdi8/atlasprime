# Atlas PRIME — site vitrine statique

Site web statique, bilingue (FR / EN), pour **Atlas PRIME**, groupe de conseil et d'investissement.
Aucune étape de build : déployable tel quel sur Netlify, Vercel ou GitHub Pages.

## Structure

```
atlasadvisory/
├── index.html              # Page unique, navigation ancrée
├── favicon.png             # Favicon (monogramme A)
├── apple-touch-icon.png    # Icône iOS
└── assets/
    ├── css/styles.css      # Système de marque, type fluide, motif zellige
    ├── js/main.js          # Bascule FR/EN, menu mobile, scrollspy, reveal
    └── img/
        ├── logo.png        # Monogramme
        └── logo-text.png   # Logo + texte (header, footer, partage social)
```

## Langues

- Langue par défaut : **français**. Bascule FR / EN dans l'en-tête.
- Le choix est mémorisé (localStorage) et l'attribut `lang` est mis à jour.
- Toutes les chaînes traduites sont dans `assets/js/main.js` (objet `I18N`).

## Marque

| Rôle | Couleur |
|------|---------|
| Navy | `#0E2438` / `#122A3F` |
| Or-bronze (accent) | `#C2A15A` / `#B0894F` |
| Ivoire (fond) | `#FAF8F4` |

Typographies : **Cormorant Garamond** (titres) + **Inter** (texte), via Google Fonts.

## Déploiement

Aucune configuration requise. Glissez-déposez le dossier sur Netlify/Vercel,
ou activez GitHub Pages sur la branche concernée. Pour un test local :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## À personnaliser

- `contact@atlasprime.ma` et « Casablanca, Maroc » dans `index.html`.
- Le formulaire de contact utilise `mailto:` ; brancher un service
  (Formspree, Netlify Forms…) pour un envoi serveur si nécessaire.
- Remplacer le portrait placeholder du fondateur par une photo dans `assets/img/`.
