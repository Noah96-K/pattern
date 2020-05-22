let ldt_g = [];
for (let i = 0; i < 8; i++) {
  ldt_g[i] = document.getElementsByClassName("ld-t")[i];
}
let rdt_g = [];
for (let i = 0; i < 8; i++) {
  rdt_g[i] = document.getElementsByClassName("rd-t")[i];
}

// let dt_g = [];
// for (let i = 0; i < 16; i++) {
//   dt_g[i] = document.getElementsByClassName("d-t")[i];
// }
let rt_g = [];
for (let i = 0; i < 240; i++) {
  rt_g[i] = document.getElementsByClassName("r-t")[i];
}
let lt_g = [];
for (let i = 0; i < 240; i++) {
  lt_g[i] = document.getElementsByClassName("l-t")[i];
}
let ltt_g = [];
for (let i = 0; i < 8; i++) {
  ltt_g[i] = document.getElementsByClassName("lt-t")[i];
}
let rtt_g = [];
for (let i = 0; i < 8; i++) {
  rtt_g[i] = document.getElementsByClassName("rt-t")[i];
}
const LDT = "ld-t",
  RDT = "rd-t",
  //   DT = "d-t",
  RT = "r-t",
  LT = "l-t",
  LTT = "lt-t",
  RTT = "rt-t";

const CLDT = "click-ld-t",
  CRDT = "click-rd-t",
  //   CDT = "click-d-t",
  CRT = "click-r-t",
  CLT = "click-l-t",
  CLTT = "click-lt-t",
  CRTT = "click-rt-t";

function handleClickldt(event) {
  const hasClass = event.target.classList.contains(CLDT);
  if (hasClass) {
    event.target.classList.remove(CLDT);
    event.target.classList.add(LDT);
  } else {
    event.target.classList.add(CLDT);
    event.target.classList.remove(LDT);
  }
}
function handleClickrdt(event) {
  const hasClass = event.target.classList.contains(CRDT);
  if (hasClass) {
    event.target.classList.remove(CRDT);
    event.target.classList.add(RDT);
  } else {
    event.target.classList.add(CRDT);
    event.target.classList.remove(RDT);
  }
}
// function handleClickdt(event) {
//   const hasClass = event.target.classList.contains(CDT);
//   if (hasClass) {
//     event.target.classList.remove(CDT);
//     event.target.classList.add(DT);
//   } else {
//     event.target.classList.add(CDT);
//     event.target.classList.remove(DT);
//   }
// }
function handleClickrt(event) {
  const hasClass = event.target.classList.contains(CRT);
  if (hasClass) {
    event.target.classList.remove(CRT);
    event.target.classList.add(RT);
  } else {
    event.target.classList.add(CRT);
    event.target.classList.remove(RT);
  }
}
function handleClicklt(event) {
  const hasClass = event.target.classList.contains(CLT);
  if (hasClass) {
    event.target.classList.remove(CLT);
    event.target.classList.add(LT);
  } else {
    event.target.classList.add(CLT);
    event.target.classList.remove(LT);
  }
}
function handleClickltt(event) {
  const hasClass = event.target.classList.contains(CLTT);
  if (hasClass) {
    event.target.classList.remove(CLTT);
    event.target.classList.add(LTT);
  } else {
    event.target.classList.add(CLTT);
    event.target.classList.remove(LTT);
  }
}
function handleClickrtt(event) {
  const hasClass = event.target.classList.contains(CRTT);
  if (hasClass) {
    event.target.classList.remove(CRTT);
    event.target.classList.add(RTT);
  } else {
    event.target.classList.add(CRTT);
    event.target.classList.remove(RTT);
  }
}
function init() {
  for (let j = 0; j < 8; j++) {
    ldt_g[j].addEventListener("click", handleClickldt);
  }
  for (let j = 0; j < 8; j++) {
    rdt_g[j].addEventListener("click", handleClickrdt);
  }
  //   for (let j = 0; j < 16; j++) {
  //     dt_g[j].addEventListener("click", handleClickdt);
  //   }
  for (let j = 0; j < 240; j++) {
    rt_g[j].addEventListener("click", handleClickrt);
  }
  for (let j = 0; j < 240; j++) {
    lt_g[j].addEventListener("click", handleClicklt);
  }
  for (let j = 0; j < 8; j++) {
    ltt_g[j].addEventListener("click", handleClickltt);
  }
  for (let j = 0; j < 8; j++) {
    rtt_g[j].addEventListener("click", handleClickrtt);
  }
}

init();
