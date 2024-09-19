const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
})

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.pedidoNumber}</td>
                        <td>${order.vendaDate}</td>
                        <td>${order.pagamentoStatus}</td>
                        <td>${order.pagamentoStatus}</td>
                        <td>${order.pedidoValor}</td>
                        <td class"${order.envio === 'Recusou' ? 'danger' : order.envio
                         === 'Pedente' ? 'warning' : 'sucess'} ">${order.envio}</td>
                        <td>Detalhes</td>
                        `

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})