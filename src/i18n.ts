import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        tours: "Packages",
        all_tours: "All Tours",
        nile_cruise: "Nile Cruise",
        policies: "Policies",
        contact: "Contact Us",
        aswan_tours: "Aswan Tours",
        luxor_tours: "Luxor Tours",
        cairo_tours: "Cairo Tours",
        abu_simbel_tours: "Abu Simbel Tours",
        historical_wonders: "Historical Wonders"
      },
      hero: {
        title: "Experience the True Essence of Egypt",
        subtitle: "Discover historical wonders, hidden treasures, and unforgettable journeys tailored just for you.",
        btn_book: "Book Your Adventure",
        top_cruise: "Top-Rated Nile Cruise in Egypt",
        discover_packages: "Discover Our Great Packages"
      },
      common: {
        start_from: "Start From",
        price_from: "Price From",
        book_now: "Book Now",
        package_features: "Package Features",
        duration: "Duration",
        per_person: "/ USD",
        excellent: "Excellent",
        back_to_home: "Back to Home"
      },
      home: {
        reviews_title: "Every Journey We Create Is Designed With Care And Delivered By People Who Truly Know Egypt. See What Our Guests Say About Traveling With Us",
        see_reviews: "SEE OUR REVIEWS ON TRIPADVISOR",
        trust_title: "Travel With Confidence",
        canada_reg: "Canada's Business Registries",
        square_pay: "Payments Are Processed Securely By Square"
      },
      footer: {
        copyright: "© 2026 Egypt Holiday Aswan Ltd. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use",
        cancellation: "Cancellation Policy"
      },
      contact: {
        subtitle: "Start your journey today. Our team is always available to assist you.",
        form_name: "Full Name",
        name_placeholder: "John Doe",
        form_email: "Email Address",
        form_message: "Message",
        btn_send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! We will get back to you soon.",
        fail: "Failed to send message. Please try again.",
        error: "An error occurred while sending the message.",
        info_address: "Address",
        info_canada_loc: "Canada Location:",
        info_egypt_loc: "Egypt Location:",
        info_phone: "Phone",
        info_email: "Email"
      },
      about: {
        title: "About Us",
        subtitle: "Get to know us more",
        journey_title: "Our Journey",
        journey_p1: "Founded in 2004, Egypt Holidays began as a collaboration between passionate travel experts with a shared vision: to create unique and unforgettable journeys throughout Egypt. From humble beginnings, we have grown step by step, expanding our services to highlight the country’s diverse wonders, hidden treasures, and unique gems.",
        journey_p2: "Throughout our journey, we have earned the trust and appreciation of our travelers, whose consistent support has been the cornerstone of our success. From the golden sands of the Sahara to the vibrant life along the Nile, and the breathtaking Red Sea and Sinai beaches, we remain committed to providing exceptional travel experiences.",
        journey_p3: "Today, with offices in Egypt and a partnership branch in Canada, we continue to connect people to the soul of Egypt. Whether it’s your first trip or a return adventure, we are here to make your journey unforgettable.",
        years_exp: "Years of experience",
        values_title: "Our Values",
        val_auth: "Authenticity",
        val_auth_desc: "Creating experiences that truly capture the essence of Egypt.",
        val_exc: "Excellence",
        val_exc_desc: "Delivering unmatched quality in every detail.",
        val_com: "Community",
        val_com_desc: "Building lasting relationships with our travelers and partners.",
        why_choose: "Why Choose Us?",
        why_1: "Over 20 years of experience in crafting unforgettable trips.",
        why_2: "Local expertise combined with global connections.",
        why_3: "Personalized itineraries tailored to your dreams."
      },
      category: {
        aswan_title: "Aswan Tours & Day Trips",
        aswan_desc: "Aswan is where the magic of the Nile truly comes to life! With its stunning river views, colorful Nubian villages, and incredible temples, this city is the perfect mix of history and relaxation. Sail on a traditional felucca, explore the beautiful Philae Temple, or visit the famous Aswan High Dam. Whether you want adventure or a peaceful escape, Aswan will steal your heart!",
        luxor_title: "Luxor Excursions & Packages",
        luxor_desc: "Luxor is a dream destination for history lovers! Home to the world’s most breathtaking temples and tombs.",
        cairo_title: "Cairo & Pyramids Packages",
        cairo_desc: "Cairo, the vibrant capital of Egypt, is the largest city in both Africa and the Arab world.",
        abu_simbel_title: "Abu Simbel Sacred Excursions",
        abu_simbel_desc: "Abu Simbel is a must-see wonder that will leave you speechless!",
        historical_title: "Historical Wonders & Long Packages",
        historical_desc: "Experience the magic of Egypt with our carefully curated historical itineraries. From the pulse of Cairo to the serenity of the Nile, these journeys offer a perfect blend of history, culture, and relaxation.",
        cruises_title: "Nile River Cruises",
        cruises_desc: "Experience the heartbeat of Egypt. From legendary vessels to ultra-luxury cruises, discover your perfect journey."
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        tours: "Forfaits",
        all_tours: "Tous les circuits",
        nile_cruise: "Croisière sur le Nil",
        policies: "Politiques",
        contact: "Contactez-nous",
        aswan_tours: "Excursions à Assouan",
        luxor_tours: "Excursions à Louxor",
        cairo_tours: "Excursions au Caire",
        abu_simbel_tours: "Excursions à Abou Simbel",
        historical_wonders: "Merveilles historiques"
      },
      hero: {
        title: "Découvrez la véritable essence de l'Égypte",
        subtitle: "Découvrez des merveilles historiques, des trésors cachés et des voyages inoubliables conçus sur mesure pour vous.",
        btn_book: "Réservez votre aventure",
        top_cruise: "Les meilleures croisières sur le Nil",
        discover_packages: "Découvrez nos superbes forfaits"
      },
      common: {
        start_from: "À partir de",
        price_from: "Prix à partir de",
        book_now: "Réserver",
        package_features: "Détails du forfait",
        duration: "Durée",
        per_person: "/ USD",
        excellent: "Excellent",
        back_to_home: "Retour à l'accueil"
      },
      home: {
        reviews_title: "Chaque voyage que nous créons est conçu avec soin et organisé par des personnes qui connaissent vraiment l'Égypte. Découvrez ce que nos clients disent de leurs voyages avec nous",
        see_reviews: "VOIR NOS AVIS SUR TRIPADVISOR",
        trust_title: "Voyagez en toute confiance",
        canada_reg: "Registres des entreprises du Canada",
        square_pay: "Paiements traités en toute sécurité par Square"
      },
      footer: {
        copyright: "© 2026 Egypt Holiday Aswan Ltd. Tous droits réservés.",
        privacy: "Politique de confidentialité",
        terms: "Conditions d'utilisation",
        cancellation: "Politique d'annulation"
      },
      contact: {
        subtitle: "Commencez votre voyage dès aujourd'hui. Notre équipe est toujours disponible pour vous aider.",
        form_name: "Nom complet",
        name_placeholder: "Jean Dupont",
        form_email: "Adresse e-mail",
        form_message: "Message",
        btn_send: "Envoyer le message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès! Nous vous répondrons bientôt.",
        fail: "Échec de l'envoi du message. Veuillez réessayer.",
        error: "Une erreur est survenue lors de l'envoi du message.",
        info_address: "Adresse",
        info_canada_loc: "Emplacement au Canada:",
        info_egypt_loc: "Emplacement en Égypte:",
        info_phone: "Téléphone",
        info_email: "E-mail"
      },
      about: {
        title: "À Propos",
        subtitle: "Apprenez à mieux nous connaître",
        journey_title: "Notre parcours",
        journey_p1: "Fondée en 2004, Egypt Holidays a commencé comme une collaboration entre des experts en voyages passionnés partageant une vision commune : créer des voyages uniques et inoubliables à travers l'Égypte. Depuis nos humbles débuts, nous avons grandi étape par étape, élargissant nos services pour mettre en valeur les merveilles diverses du pays, ses trésors cachés et ses joyaux uniques.",
        journey_p2: "Tout au long de notre parcours, nous avons gagné la confiance et l'appréciation de nos voyageurs, dont le soutien constant a été la pierre aquatique de notre succès. Des sables dorés du Sahara à la vie vibrante le long du Nil, en passant par les plages époustouflantes de la mer Rouge et du Sinaï, nous restons déterminés à offrir des expériences de voyage exceptionnelles.",
        journey_p3: "Aujourd'hui, avec des bureaux en Égypte et une succursale partenaire au Canada, nous continuons de connecter les gens à l'âme de l'Égypte. Qu'il s'agisse de votre premier voyage ou d'une nouvelle aventure, nous sommes là pour rendre votre voyage inoubliable.",
        years_exp: "Années d'expérience",
        values_title: "Nos valeurs",
        val_auth: "Authenticité",
        val_auth_desc: "Créer des expériences qui capturent véritablement l'essence de l'Égypte.",
        val_exc: "Excellence",
        val_exc_desc: "Offrir une qualité inégalée dans chaque détail.",
        val_com: "Communauté",
        val_com_desc: "Établir des relations durables avec nos voyageurs et partenaires.",
        why_choose: "Pourquoi nous choisir ?",
        why_1: "Plus de 20 ans d'expérience dans la création de voyages inoubliables.",
        why_2: "Une expertise locale combinée à des connexions mondiales.",
        why_3: "Des itinéraires personnalisés adaptés à vos rêves."
      },
      category: {
        aswan_title: "Circuits et excursions à Assouan",
        aswan_desc: "Assouan est l'endroit où la magie du Nil prend vraiment vie ! Avec ses vues imprenables sur le fleuve, ses villages nubiens colorés et ses temples incroyables, cette ville est le mélange parfait d'histoire et de détente. Naviguez sur une felouque traditionnelle, explorez le magnifique temple de Philae ou visitez le célèbre haut barrage. Que vous recherchiez l'aventure ou une évasion paisible, Assouan saura vous séduire !",
        luxor_title: "Excursions et forfaits à Louxor",
        luxor_desc: "Louxor est une destination de rêve pour les amateurs d'histoire ! Elle abrite les temples et les tombes les plus époustouflants au monde.",
        cairo_title: "Forfaits Le Caire et Pyramides",
        cairo_desc: "Le Caire, la vibrante capitale de l'Égypte, est la plus grande ville d'Afrique et du monde arabe.",
        abu_simbel_title: "Excursions sacrées d'Abou Simbel",
        abu_simbel_desc: "Abou Simbel est une merveille incontournable qui vous laissera sans voix !",
        historical_title: "Merveilles historiques et longs séjours",
        historical_desc: "Vivez la magie de l'Égypte avec nos itinéraires historiques soigneusement sélectionnés. Du pouls du Caire à la sérénité du Nil, ces voyages offrent un mélange parfait d'histoire, de culture et de détente.",
        cruises_title: "Croisières sur le Nil",
        cruises_desc: "Découvrez le cœur battant de l'Égypte. Des navires légendaires aux croisières ultra-luxueuses, trouvez votre voyage parfait."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;