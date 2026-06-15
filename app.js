/* app.js - Interactive Functionalities for Nüma Coffee Kitchen (French) */

// --- MENU DATA ---
const MENU_ITEMS = [
  {
    id: "maple-pecan-latte",
    name: "Latte Érable Pacane",
    category: "signature",
    price: 6.25,
    description: "Double shot d'espresso torréfié maison, sirop d'érable noir, extrait de noix de pécan grillée, lait d'avoine biologique cuit à la vapeur, avec une pincée de cannelle fraîche.",
    tags: ["Meilleure Vente", "Lait d'Avoine"],
    badge: "Signature",
    image: "assets/images/maple-pecan.jpg"
  },
  {
    id: "cold-brew-tonic",
    name: "Tonic Infusion à Froid",
    category: "signature",
    price: 5.50,
    description: "Notre infusion à froid de 18 heures superposée à une eau tonique artisanale, avec un soupçon de zeste d'orange frais et garnie de romarin.",
    tags: ["Froid", "Zesté"],
    badge: "Rafraîchissant",
    image: "assets/images/layered-latte.jpg"
  },
  {
    id: "rose-cardamom-cortado",
    name: "Cortado Rose Cardamome",
    category: "coffee",
    price: 5.00,
    description: "Double shot de ristretto infusé à l'eau de rose biologique et à la cardamome sucrée, mélangé à parts égales avec du lait d'avoine velouté.",
    tags: ["Aromatique", "Chaud"],
    badge: "Choix du Barista",
    image: "assets/images/hero-coffee.jpg"
  },
  {
    id: "dates-shake",
    name: "Milk-shake Dattes & Pistaches",
    category: "signature",
    price: 6.50,
    description: "Mélange onctueux de dattes biologiques, pistaches grillées, beurre d'amande et lait d'avoine, garni de noix concassées et de miel de fleurs sauvages.",
    tags: ["Mixé", "Noix"],
    badge: "Nouveau",
    image: "assets/images/dates-shake.jpg"
  },
  {
    id: "pistachio-matcha",
    name: "Latte Matcha Pistache",
    category: "signature",
    price: 6.50,
    description: "Matcha d'Uji de qualité cérémonielle fouetté avec de la pâte de pistache sucrée écrasée maison, du sirop d'érable biologique et du lait d'amande non sucré.",
    tags: ["Matcha", "Noix"],
    badge: "Populaire",
    image: "assets/images/pistachio-matcha.jpg"
  },
  {
    id: "berry-smoothie",
    name: "Smoothie aux Baies Sauvages",
    category: "signature",
    price: 6.00,
    description: "Mélange épais de baies sauvages, bananes, yaourt à la noix de coco biologique et feuilles de menthe fraîche. Servi très frais.",
    tags: ["Froid", "Baie"],
    badge: "Rafraîchissant",
    image: "assets/images/berry-smoothie.jpg"
  },
  {
    id: "green-smoothie",
    name: "Smoothie Menthe Citron Vert",
    category: "signature",
    price: 6.00,
    description: "Un mélange rafraîchissant de citron vert doux, menthe fraîche du jardin, épinards biologiques, pommes vertes et glace pilée. Garni de rondelles de citron vert.",
    tags: ["Biologique", "Agrumes"],
    badge: "Mélange d'Agrumes",
    image: "assets/images/green-smoothie.jpg"
  },
  {
    id: "citrus-sparkler",
    name: "Pétillant Pêche Agrumes",
    category: "signature",
    price: 5.50,
    description: "Un mélange vif et rafraîchissant de nectar de pêche fraîche, de citron pressé et d'eau pétillante, servi sur glace avec une rondelle de citron.",
    tags: ["Froid", "Fruité"],
    badge: "Spécial Été",
    image: "assets/images/citrus-sparkler.jpg"
  },
  {
    id: "berry-hibiscus",
    name: "Rafraîchissement Baies Hibiscus",
    category: "signature",
    price: 5.75,
    description: "Thé à l'hibiscus rouge profond infusé avec des baies fraîches écrasées, des feuilles de menthe et un filet de sirop de canne biologique.",
    tags: ["Thé Glacé", "Floral"],
    badge: "Rafraîchissant",
    image: "assets/images/berry-hibiscus.jpg"
  },
  {
    id: "kiwi-cake",
    name: "Gâteau à la Crème et aux Kiwis",
    category: "bakery",
    price: 5.50,
    description: "Génoise artisanale étagée de crème fouettée fraîche, kiwis tranchés, tranches d'ananas et délicats pétales de fleurs comestibles.",
    tags: ["Boulangerie", "Gâteau aux Fruits"],
    badge: "Cuit au Foyer",
    image: "assets/images/kiwi-cake.jpg"
  },
  {
    id: "pistachio-cake",
    name: "Gâteau à la Poêle aux Pistaches",
    category: "bakery",
    price: 6.75,
    description: "Gâteau cookie chaud à la cardamome cuit au foyer, surmonté d'une généreuse boule de glace à la pistache maison et de pistaches crues concassées.",
    tags: ["Doux", "Dessert Chaud"],
    badge: "Spécialité du Chef",
    image: "assets/images/pistachio-cake.jpg"
  },
  {
    id: "avocado-tartine",
    name: "Toast Avocat Benny",
    category: "eats",
    price: 14.50,
    description: "Pain plat croustillant tartiné de purée d'avocat, garni de bœuf séché, œufs pochés, salade de roquette fraîche et copeaux de parmesan.",
    tags: ["Brunch", "Avocat"],
    badge: "Tendance",
    image: "assets/images/avocado-tartine.jpg"
  },
  {
    id: "egg-benny",
    name: "Œufs Benny Pastrami",
    category: "eats",
    price: 14.00,
    description: "Brioche artisanale épaisse toastée, tranches de pastrami rôties lentement, œufs pochés biologiques, hollandaise maison, oignon rouge mariné et câpres.",
    tags: ["Salé", "Pastrami"],
    badge: "Classique Maison",
    image: "assets/images/egg-benny.jpg"
  },
  {
    id: "peanut-brownie",
    name: "Brownie Glacé aux Cacahuètes",
    category: "bakery",
    price: 7.50,
    description: "Un brownie fondant au chocolat riche, servi chaud avec deux boules de glace, nappé de sauce caramel et parsemé d'éclats de cacahuètes torréfiées.",
    tags: ["Doux", "Chocolat"],
    badge: "Nouveau",
    image: "assets/images/peanut-brownie.jpg"
  },
  {
    id: "berry-cake",
    name: "Gâteau Fondant aux Fruits Rouges",
    category: "bakery",
    price: 7.00,
    description: "Gâteau moelleux nappé d'un coulis chaud de fruits rouges et de baies entières, accompagné d'une généreuse boule de glace fondante.",
    tags: ["Fruité", "Dessert Chaud"],
    badge: "Gourmand",
    image: "assets/images/berry-cake.jpg"
  },
  {
    id: "classic-matcha",
    name: "Latte Matcha Classique",
    category: "signature",
    price: 5.50,
    description: "Matcha vert d'Uji onctueux préparé selon la tradition avec du lait d'avoine chaud et une touche de miel.",
    tags: ["Doux", "Matcha"],
    badge: "Classique",
    image: "assets/images/matcha-latte.jpg"
  },
  {
    id: "brunch-special",
    name: "Assiette Brunch Spécialité",
    category: "eats",
    price: 16.50,
    description: "Notre assiette brunch complète : œufs, pain artisanal, et sélection de légumes frais préparés en cuisine.",
    tags: ["Brunch", "Complet"],
    badge: "Populaire",
    image: "assets/images/brunch.jpg"
  },
  {
    id: "pastry-box",
    name: "Assortiment de Pâtisseries",
    category: "bakery",
    price: 8.00,
    description: "Une sélection fraîche de nos meilleures pâtisseries artisanales cuites au four ce matin.",
    tags: ["Boulangerie", "Frais"],
    badge: "Artisanal",
    image: "assets/images/pastry.jpg"
  },
  {
    id: "signature-pour",
    name: "Latte Art Signature",
    category: "coffee",
    price: 6.00,
    description: "Notre espresso d'origine unique magnifiquement préparé avec un latte art exquis par notre barista.",
    tags: ["Espresso", "Art"],
    badge: "Spécial",
    image: "assets/images/signature-latte.jpg"
  },
  {
    id: "house-filter",
    name: "Café Filtre du Jour",
    category: "coffee",
    price: 4.00,
    description: "Notre torréfaction du jour préparée avec soin, idéale pour accompagner votre journée dans notre espace.",
    tags: ["Noir", "Frais"],
    badge: "Quotidien",
    image: "assets/images/cafe-interior.jpg"
  },
  {
    id: "burger-frites",
    name: "Burger Maison & Potatoes",
    category: "eats",
    price: 15.50,
    description: "Un burger généreux sur pain brioché aux graines de sésame, garni de fromage fondu et servi avec des potatoes dorées et une sauce maison épicée.",
    tags: ["Savoureux", "Incontournable"],
    badge: "Best Seller",
    image: "assets/images/burger-frites.jpg"
  },
  {
    id: "poulet-frit",
    name: "Poulet Croustillant & Salade",
    category: "eats",
    price: 16.00,
    description: "Filets de poulet panés croustillants, posés sur un lit de roquette fraîche, tomates cerises et aubergines grillées, nappés d'une sauce sriracha maison et de crème herbacée.",
    tags: ["Épicé", "Protéiné"],
    badge: "Chef Special",
    image: "assets/images/poulet-frit.jpg"
  },
  {
    id: "pates-pesto",
    name: "Rigatoni Pesto Pistache",
    category: "eats",
    price: 14.50,
    description: "Rigatoni al dente enrobés d'un pesto crémeux à la pistache et au basilic, garnis de boulettes de viande dorées, de pistaches concassées et de parmesan.",
    tags: ["Pâtes", "Végétarien"],
    badge: "Nouveauté",
    image: "assets/images/pates-pesto.jpg"
  },
  {
    id: "croissant-oeuf",
    name: "Croissant Œuf & Avocat",
    category: "eats",
    price: 9.50,
    description: "Un croissant pur beurre doré et feuilleté, garni d'œuf au plat coulant, de purée d'avocat et servi avec une sauce hollandaise maison.",
    tags: ["Petit-Déjeuner", "Brunch"],
    badge: "Matin",
    image: "assets/images/croissant-oeuf.jpg"
  },
  {
    id: "brownie-mures",
    name: "Brownie Chaud aux Mûres",
    category: "bakery",
    price: 8.00,
    description: "Un brownie au chocolat fondant, servi tiède avec des mûres caramélisées, une boule de glace vanille et un filet de caramel beurre salé.",
    tags: ["Chocolat", "Dessert Chaud"],
    badge: "Coup de Cœur",
    image: "assets/images/brownie-mures.jpg"
  },
  {
    id: "salmon-bowl",
    name: "Bowl Saumon Avocat",
    category: "eats",
    price: 16.50,
    description: "Un bol santé complet avec du saumon fumé de qualité, des tranches d'avocat frais, des kiwis, un lit d'épinards et une sauce onctueuse maison.",
    tags: ["Santé", "Frais"],
    badge: "Nouveau",
    image: "assets/images/salmon-bowl.jpg"
  },
  {
    id: "bacon-toast",
    name: "Toast Bacon & Œuf Poché",
    category: "eats",
    price: 13.50,
    description: "Une généreuse tranche de pain de campagne toastée, surmontée de bacon croustillant, d'œufs pochés parfaits et nappée de sauce hollandaise.",
    tags: ["Brunch", "Salé"],
    badge: "Réconfortant",
    image: "assets/images/bacon-toast.jpg"
  },
  {
    id: "cappuccino-cookie",
    name: "Cappuccino & Sablé Confiture",
    category: "coffee",
    price: 5.50,
    description: "Notre grand classique : un espresso riche couronné d'une mousse de lait veloutée, accompagné de son petit sablé artisanal à la confiture.",
    tags: ["Classique", "Mousseux"],
    badge: "Tradition",
    image: "assets/images/cappuccino-cookie.jpg"
  },
  {
    id: "pistachio-toast",
    name: "Brioche Perdue Pistache",
    category: "bakery",
    price: 9.00,
    description: "Une épaisse brioche perdue caramélisée, servie avec une boule de glace, généreusement nappée de crème de pistache et d'éclats de pistaches grillées.",
    tags: ["Gourmand", "Doux"],
    badge: "Signature",
    image: "assets/images/pistachio-toast.jpg"
  },
  {
    id: "chocolate-waffle",
    name: "Gaufre Banane Chocolat",
    category: "bakery",
    price: 8.50,
    description: "Gaufre chaude maison garnie de tranches de bananes fraîches, de beurre de cacahuète, de crème fouettée et d'un double coulis au chocolat.",
    tags: ["Chocolat", "Doux"],
    badge: "Coup de Cœur",
    image: "assets/images/chocolate-waffle.jpg"
  },
  {
    id: "shakshuka-eggplant",
    name: "Shakshuka aux Aubergines",
    category: "eats",
    price: 13.50,
    description: "Plat mijoté de tomates épicées, aubergines grillées et oignons rouges marinés, servi chaud avec du pain de campagne.",
    tags: ["Chaud", "Végétarien"],
    badge: "Réchauffant",
    image: "assets/images/shakshuka-eggplant.jpg"
  },
  {
    id: "iced-matcha-berry",
    name: "Matcha Glacé aux Fruits Rouges",
    category: "signature",
    price: 6.50,
    description: "Boisson rafraîchissante à trois couches : purée de fruits rouges, lait d'avoine et matcha japonais de qualité cérémonielle.",
    tags: ["Froid", "Matcha"],
    badge: "Créatif",
    image: "assets/images/iced-matcha-berry.jpg"
  },
  {
    id: "iced-latte",
    name: "Latte Glacé Classique",
    category: "coffee",
    price: 5.00,
    description: "Un espresso double intensité coulé sur du lait frais et des glaçons. Le grand classique pour se rafraîchir.",
    tags: ["Froid", "Classique"],
    badge: "Essentiel",
    image: "assets/images/iced-latte.jpg"
  },
  {
    id: "chicken-waffle",
    name: "Gaufre Poulet Frit au Fromage",
    category: "eats",
    price: 15.50,
    description: "Gaufre salée garnie de poulet frit croustillant, tomates cerises, roquette et d'une généreuse sauce fromagère fondue.",
    tags: ["Gourmand", "Salé"],
    badge: "Spécial",
    image: "assets/images/chicken-waffle.jpg"
  },
  {
    id: "marky-stamp-green",
    name: "Tampon Textile MARKY - Vert",
    category: "arts-crafts",
    price: 55.00,
    description: "Le tampon textile personnalisable MARKY en coloris vert. Livré avec un set de caractères (lettres, chiffres, pictos), une bande thermocollante et une pince.",
    tags: ["Tampon", "Personnalisable"],
    badge: "Populaire",
    image: "assets/images/marky-stamp.png"
  },
  {
    id: "marky-stamp-pink",
    name: "Tampon Textile MARKY - Rose",
    category: "arts-crafts",
    price: 55.00,
    description: "Le tampon textile personnalisable MARKY en coloris rose. Livré avec un set de caractères (lettres, chiffres, pictos), une bande thermocollante et une pince.",
    tags: ["Tampon", "Personnalisable"],
    badge: "Populaire",
    image: "assets/images/marky-stamp.png"
  },
  {
    id: "marky-stamp-blue",
    name: "Tampon Textile MARKY - Bleu",
    category: "arts-crafts",
    price: 55.00,
    description: "Le tampon textile personnalisable MARKY en coloris bleu. Livré avec un set de caractères (lettres, chiffres, pictos), une bande thermocollante et une pince.",
    tags: ["Tampon", "Personnalisable"],
    badge: "Populaire",
    image: "assets/images/marky-stamp.png"
  },
  {
    id: "marky-refill-kit",
    name: "Kit de Recharge MARKY",
    category: "arts-crafts",
    price: 30.00,
    description: "Recharge complète contenant 1 cassette d'encre noire (1000 empreintes), 1m de bande thermocollante et 40 étiquettes adhésives.",
    tags: ["Accessoires", "Recharge"],
    badge: "Indispensable",
    image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22 viewBox=%220 0 300 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23C7B7A3%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2220%22 fill=%22%23561C24%22>Kit Recharge MARKY</text></svg>"
  },
  {
    id: "marky-pen-labels",
    name: "Étiquettes Stylos MARKY",
    category: "arts-crafts",
    price: 18.00,
    description: "96 étiquettes autocollantes (10 x 42 mm) en 12 coloris pastels. Papier recyclé, séchage instantané et imperméables.",
    tags: ["Étiquettes", "Scolaire"],
    badge: "Nouveau",
    image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22 viewBox=%220 0 300 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23C7B7A3%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2220%22 fill=%22%23561C24%22>&Eacute;tiquettes Stylos</text></svg>"
  },
  {
    id: "marky-dishwasher-labels",
    name: "Étiquettes Lave-Vaisselle MARKY",
    category: "arts-crafts",
    price: 18.00,
    description: "Étiquettes adhésives ultra-résistantes pour gourdes, boîtes à goûter, verres, etc. Résistent au lave-vaisselle, micro-ondes et congélateur.",
    tags: ["Étiquettes", "Résistant"],
    badge: "Pratique",
    image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22 viewBox=%220 0 300 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23C7B7A3%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2220%22 fill=%22%23561C24%22>&Eacute;tiquettes Lave-Vaisselle</text></svg>"
  },
  {
    id: "marky-backpack",
    name: "Sac à Dos Enfant MARKY",
    category: "arts-crafts",
    price: 120.00,
    description: "Sac à dos ergonomique avec rembourrage dorsal respirant, éléments réfléchissants et matière déperlante. Personnalisable avec badge velcro.",
    tags: ["Accessoires", "Ergonomique"],
    badge: "Premium",
    image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22 viewBox=%220 0 300 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23C7B7A3%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2220%22 fill=%22%23561C24%22>Sac &agrave; Dos MARKY</text></svg>"
  },
  {
    id: "marky-pencil-case",
    name: "Trousse Silicone MARKY",
    category: "arts-crafts",
    price: 36.00,
    description: "Trousse en silicone durable et imperméable. Base extensible pour plus de rangement. Zippée avec étiquette personnalisable par tampon.",
    tags: ["Accessoires", "Silicone"],
    badge: "Tendance",
    image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22 viewBox=%220 0 300 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23C7B7A3%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2220%22 fill=%22%23561C24%22>Trousse Silicone</text></svg>"
  },
  {
    id: "marky-sos-wristbands",
    name: "Bracelets de Sécurité SOS MARKY",
    category: "arts-crafts",
    price: 18.00,
    description: "20 bracelets SOS colorés pour enfants. Résistent aux UV et à l'eau salée. Livrés avec un feutre permanent imperméable.",
    tags: ["Sécurité", "Bracelets"],
    badge: "Sécurité",
    image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22 viewBox=%220 0 300 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23C7B7A3%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2220%22 fill=%22%23561C24%22>Bracelets SOS</text></svg>"
  }
];

