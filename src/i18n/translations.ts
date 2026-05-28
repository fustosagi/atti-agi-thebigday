// ─────────────────────────────────────────────────────────────────────────────
// Replace all TODO values below with your actual wedding details.
// ─────────────────────────────────────────────────────────────────────────────

export type Language = 'en' | 'hu' | 'ro';

export interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

export interface Translation {
  nav: {
    aboutUs: string;
    timeline: string;
    locations: string;
    rsvp: string;
    contact: string;
  };
  hero: {
    coupleNames: string;
    date: string;
    togetherWith: string;
    inviteLine: string;
  };
  aboutUs: {
    title: string;
    bride: string;
    groom: string;
    brideText: string; // TODO: short bride bio
    groomText: string; // TODO: short groom bio
    storyTitle: string;
    storyText: string; // TODO: your love story
  };
  timeline: {
    title: string;
    subtitle: string;
    items: TimelineItem[]; // TODO: adjust times and event names
  };
  locations: {
    title: string;
    subtitle: string;
    ceremonyTitle: string;
    ceremonyName: string; // TODO: ceremony venue name
    ceremonyAddress: string; // TODO: ceremony address
    ceremonyMapUrl: string; // TODO: Google Maps link
    churchTitle: string;
    churchName: string; // TODO: church name
    churchAddress: string; // TODO: church address
    churchMapUrl: string; // TODO: Google Maps link
    receptionTitle: string;
    receptionName: string; // TODO: reception venue name
    receptionAddress: string; // TODO: reception address
    receptionMapUrl: string; // TODO: Google Maps link
    getDirections: string;
  };
  rsvp: {
    title: string;
    subtitle: string;
    deadlineNote: string;
    deadline: string; // TODO: RSVP deadline
    nameLabel: string;
    namePlaceholder: string;
    attendingLabel: string;
    attendingYes: string;
    attendingNo: string;
    guestsLabel: string;
    dietaryLabel: string;
    dietaryPlaceholder: string;
    noteLabel: string;
    notePlaceholder: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    declineMessage: string;
    childrenNote: string;
    submitting: string;
    errorMessage: string;
  };
  contact: {
    title: string;
    subtitle: string;
    brideLabel: string;
    groomLabel: string;
    brideEmail: string; // TODO: bride email
    bridePhone: string; // TODO: bride phone
    groomEmail: string; // TODO: groom email
    groomPhone: string; // TODO: groom phone
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      aboutUs: 'About Us',
      timeline: 'Schedule',
      locations: 'Locations',
      rsvp: 'RSVP',
      contact: 'Contact',
    },
    hero: {
      coupleNames: 'Atti & Ági',
      date: 'August 15, 2026',
      togetherWith: 'Together with their families',
      inviteLine: 'invite you to join their celebration',
    },
    aboutUs: {
      title: 'About Us',
      bride: 'Ági',
      groom: 'Atti',
      brideText:
        'Replace this with a short paragraph about the bride — her passions, career, or a fun fact that your guests will love.',
      groomText:
        'Replace this with a short paragraph about the groom — his passions, career, or a fun fact that your guests will love.',
      storyTitle: 'Our Story',
      storyText:
        'How did you two meet? This is your space to share the story behind the love — from the first glance to the moment you decided to spend forever together. Replace this placeholder with your own words.',
    },
    timeline: {
      title: 'Schedule',
      subtitle: 'The plan for our big day',
      items: [
        {
          time: '11:30',
          title: 'Civil Ceremony',
          description: 'We say our vows in the presence of family and friends.',
        },
        {
          time: '12:30',
          title: 'Religious Ceremony',
          description: 'We say our vows in the presence of family and friends.',
        },
        {
          time: '14:00',
          title: 'Wedding Party',
          description: 'A sit-down dinner filled with laughter, toasts, and great food.',
        },
        { time: '23:00', title: 'End of the Party', description: 'The party wraps up. Safe travels home!' },
      ],
    },
    locations: {
      title: 'Locations',
      subtitle: 'Where to find us',
      ceremonyTitle: 'Civil Ceremony',
      ceremonyName: 'Venue Name',
      ceremonyAddress: '123 City Hall Street, City, Country',
      ceremonyMapUrl: 'https://maps.google.com',
      churchTitle: 'Church Ceremony',
      churchName: 'Church Name',
      churchAddress: '123 Church Street, City, Country',
      churchMapUrl: 'https://maps.google.com',
      receptionTitle: 'Reception',
      receptionName: 'Reception Venue',
      receptionAddress: '123 Venue Street, City, Country',
      receptionMapUrl: 'https://maps.google.com',
      getDirections: 'Get Directions',
    },
    rsvp: {
      title: 'RSVP',
      subtitle: 'Please let us know you are coming',
      deadlineNote: 'Kindly respond by',
      deadline: 'August 1, 2025',
      nameLabel: 'Full name',
      namePlaceholder: 'Your full name',
      attendingLabel: 'Will you attend?',
      attendingYes: 'Happily accepts',
      attendingNo: 'Regretfully declines',
      guestsLabel: 'Number of guests (including yourself)',
      dietaryLabel: 'Dietary restrictions',
      dietaryPlaceholder: 'Vegetarian, vegan, allergies…',
      noteLabel: 'Message to the couple',
      notePlaceholder: 'A note or song request…',
      submit: 'Send RSVP',
      successTitle: 'Thank you!',
      successMessage: 'Your RSVP has been received. We cannot wait to celebrate with you!',
      declineMessage: 'We are sorry you cannot make it. Thank you for letting us know.',
      childrenNote: 'Please note: the ceremony and reception are kindly adults only.',
      submitting: 'Sending…',
      errorMessage: 'Something went wrong. Please try again or contact us directly.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have a question? We would love to hear from you.',
      brideLabel: 'Ági',
      groomLabel: 'Atti',
      brideEmail: 'fustosagi@yahoo.com',
      bridePhone: '+40 741 904 210',
      groomEmail: 'orban.attila@yahoo.com',
      groomPhone: '+40 722 225 678',
    },
  },

  hu: {
    nav: {
      aboutUs: 'Rólunk',
      timeline: 'Program',
      locations: 'Helyszínek',
      rsvp: 'Visszajelzés',
      contact: 'Kapcsolat',
    },
    hero: {
      coupleNames: 'Atti & Ági',
      date: '2026. augusztus 15',
      togetherWith: 'Családjaik társaságában',
      inviteLine: 'szeretettel meghívnak ünneplésükre',
    },
    aboutUs: {
      title: 'Rólunk',
      bride: 'Ági',
      groom: 'Atti',
      brideText:
        'Cseréld le ezt a szöveget egy rövid bemutatkozóra a menyasszonyról — szenvedélyeiről, munkájáról vagy egy érdekes tényről, amit a vendégek szívesen olvasnak.',
      groomText:
        'Cseréld le ezt a szöveget egy rövid bemutatkozóra a vőlegényről — szenvedélyeiről, munkájáról vagy egy érdekes tényről, amit a vendégek szívesen olvasnak.',
      storyTitle: 'A mi történetünk',
      storyText:
        'Hogyan találkoztatok? Ez a hely arra való, hogy elmeséljétek a szerelmetek történetét — az első pillantástól egészen addig a pillanatig, amikor eldöntöttétek, hogy örökre együtt maradtok. Cseréljétek le ezt a szöveget a saját szavaitokra.',
    },
    timeline: {
      title: 'Program',
      subtitle: 'Az esküvői nap menete',
      items: [
        { time: '11:30', title: 'Polgári esküvő', description: 'Kimondják a fogadalmukat a szeretteik jelenlétében.' },
        {
          time: '12:30',
          title: 'Egyházi szertartás',
          description: 'Kimondják a fogadalmukat a szeretteik jelenlétében.',
        },
        { time: '14:00', title: 'Lakodalom', description: 'A pár elindul a házába.' },
        { time: '23:00', title: 'A buli vége', description: 'A buli véget ér. Jó utat mindenkinek!' },
      ],
    },
    locations: {
      title: 'Helyszínek',
      subtitle: 'Hol találjátok a párt',
      ceremonyTitle: 'Polgári esküvő',
      ceremonyName: 'Helyszín neve',
      ceremonyAddress: 'Utca neve 123, Város, Ország',
      ceremonyMapUrl: 'https://maps.google.com',
      churchTitle: 'Egyházi szertartás',
      churchName: 'Templom neve',
      churchAddress: 'Utca neve 456, Város, Ország',
      churchMapUrl: 'https://maps.google.com',
      receptionTitle: 'Lakodalom',
      receptionName: 'A fogadás helyszíne',
      receptionAddress: 'Utca neve 789, Város, Ország',
      receptionMapUrl: 'https://maps.google.com',
      getDirections: 'Útvonaltervezés',
    },
    rsvp: {
      title: 'Visszajelzés',
      subtitle: 'Kérjük, jelezz vissza, hogy eljössz',
      deadlineNote: 'Visszajelzési határidő',
      deadline: '2025. augusztus 1.',
      nameLabel: 'Teljes neved',
      namePlaceholder: 'Teljes neve',
      attendingLabel: 'Részt veszel az ünnepségen?',
      attendingYes: 'Örömmel részt veszek',
      attendingNo: 'Sajnos nem tudok részt venni',
      guestsLabel: 'Vendégek száma (önmagaddal együtt)',
      dietaryLabel: 'Étkezési igények',
      dietaryPlaceholder: 'Vegetáriánus, vegán, allergiák…',
      noteLabel: 'Üzenet a párnak',
      notePlaceholder: 'Üzenet vagy zenei kívánság…',
      submit: 'Visszajelzés küldése',
      successTitle: 'Köszönjük!',
      successMessage: 'A visszajelzésedet megkaptuk. Alig várjuk, hogy együtt ünnepeljünk!',
      declineMessage: 'Sajnáljuk, hogy nem tudsz eljönni. Köszönjük, hogy jelezted.',
      childrenNote: 'Megjegyzés: az ünnepség csak felnőtteknek szól.',
      submitting: 'Küldés…',
      errorMessage: 'Hiba történt. Kérjük, próbáld újra, vagy lépj kapcsolatba velünk.',
    },
    contact: {
      title: 'Kapcsolat',
      subtitle: 'Kérdésed van? Szívesen hallunk rólad.',
      brideLabel: 'Ági',
      groomLabel: 'Atti',
      brideEmail: 'fustosagi@yahoo.com',
      bridePhone: '+40 741 904 210',
      groomEmail: 'orban.attila@yahoo.com',
      groomPhone: '+40 722 225 678',
    },
  },

  ro: {
    nav: {
      aboutUs: 'Despre noi',
      timeline: 'Program',
      locations: 'Locații',
      rsvp: 'Confirmare',
      contact: 'Contact',
    },
    hero: {
      coupleNames: 'Atti & Ági',
      date: '15 august 2026',
      togetherWith: 'Împreună cu familiile lor',
      inviteLine: 'vă invită să le fiți alături',
    },
    aboutUs: {
      title: 'Despre noi',
      bride: 'Ági',
      groom: 'Atti',
      brideText:
        'Înlocuiți acest text cu o scurtă prezentare a miresei — pasiunile, cariera sau un detaliu amuzant pe care invitații vor dori să îl afle.',
      groomText:
        'Înlocuiți acest text cu o scurtă prezentare a mirelui — pasiunile, cariera sau un detaliu amuzant pe care invitații vor dori să îl afle.',
      storyTitle: 'Povestea noastră',
      storyText:
        'Cum v-ați cunoscut? Acesta este spațiul în care puteți spune povestea de dragoste — de la prima privire până în momentul în care ați decis să fiți împreună pentru totdeauna. Înlocuiți acest text cu propriile cuvinte.',
    },
    timeline: {
      title: 'Program',
      subtitle: 'Cum va arăta ziua nunții',
      items: [
        {
          time: '11:30',
          title: 'Ceremonia civilă',
          description: 'Ne rostim jurămintele în prezența familiei și prietenilor.',
        },
        {
          time: '12:30',
          title: 'Ceremonia religioasă',
          description: 'Băuturi și aperitive în timp ce facem fotografii.',
        },
        {
          time: '14:00',
          title: 'Nunta',
          description: 'Ne rostim jurămintele în prezența familiei și prietenilor.',
        },
        {
          time: '23:00',
          title: 'Sfârșitul party-ului',
          description: 'Party-ul se încheie. Călătorie plăcută tuturor!',
        },
      ],
    },
    locations: {
      title: 'Locații',
      subtitle: 'Unde ne găsiți',
      ceremonyTitle: 'Ceremonia civilă',
      ceremonyName: 'Numele locației',
      ceremonyAddress: 'Strada Exemplu 123, Oraș, Țară',
      ceremonyMapUrl: 'https://maps.google.com',
      churchTitle: 'Ceremonia religioasă',
      churchName: 'Numele bisericii',
      churchAddress: 'Strada Exemplu 456, Oraș, Țară',
      churchMapUrl: 'https://maps.google.com',
      receptionTitle: 'Recepția',
      receptionName: 'Locația recepției',
      receptionAddress: 'Bulevardul Exemplu 789, Oraș, Țară',
      receptionMapUrl: 'https://maps.google.com',
      getDirections: 'Obțineți indicații',
    },
    rsvp: {
      title: 'Confirmare prezență',
      subtitle: 'Vă rugăm să ne confirmați prezența',
      deadlineNote: 'Termen de confirmare',
      deadline: '1 august 2025',
      nameLabel: 'Numele complet',
      namePlaceholder: 'Numele dumneavoastră complet',
      attendingLabel: 'Veți participa?',
      attendingYes: 'Acceptă cu plăcere',
      attendingNo: 'Nu poate participa',
      guestsLabel: 'Număr de persoane (inclusiv dumneavoastră)',
      dietaryLabel: 'Preferințe alimentare',
      dietaryPlaceholder: 'Vegetarian, vegan, alergii…',
      noteLabel: 'Mesaj pentru cuplu',
      notePlaceholder: 'Un mesaj sau o dorință muzicală…',
      submit: 'Trimite confirmarea',
      successTitle: 'Mulțumim!',
      successMessage: 'Confirmarea a fost primită. Abia așteptăm să sărbătorim împreună cu voi!',
      declineMessage: 'Ne pare rău că nu puteți fi alături de noi. Vă mulțumim că ați anunțat.',
      childrenNote: 'Notă: ceremonia și recepția sunt rezervate exclusiv adulților.',
      submitting: 'Se trimite…',
      errorMessage: 'Ceva nu a funcționat. Încercați din nou sau contactați-ne direct.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Aveți întrebări? Ne bucurăm să auzim de voi.',
      brideLabel: 'Ági',
      groomLabel: 'Atti',
      brideEmail: 'fustosagi@yahoo.com',
      bridePhone: '+40 741 904 210',
      groomEmail: 'orban.attila@yahoo.com',
      groomPhone: '+40 722 225 678',
    },
  },
};
