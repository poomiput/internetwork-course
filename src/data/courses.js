// Central course registry — powers the sidebar's course switcher and
// per-course chapter navigation. Each course's `chapters[].slug` is the
// full path segment relative to the site base (e.g. "dbsec/ch1"), so
// Sidebar.astro never needs course-specific link-building logic.

export const courses = [
  {
    id: "internetwork",
    name: "Internetwork",
    brandSub: "CCNP Enterprise Core",
    accent: "var(--coral)",
    home: "ch1",
    units: [
      {
        title: "Layer 2 พื้นฐาน",
        accent: "var(--slate)",
        chapters: [
          { n: 0, slug: "ch0", title: "Overview Internetworking", ready: false },
          { n: 1, slug: "ch1", title: "Packet Forwarding", ready: true },
          { n: 2, slug: "ch2", title: "Spanning Tree", ready: true },
          { n: 3, slug: "ch3", title: "Advanced STP Tuning", ready: true },
          { n: 4, slug: "ch4", title: "Multiple Spanning Tree", ready: true },
          { n: 5, slug: "ch5", title: "VLAN Trunks & EtherChannel", ready: true },
        ],
      },
      {
        title: "Layer 3 Routing",
        accent: "var(--coral)",
        chapters: [
          { n: 6, slug: "ch6", title: "IP Routing Essentials", ready: true },
          { n: 7, slug: "ch7", title: "EIGRP", ready: true },
          { n: 8, slug: "ch8", title: "OSPF", ready: true },
          { n: 9, slug: "ch9", title: "Advanced OSPF", ready: true },
          { n: 10, slug: "ch10", title: "OSPFv3", ready: true },
        ],
      },
      {
        title: "Routing ขั้นสูง & Services",
        accent: "var(--violet)",
        chapters: [
          { n: 11, slug: "ch11", title: "BGP", ready: true },
          { n: 12, slug: "ch12", title: "Advanced BGP", ready: true },
          { n: 13, slug: "ch13", title: "Multicast", ready: true },
          { n: 14, slug: "ch14", title: "QoS", ready: false },
        ],
      },
      {
        title: "Interactive Lab",
        accent: "var(--fwd)",
        chapters: [
          { n: "▶", slug: "routing-lab", title: "IGP Routing Animation", ready: true },
        ],
      },
      {
        title: "ก่อนเข้าห้องสอบ",
        accent: "var(--gold)",
        chapters: [
          { n: "★", slug: "exam", title: "บทสวดขอให้สอบดี", ready: true },
        ],
      },
    ],
  },
  {
    id: "dbsec",
    name: "DB Security",
    brandSub: "Database & Web Security",
    accent: "var(--blk)",
    home: "dbsec/ch1",
    units: [
      {
        title: "บทที่ 1-7",
        accent: "var(--blk)",
        chapters: [
          { n: 1, slug: "dbsec/ch1", title: "พื้นฐาน Web Application และ HTML", ready: true },
          { n: 2, slug: "dbsec/ch2", title: "HTML Form และ GET/POST", ready: true },
          { n: 3, slug: "dbsec/ch3", title: "บทที่ 3", ready: false },
          { n: 4, slug: "dbsec/ch4", title: "บทที่ 4", ready: false },
          { n: 5, slug: "dbsec/ch5", title: "บทที่ 5", ready: false },
          { n: 6, slug: "dbsec/ch6", title: "บทที่ 6", ready: false },
          { n: 7, slug: "dbsec/ch7", title: "บทที่ 7", ready: false },
        ],
      },
      {
        title: "ก่อนเข้าห้องสอบ",
        accent: "var(--gold)",
        chapters: [
          { n: "★", slug: "dbsec/exam", title: "สรุปก่อนสอบ", ready: false },
        ],
      },
    ],
  },
];
