(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),s=(a(13),a(3)),o=a.n(s);a(14);var i=function(){const[e,t]=Object(n.useState)(!1),[a,r]=Object(n.useState)(0),[c,s]=Object(n.useState)(0),[i,m]=Object(n.useState)(!1),[u,d]=Object(n.useState)(""),[p,E]=Object(n.useState)(!1),h=["/extempo-plus/pharmacists1.png","/extempo-plus/pharmacists2.png","/extempo-plus/pharmacists3.png","/extempo-plus/pharmacists4.png"];Object(n.useEffect)(()=>{const e=setInterval(()=>{r(e=>(e+1)%h.length)},3e3);return()=>clearInterval(e)},[h.length]);const[f,g]=Object(n.useState)({patientName:"",drugName:"",patientWeight:"",prescribedDose:"",availableTabletStrength:"",administeredDose:"",frequencyOfUse:"",durationOfUse:""}),b=Object.keys(f),v=()=>{E(!0),y()},y=()=>{const e=(new Date).toLocaleString(),t=document.getElementById("created_date");t&&(t.innerText=e)};return document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".flashcard-inner").forEach(e=>{e.addEventListener("click",()=>{e.style.transform="rotateY(180deg)"===e.style.transform?"rotateY(0deg)":"rotateY(180deg)"})})}),l.a.createElement("div",{className:"app"},l.a.createElement("ul",{id:"menu"},l.a.createElement("div",{className:"menu-group left"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://studixshare.com/login",target:"_blank",rel:"noopener noreferrer"},"Log-In")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://example.com"},"Blog-Post")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://studixshare.com/login",target:"_blank",rel:"noopener noreferrer"},"Try Flashcards"))),l.a.createElement("div",{className:"menu-group center"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://example.com"},"Generate Instructions")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://example.com",onClick:v},"Create Label")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://example.com",onClick:()=>t(!0)},"Calculate Quantities"))),l.a.createElement("div",{className:"menu-group right"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://studixshare.com/contact",target:"_blank",rel:"noopener noreferrer"},"Contact Us")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://example.com"},"FAQ")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://studixshare.com/support",target:"_blank",rel:"noopener noreferrer"},"Support")))),l.a.createElement("div",{className:"slider"},l.a.createElement("img",{src:h[a],alt:`Slide ${a+1}`})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Extempo-Plus"),l.a.createElement("p",null,"Extempo-Plus is a web application that helps pharmacists to perform extemporaneous preparations quickly and accurately.",l.a.createElement("br",null),"It also helps to create automated labels for these preparations.")),l.a.createElement("div",{className:"calculate-quantities"},l.a.createElement("div",{className:"quantities"},l.a.createElement("h2",null,"Calculate Quantities"),l.a.createElement("p",null,"Calculate the quantities of drugs to be administered to patients."),l.a.createElement("p",null,"Quantities are calculated based on the patient's weight, prescribed dose, and other factors."),l.a.createElement("p",null,"Quantities are easy to calculate."))),l.a.createElement("div",{className:"info-graphics-data1"},l.a.createElement("div",{className:"info-graphics"},l.a.createElement("div",{className:"info-graphic"},l.a.createElement("p",{id:"save-over-text"},"Save over"),l.a.createElement("img",{src:"timer1.png",alt:"6 minutes info graphics"}),l.a.createElement("p",{id:"on-each"},"On each compounding with extempo app")))),l.a.createElement("div",{className:"features"},l.a.createElement("div",{className:"feature"},l.a.createElement("h2",null,"Generate Instructions"),l.a.createElement("p",null,"Generate compounding instructions for each patients with the click of a button."),l.a.createElement("p",null,"Instructions are generated based on the dosage form, type of medications, patient's weight, prescribed dose, and other factors."),l.a.createElement("p",null,"Instructions are easy to understand and follow."),l.a.createElement("p",null,"Instructions can be customized to suit the patient's needs."),l.a.createElement("p",null,"Instructions can be generated for different types of drugs."),l.a.createElement("p",null,"Instructions can be generated for different types of patients."),l.a.createElement("p",null,"Instructions can be generated for different types of diseases."),l.a.createElement("p",null,"Instructions can be generated for different types of treatments."),l.a.createElement("p",null,"Click below to start"))),l.a.createElement("button",{onClick:v,className:"generate-instructions-button"},"Generate Instructions"),l.a.createElement("div",{className:"flashcard-header"},l.a.createElement("p",null,"Try Our Flashcard App")),l.a.createElement("section",{class:"flashcard-section"},l.a.createElement("div",{class:"flashcard"},l.a.createElement("div",{class:"flashcard-inner"},l.a.createElement("div",{class:"flashcard-front"},"A 35-year-old with appendicitis requires surgery. He has a family history of malignant hyperthermia. The agent most appropriate is? Isoflurane or Propofol"),l.a.createElement("div",{class:"flashcard-back"},"Propofol is safe in patients susceptible to malignant hyperthermia. Isoflurane, sevoflurane, desflurane and succinylcholine are considered triggering agents")))),l.a.createElement("div",{class:"try-flashcards"},"Click ",l.a.createElement("a",{href:"https://studixshare.com/login",target:"_blank",rel:"noopener noreferrer"},"here")," to sign-up for flashcards"),i&&l.a.createElement("div",{className:"results-modal"},l.a.createElement("div",{className:"results-content"},l.a.createElement("h2",null,"Result Sheet"),l.a.createElement("pre",null,u),l.a.createElement("button",{onClick:()=>m(!1),id:"result-close-button"},"X"))),p&&l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("button",{onClick:()=>{E(!1)},className:"close-button"},"X"),l.a.createElement("button",{onClick:()=>{const e=document.querySelector(".modal-content");o()(e).then(e=>{const t=document.createElement("a");t.href=e.toDataURL("image/jpeg"),t.download="modal-content.jpg",t.click()})},className:"download-button"},"Download"),l.a.createElement("div",{id:"Drug-label"},l.a.createElement("div",{id:"label-ID-container"},l.a.createElement("input",{type:"text",id:"label-ID",name:"label-ID",placeholder:"Label-ID"}),l.a.createElement("br",null)),l.a.createElement("div",{id:"DrugName"},l.a.createElement("input",{type:"text",name:"DrugName",placeholder:"Drug Name"}),l.a.createElement("br",null)),l.a.createElement("div",{id:"shake-the-mixture"},l.a.createElement("p",null,l.a.createElement("strong",null,"Shake The Mixture"))),l.a.createElement("div",{id:"instructions"},l.a.createElement("div",{style:{display:"inline-block"}},"Give",l.a.createElement("form",{style:{display:"inline-block"}},l.a.createElement("input",{type:"number",name:"dose",size:"2",placeholder:"Dose"})),l.a.createElement("form",{style:{display:"inline-block"}},l.a.createElement("input",{type:"number",name:"frequency",size:"2",placeholder:"Frequency"})),"Time(s) daily")),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"name"},"Name:"),l.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Patient Name"}),l.a.createElement("div",{id:"date"},l.a.createElement("p",null,"Date Of Manufacture: ",l.a.createElement("span",{id:"created_date"},(new Date).toLocaleString()))),l.a.createElement("div",{id:"primInstructions"},l.a.createElement("p",null,l.a.createElement("strong",null,"Discard after 14 days ",l.a.createElement("br",null),"Keep Drug Away from Children "))),l.a.createElement("div",{id:"place-of-manufacture"},l.a.createElement("input",{type:"text",placeholder:"Place of Manufacture"})))),l.a.createElement("button",{onClick:()=>alert("Connect device to printer"),className:"print-button"},"Print"))),e&&l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"form-modal"},l.a.createElement("button",{onClick:()=>t(!1),className:"close-button"},"X"),l.a.createElement("div",{className:"form-container"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",id:b[c],value:f[b[c]],onChange:e=>{g({...f,[e.target.id]:e.target.value})},placeholder:b[c].replace(/([A-Z])/g," $1").toUpperCase(),className:"form-input"})),l.a.createElement("div",{className:"navigation-buttons"},c>0&&l.a.createElement("button",{onClick:()=>{s(e=>Math.max(e-1,0))},className:"nav-button"},"Previous"),c<b.length-1?l.a.createElement("button",{onClick:()=>{s(e=>Math.min(e+1,b.length-1))},className:"nav-button"},"Next"):l.a.createElement("button",{onClick:()=>{const{prescribedDose:e,frequencyOfUse:t,durationOfUse:a,availableTabletStrength:n,administeredDose:l}=f,r=((e,t,a,n)=>e*t*a/n)(e,t,a,n),c=((e,t,a,n)=>e*t*a*n/e)(e,t,a,l);d(`Total number of tablets: ${r}\nTotal volume: ${c}`),m(!0)},className:"submit-button"},"Submit"))))),l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"\xa9 2024 extempo-plus app | Powered by Studixshare")))};var m=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),m()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.72059d75.chunk.js.map