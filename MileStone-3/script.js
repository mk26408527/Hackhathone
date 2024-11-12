document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeDisplay = document.getElementById('resumeDisplay');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var resumeData = {};
        formData.forEach(function (value, key) {
            resumeData[key] = value.toString();
        });
        var resumeHTML = generateResumeHTML(resumeData);
        resumeDisplay.innerHTML = resumeHTML;
        resumeDisplay.style.display = 'block';
    });
});
function generateResumeHTML(data) {
    return "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        \n        <h3>Education</h3>\n        <p>").concat(formatTextArea(data.education), "</p>\n        \n        <h3>Experience</h3>\n        <p>").concat(formatTextArea(data.experience), "</p>\n        \n        <h3>Skills</h3>\n        <p>").concat(formatTextArea(data.skills), "</p>\n    ");
}
function formatTextArea(text) {
    return text.replace(/\n/g, '<br>');
}