// --- APP STATE ---
let cart = [];

let quizAnswers = { mood: '', flavor: '', base: '' };
let currentSlide = 0;
let slideInterval;

// --- DOM ELEMENT SELECTORS ---
const header = document.getElementById('main-header');
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');
const menuGrid = document.getElementById('menu-grid');
const menuTabs = document.querySelectorAll('.menu-tab');
const cartBtn = document.getElementById('cart-btn');
const cartClose = document.getElementById('cart-close');
const cartDrawer = document.getElementById('cart-drawer');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartEmptyState = document.getElementById('cart-empty-state');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTax = document.getElementById('cart-tax');
const cartTotal = document.getElementById('cart-total');
const cartBadge = document.getElementById('cart-badge');
const cartFooter = document.getElementById('cart-footer');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutSuccessModal = document.getElementById('checkout-success-modal');
const checkoutCloseSuccess = document.getElementById('checkout-close-success');
const toastContainer = document.getElementById('toast-container');

// Quiz Elements
const quizSteps = document.querySelectorAll('.quiz-step');
const quizProgress = document.getElementById('quiz-progress');
const quizResultTitle = document.getElementById('quiz-result-title');
const quizResultDesc = document.getElementById('quiz-result-desc');
const quizResultPrice = document.getElementById('quiz-result-price');
const quizResultTag1 = document.getElementById('quiz-result-tag1');
const quizResultTag2 = document.getElementById('quiz-result-tag2');
const quizResultImage = document.getElementById('quiz-result-image');
const quizAddCartBtn = document.getElementById('quiz-add-cart-btn');
const quizRetryBtn = document.getElementById('quiz-retry-btn');
const quizFinishBtn = document.getElementById('quiz-finish-btn');

