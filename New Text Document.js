function izracunajPotrebnuKolicinuLeda() {
  const brojGostiju = parseInt(document.getElementById("broj-gostiju").value);
  const ledaPoGostu = 60 / 100; // 60 kg leda za 100 gostiju
  const potrebnoLeda = ledaPoGostu * brojGostiju;

  document.getElementById("rezultat").textContent = `Za ${brojGostiju} gostiju potrebno je ${potrebnoLeda} kg leda.`;
}
