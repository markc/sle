// Script to clear sidebar state
document.cookie = "sidebar_left=true; path=/; max-age=604800";
document.cookie = "sidebar_right=true; path=/; max-age=604800";
localStorage.setItem('sidebar_left', 'true');
localStorage.setItem('sidebar_right', 'true');
console.log("Sidebar state has been reset. Both sidebars should now be visible.");
console.log("Please refresh the page to see the changes.");
