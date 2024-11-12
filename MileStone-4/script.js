document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeDisplayElement = document.getElementById('resume-display');
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var resumeHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(formatTextArea(education), "</p>\n            <h3>Experience</h3>\n            <p>").concat(formatTextArea(experience), "</p>\n            <h3>Skills</h3>\n            <p>").concat(formatTextArea(skills), "</p>\n        ");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
            resumeDisplayElement.style.display = 'block';
        }
        else {
            console.error('Resume display element not found');
        }
    });
    function formatTextArea(text) {
        return text.replace(/\n/g, '<br>');
    }
    // Add real-time preview
    var inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
        input.addEventListener('input', updatePreview);
    });
    function updatePreview() {
        var name = document.getElementById('name').value || 'Your Name';
        var email = document.getElementById('email').value || 'your.email@example.com';
        var phone = document.getElementById('phone').value || '123-456-7890';
        var education = document.getElementById('education').value || 'Your education details';
        var experience = document.getElementById('experience').value || 'Your work experience';
        var skills = document.getElementById('skills').value || 'Your skills';
        var previewHTML = "\n            <h2>".concat(name, "</h2>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(formatTextArea(education), "</p>\n            <h3>Experience</h3>\n            <p>").concat(formatTextArea(experience), "</p>\n            <h3>Skills</h3>\n            <p>").concat(formatTextArea(skills), "</p>\n        ");
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = previewHTML;
        }
    }
    // Initial preview
    updatePreview();
});
