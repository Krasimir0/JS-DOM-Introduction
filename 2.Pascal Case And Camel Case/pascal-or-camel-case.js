  function solve() {
  function camalize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }

  function pascalize(str) {
    if (/^[a-z\d]+$/i.test(str)) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str.replace(
      /([a-z\d])([a-z\d]*)/gi,
      (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
    ).replace(/[^a-z\d]/gi, '');
  }

    let textInput = document.getElementById('text').value;
    let textCondition = document.getElementById("naming-convention").value;
    let result = document.getElementById("result");
    if (textCondition === "Camel Case") {
        let word = camalize(textInput);
        result.textContent = word
    }
    else if (textCondition === "Pascal Case") {
        let word = pascalize(textInput);
        result.textContent = word
    } else {
      let error = "Error!";
      result.textContent = error
    }
  }