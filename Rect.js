//이미지 덮을 박스
class Rect{
    constructor(container, width, height, x, y, velX, velY, targetX, targetY, op, targetOp){
        this.container=container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;
        this.op=op;
        this.a=0.1;
        this.targetX=targetX;
        this.targetY=targetY;
        this.targetOp=targetOp;

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background="whitesmoke";
        this.div.style.border="0.5px solid silver";
        this.div.style.boxSizing="border-box";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.container.appendChild(this.div);
    }

    fadeout(){
        this.op=this.op+this.a*(this.targetOp-this.op);
    }

    tick(){ //실제 rect의 물리적인 동작 함수
        this.x=this.x+this.a*(this.targetX-this.x);
        this.y=this.y+this.a*(this.targetY-this.y);

        this.fadeout();
    }

    render(){ // rect의 그래픽적, 시각적 처리
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.opacity=this.op;
    }
}