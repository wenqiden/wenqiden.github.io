function showForm(formId) {
    var formUrl = formId === 'form1' ? 'https://docs.google.com/forms/d/e/1FAIpQLScdNG7nSG5LrKws0b6IYmIFrxYR9_9x0yCOyouayGCb47npWA/viewform' : 'https://docs.google.com/forms/d/e/1FAIpQLSdmiOhaXexoWTSaAmMk75Fyy4dTKqfTlGq2fNQuUHvZU5GelA/viewform';
    document.getElementById("googleForm").src = formUrl;

    if (formId === 'form1' ) {
        document.getElementById('tabBTN1').classList.add('tabBTNHighlighted');
        if (document.getElementById('tabBTN2').classList.contains('tabBTNHighlighted')) {
            document.getElementById('tabBTN2').classList.remove('tabBTNHighlighted');
        }
    } else {
        document.getElementById('tabBTN2').classList.add('tabBTNHighlighted');
        if (document.getElementById('tabBTN1').classList.contains('tabBTNHighlighted')) {
            document.getElementById('tabBTN1').classList.remove('tabBTNHighlighted');
        }
    }
}

// Call showForm with 'form1' on page load
window.onload = function() {
    showForm('form1');
};