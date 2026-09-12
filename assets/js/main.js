(function () {
  "use strict";

  /* ==========================================================
     Bilingual content dictionary (FR / EN)
     Keys mirror the data-i18n / data-i18n-html paths in index.html
  ========================================================== */
  var content = {
    fr: {
      nav: {
        services: "Services",
        about: "Approche",
        contact: "Contact",
        cta: "Discutons"
      },
      hero: {
        eyebrow: "Consultant freelance — Marketing & Digital",
        title: 'Je transforme vos budgets média en croissance <span class="grad-text">mesurable</span>.',
        subtitle: "Paid Media, SEO, développement web & app, production vidéo/photo et stratégie marketing — un seul interlocuteur, une exécution data-driven, disponible en asynchrone selon votre fuseau.",
        cta_primary: "Réserver un appel",
        cta_secondary: "Voir les services",
        badge1: "Campagnes gérées sur le marché US",
        badge2: "Meta · Google · TikTok · Search",
        badge3: "Disponible en asynchrone, hors horaires agence",
        card1: "ROI & performance",
        card2: "Web & App",
        card3: "Vidéo & Photo"
      },
      platforms: {
        label: "Plateformes & outils au quotidien"
      },
      services: {
        eyebrow: "Ce que je fais",
        title: "Des services pensés pour la performance, de bout en bout",
        subtitle: "Un profil hybride — opérationnel, analytique, commercial — pour couvrir vos besoins sans multiplier les intervenants.",
        items: [
          {
            title: "Paid Media & Growth",
            desc: "Meta, Google, TikTok Ads : structuration de compte, ciblage, création, optimisation continue et reporting orienté résultats — pas juste des métriques.",
            tags: ["Media buying", "A/B testing", "Reporting & analytics"]
          },
          {
            title: "SEO",
            desc: "Audit technique, structure de contenu et optimisation on-page pour construire une visibilité organique durable, en complément du payant.",
            tags: ["Audit technique", "Stratégie de contenu", "Search Console"]
          },
          {
            title: "Développement web & applications",
            desc: "Sites vitrines, landing pages et appweb sur mesure — de la maquette au déploiement, pensés pour convertir vos visiteurs en clients.",
            tags: ["Sites & landing pages", "Appweb sur mesure", "GitHub & Vercel"]
          },
          {
            title: "Production vidéo & photo",
            desc: "Shooting et montage pensés pour vos campagnes : contenus courts pour les réseaux, visuels produits, captation d'évènements.",
            tags: ["Shooting produit", "Contenus réseaux sociaux", "Montage & retouche"]
          },
          {
            title: "Stratégie marketing & consulting",
            desc: "Diagnostic de votre présence digitale, priorisation des actions et accompagnement à l'exécution — un regard business autant qu'analytique.",
            tags: ["Audit & roadmap", "Pilotage multi-canal", "Accompagnement continu"]
          }
        ]
      },
      about: {
        eyebrow: "Pourquoi travailler avec moi",
        title: "Un profil hybride, entre exécution et vision business",
        subtitle: "Traffic Manager en agence et consultant freelance : je connais les deux côtés du métier, celui qui exécute et celui qui doit rendre des comptes sur le ROI.",
        panel1: "Traffic Management & Social Analytics",
        panel2: "Approche data-driven, orientée ROI",
        panel3: "Basé à Casablanca — clients internationaux",
        panel4: "Livraison asynchrone, quel que soit le fuseau",
        points: [
          { title: "Data-driven", desc: "Chaque décision média s'appuie sur la donnée, pas sur l'intuition." },
          { title: "Multi-plateforme", desc: "Meta, TikTok, Snapchat, Pinterest, Google Ads, YouTube, Display, Bing." },
          { title: "Un seul interlocuteur", desc: "Média, site, contenu et stratégie coordonnés par une seule personne." },
          { title: "Flexible & async", desc: "Disponible en dehors des horaires classiques, livraison asynchrone." }
        ]
      },
      contact: {
        eyebrow: "Prochaine étape",
        title: "Parlons de votre projet",
        subtitle: "Décrivez votre besoin en quelques mots — je reviens vers vous rapidement, en français ou en anglais.",
        whatsapp: "WhatsApp",
        form: {
          name: "Nom",
          email: "Email",
          project: "Type de projet",
          opt_ads: "Paid Media / Ads",
          opt_seo: "SEO",
          opt_web: "Site web / Appweb",
          opt_video: "Vidéo / Photo",
          opt_strategy: "Stratégie / Consulting",
          opt_other: "Autre",
          message: "Message",
          submit: "Envoyer",
          note: "Ouvre votre messagerie pré-remplie — rien n'est envoyé automatiquement depuis cette page."
        }
      },
      footer: {
        tagline: "Amine Chbihi — Freelance Growth & Digital Consultant",
        rights: "Tous droits réservés"
      }
    },

    en: {
      nav: {
        services: "Services",
        about: "Approach",
        contact: "Contact",
        cta: "Let's talk"
      },
      hero: {
        eyebrow: "Freelance Consultant — Marketing & Digital",
        title: 'I turn media budgets into <span class="grad-text">measurable</span> growth.',
        subtitle: "Paid Media, SEO, web & app development, video/photo production and marketing strategy — one point of contact, data-driven execution, available asynchronously across time zones.",
        cta_primary: "Book a call",
        cta_secondary: "See services",
        badge1: "Campaigns run for the US market",
        badge2: "Meta · Google · TikTok · Search",
        badge3: "Available asynchronously, outside agency hours",
        card1: "ROI & performance",
        card2: "Web & App",
        card3: "Video & Photo"
      },
      platforms: {
        label: "Platforms & tools I use daily"
      },
      services: {
        eyebrow: "What I do",
        title: "End-to-end services built for performance",
        subtitle: "A hybrid profile — operational, analytical, business-minded — to cover your needs without multiplying vendors.",
        items: [
          {
            title: "Paid Media & Growth",
            desc: "Meta, Google, TikTok Ads: account structuring, targeting, creative, continuous optimization and results-focused reporting — not just metrics.",
            tags: ["Media buying", "A/B testing", "Reporting & analytics"]
          },
          {
            title: "SEO",
            desc: "Technical audit, content structure and on-page optimization to build lasting organic visibility, alongside paid media.",
            tags: ["Technical audit", "Content strategy", "Search Console"]
          },
          {
            title: "Web & app development",
            desc: "Showcase sites, landing pages and custom web apps — from mockup to deployment, built to convert visitors into clients.",
            tags: ["Sites & landing pages", "Custom web apps", "GitHub & Vercel"]
          },
          {
            title: "Video & photo production",
            desc: "Shooting and editing designed for your campaigns: short-form social content, product visuals, event coverage.",
            tags: ["Product shoots", "Social content", "Editing & retouching"]
          },
          {
            title: "Marketing strategy & consulting",
            desc: "Diagnosis of your digital presence, prioritized action plan and hands-on execution support — a business lens as much as an analytical one.",
            tags: ["Audit & roadmap", "Multi-channel management", "Ongoing support"]
          }
        ]
      },
      about: {
        eyebrow: "Why work with me",
        title: "A hybrid profile, between execution and business vision",
        subtitle: "Agency Traffic Manager and freelance consultant: I know both sides of the job — the one that executes, and the one accountable for ROI.",
        panel1: "Traffic Management & Social Analytics",
        panel2: "Data-driven, ROI-focused approach",
        panel3: "Based in Casablanca — international clients",
        panel4: "Asynchronous delivery, any time zone",
        points: [
          { title: "Data-driven", desc: "Every media decision is backed by data, not intuition." },
          { title: "Multi-platform", desc: "Meta, TikTok, Snapchat, Pinterest, Google Ads, YouTube, Display, Bing." },
          { title: "One point of contact", desc: "Media, website, content and strategy coordinated by one person." },
          { title: "Flexible & async", desc: "Available outside standard hours, asynchronous delivery." }
        ]
      },
      contact: {
        eyebrow: "Next step",
        title: "Let's talk about your project",
        subtitle: "Describe what you need in a few words — I'll get back to you quickly, in French or English.",
        whatsapp: "WhatsApp",
        form: {
          name: "Name",
          email: "Email",
          project: "Project type",
          opt_ads: "Paid Media / Ads",
          opt_seo: "SEO",
          opt_web: "Website / Web app",
          opt_video: "Video / Photo",
          opt_strategy: "Strategy / Consulting",
          opt_other: "Other",
          message: "Message",
          submit: "Send",
          note: "Opens your email client, pre-filled — nothing is sent automatically from this page."
        }
      },
      footer: {
        tagline: "Amine Chbihi — Freelance Growth & Digital Consultant",
        rights: "All rights reserved"
      }
    }
  };

  /* ==========================================================
     Helpers
  ========================================================== */
  function getPath(obj, path) {
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  var STORAGE_KEY = "ac_site_lang";
  var currentLang = "fr";
  try {
    var saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") currentLang = saved;
  } catch (e) {
    /* localStorage unavailable (private mode, etc.) — default to fr */
  }

  function applyLanguage(lang) {
    var dict = content[lang] || content.fr;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n-html"));
      if (typeof value === "string") el.innerHTML = value;
    });

    document.documentElement.setAttribute("lang", lang);

    var toggle = document.getElementById("langToggle");
    if (toggle) {
      var frEl = toggle.querySelector(".lang-fr");
      var enEl = toggle.querySelector(".lang-en");
      if (frEl && enEl) {
        frEl.classList.toggle("active", lang === "fr");
        enEl.classList.toggle("active", lang === "en");
      }
    }

    currentLang = lang;
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* ==========================================================
     Language toggle
  ========================================================== */
  var langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLanguage(currentLang === "fr" ? "en" : "fr");
    });
  }

  /* ==========================================================
     Mobile menu
  ========================================================== */
  var menuToggle = document.getElementById("menuToggle");
  var navEl = document.querySelector(".nav");
  if (menuToggle && navEl) {
    menuToggle.addEventListener("click", function () {
      var isOpen = navEl.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        navEl.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ==========================================================
     Contact form -> mailto (no backend required)
  ========================================================== */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var project = form.project.value;
      var message = form.message.value.trim();

      var subject = "Nouveau projet — " + project + (name ? " (" + name + ")" : "");
      var bodyLines = [
        "Nom: " + name,
        "Email: " + email,
        "Type de projet: " + project,
        "",
        message
      ];

      var mailto =
        "mailto:aminechbihi6@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;
    });
  }

  /* ==========================================================
     Footer year
  ========================================================== */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ==========================================================
     Init
  ========================================================== */
  applyLanguage(currentLang);
})();
