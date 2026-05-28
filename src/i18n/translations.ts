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
    items: TimelineItem[]; // TODO: adjust times and event names
  };
  locations: {
    title: string;
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
    submitting: string;
    errorMessage: string;
  };
  contact: {
    title: string;
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
      togetherWith: 'Dear family and friends!',
      inviteLine: 'We warmly invite you to our wedding to celebrate together on this big day.',
    },
    aboutUs: {
      title: 'About Us',
      bride: 'Ági',
      groom: 'Atti',
      brideText:
        '#code #travel #sudoku #pizza',
      groomText:
        '#frontend #boardGames #eataly #plants',
      storyTitle: 'Our Story',
      storyText:
        'Our story is a special one, because we have been together for over eight years and have known each other for over twenty-two years. School, university, work, traveling together, many shared experiences and adventures are behind us.',
    },
    timeline: {
      title: 'Schedule',
      items: [
        {
          time: '11:30',
          title: 'Civil Ceremony',
          description: 'Hurry, don\'t miss it, because it won\'t last long.',
        },
        {
          time: '12:30',
          title: 'Religious Ceremony',
          description: 'Here we say the most important "yes".',
        },
        {
          time: '14:00',
          title: 'Wedding Party',
          description: 'The party starts, with good food, plenty of drinks, and lots of fun.',
        },
        { time: '23:00', title: 'End of the Party', description: 'The party officially ends, but the memories will last forever.' },
      ],
    },
    locations: {
      title: 'Locations',
      ceremonyTitle: 'Civil Ceremony',
      ceremonyName: 'Pavilion in Central Park',
      ceremonyAddress: 'Cluj-Napoca, Central Park',
      ceremonyMapUrl: 'https://maps.app.goo.gl/eWBNNCt8tgR3qfqv5',
      churchTitle: 'Church Ceremony',
      churchName: 'St. Stephen’s Church',
      churchAddress: 'Cluj-Napoca, Donath Street 114',
      churchMapUrl: 'https://maps.app.goo.gl/PAXoNZxQERd7rRCn9',
      receptionTitle: 'Wedding Party',
      receptionName: 'Il Noce',
      receptionAddress: 'Săvădisla, Main Street 21',
      receptionMapUrl: 'https://maps.app.goo.gl/UhoYa6kmyyuhDxuG7',
      getDirections: 'View Map',
    },
    rsvp: {
      title: 'RSVP',
      subtitle: 'Please let us know you are coming',
      deadlineNote: 'Kindly respond by',
      deadline: 'July 25, 2026',
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
      submitting: 'Sending…',
      errorMessage: 'Something went wrong. Please try again or contact us directly.',
    },
    contact: {
      title: 'Contact',
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
      togetherWith: 'Kedves családunk és barátaink!',
      inviteLine: 'Szeretettel meghívunk az esküvőnkre, hogy együtt ünnepelhessünk ezen a nagy napon.',
    },
    aboutUs: {
      title: 'Rólunk',
      bride: 'Ági',
      groom: 'Atti',
      brideText:
        '#code #travel #sudoku #pizza',
      groomText:
        '#frontend #boardGames #eataly #plants',
      storyTitle: 'A mi történetünk',
      storyText:
        'A mi történetünk nagyon különleges, ugyanis már több mint nyolc éve alkotunk egy párt és több mint huszonkét éve ismerjük egymást. Iskola, egyetem, munkahely, közös utazások, sok-sok közös élmény és kaland van a hátunk mögött. ',
    },
    timeline: {
      title: 'Program',
      items: [
        { time: '11:30', title: 'Polgári esküvő', description: 'Siess, le ne késd, mert nem tart sokat.' },
        {
          time: '12:30',
          title: 'Egyházi szertartás',
          description: 'Itt mondjuk ki a legfontosabb igent.',
        },
        { time: '14:00', title: 'Lakodalom', description: 'Kezdődhet a buli, eszem-iszom dínom-dánom.' },
        { time: '23:00', title: 'A buli vége', description: 'A buli hivatalosan véget ér, az emlékek örökre megmaradnak.' },
      ],
    },
    locations: {
      title: 'Helyszínek',
      ceremonyTitle: 'Polgári esküvő',
      ceremonyName: 'Sétatéri pavilon',
      ceremonyAddress: 'Kolozsvár, Sétatér',
      ceremonyMapUrl: 'https://maps.app.goo.gl/eWBNNCt8tgR3qfqv5',
      churchTitle: 'Egyházi szertartás',
      churchName: 'Szent István templom',
      churchAddress: 'Kolozsvár, Donát út 114',
      churchMapUrl: 'https://maps.app.goo.gl/PAXoNZxQERd7rRCn9',
      receptionTitle: 'Lakodalom',
      receptionName: 'Il Noce',
      receptionAddress: 'Tordaszentlászló, Fő út 21',
      receptionMapUrl: 'https://maps.app.goo.gl/UhoYa6kmyyuhDxuG7',
      getDirections: 'Térkép',
    },
    rsvp: {
      title: 'Visszajelzés',
      subtitle: 'Kérjük, jelezz vissza, hogy eljössz',
      deadlineNote: 'Visszajelzési határidő',
      deadline: '2026. július 25.',
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
      submitting: 'Küldés…',
      errorMessage: 'Hiba történt. Kérjük, próbáld újra, vagy lépj kapcsolatba velünk.',
    },
    contact: {
      title: 'Kapcsolat',
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
      togetherWith: 'Draga noastră familie și prieteni',
      inviteLine: 'Vă invităm cu drag la nunta noastră pentru a sărbători împreună această zi specială.',
    },
    aboutUs: {
      title: 'Despre noi',
      bride: 'Ági',
      groom: 'Atti',
      brideText:
        '#code #travel #sudoku #pizza',
      groomText:
        '#frontend #boardGames #eataly #plants',
      storyTitle: 'Povestea noastră',
      storyText:
        'Povestea noastră este una specială, pentru că suntem împreună de peste opt ani și ne cunoaștem de peste douăzeci și doi de ani. Școală, facultate, loc de muncă, călătorii împreună, multe experiențe și aventuri comune stau în spatele nostru.',
    },
    timeline: {
      title: 'Program',
      items: [
        {
          time: '11:30',
          title: 'Ceremonia civilă',
          description: 'Grăbește-te să nu o ratezi, pentru că nu durează mult.',
        },
        {
          time: '12:30',
          title: 'Ceremonia religioasă',
          description: 'Aici rostim cel mai important „da”.',
        },
        {
          time: '14:00',
          title: 'Nunta',
          description: 'Începe petrecerea, cu mâncare bună, băutură din belșug și multă voie bună.',
        },
        {
          time: '23:00',
          title: 'Sfârșitul party-ului',
          description: 'Party-ul se încheie oficial, dar amintirile vor rămâne pentru totdeauna.',
        },
      ],
    },
    locations: {
      title: 'Locații',
      ceremonyTitle: 'Ceremonia civilă',
      ceremonyName: 'Foișorul din Parcul Central',
      ceremonyAddress: 'Cluj-Napoca, Parcul Central',
      ceremonyMapUrl: 'https://maps.app.goo.gl/eWBNNCt8tgR3qfqv5',
      churchTitle: 'Ceremonia religioasă',
      churchName: 'Biserica Sfântul Ștefan',
      churchAddress: 'Cluj-Napoca, Strada Donath 114',
      churchMapUrl: 'https://maps.app.goo.gl/PAXoNZxQERd7rRCn9',
      receptionTitle: 'Nunta',
      receptionName: 'Il Noce',
      receptionAddress: 'Săvădisla, Strada Principală 21',
      receptionMapUrl: 'https://maps.app.goo.gl/UhoYa6kmyyuhDxuG7',
      getDirections: 'Hartă',
    },
    rsvp: {
      title: 'Confirmare prezență',
      subtitle: 'Vă rugăm să ne confirmați prezența',
      deadlineNote: 'Termen de confirmare',
      deadline: '25 iulie 2026',
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
      submitting: 'Se trimite…',
      errorMessage: 'Ceva nu a funcționat. Încercați din nou sau contactați-ne direct.',
    },
    contact: {
      title: 'Contact',
      brideLabel: 'Ági',
      groomLabel: 'Atti',
      brideEmail: 'fustosagi@yahoo.com',
      bridePhone: '+40 741 904 210',
      groomEmail: 'orban.attila@yahoo.com',
      groomPhone: '+40 722 225 678',
    },
  },
};
