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
  abr: {
    term: "Area Border Router (ABR)",
    full: "",
    def: "Router ที่เชื่อมทั้ง Area 0 (Backbone) และ Area อื่นอย่างน้อยหนึ่งตัวพร้อมกัน มีหน้าที่แปลง Type 1 LSA ของ Area หนึ่งให้เป็น Type 3 LSA ประกาศเข้า Area อื่น",
  },
  backboneArea: {
    term: "Backbone Area",
    full: "",
    def: "Area 0 — Area พิเศษที่ทุก OSPF Area ต้องเชื่อมเข้ามาหาโดยตรงเสมอ เส้นทางระหว่าง Area ที่ไม่ใช่ Backbone ต้องวิ่งผ่าน Area 0 เท่านั้น",
  },
  intraAreaRoute: {
    term: "Intra-area Route",
    full: "",
    def: "เส้นทางที่ Router เรียนรู้จาก Router อื่นภายใน Area เดียวกัน แสดงในตาราง routing ด้วยตัวอักษร O — OSPF ให้ความสำคัญกับเส้นทางประเภทนี้สูงสุดเสมอ ไม่ว่า metric จะเป็นเท่าไหร่",
  },
  interareaRoute: {
    term: "Interarea Route",
    full: "",
    def: "เส้นทางที่ Router เรียนรู้ผ่าน ABR จาก Area อื่น แสดงในตาราง routing ด้วย O IA — มีความสำคัญรองจาก Intra-area route เสมอ",
  },
  routerLsa: {
    term: "Router LSA (Type 1)",
    full: "",
    def: "LSA ที่ทุก OSPF Router สร้างเสมอ มีหนึ่งรายการต่อหนึ่ง link ที่เปิด OSPF ใช้สร้างโครงสร้าง topology ภายใน Area — ไม่ถูก flood ออกนอก Area ต้นทาง",
  },
  summaryLsa: {
    term: "Summary LSA (Type 3)",
    full: "",
    def: "LSA ที่ ABR สร้างเพื่อประกาศ network prefix จาก Area หนึ่งเข้าไปยังอีก Area หนึ่ง พกแค่ metric รวมสุดท้าย ไม่พกรายละเอียด topology ภายในของ Area ต้นทาง",
  },
  discontiguousNetwork: {
    term: "Discontiguous Network",
    full: "",
    def: "สถานการณ์ที่ทราฟฟิกระหว่าง Area ต้องพยายามวิ่งผ่าน Area ที่ไม่ใช่ Backbone แทนที่จะผ่าน Area 0 — เกิดปัญหาเพราะ ABR ห้ามสร้าง Type 3 LSA ต่อจาก Type 3 ที่รับมาจาก Area อื่นที่ไม่ใช่ Area 0 ทางแก้พื้นฐานคือทำให้ Area 0 เชื่อมต่อกันเป็นผืนเดียวเสมอ",
  },
  ospfEcmp: {
    term: "OSPF Equal-Cost Multipathing",
    full: "",
    def: "การติดตั้งหลายเส้นทางที่ metric เท่ากันเป๊ะพร้อมกันในระดับความสำคัญเดียวกัน (intra-area ด้วยกัน หรือ interarea ด้วยกัน) ค่า default สูงสุดคือ 4 เส้นทางต่อปลายทาง",
  },
  interareaSummarization: {
    term: "Interarea Summarization",
    full: "",
    def: "การที่ ABR สรุปหลาย Type 1 LSA ในช่วงที่กำหนดให้เหลือเป็น Type 3 LSA ตัวเดียวก่อนประกาศออกนอก Area ต้นทาง ลดขนาด LSDB และจำกัดผลกระทบของ SPF เมื่อลิงก์ภายใน Area ขยับ",
  },
  linkLocalAddress: {
    term: "IPv6 Link-Local Address",
    full: "",
    def: "ที่อยู่ IPv6 ที่ใช้ได้เฉพาะภายใน link เดียวกัน มีอยู่บนทุก interface ที่เปิด IPv6 — OSPFv3 ใช้ที่อยู่ชนิดนี้สื่อสารระหว่าง Router ทำให้สร้าง adjacency ได้แม้สองฝั่งจะไม่ได้อยู่ subnet เดียวกัน",
  },
  instanceId: {
    term: "Instance ID",
    full: "",
    def: "ฟิลด์ใน OSPFv3 packet ที่ใช้กำหนดว่า Router ตัวไหนบน network segment เดียวกันได้รับอนุญาตให้ฟอร์ม adjacency ร่วมกันบ้าง — ทำให้รันหลาย instance แยกกันบน link เดียวได้",
  },
  interareaPrefixLsa: {
    term: "Interarea Prefix LSA (0x2003)",
    full: "",
    def: "LSA ที่ ABR สร้างเพื่อบอกเส้นทางไปยัง IPv6 prefix ที่อยู่ใน Area อื่น — คือ Network Summary LSA (Type 3) ของ OSPFv2 ที่ถูกเปลี่ยนชื่อใน OSPFv3",
  },
  interareaRouterLsa: {
    term: "Interarea Router LSA (0x2004)",
    full: "",
    def: "LSA ที่ ABR สร้างเพื่อประกาศตำแหน่งของ ASBR ที่อยู่ใน Area อื่น — คือ ASBR Summary LSA (Type 4) ของ OSPFv2 ที่ถูกเปลี่ยนชื่อใน OSPFv3",
  },
  linkLsa: {
    term: "Link LSA (0x0008)",
    full: "",
    def: "LSA ชนิดใหม่ของ OSPFv3 ที่จับคู่ global unicast prefix ทุกตัวบน interface เข้ากับ link-local address ของ Router — แชร์เฉพาะระหว่างเพื่อนบ้านบน link เดียวกัน ไม่ flood ออกไปไกลกว่านั้น",
  },
  intraAreaPrefixLsa: {
    term: "Intra-area Prefix LSA (0x2009)",
    full: "",
    def: "LSA ชนิดใหม่ของ OSPFv3 ที่ประกาศ IPv6 prefix ซึ่งผูกกับ Router, stub หรือ transit segment — การแยก prefix ออกมาแบบนี้ทำให้เพิ่ม/แก้ address บน interface ได้โดยไม่ต้องรัน SPF ใหม่",
  },
  autonomousSystemBgp: {
    term: "Autonomous System Number (ASN)",
    full: "",
    def: "หมายเลขประจำกลุ่ม Router ที่อยู่ภายใต้การควบคุมขององค์กรเดียว ขอจาก IANA — เดิม 2 ไบต์ ขยายเป็น 4 ไบต์ตาม RFC 4893 มีช่วงส่วนตัวที่ห้ามใช้บนอินเทอร์เน็ตเหมือน IP address",
  },
  asPath: {
    term: "AS_Path",
    full: "",
    def: "Well-known mandatory path attribute ที่เก็บรายชื่อ ASN ทั้งหมดที่เส้นทางนั้นเดินผ่านมา — ทุก AS ที่ส่งต่อจะเติม ASN ตัวเองเข้าไป ใช้ทั้งกันลูป (เห็นชื่อตัวเองก็ทิ้ง) และเลือก best path",
  },
  pathAttribute: {
    term: "Path Attribute (PA)",
    full: "",
    def: "ค่าคุณลักษณะที่ BGP แนบไปกับแต่ละเส้นทาง ใช้ควบคุม routing policy อย่างละเอียด — แบ่งเป็น 4 ประเภทตามว่าทุก implementation ต้องรู้จักไหมและต้องแนบมาทุกครั้งไหม",
  },
  wellKnownMandatory: {
    term: "Well-known Mandatory",
    full: "",
    def: "Path attribute ที่ทุก BGP implementation ต้องรู้จักและต้องแนบมากับการประกาศ prefix ทุกครั้ง เช่น AS_Path, Next Hop, Origin",
  },
  wellKnownDiscretionary: {
    term: "Well-known Discretionary",
    full: "",
    def: "Path attribute ที่ทุก BGP implementation ต้องรู้จัก แต่จะแนบมากับการประกาศ prefix หรือไม่ก็ได้ เช่น Local Preference",
  },
  optionalTransitive: {
    term: "Optional Transitive",
    full: "",
    def: "Path attribute ที่ BGP ไม่จำเป็นต้องรู้จัก — ถ้าเจอตัวที่ไม่รู้จักจะยังส่งต่อให้ AS ถัดไปตามปกติ เช่น Atomic Aggregate, Aggregator",
  },
  optionalNonTransitive: {
    term: "Optional Non-transitive",
    full: "",
    def: "Path attribute ที่ BGP ไม่จำเป็นต้องรู้จัก — ถ้าเจอตัวที่ไม่รู้จักจะทิ้งไปเลย ไม่ส่งต่อให้ AS ถัดไป เช่น MED (Multi-Exit Discriminator)",
  },
  addressFamily: {
    term: "Address Family",
    full: "",
    def: "การแยกประเภทโปรโตคอลเครือข่ายใน MP-BGP ผ่าน AFI (เช่น IPv4, IPv6) และแยกย่อยด้วย SAFI (เช่น unicast, multicast) — แต่ละ address family มีฐานข้อมูลและการตั้งค่าแยกของตัวเอง",
  },
  ibgpSession: {
    term: "iBGP Session",
    full: "Internal BGP",
    def: "BGP session ที่สร้างกับ Router ซึ่งอยู่ AS เดียวกัน (หรือ confederation เดียวกัน) — เส้นทางที่ได้มามี AD 200 รองรับ multi-hop และไม่เติม AS_Path หรือเปลี่ยน next-hop",
  },
  ebgpSession: {
    term: "eBGP Session",
    full: "External BGP",
    def: "BGP session ที่สร้างกับ Router ซึ่งอยู่ต่าง AS — เส้นทางที่ได้มามี AD 20, ตั้ง TTL เป็น 1 (ไม่รองรับ multi-hop โดย default), เปลี่ยน next-hop เป็นตัวเอง และเติม ASN ตัวเองใน AS_Path",
  },
  locRib: {
    term: "Loc-RIB Table",
    full: "",
    def: "ตารางกลางของ BGP ที่เก็บ NLRI ทั้งหมดที่ Router สร้างเองหรือรับมาจาก peer หลังผ่าน inbound policy แล้ว — ดูได้ด้วย show bgp afi safi (คู่กับ Adj-RIB-In ที่เก็บของดิบ และ Adj-RIB-Out ที่เก็บของหลังผ่าน outbound policy)",
  },
  atomicAggregate: {
    term: "Atomic Aggregate",
    full: "",
    def: "Attribute ที่ BGP แปะไว้เมื่อเส้นทางถูกสรุปแล้วข้อมูล AS_Path, MED และ community ของ component route เดิมหายไป — เตือนว่าประวัติการเดินทางไม่ครบและกลไกกันลูปอ่อนแอลง",
  },
  asSet: {
    term: "AS_SET",
    full: "",
    def: "Keyword เสริมของคำสั่ง aggregate-address ที่สั่งให้ Router คัดลอก BGP attribute จาก component route ทั้งหมดมาใส่ในเส้นทางสรุป — แก้ปัญหาประวัติหายของ Atomic Aggregate",
  },
  bgpMultihoming: {
    term: "BGP Multihoming",
    full: "",
    def: "การเพิ่มวงจรและ BGP session ที่สองขึ้นไปเพื่อไม่ให้มีจุดล้มเหลวจุดเดียว (SPOF) — แบบที่ทนทานที่สุดคือต่อคนละ ISP พร้อมให้ Router ขอบสร้าง iBGP session ระหว่างกันเอง",
  },
  transitRouting: {
    term: "Transit Routing",
    full: "",
    def: "การที่เครือข่ายของเรากลายเป็นทางผ่านให้ทราฟฟิกของ AS อื่น ทำให้ลิงก์เต็มและเส้นทางเดาไม่ได้ — ป้องกันด้วย outbound route policy ที่ประกาศเฉพาะเส้นทางของตัวเอง (นิยมใช้ AS path ACL แบบ ^$)",
  },
  prefixList: {
    term: "Prefix List",
    full: "",
    def: "วิธีเลือก prefix ด้วย high-order bit pattern + bit count พร้อมพารามิเตอร์ ge/le เพื่อระบุช่วงความยาว prefix ได้ในบรรทัดเดียว — ประมวลผลบนลงล่าง เจอ match แรกก็จบ และมี implicit deny ท้ายสุด",
  },
  regex: {
    term: "Regular Expression (regex)",
    full: "",
    def: "รูปแบบข้อความที่ใช้ค้นหาใน AS_Path ของ BGP — สัญลักษณ์สำคัญคือ ^ ต้นสตริง, $ ท้ายสตริง, _ ช่องว่าง เช่น ^$ หมายถึงเส้นทางที่กำเนิดในเครื่องนี้เอง",
  },
  routeMap: {
    term: "Route Map",
    full: "",
    def: "เครื่องมือที่รวม match (เงื่อนไขเลือก) กับ set (การแก้ค่า) เข้าด้วยกัน — ทำได้มากกว่า ACL เพราะแก้ path attribute ได้ ไม่ใช่แค่ permit/deny เป็นหัวใจของการทำ routing policy แยกทีละ neighbor",
  },
  distributeListBgp: {
    term: "Distribute List",
    full: "",
    def: "วิธีกรองเส้นทางของ BGP ที่อ้างอิง standard หรือ extended ACL ผูกทีละ neighbor และทิศทาง — สำหรับ BGP นั้น extended ACL ใช้ช่อง source เทียบ network และช่อง destination เทียบ network mask",
  },
  asPathAcl: {
    term: "AS Path Access Control List",
    full: "",
    def: "รายการ regex ที่ใช้ permit/deny เส้นทางตามค่า AS_Path ปัจจุบัน IOS รองรับได้ถึง 500 รายการ — ใช้คู่กับ neighbor filter-list เป็นวิธีมาตรฐานในการไม่ให้ตัวเองกลายเป็น transit AS",
  },
  bgpCommunity: {
    term: "BGP Community",
    full: "",
    def: "แท็กเลข 32 บิตแบบ optional transitive ที่ติดไปกับเส้นทางข้าม AS ได้ ใช้ส่งต่อ routing policy — Router ไม่ส่ง community ให้ peer โดย default ต้องเปิดด้วย neighbor send-community เอง",
  },
  bgpWeight: {
    term: "Weight",
    full: "",
    def: "Attribute ที่ Cisco คิดขึ้นเอง ขนาด 16 บิต (0–65,535) เป็นขั้นแรกสุดของ best-path algorithm — ค่าสูงกว่าชนะ มีผลเฉพาะในเครื่องนั้น ไม่ประกาศให้ใคร และมีผลกับทราฟฟิกขาออกเท่านั้น",
  },
  localPreference: {
    term: "Local Preference",
    full: "",
    def: "Well-known discretionary attribute ขนาด 32 บิต ค่า default 100 บอกความชอบในการออกจาก AS ไปยังปลายทาง — ค่าสูงกว่าชนะ ประกาศภายใน AS ได้แต่ไม่ข้ามไปยัง eBGP peer",
  },
  med: {
    term: "Multi-Exit Discriminator (MED)",
    full: "",
    def: "Optional non-transitive attribute ขนาด 32 บิต ตั้งอัตโนมัติจาก metric ของ IGP — ค่าต่ำกว่าชนะ และเทียบกันได้เฉพาะเมื่อเส้นทางที่แข่งกันมาจาก ASN เดียวกันเท่านั้น",
  },
  igmp: {
    term: "IGMP",
    full: "Internet Group Management Protocol",
    def: "โปรโตคอลที่ผู้รับใช้แจ้งเข้า/ออกกลุ่ม multicast กับ Router ท้องถิ่น ทำงานที่ Layer 2 — ห่อในแพ็กเก็ต IP protocol number 2 และตั้ง TTL เป็น 1 เพื่อไม่ให้ถูกส่งต่อออกนอก subnet",
  },
  igmpSnooping: {
    term: "IGMP Snooping",
    full: "",
    def: "ความสามารถของสวิตช์ที่ 'แอบดู' IGMP join ที่ผ่านไป แล้วสร้างตารางจับคู่พอร์ตกับกลุ่ม multicast — ทำให้ส่งเฟรม multicast ออกเฉพาะพอร์ตที่มีผู้รับจริง แทนที่จะฟลัดออกทุกพอร์ต",
  },
  pim: {
    term: "PIM",
    full: "Protocol Independent Multicast",
    def: "โปรโตคอล routing ที่พาทราฟฟิก multicast ข้ามเครือข่ายระหว่าง Router — ที่ชื่อ Protocol Independent เพราะใช้ตาราง unicast routing ของโปรโตคอลไหนก็ได้ (รวมถึง static route) ในการหาเส้นทาง",
  },
  multicastSpt: {
    term: "Source Tree / Shortest Path Tree (SPT)",
    full: "",
    def: "ต้นไม้กระจาย multicast ที่มีต้นทางเป็นราก ใช้เส้นทางสั้นที่สุดถึงผู้รับ เขียนแทนด้วย (S,G) — ได้เส้นทางดีที่สุดแต่ต้องเก็บสถานะแยกทุกคู่ต้นทาง-กลุ่ม",
  },
  rpt: {
    term: "Shared Tree / RP Tree (RPT)",
    full: "",
    def: "ต้นไม้กระจาย multicast ที่มี Rendezvous Point เป็นราก ส่งต่อตาม group address โดยไม่สนใจต้นทาง เขียนแทนด้วย (*,G) — เก็บสถานะน้อยกว่า SPT แต่เส้นทางอาจต้องอ้อมผ่าน RP",
  },
  fhr: {
    term: "First-Hop Router (FHR)",
    full: "",
    def: "Router ที่ต่ออยู่กับต้นทางของ multicast stream โดยตรง มีหน้าที่ส่งทราฟฟิกไปให้ RP เพื่อให้ RP รู้จักต้นทางนั้น",
  },
  lhr: {
    term: "Last-Hop Router (LHR)",
    full: "",
    def: "Router ที่ต่ออยู่กับผู้รับโดยตรง เป็นตัวรับ IGMP join แล้วส่ง PIM join ต่อขึ้นไปทางรากของต้นไม้ (RP สำหรับ shared tree หรือ FHR สำหรับ source tree)",
  },
  oil: {
    term: "Outgoing Interface List (OIL)",
    full: "",
    def: "รายการ interface ที่ Router ต้องส่งสำเนาของ multicast stream ออกไป — เมื่อแพ็กเก็ตมาถึงทาง RPF interface ที่ถูกต้องแล้ว Router จะส่งต่อออกทุก interface ในรายการนี้",
  },
  mrib: {
    term: "Multicast Routing Information Base (MRIB)",
    full: "",
    def: "ตารางเส้นทาง multicast ของ Router — คู่ขนานกับ RIB ของฝั่ง unicast เก็บสถานะ (S,G) และ (*,G) พร้อม incoming interface และ OIL",
  },
  mfib: {
    term: "Multicast Forwarding Information Base (MFIB)",
    full: "",
    def: "ตารางส่งต่อ multicast ที่ใช้ตัดสินใจส่งแพ็กเก็ตจริงในระดับฮาร์ดแวร์ — คู่ขนานกับ FIB ของฝั่ง unicast ที่ CEF ใช้",
  },
  pimDr: {
    term: "PIM Designated Router (DR)",
    full: "",
    def: "Router ที่ถูกเลือกผ่าน PIM hello ให้เป็นตัวแทนของ LAN segment เพื่อกันไม่ให้ส่งทราฟฟิก multicast ซ้ำซ้อน — priority default คือ 1 ถ้าเท่ากันใช้ IP สูงสุดตัดสิน (ตรงข้ามกับ IGMP querier ที่ใช้ IP ต่ำสุด)",
  },
  rpf: {
    term: "Reverse Path Forwarding (RPF)",
    full: "",
    def: "อัลกอริทึมกันลูปของ multicast — ตรวจว่าแพ็กเก็ตเข้ามาทาง interface เดียวกับที่ Router ใช้ส่ง unicast ไปหาต้นทางหรือไม่ ถ้าใช่จึงส่งต่อออก OIL ถ้าไม่ใช่ให้ทิ้งทันที",
  },
  rendezvousPoint: {
    term: "Rendezvous Point (RP)",
    full: "",
    def: "Router ที่ถูกแต่งตั้งให้เป็นรากร่วมของ shared tree ใน PIM-SM เป็นจุดนัดพบระหว่างต้นทางกับผู้รับ — กำหนดได้ 3 วิธี: Static RP, Auto-RP (ของ Cisco) หรือ BSR (มาตรฐานเปิด)",
  },

  // ---- DB Security: Chapter 1 — พื้นฐาน Web Application และ HTML ----
  clientServerModel: {
    term: "Client-Server Model",
    full: "",
    def: "สถาปัตยกรรมที่แบ่งหน้าที่เป็นสองฝั่ง — Client (ผู้ใช้/Browser) ส่ง Request ขอข้อมูล และ Server รอรับแล้วตอบกลับด้วย Response ทุกการโต้ตอบบนเว็บวิ่งอยู่บนโมเดลนี้",
  },
  statelessHttp: {
    term: "Stateless",
    full: "",
    def: "คุณสมบัติของ HTTP ที่ Server ไม่จดจำสถานะระหว่าง Request แต่ละครั้ง มองทุก Request เป็นการเชื่อมต่อใหม่เสมอ — นี่คือเหตุผลที่ต้องมี Session/Cookie มาช่วยจำสถานะผู้ใช้ในภายหลัง",
  },
  queryString: {
    term: "Query String",
    full: "",
    def: "ส่วนของ URL ที่ต่อท้ายเครื่องหมาย ? ใช้ส่งข้อมูลเพิ่มเติมไปกับ Request แบบ key=value คั่นด้วย & — มองเห็นได้ชัดเจนบน Address Bar จึงไม่เหมาะกับข้อมูลอ่อนไหว",
  },
  boxModel: {
    term: "CSS Box Model",
    full: "",
    def: "โมเดลที่ทุก element บนหน้าเว็บถูกมองเป็นกล่องซ้อนกัน 4 ชั้น: content (เนื้อหา) → padding (ระยะในขอบ) → border (เส้นขอบ) → margin (ระยะนอกกล่อง)",
  },
  renderingEngine: {
    term: "Rendering Engine",
    full: "",
    def: "ส่วนของ Browser ที่แปลงโค้ด HTML, CSS, JavaScript ให้กลายเป็นหน้าตาเว็บไซต์ที่มนุษย์มองเห็นและใช้งานได้",
  },

  // ---- DB Security: Chapter 2 — HTML Form และการส่งข้อมูล GET/POST ----
  nameAttribute: {
    term: "name Attribute",
    full: "",
    def: "แอตทริบิวต์ที่กำหนดชื่อของข้อมูลที่จะถูกส่งไปยัง Server เมื่อ Submit Form — ค่าที่ Server อ่านได้จะอ้างอิงจากชื่อนี้เสมอ ถ้า input ไม่มี name ข้อมูลนั้นจะไม่ถูกส่งไปเลย",
  },
  untrustedInput: {
    term: "Untrusted Input",
    full: "",
    def: "หลักคิดพื้นฐานด้านความปลอดภัยเว็บ: ข้อมูลใดก็ตามที่มาจากฝั่งผู้ใช้ (Form, URL, Cookie, Header, DevTools) ต้องถือว่าไม่น่าเชื่อถือเสมอ จนกว่า Server จะตรวจสอบซ้ำแล้ว",
  },
  clientSideValidation: {
    term: "Client-Side Validation",
    full: "",
    def: "การตรวจสอบข้อมูลที่เกิดบน Browser ก่อนส่ง Request เช่นผ่าน required หรือ JavaScript — ช่วยเรื่อง UX แต่ผู้ใช้สามารถปิดหรือแก้ไขผ่าน DevTools ได้ จึงห้ามใช้เป็นการป้องกันหลัก",
  },
  serverSideValidation: {
    term: "Server-Side Validation",
    full: "",
    def: "การตรวจสอบข้อมูลที่ฝั่ง Server หลังได้รับ Request แล้ว ก่อนนำไปใช้บันทึกหรือประมวลผล — เป็นด่านที่ผู้ใช้แก้ไขเลี่ยงไม่ได้ จึงต้องเป็นด่านหลักเสมอ",
  },
  sanitizeInput: {
    term: "Sanitize",
    full: "",
    def: "การทำความสะอาดข้อมูลจากผู้ใช้ก่อนนำไปใช้งาน เช่น ตัดช่องว่างส่วนเกิน หรือลบ/แปลงอักขระที่อาจเป็นอันตราย เป็นหนึ่งในขั้นตอนสำคัญคู่กับ Validate",
  },
  authorizeCheck: {
    term: "Authorize",
    full: "",
    def: "การตรวจสอบสิทธิ์ของผู้ใช้ที่ฝั่ง Server เสมอ (เช่น role, user_id) โดยไม่เชื่อค่าที่ผู้ใช้ส่งมาโดยตรง เพราะค่าอย่าง role=admin ที่ส่งมาทาง Form ไม่ได้แปลว่าผู้ใช้เป็น Admin จริง",
  },
};
