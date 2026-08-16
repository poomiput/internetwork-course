// Central terminology data — powers inline <Term> tooltips and (later) any
// end-of-chapter glossary. Add entries as each chapter introduces new terms;
// keep definitions to 1-3 sentences (a memory aid, not a mini textbook).

export const terms = {
  vtp: {
    term: "VTP",
    full: "VLAN Trunking Protocol",
    def: "โปรโตคอลของ Cisco ที่ให้สวิตช์ Server สร้าง VLAN แล้วกระจายไปยังสวิตช์ Client อื่นในโดเมนเดียวกันโดยอัตโนมัติ ไม่ต้องตั้งค่ามือทีละตัว",
  },
  dtp: {
    term: "DTP",
    full: "Dynamic Trunking Protocol",
    def: "โปรโตคอลของ Cisco ที่ให้สวิตช์สองฝั่งเจรจากันเองว่าพอร์ตควรเป็น Trunk หรือ Access — ไม่มีการยืนยันตัวตน จึงมีความเสี่ยงด้านความปลอดภัย",
  },
  pagp: {
    term: "PAgP",
    full: "Port Aggregation Protocol",
    def: "โปรโตคอลเจรจาสร้าง EtherChannel ของ Cisco เอง ใช้ได้เฉพาะกับสวิตช์ Cisco ด้วยกันเท่านั้น",
  },
  lacp: {
    term: "LACP",
    full: "Link Aggregation Control Protocol",
    def: "โปรโตคอลเจรจาสร้าง EtherChannel แบบมาตรฐานเปิด (IEEE) ใช้ข้ามยี่ห้ออุปกรณ์ได้",
  },
  etherchannel: {
    term: "EtherChannel",
    full: "",
    def: "การรวมสายกายภาพหลายเส้นระหว่างอุปกรณ์เดียวกันให้ทำงานเป็นอินเทอร์เฟซตรรกะเดียว เพื่อเพิ่มแบนด์วิดท์และให้ STP มองเห็นเป็นเส้นทางเดียวแทนที่จะต้อง Block ทิ้ง",
  },
  revisionNumber: {
    term: "Configuration Revision Number",
    full: "",
    def: "เลขนับเวอร์ชันการเปลี่ยนแปลง VLAN ใน VTP domain เพิ่มขึ้นทุกครั้งที่แก้ VLAN บน Server และติดตัวสวิตช์ไปตลอดแม้ถอดออกจากโดเมนแล้ว — ตัวเลขที่สูงกว่าจะถูกเชื่อว่าใหม่กว่าเสมอ",
  },
  loadBalanceHash: {
    term: "Load-balancing Hash",
    full: "",
    def: "ค่าที่สวิตช์คำนวณจาก field ของแพ็กเก็ต (เช่น MAC หรือ IP ต้นทาง-ปลายทาง) เพื่อกำหนดว่าทราฟฟิกชุดหนึ่งจะวิ่งสายไหนใน EtherChannel อย่างคงที่ ไม่ใช่การสลับสายแบบ round-robin",
  },
};