// Testimonials Elements
const reviewsCarouselTrack = document.getElementById('reviews-carousel-track');
const reviewsDots = document.querySelectorAll('#carousel-dots .carousel-dot');

// Contact Elements
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');

// --- INIT & LOCAL STORAGE RESTORE ---
document.addEventListener('DOMContentLoaded', () => {
  // Restore Cart
  const storedCart = localStorage.getItem('numa_cart');
  if (storedCart) {
    try {
      cart = JSON.parse(storedCart);
      updateCartUI();
    } catch (e) {
      cart = [];
    }
  }

  // Populate Menu
  if (menuGrid) {
    renderMenuItems('all');
  }

  // Bind any elements with data-add-to-cart on initialization
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = btn.getAttribute('data-add-to-cart');
      addToCart(itemId);
    });
  });

  // Mobile navigation dropdown toggle
  document.querySelectorAll('.nav-dropdown > a').forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        const parent = dropdownToggle.parentElement;
        parent.classList.toggle('open-mobile');
      }
    });
  });

  // Start Slideshow
  if (reviewsCarouselTrack) {
    startCarouselTimer();
  }

  // Setup Observers
  setupScrollReveal();
});

// --- HEADER SCROLL STYLES ---
window.addEventListener('scroll', () => {
  if (header) {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// --- MOBILE MENU ---
if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
      navLinks.classList.remove('open');
      mobileToggle.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    } else {
      navLinks.classList.add('open');
      mobileToggle.classList.add('open');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
  });
}

