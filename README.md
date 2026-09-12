# Site freelance — Amine Chbihi

Site vitrine bilingue (FR/EN) pour présenter tes services freelance (Paid Media, SEO, développement web/app, vidéo/photo, stratégie marketing) à tes prospects et clients.

**Aucune installation ni build nécessaire** : c'est du HTML/CSS/JS pur, sans dépendances (`npm install`). Tu peux l'ouvrir directement en local en double-cliquant sur `index.html`, ou le déployer tel quel sur GitHub + Vercel.

---

## 1. Avant de publier — à personnaliser

Deux choses à vérifier avant d'envoyer le lien à qui que ce soit :

1. **WhatsApp** — dans `index.html`, cherche `wa.me/212600000000` (section Contact) et remplace par ton vrai numéro au format international, sans `+` ni espaces (ex : `2126XXXXXXXX`). Si tu ne veux pas de bouton WhatsApp, supprime tout le bloc `<a class="contact-link" href="https://wa.me/...">...</a>` juste au-dessus.
2. **Email** — le site utilise déjà `aminechbihi6@gmail.com` (bouton mail + formulaire de contact). Change-le dans `index.html` (section Contact) et dans `assets/js/main.js` (variable `mailto`) si tu veux utiliser une autre adresse.

Le formulaire de contact n'a pas de backend : il ouvre simplement le client mail de la personne avec le message pré-rempli. Si tu veux plus tard un vrai formulaire qui t'envoie un email sans ouvrir Outlook/Gmail côté visiteur, on pourra brancher un service gratuit comme Formspree — dis-le-moi quand tu veux passer à cette étape.

---

## 2. Mettre le projet sur GitHub

Comme pour tes autres appweb, la méthode la plus fiable est **GitHub Desktop** :

1. Dézippe ce projet dans un dossier sur ton ordinateur.
2. Ouvre GitHub Desktop → **File → New Repository** → choisis ce dossier comme "Local Path".
3. Nomme le repo (ex : `amine-freelance-site`), clique **Create Repository**.
4. En bas à gauche, écris un message de commit (ex : "Premier commit — site freelance") → **Commit to main**.
5. Clique **Publish repository** en haut. Tu peux le laisser en privé ou le passer en public, comme tu préfères — ça ne change rien pour Vercel.

---

## 3. Déployer sur Vercel

1. Va sur [vercel.com](https://vercel.com) et connecte-toi avec ton compte GitHub (celui déjà utilisé pour l'app Vietnam / le tournoi beach volley).
2. Clique **Add New → Project**.
3. Sélectionne le repo que tu viens de publier (`amine-freelance-site`).
4. Vercel va détecter un site statique automatiquement (**Framework Preset : Other**) — ne touche à rien, il n'y a **aucune variable d'environnement ni commande de build à configurer**.
5. Clique **Deploy**. En moins d'une minute, ton site est en ligne sur une URL du type `amine-freelance-site.vercel.app`.

Chaque fois que tu modifies un fichier et que tu fais un nouveau commit + push depuis GitHub Desktop, Vercel redéploie automatiquement la nouvelle version.

---

## 4. Domaine personnalisé (optionnel)

Si tu veux un domaine à toi (ex : `aminechbihi.com`) plutôt que l'URL `.vercel.app` :

1. Achète le domaine où tu veux (Hostinger, Namecheap, etc. — pas besoin que ce soit chez Vercel).
2. Dans Vercel : ton projet → **Settings → Domains** → ajoute ton domaine.
3. Vercel t'indique les enregistrements DNS à ajouter (en général un `CNAME` ou un `A record`). Va les ajouter dans la zone DNS de ton registrar (chez Hostinger : **Domaines → gérer → DNS/Zone Editor**).
4. La propagation prend de quelques minutes à quelques heures.

---

## 5. Structure du projet

```
index.html              → toute la structure et le texte par défaut (FR)
assets/css/style.css    → tout le style (thème sombre, dégradé bleu/cyan)
assets/js/main.js       → interactivité : switch FR/EN, menu mobile, formulaire de contact
```

### Modifier un texte

- Pour un texte visible par défaut en français : modifie directement le texte dans `index.html`.
- **Important** : le switch de langue FR/EN réécrit le texte des éléments qui ont un attribut `data-i18n="..."` à partir du dictionnaire situé en haut de `assets/js/main.js` (objet `content = { fr: {...}, en: {...} }`). Si tu changes un texte dans `index.html` sans le changer aussi dans `main.js`, il reviendra à l'ancienne version dès que quelqu'un clique sur EN puis FR.
- Pour ajouter/modifier un service, une accroche, etc. : édite les deux à la fois (le HTML pour le rendu initial, le dictionnaire JS pour que ça survive au changement de langue).

### Modifier les couleurs

Tout est piloté par les variables en haut de `assets/css/style.css` :

```css
:root {
  --bg: #0a0e1a;      /* fond principal */
  --blue: #3b82f6;    /* bleu électrique */
  --cyan: #22d3ee;    /* cyan */
}
```

---

## Pourquoi un site statique plutôt qu'un projet Next.js cette fois

Contrairement à l'appweb Vietnam ou RESTOWEB, ce site n'a **aucune dépendance à installer** (pas de `npm install`, pas de build). C'est un choix délibéré pour un site vitrine simple : ça déploie plus vite sur Vercel, ça ne peut pas casser à cause d'une dépendance, et ça reste tout aussi facile à héberger sur GitHub + Vercel. Si un jour tu veux ajouter un vrai backend (formulaire qui sauvegarde en base, blog, espace client, etc.), on migrera vers Next.js à ce moment-là — la même stack que sur tes autres projets.
