function searchArchive() {
    const selectedMonth = document.getElementById('searchMonth').value;
    
    if (selectedMonth) {
        alert(`Searching for ${selectedMonth}`);
    } else {
        alert('Please select a month.');
    }
}
