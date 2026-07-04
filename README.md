# TodoList Application

Application Vue 3 moderne pour gérer vos tâches quotidiennes. Avec stockage localStorage pour la persistance des données.

## ✨ Caractéristiques

- ✅ Créer, compléter et supprimer des tâches
- ✅ Ajouter des sous-tâches
- ✅ Persistance des données avec localStorage
- ✅ Interface responsive avec Bootstrap 4
- ✅ Composition API moderne
- ✅ Vite pour le développement rapide

## 🛠️ Stack Technique

- **Vue 3.4.21** - Framework JavaScript progressif
- **Vite 5.2.11** - Bundler ultra-rapide
- **Composition API** - API moderne pour les composants
- **Bootstrap 4** - Framework CSS
- **ESLint 10** - Linting du code
- **Node.js >= 18** - Runtime

## 📋 Prérequis

- Node.js >= 18.0.0
- npm ou yarn

## 🚀 Installation

```bash
# Cloner le repository
git clone <repository-url>
cd ApplicationToDoListVueJS

# Installer les dépendances
npm install
```

## 🏃 Commandes

### Développement
```bash
npm run dev
```
Lance le serveur de développement sur http://localhost:5173 avec hot module replacement.

### Build de production
```bash
npm run build
```
Génère les fichiers optimisés dans le dossier `dist/`.

### Preview
```bash
npm run preview
```
Prévisualise la version de production en local.

### Linting
```bash
npm run lint
```
Vérifie et corrige le code selon les règles ESLint.

## 📁 Structure du Projet

```
.
├── index.html              # Fichier HTML principal (point d'entrée Vite)
├── vite.config.js          # Configuration Vite
├── package.json            # Dépendances et scripts
├── src/
│   ├── main.js            # Point d'entrée Vue
│   ├── App.vue            # Composant racine
│   └── components/
│       ├── TableauTaches.vue    # Composant pour ajouter et lister les tâches
│       └── FinishTaches.vue     # Composant pour afficher les tâches terminées
└── public/
    └── favicon.ico        # Favicon
```

## 🎯 Utilisation

1. **Ajouter une tâche** - Entrez le nom de la tâche et appuyez sur Soumettre
2. **Marquer comme fait** - Cochez la case "Fait" pour compléter une tâche
3. **Ajouter une sous-tâche** - Cliquez sur "Ajouter une sous-tache"
4. **Supprimer** - Cliquez sur le bouton "Supprimer"

Les tâches sont automatiquement sauvegardées dans le localStorage de votre navigateur.

## 📝 Notes

- Les données sont stockées dans le localStorage du navigateur
- Supprimer l'historique du navigateur supprimera les tâches
- Pour exporter les données, vous pouvez copier le contenu du localStorage

## 🔄 Migrations Récentes

- ✅ Migration Vue 2 → Vue 3
- ✅ Migration Webpack (Vue CLI) → Vite
- ✅ Migration Options API → Composition API
- ✅ Mise à jour des dépendances (compatibilité Node 24)
- ✅ Dépendances modernes (ESLint 10, core-js 3.49.0)
