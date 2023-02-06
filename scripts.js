function hidePages() {
	document.getElementById("home-page").setAttribute("hidden", "");
	document.getElementById("portfolio-page").setAttribute("hidden", "");
	document.getElementById("qualifications-page").setAttribute("hidden", "");
	document.getElementById("service-page").setAttribute("hidden", "");
	document.getElementById("ai-page").setAttribute("hidden", "");
}

function toHomePage() {
	hidePages()
	document.getElementById("home-page").removeAttribute("hidden");
}

function toPortfolioPage() {
	hidePages()
	document.getElementById("portfolio-page").removeAttribute("hidden");
}

function toQualificationsPage() {
	hidePages()
	document.getElementById("qualifications-page").removeAttribute("hidden");
}

function toServicePage() {
	hidePages()
	document.getElementById("service-page").removeAttribute("hidden");
}

function toAiPage() {
	hidePages()
	document.getElementById("ai-page").removeAttribute("hidden");
}

function toggleTheme() {
	if (document.getElementById("style-sheet").getAttribute("href") === "theme1.css") {
		document.getElementById("style-sheet").setAttribute("href", "theme2.css");
		localStorage.setItem("style", "theme2.css")
	} else {
		document.getElementById("style-sheet").setAttribute("href", "theme1.css");
		localStorage.setItem("style", "theme1.css")
	}
}

style = localStorage.getItem("style");
if (style === "theme2.css") {
	document.getElementById("style-sheet").setAttribute("href", "theme2.css");
}
