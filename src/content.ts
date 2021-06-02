// This file is injected as a content script
import "./content.css";
console.log("Hello from content script!")
const body = document.getElementsByTagName("body");

const snowflakesContainer = document.createElement("div");
snowflakesContainer.className = "snowflakes";
snowflakesContainer.setAttribute("aria-hidden", "true");
const snowflake = document.createElement("div");

snowflake.setAttribute("style","width:5px;height:5px;background-color: #89ff83;");
snowflake.className = "snowflake";
snowflake.innerHTML = "❆";

for (let i = 0; i < 1024; i++) {
    snowflakesContainer.appendChild(snowflake.cloneNode(true));
}

body[0]?.prepend(snowflakesContainer);