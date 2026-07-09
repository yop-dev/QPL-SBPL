// All copy sourced from the real qpl.com.ph content scraped for the redesign.

export const nav = [
  { label: "The Plant", href: "#plant" },
  { label: "Legacy", href: "#legacy" },
  { label: "Impact", href: "#impact" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: 460, suffix: " MW", label: "Net capacity" },
  { value: 25, suffix: "-yr", label: "Meralco PPA" },
  { value: 2000, prefix: "Est. ", label: "Commercial ops" },
];

export const plantSpecs = [
  { k: "Turbine / generator", v: "GE steam turbine, base-load" },
  { k: "Boiler", v: "Foster Wheeler, natural circulation" },
  { k: "Fuel", v: "Pulverized coal" },
  { k: "Cooling", v: "Once-through seawater" },
  { k: "Coal handling", v: "BMH Siwertell ship unloader" },
  { k: "Emissions", v: "Low-NOx < 200 ppm · ESP + wet FGD" },
  { k: "Controls", v: "ABB Infi 90 DCS · GE Mark V" },
  { k: "Transmission", v: "31 km privately-owned HV line" },
];

export const legacy = [
  {
    n: "01",
    title: "First Build-Own-Operate power project in the Philippines",
    body: "Quezon Power pioneered the BOO model in the country — privately financed, built, and run without a government sovereign guarantee.",
  },
  {
    n: "02",
    title: "First base-load IPP selling to a non-government utility in SE Asia",
    body: "Power flows to Manila Electric Co. (Meralco) under a 25-year purchase agreement — a first for the region.",
  },
  {
    n: "03",
    title: "First privately-owned high-voltage transmission line",
    body: "A 31-kilometer line carries Mauban's output into the Luzon grid, owned and maintained by the project itself.",
  },
];

export const impact = [
  {
    stat: "40",
    unit: "barangays",
    title: "Health reaches everyone",
    body: "Medical and dental missions serve all 40 barangays of Mauban, alongside a feeding program for malnourished children.",
    img: "/img/impact-health.jpg",
  },
  {
    stat: "100",
    unit: "% repaid",
    title: "Livelihood that lasts",
    body: "Micro-entrepreneur loans through the ABS-CBN Bayan Foundation reached a full repayment rate among local borrowers.",
    img: "/img/impact-feeding.jpg",
  },
  {
    stat: "ESG",
    unit: "2022",
    title: "Coasts and mangroves",
    body: "Mangrove reforestation earned ESG Programme of the Year — Philippines at the Asian Power Awards 2022.",
    img: "/img/impact-coastal.jpg",
  },
];

export const awards = [
  { year: "2025", body: "Honored for sustainability & community innovation, PowerGen International" },
  { year: "2022", body: "ESG Programme of the Year — Philippines · Asian Power Awards" },
  { year: "2012", body: "Excellence in Ecology & Economy · PhilChamber" },
  { year: "2010", body: "Master Rank · Zero Basura Olympics for Business" },
  { year: "2007", body: "Best Environmental Company of the Year · Asian Power Awards" },
  { year: "2006", body: "Best Operations & Maintenance Plant in Asia · Asian Power Awards" },
  { year: "2002", body: "Award for Global Corporate Excellence · US Secretary of State" },
  { year: "1997", body: "Best Asian Project Financing · Euro Week" },
];

export const leaders = [
  { name: "Frank Thiel", role: "Managing Director", img: "/img/exec-thiel.png" },
  { name: "Chaiwut Saengpredekorn", role: "Assistant Managing Director", img: "/img/exec-chaiwut.png" },
  { name: "Walter Laptew", role: "Facility Manager", img: "/img/exec-walter.png" },
];

export const contact = {
  email: "info@qpl.com.ph",
  offices: [
    {
      city: "Mauban, Quezon",
      lines: ["62 H. Dela Costa Street", "Barangay Daungan, 4330"],
      tel: "+63 (42) 784 0295",
    },
    {
      city: "Makati City",
      lines: ["14/F Zuellig Building", "Makati Ave. cor. Paseo de Roxas, 1225"],
      tel: "+63 (2) 8 687 2180",
    },
  ],
};
