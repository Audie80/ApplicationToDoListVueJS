# TodoList Application

Application Vue 3 moderne et typée pour gérer vos tâches quotidiennes. Avec stockage localStorage pour la persistance des données.

## ✨ Caractéristiques

- ✅ Créer, compléter et supprimer des tâches
- ✅ Ajouter des sous-tâches
- ✅ Persistance des données avec localStorage
- ✅ Interface responsive avec Bootstrap 4
- ✅ **TypeScript** pour la sécurité du typage
- ✅ Composition API moderne
- ✅ Vite pour le développement rapide
- ✅ ESLint flat config pour le linting

## 🛠️ Stack Technique

- **Vue 3.4.21** - Framework JavaScript progressif
- **TypeScript 5.4** - Langage typé pour JavaScript
- **Vite 5.2.11** - Bundler ultra-rapide
- **Composition API** - API moderne pour les composants
- **Bootstrap 4** - Framework CSS
- **ESLint 10** - Linting du code (flat config)
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
Lance le serveur de développement sur http://localhost:5173 avec hot module replacement et rechargement automatique.

### Vérification des types
```bash
npm run type-check
```
Vérifie tous les fichiers TypeScript sans émettre de fichiers.

### Build de production
```bash
npm run build
```
Vérifie les types et génère les fichiers optimisés dans le dossier `dist/`.

### Preview
```bash
npm run preview
```
Prévisualise la version de production en local.

### Linting et correction
```bash
npm run lint
```
Vérifie et corrige le code selon les règles ESLint.

### Tests end-to-end
```bash
npm run e2e
```
Ouvre l'interface interactive Cypress pour exécuter les tests E2E.

```bash
npm run e2e:run
```
Exécute les tests E2E en mode headless (idéal pour CI/CD).

## 🧪 Tests E2E (Cypress)

Les tests end-to-end couvrent toutes les fonctionnalités principales :

### Tests disponibles

1. **add-tasks.cy.ts** - Ajout de tâches
   - Affichage de l'application
   - Ajout d'une nouvelle tâche
   - Validation du bouton (désactivé si vide)
   - Ajout de multiples tâches
   - Nettoyage de l'input après ajout

2. **complete-delete-tasks.cy.ts** - Complétion et suppression
   - Marquer une tâche comme terminée
   - Masquer les tâches complétées
   - Afficher les tâches complétées
   - Supprimer une tâche
   - Annuler la suppression

3. **subtasks.cy.ts** - Sous-tâches
   - Ajouter une sous-tâche
   - Éditer le nom de la sous-tâche
   - Marquer une sous-tâche comme complétée

4. **persistence.cy.ts** - Persistance localStorage
   - Sauvegarder les tâches dans localStorage
   - Charger les tâches après rechargement
   - Persister l'état de complétion
   - Persister plusieurs changements d'état
   - Vérifier le nettoyage du localStorage

## 📁 Structure du Projet

```
.
├── index.html                  # Fichier HTML principal (point d'entrée Vite)
├── vite.config.ts              # Configuration Vite (TypeScript)
├── cypress.config.ts           # Configuration Cypress E2E
├── tsconfig.json               # Configuration TypeScript
├── tsconfig.node.json          # Configuration TypeScript pour config files
├── eslint.config.js            # Configuration ESLint (flat config)
├── package.json                # Dépendances et scripts
├── src/
│   ├── main.ts                 # Point d'entrée Vue (TypeScript)
│   ├── vite-env.d.ts           # Types globaux Vite
│   ├── App.vue                 # Composant racine
│   └── components/
│       ├── TableauTaches.vue   # Composant pour ajouter et lister les tâches
│       └── FinishTaches.vue    # Composant pour afficher les tâches terminées
├── cypress/
│   ├── support/
│   │   └── e2e.ts              # Configuration support Cypress
│   └── e2e/
│       ├── add-tasks.cy.ts             # Tests d'ajout de tâches
│       ├── complete-delete-tasks.cy.ts # Tests de complétion/suppression
│       ├── subtasks.cy.ts              # Tests des sous-tâches
│       └── persistence.cy.ts           # Tests de persistance localStorage
└── public/
    └── favicon.ico             # Favicon
```
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

## 🔄 Migrations et Améliorations Récentes

- ✅ **Migration Vue 2 → Vue 3** - Framework modernisé
- ✅ **Migration Webpack → Vite** - Démarrage et build beaucoup plus rapides
- ✅ **Migration Options API → Composition API** - Code plus réutilisable et lisible
- ✅ **Ajout de TypeScript** - Sécurité du typage et meilleure DX
- ✅ **Configuration ESLint moderne** - Flat config (v9+)
- ✅ **Dépendances à jour** - Compatibilité Node 24
- ✅ **Suppression de Babel** - Plus simple, plus rapide avec Vite

## 📄 Licence

[À remplir selon votre souhait]
