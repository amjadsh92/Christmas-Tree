var n = prompt("Enter a number");

var length = 1 + 2 * (n - 1);

function space(n) {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  for (let i = 0; i < n; i++) {
    var spacespan = document.createElement("span");
    wrapper.appendChild(spacespan);
  }

  return wrapper;
}

function line(n) {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  for (let i = 0; i < n; i++) {
    var linespan = document.createElement("span");
    linespan.setAttribute("class", "line");
    var textnode = document.createTextNode("|");
    linespan.appendChild(textnode);
    wrapper.appendChild(linespan);
  }

  return wrapper;
}

body = document.getElementById("body");
maindiv = document.createElement("div");
maindiv.setAttribute("class", "tree");

for (let i = 0; i < n; i++) {
  if (i == 0) {
    div = document.createElement("div");

    spanstar = document.createElement("span");
    spanstar.setAttribute("class", "star");
    const textnode2 = document.createTextNode("*");
    spanstar.appendChild(textnode2);

    div.appendChild(space((length - (2 * i + 1)) / 2));
    div.appendChild(spanstar);
    div.appendChild(space((length - (2 * i + 1)) / 2));
    maindiv.appendChild(div);
    body.appendChild(maindiv);
  } else {
    div = document.createElement("div");

    spanstarleft = document.createElement("span");
    spanstarleft.setAttribute("class", "star");
    const textnode2 = document.createTextNode("*");
    spanstarleft.appendChild(textnode2);

    spanstarright = document.createElement("span");
    spanstarright.setAttribute("class", "star");
    const textnode3 = document.createTextNode("*");
    spanstarright.appendChild(textnode3);

    div.appendChild(space((length - (2 * i + 1)) / 2));
    div.appendChild(spanstarleft);
    div.appendChild(line(1 + 2 * (i - 1)));
    div.appendChild(spanstarright);
    div.appendChild(space((length - (2 * i + 1)) / 2));
    maindiv.appendChild(div);
    body.appendChild(maindiv);
  }
}
