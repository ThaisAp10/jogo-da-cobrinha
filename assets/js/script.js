window.onload = function() {
    let stage = document.querySelector('#stage');
    let context = stage.getContext("2d");
    document.addEventListener('keydown', keyPush);

    setInterval(game, 80);

    const vel = 1;
    let velx = vely = 0; //velocidade x e y
    let px = 10; // ponto x
    let py = 15;
    let tp = 20; //tamanho do ponto
    let qp = 20; //quantidade de peças
    let ax = ay = 15; //posição

    let trail = []; //rastro da calda
    tail = 5;

    /** 
     * Caso ocorra algum erro, usar a declaração desta forma
     * let velx = 0;
     * let vely = 0;
     */

    function game() {
        px += velx;
        py += vely;
        if (px < 0) {
            px = qp - 1;
        }
        if (px > qp - 1) {
            px = 0;
        }
        if (py < 0) {
            py += qp - 1;
        }
        if (py > qp - 1) {
            py = 0;
        }

        context.fillStyle = '#6495ED';
        context.fillRect(0,0, stage.width, stage.height);

        context.fillStyle = 'red';
        context.fillRect(ax * tp, ay * tp, tp, tp);

        context.fillStyle = '#228B22';
        for (let i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x * tp, trail[i].y * tp, tp, tp);
            if (trail[i].x == px && trail[i].y == py) {
                velx = vely = 0;
                tail = 5;
            }
        }

        trail.push({x: px, y: py});
        while (trail.length > tail) {
            trail.shift();
        }

        if (ax == px && ay == py) {
            tail++;
            ax = Math.floor(Math.random() * qp);
        }

        
    }
    function keyPush(event) {
        switch (event.keyCode) {
            case 37: //tecla esquerda
                velx = - vel;
                vely = 0;
                break;
            case 38: //tecla para cima
                velx = 0;
                vely = - vel;
                break;
            case 39: //tecla direita
                velx = vel;
                vely = 0;
                break; 
            case 40: //tecla para baixo
                velx = 0;
                vely = vel;
                break;       
            default:
                break;
        }
    }
}