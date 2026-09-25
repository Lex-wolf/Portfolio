/** Edit prices here. The /websites page reads these strings as-is. */
export const websitePrices = {
  launch: "From $900",
  business: "From $1,800",
  custom: "From $3,400",
  care: "$79",
  careInterval: "/month",
};

/**
 * Rotating hero swap phrases (handoff). First line of the headline is fixed.
 */
export const heroSwapPhrases = [
  "Facebook page.",
  "Yelp listing.",
  "link in bio.",
  "2014 website.",
];

export const websitesSeo = {
  title: "Websites for local businesses — alex.curiel",
  description:
    "A clear website for your restaurant, clinic, shop, or trade. Show up on Google, look trustworthy, and make it easy for people to call or walk in. Free quote.",
};

/**
 * Editable slots for /websites. Timelines and care note match the handoff.
 * Testimonials stay as TODOs until real quotes exist — do not invent them.
 */
export const websitesPlaceholders = {
  timelines: {
    launch: "About 2 weeks",
    business: "About 3–4 weeks",
    custom: "Scoped with the quote",
    care: "Starts after launch",
  },
  careOptionalNote: "Optional — not required to own your site. Cancel any time.",
  portraitAlt: "Alejandro Curiel",
  testimonialsIntro: "TODO: Short intro once real quotes are in place.",
  testimonials: [
    {
      quote:
        "TODO: Client quote — two or three sentences about working together and what changed for their business.",
      name: "TODO: Client name",
      business: "TODO: Business name",
      photoAlt: "TODO: Optional photo of client",
    },
    {
      quote:
        "TODO: Second client quote — keep it short and specific. Replace or remove this card if you only have one.",
      name: "TODO: Client name 2",
      business: "TODO: Business name 2",
      photoAlt: "TODO: Optional photo of client",
    },
  ],
  beforeAfter: {
    heading: "Same business. Two first impressions.",
    lede: "Drag the handle. On the left, a customer scrolls posts hoping to find your hours. On the right, they already know how to reach you.",
    before: {
      caption: "Questions in the comments — hours, address, prices buried or missing.",
      alt: "Illustration of a social-media-only business page with unanswered questions",
    },
    after: {
      caption: "Answers on the first screen — what you do, when you’re open, one tap to call or book.",
      alt: "Illustration of a clear business website with hours, location, and call-to-action",
    },
  },
};
