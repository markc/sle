// Debug script to check sidebar state
console.log("Sidebar Debug Information:");
console.log("------------------------");

// Check cookies
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

console.log("Cookies:");
console.log("sidebar_left:", getCookie("sidebar_left"));
console.log("sidebar_right:", getCookie("sidebar_right"));

// Check localStorage
console.log("\nLocalStorage:");
console.log("sidebar_left:", localStorage.getItem("sidebar_left"));
console.log("sidebar_right:", localStorage.getItem("sidebar_right"));

// Check if SidebarProvider is rendering correctly
console.log("\nDOM Elements:");
console.log("Sidebar wrapper:", document.querySelector("[data-slot='sidebar-wrapper']") ? "Found" : "Not found");
console.log("Left sidebar:", document.querySelector("[data-side='left'][data-slot='sidebar']") ? "Found" : "Not found");
console.log("Right sidebar:", document.querySelector("[data-side='right'][data-slot='sidebar']") ? "Found" : "Not found");

console.log("\nTo reset sidebar state, run:");
console.log("document.cookie = \"sidebar_left=true; path=/; max-age=604800\";");
console.log("document.cookie = \"sidebar_right=true; path=/; max-age=604800\";");
console.log("localStorage.setItem('sidebar_left', 'true');");
console.log("localStorage.setItem('sidebar_right', 'true');");
console.log("Then refresh the page.");
