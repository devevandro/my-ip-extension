fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("ip-address").textContent = `${data.ip}`;
  })
  .catch((error) => {
    document.getElementById("ip-address").textContent =
      "Erro ao recuperar o IP.";
    console.error("Erro:", error);
  });
