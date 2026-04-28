# SportEdge — Application mobile
Projet étudiant · Prototype HTML exporté depuis Visily

## Structure du projet

```
sportedge-app/
├── index.html                  ← Point d'entrée (onboarding)
├── styles.css                  ← Feuille de style unifiée
├── assets/                     ← Images, icônes, polices
│
├── — ONBOARDING —
├── onboarding.html
├── onboarding-1.html → onboarding-6.html
├── onboarding-low.html
├── onboarding-low-at-home.html
│
├── — HOME (INDOOR) —
├── home-low.html
├── home-medium.html
├── home-high.html
│
├── — HOME (OUTDOOR) —
├── home-low-outdoor.html
├── home-medium-outdoor.html
├── home-high-outdoor.html
│
├── — SÉANCES —
├── session-low.html
├── session-medium.html
├── session-high.html
├── session-low-outdoor.html
├── session-medium-outdoor.html
├── session-high-outdoor.html
│
├── — POST-SÉANCE —
├── celebration.html
├── celebration-1.html
├── comeback.html
│
├── — NAVIGATION PRINCIPALE —
├── activities.html
├── progress.html
├── profile.html
├── bolt.html
│
├── — BIBLIOTHÈQUES D'ACTIVITÉS —
├── library-stretching.html
├── library-hiit.html
├── library-yoga.html
├── library-outdoor-runs.html
├── library-strength.html
├── library-meditation.html
│
├── — OVERLAYS PROFIL —
├── notifications.html / notifications-daily.html / notifications-weekly.html / notifications-off.html
├── energy.html / energy-low.html / energy-mid.html / energy-high.html
├── about.html
│
└── — VARIANTES OUTDOOR (od-) —
    Mêmes écrans avec préfixe od- pour le parcours extérieur
```

## Déploiement
1. Déposer ce dossier sur GitHub
2. Connecter à Vercel → Deploy
3. URL publique générée automatiquement

## Point d'entrée
Le fichier `onboarding.html` est le point d'entrée principal de l'application.
