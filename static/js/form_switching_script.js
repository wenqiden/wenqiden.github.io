function showForm(formId) {
    var formUrl = formId === 'form1' ? 'https://docs.google.com/forms/d/e/1FAIpQLScdNG7nSG5LrKws0b6IYmIFrxYR9_9x0yCOyouayGCb47npWA/viewform' : 'https://docs.google.com/forms/d/e/1FAIpQLSdmiOhaXexoWTSaAmMk75Fyy4dTKqfTlGq2fNQuUHvZU5GelA/viewform';
    document.getElementById("googleForm").src = formUrl;
}

// Call showForm with 'form1' on page load
window.onload = function() {
    showForm('form1');
};