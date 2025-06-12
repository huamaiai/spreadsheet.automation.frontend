// shared.js

// Populate checkboxes or dropdowns with practitioner names from /practitioners
async function populatePractitionerOptions(container, type = 'checkbox') {
    const res = await fetch(`${API_BASE}/practitioners`);

    if (!res.ok) return;
    const data = await res.json();
    container.innerHTML = '';
    data.forEach(name => {
        const id = 'provider_' + name.replace(/\s+/g, '_');
        const input = document.createElement('input');
        input.type = type;
        input.name = "providers";
        input.value = name;
        input.id = id;

        const label = document.createElement('label');
        label.htmlFor = id;
        label.textContent = ' ' + name;

        const wrapper = document.createElement('div');
        wrapper.appendChild(input);
        wrapper.appendChild(label);
        container.appendChild(wrapper);
    });
}

// Populate dropdown for upload form
async function populateUploadDropdown() {
    const res = await fetch(`${API_BASE}/practitioners`);

    const select = document.getElementById('providerSelect');
    if (!res.ok) return;
    const providers = await res.json();
    providers.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    });
}