// Close Mobile Menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks) navLinks.classList.remove('open');
    if (mobileToggle) {
      mobileToggle.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'default') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  `;
  
  if (type === 'success') {
    toast.querySelector('.toast-icon')?.classList.add('success');
    icon = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-success);">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;
  }

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
  `;

  toastContainer.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  // Remove toast
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3500);
}

// --- MENU FILTER ENGINE ---
function renderMenuItems(filter) {
  if (!menuGrid) return;
  menuGrid.innerHTML = '';
  
  const filtered = filter === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  filtered.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = `menu-item reveal reveal-delay-${(index % 3) + 1} active`;
    card.setAttribute('data-category', item.category);

    const tagsHtml = item.tags.map(t => `<span class="menu-item-tag">${t}</span>`).join('');
    const badgeHtml = item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : '';

    // Error handling in inline image loading triggers standard SVG template block
    card.innerHTML = `
      <div class="menu-item-media">
        ${badgeHtml}
        <img src="${item.image}" alt="${item.name}" class="menu-item-img" onload="adjustMenuImage(this)" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22 viewBox=%220 0 300 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23C7B7A3%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22serif%22 font-size=%2220%22 fill=%22%23561C24%22>${item.name}</text></svg>'">
      </div>
      <div class="menu-item-content">
        <div class="menu-item-title-row">
          <h3>${item.name}</h3>
          <span class="menu-item-price">${item.price.toFixed(2)} TND</span>
        </div>
        <p class="menu-item-desc">${item.description}</p>
        <div class="menu-item-footer">
          <div class="menu-item-tags">
            ${tagsHtml}
          </div>
          <button class="btn-add-to-cart" data-id="${item.id}" aria-label="Ajouter ${item.name} à la commande">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    `;

    menuGrid.appendChild(card);

    // Event listener for add button
    card.querySelector('.btn-add-to-cart').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(item.id);
    });
  });
}

