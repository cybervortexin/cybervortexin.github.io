function showIPAddress() {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        const ipAddressElement = document.getElementById("ipAddress");
        ipAddressElement.textContent = ipAddress;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  showIPAddress();