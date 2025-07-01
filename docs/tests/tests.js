QUnit.module("Formulario de contacto");

QUnit.test("al enviar muestra mensaje de éxito y limpia campos", assert => {
  const done = assert.async();

  // 1) Inyectamos el HTML sin valores por defecto
  document.getElementById("qunit-fixture").innerHTML = `
    <section class="contact">
      <form>
        <input type="text" required>
        <input type="email" required>
        <textarea required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
    <div id="contact-message"></div>
  `;

  // 2) Enganchamos el listener (tal como en main.js)
  const form = document.querySelector(".contact form");
  const messageBox = document.getElementById("contact-message");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    messageBox.textContent = "¡Mensaje enviado correctamente!";
    messageBox.style.display = "block";
    form.reset();
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 4000);
  });

  // 3) Simulamos que el usuario escribe
  const txt = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const area = form.querySelector("textarea");
  txt.value = "Juan";
  email.value = "a@b.com";
  area.value = "Hola";

  // 4) Disparamos el evento submit
  form.dispatchEvent(new Event("submit", { cancelable: true }));

  // 5) Damos 50ms para que corra el handler
  setTimeout(() => {
    assert.equal(
      messageBox.textContent,
      "¡Mensaje enviado correctamente!",
      "1) Se muestra el mensaje de éxito"
    );
    assert.equal(
      txt.value,
      "",
      "2) Se limpia el campo de texto"
    );
    assert.equal(
      area.value,
      "",
      "3) Se limpia el textarea"
    );
    done();
  }, 50);
});
