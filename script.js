function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const image = document.querySelector(".profile-image");

  if (html.classList.contains("light")) {
    image.setAttribute("src", "assets/avatar-light.png");
    image.setAttribute(
      "alt",
      "Foto de Mike Brito sorrindo, usando óculos e camisa preta, barba e fundo claro"
    );
  } else {
    image.setAttribute("src", "assets/avatar.png");
    image.setAttribute(
      "alt",
      "Foto de Mike Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    );
  }
}
