document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeDisplay = document.getElementById('resumeDisplay') as HTMLDivElement;

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const resumeData: { [key: string]: string } = {};

        formData.forEach((value, key) => {
            resumeData[key] = value.toString();
        });

        const resumeHTML = generateResumeHTML(resumeData);
        resumeDisplay.innerHTML = resumeHTML;
        resumeDisplay.style.display = 'block';
    });
});

function generateResumeHTML(data: { [key: string]: string }): string {
    return `
        <h2>${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        
        <h3>Education</h3>
        <p>${formatTextArea(data.education)}</p>
        
        <h3>Experience</h3>
        <p>${formatTextArea(data.experience)}</p>
        
        <h3>Skills</h3>
        <p>${formatTextArea(data.skills)}</p>
    `;
}

function formatTextArea(text: string): string {
    return text.replace(/\n/g, '<br>');
}