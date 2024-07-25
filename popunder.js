(function() {
    function openNewTab(url) {
        window.open(url, '_blank'); // Opens the URL in a new tab
    }

    // Adjust the URL and the delay as needed
    window.onload = function() {
        setTimeout(function() {
            openNewTab('https://seatv24.xyz/'); // Replace with your desired URL
        }, 5000); // Adjust the delay as needed
    };
})();
