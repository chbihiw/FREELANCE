(function () {
  "use strict";

  /* ==========================================================
     Web3Forms — envoi direct du formulaire par email, sans
     ouvrir la messagerie du visiteur.
     1) Va sur https://web3forms.com, entre l'email qui doit
        recevoir les messages (aminechbihi6@gmail.com), valide
        le mail de confirmation.
     2) Copie la clé ("Access Key") reçue et colle-la ci-dessous.
  ========================================================== */
  var WEB3FORMS_ACCESS_KEY = "667c6e1c-becd-49b0-8200-70090f2405a6";

  /* ==========================================================
     Bilingual content dictionary (FR / EN)
     Keys mirror the data-i18n / data-i18n-html paths in index.html
  ========================================================== */
  var content = {
    fr: {
      nav: {
        teams: "Équipes",
        about: "Pourquoi nous",
        contact: "Contact",
        cta: "Discutons"
      },
      hero: {
        eyebrow: "Un collectif de freelances marketing & digital",
        title: 'On connaît les coulisses des grandes agences. <span class="grad-text">On a gardé ce qui compte.</span>',
        cta_primary: "Parler à l'équipe",
        cta_secondary: "Voir nos expertises",
        badge1: "Des campagnes lancées partout dans le monde",
        badge2: "6+ expertises sous un même toit",
        badge3: "Un collectif, pas un intermédiaire de plus",
        card1: "ROI & data",
        card2: "Créa & dev",
        card3: "Prod photo/vidéo"
      },
      platforms: {
        label: "Plateformes & outils qu'on utilise au quotidien"
      },
      stats: {
        eyebrow: "En chiffres",
        items: [
          { label: "ans d'expérience cumulée" },
          { label: "de budget publicitaire géré" },
          { label: "marques multinationales accompagnées" },
          { label: "pays couverts" },
          { label: "plateformes maîtrisées" },
          { label: "freelances dans le collectif" }
        ]
      },
      teams: {
        eyebrow: "Comment on est organisés",
        title: "Une seule équipe, plusieurs expertises",
        subtitle: "Chaque projet est pris en charge par les bonnes personnes, coordonnées par un seul interlocuteur — tu n'as jamais à gérer plusieurs prestataires.",
        items: [
          { title: "Audit marketing", desc: "De la réflexion stratégique à l'exécution opérationnelle : on regarde ce qui marche, ce qui coince, et on priorise les actions qui ont vraiment un impact sur ton business." },
          { title: "Paid Media", desc: "Meta, Google, TikTok : de la stratégie média à l'exécution technique au quotidien — ciblage, création, optimisation continue et reporting qui a du sens." },
          { title: "SEO", desc: "De la stratégie de visibilité à l'exécution technique : audit, structure de contenu, on-page — pour exister sur Google sans dépendre à 100% du payant." },
          { title: "Création de sites & applications", desc: "Sites vitrines, e-commerce, appweb sur mesure — de la maquette au déploiement." },
          { title: "Production photo, vidéo & 3D", desc: "Shooting, montage, modélisation et texturing 3D — des contenus qui donnent envie de cliquer." },
          { title: "Copywriting & automatisation", desc: "Des mots qui vendent et des séquences email/SMS qui tournent toutes seules." }
        ],
        more: "Et la liste ne s'arrête pas là : le collectif s'agrandit à chaque projet qui demande un profil différent — raconte-nous ton besoin, on te dira qui chez nous s'en occupe."
      },
      about: {
        eyebrow: "Pourquoi The Hive",
        title: "L'exécution d'une agence, l'esprit d'une bande de potes",
        subtitle: "On n'est pas des inconnus assemblés pour un devis. On bosse ensemble, sur plusieurs projets à la fois, et ça se sent dans la façon dont on collabore avec toi.",
        panel1: "Basé au Maroc — clients à l'international",
        panel2: "Une équipe dispo en asynchrone, quel que soit ton fuseau",
        panel3: "Un collectif, pas une agence à tiroirs",
        panel4: "Chaque projet suivi avec des chiffres à l'appui",
        points: [
          { title: "6+ expertises", desc: "Sous un même toit, coordonnées par une seule personne." },
          { title: "Un seul prix", desc: "Celui d'un freelance, pour un travail pensé comme en agence." },
          { title: "Data-driven", desc: "Chaque décision s'appuie sur des chiffres, pas sur le feeling." },
          { title: "Bon vivants, sérieux au travail", desc: "Easy going entre nous, nickel sur tes campagnes et ton reporting." }
        ]
      },
      process: {
        eyebrow: "Comment ça marche",
        title: "Un process simple, pensé pour les non-experts",
        subtitle: "Pas besoin de connaître le jargon marketing pour bosser avec nous.",
        steps: [
          { title: "On t'écoute", desc: "Un appel ou un message pour comprendre ton besoin, ton budget, tes objectifs." },
          { title: "On assemble la bonne équipe", desc: "Selon ton projet, on mobilise les bons profils du collectif — jamais plus que nécessaire." },
          { title: "On livre, on explique, on ajuste", desc: "Résultats et reporting expliqués simplement, sans jargon — et on optimise en continu." }
        ]
      },
      contact: {
        eyebrow: "Étape suivante",
        title: "Raconte-nous ton projet",
        subtitle: "Un mot sur ton besoin, et on te répond vite — en français ou en anglais.",
        whatsapp: "WhatsApp",
        form: {
          name: "Nom",
          email: "Email",
          phone: "Téléphone (facultatif)",
          project: "Type de projet",
          opt_audit: "Audit marketing",
          opt_ads: "Paid Media / Ads",
          opt_seo: "SEO",
          opt_web: "Site web / Appweb",
          opt_prod: "Photo / Vidéo / 3D",
          opt_copy: "Copywriting / Emailing",
          opt_other: "Autre",
          message: "Message",
          submit: "Envoyer",
          note: "",
          sending: "Envoi en cours...",
          success: "Message envoyé ! On revient vers toi très vite.",
          error: "Oups, un souci est survenu. Écris-nous directement à aminechbihi6@gmail.com ou sur WhatsApp."
        }
      },
      footer: {
        tagline: "The Hive — Collectif freelance Marketing & Digital",
        rights: "Tous droits réservés"
      }
    },

    en: {
      nav: {
        teams: "Teams",
        about: "Why us",
        contact: "Contact",
        cta: "Let's talk"
      },
      hero: {
        eyebrow: "A collective of freelance marketing & digital experts",
        title: 'We know the inside of big agencies. <span class="grad-text">We kept what actually matters.</span>',
        cta_primary: "Talk to the team",
        cta_secondary: "See our expertise",
        badge1: "Campaigns launched all over the world",
        badge2: "6+ areas of expertise under one roof",
        badge3: "A collective, not another middleman",
        card1: "ROI & data",
        card2: "Design & dev",
        card3: "Photo/video production"
      },
      platforms: {
        label: "Platforms & tools we use daily"
      },
      stats: {
        eyebrow: "By the numbers",
        items: [
          { label: "years of combined experience" },
          { label: "in ad budget managed" },
          { label: "multinational brands supported" },
          { label: "countries covered" },
          { label: "platforms mastered" },
          { label: "freelancers in the collective" }
        ]
      },
      teams: {
        eyebrow: "How we're organized",
        title: "One team, several areas of expertise",
        subtitle: "Every project is handled by the right people, coordinated by a single point of contact — you never have to juggle multiple vendors.",
        items: [
          { title: "Marketing audit", desc: "From strategic thinking to hands-on execution: we look at what's working, what isn't, and prioritize the actions that actually move the needle for your business." },
          { title: "Paid Media", desc: "Meta, Google, TikTok: from media strategy to day-to-day technical execution — targeting, creative, continuous optimization and reporting that actually makes sense." },
          { title: "SEO", desc: "From visibility strategy to technical execution: audit, content structure, on-page work — so you show up on Google without depending 100% on paid." },
          { title: "Website & app development", desc: "Showcase sites, e-commerce, custom web apps — from mockup to deployment." },
          { title: "Photo, video & 3D production", desc: "Shooting, editing, 3D modeling and texturing — content that actually makes people click." },
          { title: "Copywriting & automation", desc: "Words that sell, and email/SMS sequences that run themselves." }
        ],
        more: "And the list doesn't stop there: the collective grows with every project that calls for a different profile — tell us what you need, and we'll tell you who on our end handles it."
      },
      about: {
        eyebrow: "Why The Hive",
        title: "Agency execution, a crew-of-friends mindset",
        subtitle: "We're not strangers thrown together for a quote. We work together, on several projects at once, and it shows in how we collaborate with you.",
        panel1: "Based in Morocco — international clients",
        panel2: "A team available asynchronously, any time zone",
        panel3: "A collective, not a bloated agency",
        panel4: "Every project tracked with real numbers",
        points: [
          { title: "6+ areas of expertise", desc: "Under one roof, coordinated by a single person." },
          { title: "One single price", desc: "A freelancer's price, for work built like an agency's." },
          { title: "Data-driven", desc: "Every decision is backed by numbers, not a gut feeling." },
          { title: "Good vibes, serious work", desc: "Easy going among us, spot-on on your campaigns and reporting." }
        ]
      },
      process: {
        eyebrow: "How it works",
        title: "A simple process, built for non-experts",
        subtitle: "You don't need to know marketing jargon to work with us.",
        steps: [
          { title: "We listen", desc: "A call or a message to understand your need, your budget, your goals." },
          { title: "We assemble the right team", desc: "Depending on your project, we bring in the right profiles from the collective — never more than needed." },
          { title: "We deliver, explain, and adjust", desc: "Results and reporting explained simply, no jargon — and we keep optimizing." }
        ]
      },
      contact: {
        eyebrow: "Next step",
        title: "Tell us about your project",
        subtitle: "A few words about what you need, and we'll get back to you fast — in French or English.",
        whatsapp: "WhatsApp",
        form: {
          name: "Name",
          email: "Email",
          phone: "Phone (optional)",
          project: "Project type",
          opt_audit: "Marketing audit",
          opt_ads: "Paid Media / Ads",
          opt_seo: "SEO",
          opt_web: "Website / Web app",
          opt_prod: "Photo / Video / 3D",
          opt_copy: "Copywriting / Emailing",
          opt_other: "Other",
          message: "Message",
          submit: "Send",
          note: "",
          sending: "Sending...",
          success: "Message sent! We'll get back to you very soon.",
          error: "Oops, something went wrong. Email us directly at aminechbihi6@gmail.com or on WhatsApp."
        }
      },
      footer: {
        tagline: "The Hive — Freelance Marketing & Digital Collective",
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

  var STORAGE_KEY = "hive_site_lang";
  var currentLang = "fr";
  try {
    var saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") currentLang = saved;
  } catch (e) {
    /* localStorage unavailable (private mode, etc.) — default to fr */
  }

  var formStatusEl = document.getElementById("formStatus");

  function setFormStatus(state) {
    if (!formStatusEl) return;
    formStatusEl.setAttribute("data-state", state);
    var dict = content[currentLang] || content.fr;
    var key = state === "idle" ? "note" : state;
    var text = getPath(dict, "contact.form." + key);
    if (typeof text === "string") formStatusEl.textContent = text;
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

    // re-sync the contact form status message in the new language
    var currentState = formStatusEl ? formStatusEl.getAttribute("data-state") || "idle" : "idle";
    setFormStatus(currentState);
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
     Logo -> smooth scroll to top
     (native #anchor scrolling can silently no-op on a sticky
     header, so we handle it manually)
  ========================================================== */
  var logoHome = document.getElementById("logoHome");
  if (logoHome) {
    logoHome.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
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
     Contact form -> sent directly by email via Web3Forms
     (no mailto:, nothing opens on the visitor's side)
  ========================================================== */
  var form = document.getElementById("contactForm");
  var submitBtn = document.getElementById("contactSubmit");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // honeypot: if filled, silently drop (bot)
      if (form.botcheck && form.botcheck.value) return;

      if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
        setFormStatus("error");
        return;
      }

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();
      var project = form.project.value;
      var message = form.message.value.trim();

      var payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "Nouveau projet — " + project + (name ? " (" + name + ")" : ""),
        from_name: "Site The Hive",
        name: name,
        email: email,
        phone: phone || "Non renseigné",
        project_type: project,
        message: message
      };

      if (submitBtn) submitBtn.disabled = true;
      setFormStatus("sending");

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data && data.success) {
            setFormStatus("success");
            form.reset();
          } else {
            setFormStatus("error");
          }
        })
        .catch(function () {
          setFormStatus("error");
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  /* ==========================================================
     Hero visual — subtle animated dot/network graphic
     representing the collective's areas of expertise
  ========================================================== */
  function initHeroNetwork() {
    var canvas = document.getElementById("heroNetwork");
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var container = canvas.parentElement;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var colors = ["#22d3ee", "#3b82f6", "#6c7bc9", "#3fa7a0", "#4e9b6b", "#4a85c4", "#7c6fc4", "#4fa8b8"];
    var NODE_COUNT = 22;
    var width = 0, height = 0, linkDist = 90;
    var nodes = [];
    var rafId = null;

    function resize() {
      var rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      linkDist = Math.max(60, Math.min(width, height) * 0.34);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeNodes() {
      nodes = [];
      for (var i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          r: 1.6 + Math.random() * 1.7,
          color: colors[i % colors.length]
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (var i = 0; i < nodes.length; i++) {
        for (var j = i + 1; j < nodes.length; j++) {
          var a = nodes[i], b = nodes[j];
          var dx = a.x - b.x, dy = a.y - b.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            var alpha = (1 - dist / linkDist) * 0.32;
            ctx.strokeStyle = "rgba(150, 210, 255," + alpha.toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach(function (n) {
        ctx.beginPath();
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 6;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;
    }

    function step() {
      nodes.forEach(function (n) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      });
      draw();
      rafId = requestAnimationFrame(step);
    }

    resize();
    makeNodes();
    draw();

    if (!reduceMotion) {
      rafId = requestAnimationFrame(step);

      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          if (rafId) cancelAnimationFrame(rafId);
        } else {
          rafId = requestAnimationFrame(step);
        }
      });
    }

    window.addEventListener("resize", function () {
      resize();
      draw();
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
  setFormStatus("idle");
  initHeroNetwork();
})();