// Filter Tabs Click Events
menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    menuTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    
    const filter = tab.getAttribute('data-filter');
    
    // Add brief fade out/in effect
    menuGrid.style.opacity = 0;
    setTimeout(() => {
      renderMenuItems(filter);
      menuGrid.style.opacity = 1;
    }, 200);
  });
});

// --- SHOPPING CART LOGIC ---

// Open / Close Drawer
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    if (cartDrawer) cartDrawer.classList.add('open');
    if (cartBackdrop) cartBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  });
}

const closeCart = () => {
  if (cartDrawer) cartDrawer.classList.remove('open');
  if (cartBackdrop) cartBackdrop.classList.remove('open');
  document.body.style.overflow = '';
  if (checkoutSuccessModal) checkoutSuccessModal.classList.remove('active');
};

if (cartClose) cartClose.addEventListener('click', closeCart);
if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

// Core Add/Modify Operations
function addToCart(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const existing = cart.find(c => c.item.id === itemId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ item, qty: 1 });
  }

  saveCart();
  updateCartUI();
  
  // Highlight Cart Icon
  if (cartBtn) {
    cartBtn.classList.add('pop');
    setTimeout(() => cartBtn.classList.remove('pop'), 300);
  }

  showToast(`Ajouté ${item.name} à votre commande !`, 'success');
}

