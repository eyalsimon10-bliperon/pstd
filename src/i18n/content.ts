export type Lang = 'he' | 'en'

export const content = {
  en: {
    dir: 'ltr' as const,
    langLabel: 'עברית',
    skip: 'Skip to content',
    brand: 'PSTD',
    org: 'The Post-Traumatic Support Center',
    tagline: 'No Longer Invisible',
    nav: {
      reality: 'Reality',
      facts: 'Facts',
      model: 'Model',
      place: 'Place',
      outdoor: 'Recovery',
      invest: 'Partner',
    },
    hero: {
      headline: 'No Longer Invisible',
      support:
        'They risked their lives to protect our homes. Today, their souls are bleeding in silence.',
      partnership: 'Partnership to Save Lives · 2024–2025',
      ctaHelp: 'Get confidential help',
      ctaPartner: 'Stand with us',
      sub: 'The real battle doesn’t end on the battlefield. It begins when they come home.',
    },
    reality: {
      kicker: '01 · The Brutal Reality',
      headline: 'You see them smile. Inside, the war never ended.',
      lead:
        'Behind every story of valor stand thousands of men and women still fighting invisible scars.',
      body: 'Post-Traumatic Stress Disorder (PTSD) is not a flaw, nor a fate to accept — it is a severe, bleeding wound of the soul, inflicted in the darkest moments of combat. A smile after war does not mean someone returned whole. Many keep fighting at night, at home, alone.',
      points: [
        'Invisible injury ≠ weakness',
        'Immediate care saves lives',
        'Complete confidentiality',
        'No veteran left alone',
      ],
      promiseTitle: 'Our Promise',
      promise:
        'Those who protected us in our darkest hours deserve unwavering support so they never have to fight alone.',
      promiseBody:
        'The Center exists to provide real backing: a safe sanctuary, professional care, and a community that understands without unnecessary words.',
      caption:
        'The war does not end at the front door — sometimes that is where it truly begins.',
    },
    facts: {
      kicker: '01 · The Facts We Cannot Ignore',
      headline: 'The numbers that demand action — now.',
      lead:
        'This is not abstract data. Behind every figure stands a veteran, a family, and another night without care.',
      items: [
        {
          title: 'Unprecedented Surge',
          body: 'Cases of acute trauma and PTSD have skyrocketed by hundreds of percent. Tens of thousands of soldiers face overwhelming distress — and the system cannot keep up.',
        },
        {
          title: 'The Silent Suicide Crisis',
          body: 'Veterans who survived enemy fire are being defeated at home by their inner demons. Rates of suicide and silent despair are rising fast. Every day without intervention can cost a life.',
        },
        {
          title: 'Devastating Waitlists',
          body: 'Bureaucracy and shortages leave hundreds waiting months for care — months when families collapse and lives unravel in isolation.',
        },
      ],
      closer:
        'Every day of waiting is a day a veteran faces the darkness alone. Immediate care is not a luxury — it is life-saving.',
    },
    model: {
      kicker: '02 · The Core Sanctuary Model',
      headline: 'An invisible injury demands a visible, immediate, and dignified response.',
      lead:
        'A confidential, secure, and accessible sanctuary. Here, veterans can lower their defenses, reconnect with brothers- and sisters-in-arms, and begin real recovery — without judgment, without red tape, and with full dignity.',
      pillars: [
        {
          num: '01',
          title: 'Community Lounge',
          body: 'A warm, judgment-free haven for rest, peer connection, and a welcoming coffee cart.',
          image: '/images/model-community.jpg',
        },
        {
          num: '02',
          title: 'Professional Care',
          body: 'One-on-one psychological support, guided peer groups, and total anonymity with zero bureaucracy.',
          image: '/images/model-care.jpg',
        },
        {
          num: '03',
          title: 'Mind & Body Studio',
          body: 'Yoga, mindfulness, and somatic practice to restore nervous-system balance and calm.',
          image: '/images/space-nature.jpg',
        },
      ],
      footer:
        'One holistic envelope: community · professional care · mind & body — restoring control over life.',
      values: 'Confidential · Accessible · Professional · Human',
    },
    place: {
      kicker: '02 · Place Vision',
      headline: 'Not a clinical institution. A healing village of light and dignity.',
      lead:
        'A large, bright, welcoming campus — with the feeling of a boutique hotel and resort village.',
      body: 'At the heart: a central hall flooded with natural light, combining wood and natural stone. Around it: large separate wings, calm pathways, lawns and nature — a magical place that invites veterans to lower their defenses and breathe again.',
      isTitle: 'What it is',
      is: 'Hotel · Resort village · Grass & nature · Warm, dignified welcome',
      isNotTitle: 'What it is not',
      isNot: 'Not a locked ward · Not an asylum · Not a cold institutional feeling',
      spacesKicker: 'Spaces Inside the Campus',
      spacesHeadline: 'Spaces that support — each in their own way.',
      spacesLead:
        'Every wing answers a different need: quiet, creation, stress release, connection to nature — so every veteran can find their own path back.',
      spaces: [
        {
          title: 'Botanical Garden & Round Greenhouse',
          body: 'Plants, light, and calm — a living space that reconnects breath and nature.',
          image: '/images/space-greenhouse.jpg',
        },
        {
          title: 'Paths & Ornamental Ponds',
          body: 'Gentle walks between wings, water and fish — a rhythm that slows the mind.',
          image: '/images/space-ponds.jpg',
        },
        {
          title: 'Music Room',
          body: 'Instruments, sound, and creation — an emotional channel beyond words.',
          image: '/images/space-music.jpg',
        },
        {
          title: 'Training Room · Stretch Off',
          body: 'Hanging bags and gloves — safe, focused stress release.',
          image: '/images/space-training.jpg',
        },
        {
          title: 'Nature Corner',
          body: 'Benches and hammocks on the lawn — real rest in open air.',
          image: '/images/space-nature.jpg',
        },
        {
          title: 'Welcoming Main Hall',
          body: 'A large, bright space that greets you like home — not an institution.',
          image: '/images/space-hall.jpg',
        },
      ],
      caption:
        'When you see the place, you understand: this is where people come to heal with dignity.',
    },
    outdoor: {
      kicker: '03 · Experiential & Outdoor Recovery',
      headline: 'Healing extends far beyond the therapy room.',
      lead: 'It happens in nature, on water, and through shared challenge.',
      body: 'We bring recovery into the field through high-impact experiential programs that rebuild trust, capability, and a sense of life.',
      programs: [
        {
          title: 'Equine Therapy',
          body: 'Rebuilding trust, calm, and emotional regulation through horses.',
          image: '/images/exp-equine.jpg',
        },
        {
          title: 'Water Sports & Kayaking',
          body: 'Freedom, focus, and release on the water.',
          image: '/images/exp-water.jpg',
        },
        {
          title: 'Off-Road Expeditions',
          body: 'Peer bonding and resilience through guided nature journeys.',
          image: '/images/exp-offroad.jpg',
        },
        {
          title: 'Resilience Challenges',
          body: 'Team missions and escape rooms that restore confidence.',
          image: '/images/invest-cta.jpg',
        },
      ],
      traits: [
        'Trust rebuilt',
        'Resilience through experience',
        'Brothers- and sisters-in-arms',
        'A return to living',
      ],
      footer:
        'Recovery that also happens outside — together, in the field, with capability returning.',
    },
    invest: {
      kicker: '04 · Investment & National Resilience',
      headline: 'This is not merely charity.',
      lead:
        'It is a moral obligation and a strategic investment in all of our futures.',
      body: 'The surging PTSD crisis threatens Israel’s social fabric and national resilience. Your partnership is a direct investment in saving lives, eliminating waitlists, and giving our heroes the tools to return to meaningful, thriving lives.',
      plea: 'Do not let our heroes fight their hardest battle alone.',
      outcomes: [
        'Saving lives in real time',
        'Ending waiting lists',
        'Recovery with dignity',
      ],
      helpTitle: 'Confidential helpline for veterans',
      helpPhone: '[Phone Number — placeholder]',
      helpEmail: '[Email Address — placeholder]',
      partnerTitle: 'Invest, donate & strategic partnerships',
      partnerUrl: '[Donate / partnership URL — placeholder]',
      trust: 'Someone they can trust. The Center is here — serious, discreet, and built for them.',
    },
    footer: {
      rights: 'The Post-Traumatic Support Center · PSTD',
      note: 'Contact details marked as placeholders until official channels are published.',
    },
  },
  he: {
    dir: 'rtl' as const,
    langLabel: 'English',
    skip: 'דלג לתוכן',
    brand: 'PSTD',
    org: 'המטה לנפגעי פוסט-טראומה',
    tagline: 'יותר שקופים לא',
    nav: {
      reality: 'המציאות',
      facts: 'הנתונים',
      model: 'המודל',
      place: 'המקום',
      outdoor: 'שיקום',
      invest: 'שותפות',
    },
    hero: {
      headline: 'יותר שקופים לא',
      support: 'הם סיכנו את נפשם כדי להגן על הבית שלנו. עכשיו, הנפש שלהם מדממת בחושך.',
      partnership: 'חזון אסטרטגי · שותפות להצלת חיים · 2024–2025',
      ctaHelp: 'לסיוע דיסקרטי',
      ctaPartner: 'לעמוד לצידם',
      sub: 'הקרב האמיתי לא מסתיים בשדה הקרב. הוא מתחיל כשהם חוזרים הביתה.',
    },
    reality: {
      kicker: '01 · הזעזוע והמציאות המדממת',
      headline: 'אתם רואים אותם מחייכים. בתוכם – המלחמה לא נגמרה לעולם.',
      lead:
        'מאחורי כל סיפור גבורה מסתתרת מציאות כואבת של אלפי לוחמות ולוחמים שנשארים מאחור.',
      body: 'פוסט-טראומה (PTSD) אינה חולשה, אינה פגם באופי ואינה גזירת גורל – זוהי פציעה שקופה ומדממת בנפש, שנחרטה ברגעים הקשים ביותר של הלחימה. מי שחזר מהקרב עם חיוך – לא בהכרח חזר שלם. רבים ממשיכים להילחם בלילה, בבית, לבד.',
      points: [
        'פציעה שקופה ≠ חולשה',
        'מענה מיידי מציל חיים',
        'דיסקרטיות מלאה',
        'אף לוחם לא נשאר לבד',
      ],
      promiseTitle: 'הבטחה שלנו',
      promise:
        'מי שהגנו עלינו ברגעים האפלים ביותר של המדינה, אינם יכולים להישאר לבד במערכה על חייהם.',
      promiseBody:
        'המטה קיים כדי לתת גב אמיתי: מקלט בטוח, ליווי מקצועי וקהילה שמבינה בלי מילים מיותרות.',
      caption: 'המלחמה לא נגמרת בשער הבית — לפעמים שם היא רק מתחילה.',
    },
    facts: {
      kicker: '01 · הנתונים שאי אפשר להתעלם מהם',
      headline: 'המספרים שקוראים לנו לפעול — עכשיו.',
      lead:
        'זו לא סטטיסטיקה מופשטת. מאחורי כל מספר עומד לוחם, משפחה, ולילה נוסף בלי מענה.',
      items: [
        {
          title: 'גידול חסר תקדים',
          body: 'נרשמה עלייה של מאות אחוזים בדרישות לקבלת טיפול נפשי. עשרות אלפי לוחמים ומשוחררים מתמודדים עם תסמינים קשים — והמערכת לא מדביקה את הצורך.',
        },
        {
          title: 'הטרגדיה השקטה של האובדנות',
          body: 'לוחמים ששרדו אש תופת בשדה הקרב — מוכרעים בביתם על ידי הצללים. ניסיונות האובדנות עולים בקצב מחריד. בכל יום בלי מענה מיידי — אנחנו עלולים לאבד עוד לוחם.',
        },
        {
          title: 'רשימות המתנה שקורעות משפחות',
          body: 'בירוקרטיה ומחסור במענים משאירים מאות לוחמים להמתין חודשים. בחודשים האלה הבית מתפרק, המשפחה קורסת — והם נשארים לבד בחשיכה.',
        },
      ],
      closer:
        'כל יום של המתנה הוא יום שבו לוחם נשאר לבד מול הצללים. מענה מיידי הוא לא מותרות — הוא הצלת חיים.',
    },
    model: {
      kicker: '02 · המודל והמענה',
      headline: 'פציעה שקופה – דורשת מענה מיידי, גלוי ומכבד.',
      lead:
        'המטה הוא מקלט בטוח, נגיש ודיסקרטי לחלוטין. כאן אפשר להוריד מגננות, לפגוש אחיות ואחים לנשק, ולהתחיל תהליך שיקום אמיתי — בלי שיפוטיות, בלי בירוקרטיה מיותרת ועם כבוד מלא.',
      pillars: [
        {
          num: '01',
          title: 'המתחם הקהילתי',
          body: 'מרחב בטוח ושקט למנוחה, שיח בגובה העיניים עם שותפי גורל, ועגלת קפה פתוחה — בלי שיפוטיות.',
          image: '/images/model-community.jpg',
        },
        {
          num: '02',
          title: 'מעטפת מקצועית',
          body: 'ליווי נפשי אישי, קבוצות תמיכה מונחות ודיסקרטיות מוחלטת — ללא חסמים בירוקרטיים.',
          image: '/images/model-care.jpg',
        },
        {
          num: '03',
          title: 'חיבור גוף-נפש',
          body: 'סטודיו ליוגה, מיינדפולנס וסומטיקה ותרגול הרפיה לוויסות המערכת העצבית.',
          image: '/images/space-nature.jpg',
        },
      ],
      footer: 'מעטפת הוליסטית אחת: קהילה · ליווי מקצועי · גוף ונפש — כדי להחזיר שליטה לחיים.',
      values: 'דיסקרטי · נגיש · מקצועי · אנושי',
    },
    place: {
      kicker: '02 · הדמיית המקום',
      headline: 'לא מוסד קליני. כפר של ריפוי, אור וכבוד.',
      lead: 'מתחם גדול, מואר ומזמין — עם תחושה של מלון וכפר נופש.',
      body: 'במרכז: חלל מרכזי מוצף אור טבעי, בשילוב עץ ואבן טבעית. סביבו אגפים נפרדים גדולים, שבילים רגועים, דשא וטבע — מקום קסום שמזמין להוריד מגננות ולהתחיל לנשום שוב.',
      isTitle: 'מה שכן',
      is: 'מלון · כפר נופש · דשא וטבע · מרחב מזמין ומכבד',
      isNotTitle: 'מה שלא',
      isNot: 'לא בית משוגעים · לא בית מאזן · לא תחושת מוסד סגור',
      spacesKicker: 'מה מחכה במתחם',
      spacesHeadline: 'מרחבים שמסייעים — כל אחד בדרכו.',
      spacesLead:
        'כל אגף נבנה כדי לתת מענה אחר: שקט, יצירה, פריקת לחץ, חיבור לטבע — כך שכל לוחם ולוחמת יוכלו למצוא את הדרך שלהם חזרה.',
      spaces: [
        {
          title: 'גן בוטני וחממה עגולה',
          body: 'צמחים, אור ושקט — מרחב חי שמחבר לנשימה ולטבע.',
          image: '/images/space-greenhouse.jpg',
        },
        {
          title: 'שבילים ובריכות נוי',
          body: 'הליכה רגועה בין האגפים, מים ודגים — קצב שמאט את הראש.',
          image: '/images/space-ponds.jpg',
        },
        {
          title: 'חדר מוזיקה',
          body: 'כלים, צליל ויצירה — ערוץ רגשי בלי צורך במילים.',
          image: '/images/space-music.jpg',
        },
        {
          title: 'חדר אימונים · Stretch Off',
          body: 'שקים תלויים וכפפות — פריקת לחץ בטוחה וממוקדת.',
          image: '/images/space-training.jpg',
        },
        {
          title: 'פינת טבע',
          body: 'ספסלים וערסלים על הדשא — מנוחה אמיתית באוויר הפתוח.',
          image: '/images/space-nature.jpg',
        },
        {
          title: 'מתחם מסביר פנים',
          body: 'חלל גדול ומואר שמקבל פנים — תחושת בית, לא מוסד.',
          image: '/images/space-hall.jpg',
        },
      ],
      caption: 'כשרואים את המקום — מבינים: כאן באים להחלים בכבוד. יש כאן תקווה שאפשר לגעת בה.',
    },
    outdoor: {
      kicker: '03 · שיקום מעבר לארבע קירות',
      headline: 'הריפוי אינו מסתכם בחדר הטיפולים.',
      lead: 'הוא קורה בטבע, במים ובאתגר משותף.',
      body: 'אנחנו מביאים את השיקום לשטח באמצעות תוכניות חווייתיות בעלות אימפקט גבוה — שמשחזרות אמון, מסוגלות ותחושת חיים.',
      programs: [
        {
          title: 'רכיבה טיפולית',
          body: 'יצירת אמון, רגיעה וחיבור רגשי דרך עבודה עם סוסים.',
          image: '/images/exp-equine.jpg',
        },
        {
          title: 'ספורט ימי / סאפ וקייאקים',
          body: 'שחרור מתחים, מיקוד ותחושת חופש על פני המים.',
          image: '/images/exp-water.jpg',
        },
        {
          title: 'מסעות ג׳יפים ושטח',
          body: 'עיבוד חוויות, גיבוש ובניית חוסן בחיק הטבע.',
          image: '/images/exp-offroad.jpg',
        },
        {
          title: 'אתגרי חוסן וצוות',
          body: 'פעילויות אתגריות וחדרי בריחה שמחזירים מסוגלות וביטחון.',
          image: '/images/invest-cta.jpg',
        },
      ],
      traits: [
        'חיבור לאמון מחדש',
        'חוסן דרך חוויה',
        'קהילה של אחים לנשק',
        'חזרה לתחושת חיים',
      ],
      footer: 'שיקום שקורה גם בחוץ — יחד, בשטח, עם תחושת מסוגלות שחוזרת.',
    },
    invest: {
      kicker: '04 · השקעה בחוסן הלאומי',
      headline: 'זו אינה תרומה.',
      lead: 'זו חובה מוסרית והשקעה אסטרטגית בעתיד של כולנו.',
      body: 'הגידול במספר הנפגעים מאיים על התלכיד החברתי והחוסן הלאומי של מדינת ישראל. השותפות שלכם עם המטה היא השקעה ישירה בהצלת נפשות, בביטול רשימות המתנה, ובמתן אפשרות לגיבורים שלנו לחזור לחיים של עשייה, יצירה ומשמעות.',
      plea: 'אל תיתנו לגיבורים שלנו להילחם לבד בחשיכה.',
      outcomes: ['הצלת חיים בזמן אמת', 'ביטול רשימות המתנה', 'שיקום עם כבוד ודיסקרטיות'],
      helpTitle: 'לקו החם ולסיוע דיסקרטי ללוחמים/ות',
      helpPhone: '[מספר טלפון — מציין מקום]',
      helpEmail: '[דוא״ל — מציין מקום]',
      partnerTitle: 'להשקעה, תרומות וחסויות אסטרטגיות',
      partnerUrl: '[קישור לאתר / סריקת QR — מציין מקום]',
      trust: 'יש על מי לסמוך. המטה כאן — ברצינות, בדיסקרטיות, ובשבילם.',
    },
    footer: {
      rights: 'המטה לנפגעי פוסט-טראומה · PSTD',
      note: 'פרטי קשר המסומנים כמצייני מקום יוחלפו בערוצים הרשמיים כשיתפרסמו.',
    },
  },
} as const

export type Content = (typeof content)[Lang]
