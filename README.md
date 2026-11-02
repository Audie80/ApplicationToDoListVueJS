# TodoList Application

Application Vue 3 moderne en JavaScript pour gérer vos tâches quotidiennes. Avec stockage localStorage pour la persistance des données.

## ✨ Caractéristiques

- ✅ Créer, compléter et supprimer des tâches
- ✅ Ajouter des sous-tâches
- ✅ Persistance des données avec localStorage
- ✅ Interface responsive avec Bootstrap 4
- ✅ **JavaScript** avec l'API Composition de Vue
- ✅ Composition API moderne
- ✅ Vite pour le développement rapide
- ✅ ESLint flat config pour le linting

## 🛠️ Stack Technique

- **Vue 3.4.21** - Framework JavaScript progressif
- **JavaScript (ES modules)** - Langage de l'application et des tests
- **Vite** - Bundler ultra-rapide
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

### Linting et correction
```bash
npm run lint
```
Vérifie et corrige le code selon les règles ESLint.

### Tests end-to-end
```bash
npx cypress open
```
Ouvre l'interface interactive Cypress pour exécuter les tests E2E.

```bash
npm run e2e:run
```
Exécute les tests E2E en mode headless (idéal pour CI/CD).

## 🧪 Tests E2E (Cypress)

Les tests end-to-end couvrent toutes les fonctionnalités principales :

### Tests disponibles

1. **add-tasks.cy.js** - Ajout de tâches
   - Affichage de l'application
   - Ajout d'une nouvelle tâche
   - Validation du bouton (désactivé si vide)
   - Ajout de multiples tâches
   - Nettoyage de l'input après ajout

2. **complete-delete-tasks.cy.js** - Complétion et suppression
   - Marquer une tâche comme terminée
   - Masquer les tâches complétées
   - Afficher les tâches complétées
   - Supprimer une tâche
   - Annuler la suppression

3. **subtasks.cy.js** - Sous-tâches
   - Ajouter une sous-tâche
   - Éditer le nom de la sous-tâche
   - Marquer une sous-tâche comme complétée

4. **persistence.cy.js** - Persistance localStorage
   - Sauvegarder les tâches dans localStorage
   - Charger les tâches après rechargement
   - Persister l'état de complétion
   - Persister plusieurs changements d'état
   - Vérifier le nettoyage du localStorage

## 📁 Structure du Projet

```
.
├── index.html                  # Fichier HTML principal (point d'entrée Vite)
├── vite.config.js              # Configuration Vite
├── cypress.config.js           # Configuration Cypress E2E
├── eslint.config.js            # Configuration ESLint (flat config)
├── package.json                # Dépendances et scripts
├── src/
│   ├── main.js                 # Point d'entrée Vue
│   ├── App.vue                 # Composant racine
│   └── components/
│       ├── TableauTaches.vue   # Composant pour ajouter et lister les tâches
│       └── FinishTaches.vue    # Composant pour afficher les tâches terminées
├── cypress/
│   ├── support/
│   │   └── e2e.js              # Configuration support Cypress
│   └── e2e/
│       ├── add-tasks.cy.js             # Tests d'ajout de tâches
│       ├── complete-delete-tasks.cy.js # Tests de complétion/suppression
│       ├── subtasks.cy.js              # Tests des sous-tâches
│       └── persistence.cy.js           # Tests de persistance localStorage
└── public/
    └── favicon.ico             # Favicon
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
- ✅ **Migration complète vers JavaScript** - Application, configuration et tests
- ✅ **Configuration ESLint moderne** - Flat config (v9+)
- ✅ **Dépendances à jour** - Compatibilité Node 24
- ✅ **Suppression de Babel** - Plus simple, plus rapide avec Vite

## 📄 Licence

[À remplir selon votre souhait]
