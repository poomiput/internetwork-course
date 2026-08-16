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
  asEigrp: {
    term: "Autonomous System",
    full: "",
    def: "กลุ่ม Router ที่บริหารร่วมกันภายใต้ EIGRP process เดียวกัน — Router ใน AS เดียวกันเท่านั้นที่แลกเปลี่ยนเส้นทางกันและต้องใช้สูตรคำนวณ metric แบบเดียวกัน",
  },
  successorRoute: {
    term: "Successor Route",
    full: "",
    def: "เส้นทางที่มี metric (Feasible Distance) ต่ำที่สุดไปยังปลายทาง — เส้นทางที่ถูกติดตั้งลง RIB จริง",
  },
  successor: {
    term: "Successor",
    full: "",
    def: "Router ตัวถัดไป (next-hop) ตัวแรกของ Successor Route",
  },
  feasibleDistance: {
    term: "Feasible Distance (FD)",
    full: "",
    def: "ค่า metric ของเส้นทางที่ต่ำที่สุดที่ Router คำนวณได้เองไปยังปลายทางหนึ่ง ๆ — คือ metric ของ Successor Route",
  },
  reportedDistance: {
    term: "Reported Distance (RD)",
    full: "",
    def: "ระยะที่เพื่อนบ้านรายงานมาให้ว่าตัวเองไปถึงปลายทางนั้นด้วย metric เท่าไหร่ — ค่านี้คือ Feasible Distance ของฝั่งเพื่อนบ้านเอง ใช้เทียบกับ FD ของเราเองเพื่อตรวจ Feasibility Condition",
  },
  feasibilityCondition: {
    term: "Feasibility Condition",
    full: "",
    def: "เงื่อนไขที่เส้นทางสำรองต้องผ่านก่อนถูกเก็บเป็น Feasible Successor: Reported Distance ของเพื่อนบ้านต้องน้อยกว่า Feasible Distance ที่เราคำนวณเอง รับประกันว่าเส้นสำรองนั้นไม่มีทางวนกลับมาหาเราเอง",
  },
  feasibleSuccessor: {
    term: "Feasible Successor",
    full: "",
    def: "เส้นทางสำรองที่ผ่าน Feasibility Condition แล้ว — สลับขึ้นมาเป็น Successor ได้ทันทีโดยไม่ต้องรอ DUAL คำนวณใหม่เมื่อ Successor เดิมล่ม",
  },
  topologyTable: {
    term: "Topology Table",
    full: "",
    def: "ตารางที่ EIGRP เก็บทุก prefix ที่ประกาศเข้ามาในระบบ AS พร้อมเพื่อนบ้านที่ประกาศ metric และค่าดิบที่ใช้คำนวณ — จุดที่ทำให้ EIGRP ต่างจาก Distance Vector ทั่วไปที่รู้แค่เส้นทางเดียว",
  },
  wideMetric: {
    term: "Wide Metric",
    full: "",
    def: "สูตรคำนวณ metric แบบใหม่ของ EIGRP ที่สเกลด้วยตัวคูณ 65,535 แทนสูตร Classic เดิม เพื่อรองรับลิงก์ความเร็วสูงกว่า 10 Gbps ได้แม่นยำขึ้น (สูงสุดถึง 655 Tbps) พร้อมเพิ่ม K6 สำหรับปัจจัยใหม่ในอนาคต",
  },
  varianceValue: {
    term: "Variance Value",
    full: "",
    def: "ค่าที่ได้จาก Feasible Distance คูณด้วยตัวคูณ variance ที่ตั้งไว้ — Feasible Successor ตัวใดมี metric ต่ำกว่า Variance Value จะถูกติดตั้งลง RIB เพิ่มเข้าไปด้วย เปิดใช้งาน unequal-cost load balancing",
  },
  helloPackets: {
    term: "Hello Packets",
    full: "",
    def: "แพ็กเก็ตที่ EIGRP ส่งเป็นระยะเพื่อค้นหาเพื่อนบ้านใหม่และตรวจสุขภาพเพื่อนบ้านเดิมว่ายังออนไลน์อยู่หรือไม่",
  },
  helloTimer: {
    term: "Hello Timer",
    full: "",
    def: "ความถี่ในการส่ง Hello Packet ค่า default 5 วินาที (60 วินาทีบน interface ความเร็วต่ำ เช่น T1 ลงไป) — Hold Timer ที่คู่กันมีค่า default เป็น 3 เท่าของ Hello Timer",
  },
  summarizationEigrp: {
    term: "Summarization",
    full: "",
    def: "การสรุปหลาย prefix ย่อยให้เหลือเป็น aggregate เดียวที่ระดับ interface ของ EIGRP เพื่อลดขนาด topology table และเร่ง convergence เมื่อ AS มีขนาดใหญ่ขึ้น",
  },
  kValues: {
    term: "K Values",
    full: "",
    def: "ค่าถ่วงน้ำหนัก K1-K5 (Wide Metric เพิ่ม K6) ที่กำหนดว่าปัจจัยไหน (bandwidth, delay, load, reliability, MTU) ถูกนำมาคิดคำนวณ metric บ้าง — ค่า default คือ K1=K3=1 ปัจจัยอื่นเป็น 0",
  },
  spt: {
    term: "Shortest Path Tree (SPT)",
    full: "",
    def: "ต้นไม้เส้นทางที่แต่ละ Router คำนวณเองจาก LSDB ด้วยอัลกอริทึม SPF โดยรากของต้นไม้คือตัว Router เองเสมอ — Router คนละตัวมองเครือข่ายเดียวกันแต่ได้ SPT คนละรูปทรงเพราะมุมมอง 'ราก' ต่างกัน",
  },
  ospfHelloPacket: {
    term: "Hello Packet (OSPF)",
    full: "",
    def: "แพ็กเก็ตที่ OSPF ส่งเป็นระยะเพื่อค้นหาและรักษาความสัมพันธ์เพื่อนบ้าน พกข้อมูล RID, Area ID, Authentication, Interval ต่าง ๆ และรายชื่อเพื่อนบ้านที่ยัง active",
  },
  ospfHelloInterval: {
    term: "Hello Interval",
    full: "",
    def: "ความถี่ในการส่ง OSPF Hello Packet ค่า default 10 วินาทีบน Broadcast/P2P (30 วินาทีบน Non-broadcast/P2MP) — ต้องตรงกันทั้งสองฝั่งของ segment ถึงจะเป็นเพื่อนบ้านกันได้",
  },
  ospfDeadInterval: {
    term: "Dead Interval",
    full: "",
    def: "เวลาที่รอก่อนประกาศว่าเพื่อนบ้านตายเมื่อไม่ได้รับ Hello — ค่า default เป็น 4 เท่าของ Hello Interval ต้องตั้งให้มากกว่า Hello Interval เสมอและต้องตรงกันทั้งสองฝั่ง",
  },
  ospfDR: {
    term: "Designated Router (DR)",
    full: "",
    def: "Router ที่ถูกเลือกให้เป็นศูนย์กลางการ flood LSA บน multi-access segment เพื่อลดจำนวน adjacency ที่ต้องสร้างและลดการ flood ซ้ำซ้อน — เลือกจาก Interface Priority สูงสุด (เท่ากันใช้ RID สูงสุดตัดสิน) และไม่ถูกแทนที่จนกว่าจะล่ม",
  },
  ospfBDR: {
    term: "Backup Designated Router (BDR)",
    full: "",
    def: "Router สำรองของ DR บน multi-access segment เดียวกัน เลือกด้วยหลักเกณฑ์เดียวกับ DR แต่ได้อันดับรองลงมา — พร้อมขึ้นมาเป็น DR ทันทีถ้า DR เดิมล่ม",
  },
  interfacePriority: {
    term: "Interface Priority",
    full: "",
    def: "ค่าที่กำหนดสิทธิ์ในการเป็น DR/BDR ของ interface บน segment นั้น ค่า default คือ 1 ทุก interface — ยิ่งสูงยิ่งชนะ (ตรงข้ามกับ AD/Cost) ตั้งเป็น 0 เพื่อถอนตัวออกจากการเลือกถาวร",
  },
  ospfPassiveInterface: {
    term: "Passive Interface",
    full: "",
    def: "Interface ที่เอา network เข้า LSDB ตามปกติ แต่ห้ามส่ง OSPF hello ออกไปและห้ามประมวลผล OSPF packet ที่ได้รับ — ใช้ป้องกันไม่ให้อุปกรณ์แปลกปลอมสร้าง adjacency ได้บน interface ที่ต่อ end-user",
  },
  routerId: {
    term: "Router ID (RID)",
    full: "",
    def: "เลข 32 บิตที่ไม่ซ้ำกันในโดเมน OSPF ใช้เป็นฐานสร้าง topology ทั้งหมด — ตั้งค่าคงที่ได้ด้วย router-id แล้วสั่ง clear ip ospf process เพื่อให้มีผลจริง",
  },
};
