function toggleFaq(header) {
    const content = header.nextElementSibling;
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none': 'block';
}