function updateQty(itemId, change) {
  const cartItem = cart.find(c => c.item.id === itemId);
  if (!cartItem) return;

  cartItem.qty += change;
  if (cartItem.qty <= 0) {
    cart = cart.filter(c => c.item.id !== itemId);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(itemId) {
  const cartItem = cart.find(c => c.item.id === itemId);
  if (!cartItem) return;

  cart = cart.filter(c => c.item.id !== itemId);
  saveCart();
  updateCartUI();
  showToast(`Retiré ${cartItem.item.name} du panier.`);
}

function saveCart() {
  localStorage.setItem('numa_cart', JSON.stringify(cart));
}

// UI Rendering
function updateCartUI() {
  // Update Badge Count
  const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0);
  if (cartBadge) {
    cartBadge.innerText = totalQty;
    if (totalQty > 0) {
      cartBadge.classList.add('pop');
    } else {
      cartBadge.classList.remove('pop');
    }
  }

  // Populate Lists
  if (cartItemsContainer) {
    const itemsList = cartItemsContainer.querySelectorAll('.cart-item');
    itemsList.forEach(item => item.remove());

    if (cart.length === 0) {
      if (cartEmptyState) cartEmptyState.style.display = 'flex';
      if (cartFooter) cartFooter.style.display = 'none';
    } else {
      if (cartEmptyState) cartEmptyState.style.display = 'none';
      if (cartFooter) cartFooter.style.display = 'block';

      cart.forEach(cartItem => {
        const { item, qty } = cartItem;
        const element = document.createElement('div');
        element.className = 'cart-item';
        element.innerHTML = `
          <div class="cart-item-img-wrapper">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2270%22 height=%2270%22 viewBox=%220 0 70 70%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23C7B7A3%22/></svg>'">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">${(item.price * qty).toFixed(2)} TND</div>
            <div class="cart-item-actions">
              <div class="quantity-selector">
                <button class="qty-btn dec-qty" data-id="${item.id}">-</button>
                <span class="qty-val">${qty}</span>
                <button class="qty-btn inc-qty" data-id="${item.id}">+</button>
              </div>
              <button class="cart-item-remove-btn remove-btn" data-id="${item.id}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                Retirer
              </button>
            </div>
          </div>
        `;

        // Event listeners
        element.querySelector('.dec-qty').addEventListener('click', () => updateQty(item.id, -1));
        element.querySelector('.inc-qty').addEventListener('click', () => updateQty(item.id, 1));
        element.querySelector('.remove-btn').addEventListener('click', () => removeFromCart(item.id));

        cartItemsContainer.insertBefore(element, cartEmptyState);
      });
    }
  }

  // Calculate prices
  const subtotal = cart.reduce((acc, curr) => acc + (curr.item.price * curr.qty), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cartSubtotal) cartSubtotal.innerText = `${subtotal.toFixed(2)} TND`;
  if (cartTax) cartTax.innerText = `${tax.toFixed(2)} TND`;
  if (cartTotal) cartTotal.innerText = `${total.toFixed(2)} TND`;
}

// Checkout Button Click Action
if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    
    checkoutBtn.disabled = true;
    checkoutBtn.innerText = 'Transmission de la commande...';

    // Simulate network latency
    setTimeout(() => {
      checkoutBtn.disabled = false;
      checkoutBtn.innerText = 'Finaliser la Commande';
      
      // Clear cart state
      cart = [];
      saveCart();
      updateCartUI();

      // Show Success screen
      if (checkoutSuccessModal) checkoutSuccessModal.classList.add('active');
    }, 1800);
  });
}

