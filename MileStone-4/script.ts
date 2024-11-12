document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

    form?.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        const resumeHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${formatTextArea(education)}</p>
            <h3>Experience</h3>
            <p>${formatTextArea(experience)}</p>
            <h3>Skills</h3>
            <p>${formatTextArea(skills)}</p>
        `;

        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
            resumeDisplayElement.style.display = 'block';
        } else {
            console.error('Resume display element not found');
        }
    });

    function formatTextArea(text: string): string {
        return text.replace(/\n/g, '<br>');
    }

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', updatePreview);
    });

    function updatePreview() {
        const name = (document.getElementById('name') as HTMLInputElement).value || 'Your Name';
        const email = (document.getElementById('email') as HTMLInputElement).value || 'your.email@example.com';
        const phone = (document.getElementById('phone') as HTMLInputElement).value || '123-456-7890';
        const education = (document.getElementById('education') as HTMLTextAreaElement).value || 'Your education details';
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value || 'Your work experience';
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value || 'Your skills';

        const previewHTML = `
            <h2>${name}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${formatTextArea(education)}</p>
            <h3>Experience</h3>
            <p>${formatTextArea(experience)}</p>
            <h3>Skills</h3>
            <p>${formatTextArea(skills)}</p>
        `;

        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = previewHTML;
        }
    }

    updatePreview();
});