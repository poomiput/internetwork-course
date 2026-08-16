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
  distanceVectorProtocol: {
    term: "Distance Vector Routing Protocol",
    full: "",
    def: "โปรโตคอลที่บอกเส้นทางด้วย 'ระยะทาง' (metric) และ 'ทิศทาง' (next-hop) เท่านั้น ไม่รู้ topology ทั้งหมดของเครือข่าย ใช้อัลกอริทึม Bellman-Ford เช่น RIP",
  },
  enhancedDistanceVector: {
    term: "Enhanced Distance Vector Routing Protocol",
    full: "",
    def: "Distance Vector ที่ยืมพฤติกรรมของ Link-State มาใช้ เช่น การสร้างความสัมพันธ์เพื่อนบ้านด้วย hello และส่งเฉพาะข้อมูลที่เปลี่ยน — EIGRP ใช้อัลกอริทึม DUAL และถูกเรียกว่า Hybrid Routing Protocol",
  },
  linkStateProtocol: {
    term: "Link-State Routing Protocol",
    full: "",
    def: "โปรโตคอลที่ทุก Router แจกสถานะลิงก์ตัวเองให้ทุกตัวในเครือข่ายเห็นเหมือนกันหมด (เก็บใน LSDB) แล้วแต่ละตัวรัน Dijkstra SPF เองเพื่อคำนวณเส้นทางที่ดีที่สุด เช่น OSPF, IS-IS",
  },
  pathVectorProtocol: {
    term: "Path Vector Routing Protocol",
    full: "",
    def: "คล้าย Distance Vector แต่ใช้ Path Attribute เช่น AS_Path แทนระยะทาง — ถ้า Router เห็น AS ตัวเองอยู่ใน AS_Path ที่ได้รับมา จะถือว่าเป็น loop แล้วทิ้งทันที ตัวอย่างคือ BGP",
  },
  administrativeDistance: {
    term: "Administrative Distance",
    full: "",
    def: "ค่าความน่าเชื่อถือของแหล่งที่มาของเส้นทาง ใช้ตัดสินเมื่อมีมากกว่าหนึ่งแหล่งเสนอ prefix length เท่ากันสำหรับปลายทางเดียวกัน — ค่ายิ่งต่ำยิ่งน่าเชื่อ (Connected=0, Static=1, EIGRP internal=90, OSPF=110)",
  },
  prefixLength: {
    term: "Prefix Length",
    full: "",
    def: "จำนวนบิตของ subnet mask ที่เป็น 1 ต่อเนื่องกันจากซ้าย — ใช้ตัดสินเส้นทางเป็นลำดับแรกเสมอผ่านกฎ Longest Match: prefix ที่ยาวกว่า (เจาะจงกว่า) จะถูกเลือกก่อน ไม่ว่า AD หรือ Metric จะเป็นเท่าไหร่",
  },
  ecmp: {
    term: "Equal-Cost Multipathing (ECMP)",
    full: "",
    def: "การติดตั้งหลายเส้นทางที่มี metric เท่ากันเป๊ะลง Routing Table พร้อมกัน เพื่อแบ่งโหลดเท่า ๆ กันข้ามหลายลิงก์ — RIP, EIGRP, OSPF, IS-IS รองรับทั้งหมด",
  },
  unequalCostLoadBalancing: {
    term: "Unequal-Cost Load Balancing",
    full: "",
    def: "ความสามารถเฉพาะของ EIGRP ที่ติดตั้งหลายเส้นทางที่ metric ต่างกันลง Routing Table พร้อมกัน แล้วแบ่งทราฟฟิกตามสัดส่วนของ metric แทนที่จะแบ่งเท่า ๆ กันแบบ ECMP",
  },
  directlyAttachedStaticRoute: {
    term: "Directly Attached Static Route",
    full: "",
    def: "Static route ที่ระบุแค่ outbound interface เหมาะกับสาย P2P อย่าง Serial เท่านั้น เพราะถ้าใช้กับ Ethernet ที่ต้อง ARP จะบังคับให้ Router ต้อง ARP หา MAC ของทุกปลายทางที่ match ใหม่ทุกครั้ง",
  },
  recursiveStaticRoute: {
    term: "Recursive Static Route",
    full: "",
    def: "Static route ที่ระบุแค่ next-hop IP — Router ต้อง query RIB ซ้ำอีกรอบ (recursive lookup) เพื่อหาว่า next-hop IP นั้นไปถึงทาง interface ไหน ก่อนจะไปหา MAC จาก adjacency table ได้ resolve ผ่าน default route อย่างเดียวไม่ได้",
  },
  fullySpecifiedStaticRoute: {
    term: "Fully Specified Static Route",
    full: "",
    def: "Static route ที่ระบุทั้ง outbound interface และ next-hop IP พร้อมกัน ตัดขั้นตอน recursive lookup ออกไป และป้องกันปัญหาที่ recursive lookup resolve ไปผิดทิศทางเมื่อ topology ซับซ้อน",
  },
  floatingStaticRoute: {
    term: "Floating Static Route",
    full: "",
    def: "Static route ที่ตั้ง AD สูงกว่าเส้นทางหลักโดยเจตนา เพื่อให้ทำหน้าที่เป็นเส้นทางสำรอง — ถูกติดตั้งใน RIB ก็ต่อเมื่อเส้นทางหลักหลุดไปแล้วเท่านั้น",
  },
  staticNullRoute: {
    term: "Static Null Route",
    full: "",
    def: "Static route ที่ชี้ไปยัง interface Null0 เพื่อทิ้งแพ็กเก็ตที่ match โดยไม่ต้องตั้ง access list — ใช้ป้องกัน routing loop เมื่อมี aggregate block ใหญ่ที่ใช้จริงแค่บางส่วน",
  },
};