if (checkoutCloseSuccess) {
  checkoutCloseSuccess.addEventListener('click', () => {
    closeCart();
  });
}

const cartEmptyShopCta = document.getElementById('cart-empty-shop-cta');
if (cartEmptyShopCta) {
  cartEmptyShopCta.addEventListener('click', closeCart);
}

// --- COFFEE FINDER QUIZ LOGIC ---
let activeQuizStep = 1;

function selectQuizCard(card) {
  const parentStep = card.closest('.quiz-step');
  const siblings = parentStep.querySelectorAll('.quiz-card');
  siblings.forEach(s => s.classList.remove('selected'));
  card.classList.add('selected');

  // Set score variables
  const key = card.getAttribute('data-key');
  const val = card.getAttribute('data-value');
  quizAnswers[key] = val;

  // Enable navigation button
  const stepNum = parentStep.getAttribute('data-step');
  const nextBtn = document.getElementById(`quiz-next-${stepNum}`) || document.getElementById('quiz-finish-btn');
  if (nextBtn) nextBtn.disabled = false;
}

// Attach selectors to all quiz options
document.querySelectorAll('.quiz-card').forEach(card => {
  card.addEventListener('click', () => selectQuizCard(card));
});

// Navigate quiz steps
function changeQuizStep(direction) {
  const currentStepElement = document.querySelector(`.quiz-step[data-step="${activeQuizStep}"]`);
  if (currentStepElement) currentStepElement.classList.remove('active');

  activeQuizStep += direction;

  const nextStepElement = document.querySelector(`.quiz-step[data-step="${activeQuizStep}"]`);
  if (nextStepElement) nextStepElement.classList.add('active');

  // Update progress bar
  if (quizProgress) {
    const pct = (activeQuizStep / 3) * 100;
    quizProgress.style.width = `${Math.min(pct, 100)}%`;
  }
}

// Navigation Triggers
document.querySelectorAll('.btn-quiz-next').forEach(btn => {
  btn.addEventListener('click', () => changeQuizStep(1));
});
document.querySelectorAll('.btn-quiz-prev').forEach(btn => {
  btn.addEventListener('click', () => changeQuizStep(-1));
});

// Finishing quiz: Matching Logic
if (quizFinishBtn) {
  quizFinishBtn.addEventListener('click', () => {
    changeQuizStep(1); // Go to results step (4)
    calculateQuizResult();
  });
}

function calculateQuizResult() {
  const { mood, flavor, base } = quizAnswers;
  let matchId = 'maple-pecan-latte'; // Default match

  if (mood === 'bold') {
    if (flavor === 'nutty') {
      matchId = 'charcoal-macchiato'; // Si ce n'est pas dans le menu, cela sera géré, mais ici c'est juste un ID par défaut.
    } else if (flavor === 'fruity') {
      matchId = 'cold-brew-tonic';
    } else {
      matchId = 'rose-cardamom-cortado';
    }
  } else if (mood === 'light') {
    if (flavor === 'spicy' || flavor === 'fruity') {
      matchId = 'pistachio-matcha';
    } else {
      matchId = 'cold-brew-tonic';
    }
  } else { // mood === sweet
    if (flavor === 'spicy') {
      matchId = 'rose-cardamom-cortado';
    } else if (flavor === 'nutty') {
      matchId = 'maple-pecan-latte';
    } else {
      matchId = 'pistachio-matcha';
    }
  }

  const matchItem = MENU_ITEMS.find(item => item.id === matchId);
  if (!matchItem) return;

  // Render match layout
  if (quizResultTitle) quizResultTitle.innerText = matchItem.name;
  if (quizResultDesc) quizResultDesc.innerText = matchItem.description;
  if (quizResultPrice) quizResultPrice.innerText = `${matchItem.price.toFixed(2)} TND`;
  if (quizResultTag1) quizResultTag1.innerText = matchItem.tags[0] || 'Artisanal';
  if (quizResultTag2) quizResultTag2.innerText = matchItem.tags[1] || 'Frais';
  
  // Set matching recommendation image paths
  if (quizResultImage) quizResultImage.src = matchItem.image;

  // Configure result add-to-cart btn
  if (quizAddCartBtn) {
    quizAddCartBtn.onclick = () => {
      addToCart(matchItem.id);
    };
  }
}

