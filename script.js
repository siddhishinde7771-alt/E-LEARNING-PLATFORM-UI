// Show selected page and hide others
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

// Enroll course function
function enrollCourse(courseName) {
    alert(courseName + " enrolled successfully! 🎉");

    const enrolledSection = document.getElementById("enrolled-courses");

    // Prevent duplicate enrollment
    if (document.getElementById(courseName.replace(/\s+/g, '-'))) {
        alert(courseName + " is already enrolled!");
        return;
    }

    const courseDiv = document.createElement("div");
    courseDiv.id = courseName.replace(/\s+/g, '-'); // unique id
    courseDiv.className = "bg-white shadow-md p-4 rounded-lg mb-4";
    courseDiv.innerHTML = `
        <h2 class="text-xl font-semibold">${courseName}</h2>
        <p class="text-green-600 font-medium">Successfully Enrolled ✅</p>
    `;

    enrolledSection.appendChild(courseDiv);
}