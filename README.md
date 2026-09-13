# The Hive — Site collectif freelance

Site vitrine bilingue (FR/EN) pour présenter les services du collectif **The Hive** à tes prospects et clients. Toujours en HTML/CSS/JS pur, sans dépendances — aucun `npm install`, aucun build.

---

## 1. Ce qui a changé dans cette mise à jour

- Repositionnement : **The Hive**, un collectif de freelances, plutôt que ton nom perso
- Design : sections alternées sombre/clair, une couleur par département (au lieu du tout bleu/cyan)
- 6 départements présentés : Audit marketing, Paid Media, SEO, Sites & applications, Production photo/vidéo/3D, Copywriting & automatisation — + une phrase ouverte pour les besoins hors-case
- Nouvelle section "Comment ça marche" (3 étapes)
- Bug corrigé : le clic sur le logo remonte maintenant bien en haut de la page
- WhatsApp : ton vrai numéro est en place
- Formulaire de contact : envoie maintenant un email directement (voir étape 2 ci-dessous — **obligatoire** pour que ça marche)

---

## 2. Obligatoire avant de mettre en ligne : activer l'envoi du formulaire

Le formulaire de contact utilise **Web3Forms** (gratuit, sans mot de passe) pour t'envoyer un email directement quand quelqu'un le remplit — sans ouvrir sa propre boîte mail.

1. Va sur **[web3forms.com](https://web3forms.com)**
2. Entre l'adresse qui doit recevoir les messages : `aminechbihi6@gmail.com`
3. Va valider le mail de confirmation que tu reçois
4. Tu obtiens une **Access Key** (une longue chaîne de caractères) — copie-la
5. Ouvre `assets/js/main.js`, tout en haut du fichier, et remplace :

   ```js
   var WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";
   ```

   par ta vraie clé, par exemple :

   ```js
   var WEB3FORMS_ACCESS_KEY = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
   ```

Tant que cette ligne n'est pas remplacée, le formulaire affichera un message d'erreur propre au lieu de planter — mais personne ne pourra t'écrire via le site. Pense à le faire avant de partager le lien.

*(Si tu préfères, envoie-moi directement la clé une fois obtenue et je te renvoie le fichier déjà à jour.)*

---

## 3. Mettre à jour ton site déjà en ligne

Ton repo GitHub (`FREELANCE`) et ton projet Vercel existent déjà. Il suffit de remplacer les fichiers modifiés :

1. Dézippe ce fichier.
2. Dans le dossier de ton repo local (`...\freelance-site\FREELANCE`), remplace ces 3 fichiers par les nouveaux : `index.html`, `assets/css/style.css`, `assets/js/main.js` (tu peux tout copier-coller par-dessus, `README.md` et `vercel.json` inclus).
3. Ouvre **GitHub Desktop** → tu verras les fichiers modifiés apparaître dans "Changes".
4. Écris un résumé (ex : "Rebranding The Hive + formulaire") → **Commit to main**.
5. Clique **Push origin**.

Vercel redéploie automatiquement en quelques secondes. Va vérifier ton URL `.vercel.app` une fois le déploiement terminé (onglet **Deployments** sur Vercel si tu veux suivre l'avancement).

---

## 4. Structure du projet

```
index.html              → structure et texte par défaut (FR)
assets/css/style.css    → tout le style (thème + couleurs par département)
assets/js/main.js       → dictionnaire FR/EN, switch de langue, menu mobile, envoi du formulaire
```

### Modifier un texte

- Le texte par défaut (FR) est dans `index.html`.
- **Important** : le switch de langue FR/EN réécrit le texte des éléments `data-i18n="..."` à partir du dictionnaire en haut de `assets/js/main.js` (objet `content = { fr: {...}, en: {...} }`). Toujours modifier les **deux** (HTML + dictionnaire JS) pour qu'un texte survive au changement de langue.

### Modifier les couleurs

En haut de `assets/css/style.css` :

```css
:root {
  --bg: #0a0e1a;          /* fond des sections sombres */
  --bg-light: #f6f5fb;    /* fond des sections claires */
  --blue: #3b82f6;
  --cyan: #22d3ee;

  --dep-audit: #6d5bf7;   /* couleur du département Audit */
  --dep-paid: #f5a623;    /* Paid Media */
  --dep-seo: #16b981;     /* SEO */
  --dep-web: #2f8cf4;     /* Sites & applications */
  --dep-prod: #ec4899;    /* Production photo/vidéo/3D */
  --dep-copy: #f4436c;    /* Copywriting & automatisation */
}
```

### Ajouter un département

Dans `index.html`, duplique un bloc `<article class="dept-card" style="--dep: var(--dep-xxx)">...</article>` dans la section `#teams`, donne-lui une nouvelle couleur (`--dep-xxx` à définir dans le CSS) et un nouvel index `teams.items.N.title` / `teams.items.N.desc` — puis ajoute l'entrée correspondante dans le tableau `teams.items` du dictionnaire FR **et** EN dans `main.js`.

---

## 5. Domaine personnalisé (optionnel)

Si tu veux un domaine à toi plutôt que l'URL `.vercel.app` :

1. Achète le domaine où tu veux (Hostinger, Namecheap, etc.)
2. Dans Vercel : ton projet → **Settings → Domains** → ajoute ton domaine
3. Ajoute les enregistrements DNS indiqués par Vercel chez ton registrar
4. La propagation prend de quelques minutes à quelques heures