// Reset quiz state
if (quizRetryBtn) {
  quizRetryBtn.addEventListener('click', () => {
    // Clear answers
    quizAnswers = { mood: '', flavor: '', base: '' };
    
    // Reset active selections
    document.querySelectorAll('.quiz-card').forEach(c => c.classList.remove('selected'));
    
    // Disable navigation buttons
    const next1 = document.getElementById('quiz-next-1');
    const next2 = document.getElementById('quiz-next-2');
    if (next1) next1.disabled = true;
    if (next2) next2.disabled = true;
    if (quizFinishBtn) quizFinishBtn.disabled = true;

    // Transition to step 1
    const activeStep = document.querySelector(`.quiz-step[data-step="${activeQuizStep}"]`);
    if (activeStep) activeStep.classList.remove('active');
    
    activeQuizStep = 1;
    const stepOne = document.querySelector('.quiz-step[data-step="1"]');
    if (stepOne) stepOne.classList.add('active');
    
    if (quizProgress) quizProgress.style.width = '33%';
  });
}

// --- TESTIMONIAL CAROUSEL SLIDER ---
function startCarouselTimer() {
  slideInterval = setInterval(() => {
    navigateCarousel(1);
  }, 6000);
}

function stopCarouselTimer() {
  clearInterval(slideInterval);
}

function navigateCarousel(direction) {
  currentSlide += direction;
  
  if (currentSlide >= reviewsDots.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = reviewsDots.length - 1;
  }

  updateCarouselUI();
}

function updateCarouselUI() {
  if (!reviewsCarouselTrack) return;
  // Translate track
  const translatePct = -currentSlide * 100;
  reviewsCarouselTrack.style.transform = `translateX(${translatePct}%)`;

  // Update dots active classes
  reviewsDots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Click events for dots
reviewsDots.forEach(dot => {
  dot.addEventListener('click', () => {
    stopCarouselTimer();
    currentSlide = parseInt(dot.getAttribute('data-index'), 10);
    updateCarouselUI();
    startCarouselTimer();
  });
});

// Pause slides on mouse enter, resume on mouse leave
const sliderContainer = document.getElementById('reviews-slider');
if (sliderContainer) {
  sliderContainer.addEventListener('mouseenter', stopCarouselTimer);
  sliderContainer.addEventListener('mouseleave', startCarouselTimer);
}

// --- INTERSECTION OBSERVER FOR SCROLL REVEAL ---
function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    root: null, // Viewport
    threshold: 0.15, // Percent element must cross to trigger
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve after animating once to maintain clean UI state
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

// --- FORM SUBMISSION VALIDATION ---
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-message');
    const submitBtn = document.getElementById('contact-submit');

    // Basic Validation checks
    if (!nameInput.value.trim() || !emailInput.value.trim() || !msgInput.value.trim()) {
      showToast('Veuillez remplir tous les champs du formulaire de contact.');
      return;
    }

    if (!validateEmail(emailInput.value.trim())) {
      showToast('Veuillez entrer une adresse e-mail valide.');
      return;
    }

    // Disable button while processing
    submitBtn.disabled = true;
    submitBtn.innerText = 'Envoi du message...';

    // Mock server delay
    setTimeout(() => {
      showToast(`Merci de nous avoir contactés, ${nameInput.value.trim()} ! Nous vous répondrons sous peu.`, 'success');
      
      // Reset inputs
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.innerText = 'Envoyer le Message';
    }, 1500);
  });
}

// Newsletter footer submit handler
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('.newsletter-input');
    const submitBtn = newsletterForm.querySelector('.newsletter-btn');

    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      showToast('Veuillez fournir une adresse e-mail valide pour la newsletter.');
      return;
    }

    submitBtn.disabled = true;

    setTimeout(() => {
      showToast(`Abonnement réussi ! Bienvenue dans les Nouvelles du Foyer.`, 'success');
      emailInput.value = '';
      submitBtn.disabled = false;
    }, 1200);
  });
}

// Email Regex helper
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Adjust menu item image dimension layout dynamically based on natural aspect ratio
function adjustMenuImage(img) {
  if (img.naturalHeight > img.naturalWidth) {
    img.style.height = '100%';
    img.style.width = 'auto';
  } else {
    img.style.width = '100%';
    img.style.height = 'auto';
  }
  img.style.opacity = '1';
}
