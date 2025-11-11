import "./style.css"

document.addEventListener("click", (e) => {
	const isDropdownHeader = e.target.matches("[data-dropdown-header]")
	const dropdown = e.target.closest("[data-dropdown]")
	const submenu = dropdown?.querySelector(".sub-menu-wrap")

	if (!isDropdownHeader && !dropdown) {
		document
			.querySelectorAll("[data-dropdown] .sub-menu-wrap.visible")
			.forEach((menu) => {
				menu.classList.remove("visible")
			})
		return
	}
	if (isDropdownHeader && submenu) {
		submenu.classList.toggle("visible")
	}
})
