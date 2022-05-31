class clsJumpHero {
    constructor(pWin, pDoc) {
        console.log('__clsJumpHero_______________');
        this.Doc = pDoc;
        this.win = pWin;
        this.canvas=this.Doc.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        ///////////////////////
        this.Enemys=[];
        this.Dragon_num = 1;
        this.Goblin_num = 1;
        this.Enemynum = this.Goblin_num + this.Dragon_num;
        ///////////////////////
        this.imageBACKG1;
        this.CreateBackground();
        ///////////////////////
        this.StopButton();
        this.pause=true;
        ///////////////////////
        this.m_Hero=  new clsHero(this.ctx);
        this.INTERACT= new clsInteract(this);
        this.tick=0;
        ///////////////////////
        this.CreateSprites();
        this.CreateEvents();
        this._loop();
    }
    ////////////////////////////////////////////////////////////////////////////
    /**
     * Crea el boton de pausa
     */
    StopButton(){
        this.stop = document.createElement("button");
        this.stop.className= "b1";
        this.stop.innerHTML = "Stop";
        this.stop.addEventListener("click",this._onclick.bind(this));
        this.container = document.getElementById("b1");
        this.container.appendChild(this.stop);
    }
    ////////////////////////////////////////////////////////////////////////////
    /**
     * Cambia el valor de la variable pausa cuando cliquemos el boton.
     */
    _onclick(){
        if (this.pause){ 
            this.pause=false;
            return
        }
        if (!this.pause) {
            this.pause=true;
            return
        }      
    }
    //////////////////////////////////////////////////////////////////////////
    /**
     * Bindeamos los eventos a las funciones.
     */
    CreateEvents(){
        this.Doc.addEventListener('__KEY_HERO_MOVE', this._CallBack_HeroMove.bind(this));
        this.Doc.addEventListener('__KEY_HERO_JUMP', this._CallBack_HeroJump.bind(this));
        this.Doc.addEventListener('_CallBack_HeroStop', this._CallBack_HeroStop.bind(this));
    }
    /////////////////////////////////////////////////////////////////////////////
    /**
     * Creamos la clase Background
     */
    CreateBackground(){
        this.imageBACKG1 = new clsBackground(this.ctx , "Fondo");
    }
    ////////////////////////////////////////////////////////////////////////////
    /**
     * Creamos los diferentes enemigos
     */
    CreateSprites(){
        for (var i=0;i<this.Goblin_num;i++){
            var tR= new clsGoblin(this.ctx,'g'+i, "imgs/Enemies/Goblin/", 8, 15);
            this.Enemys.push(tR);
        }
        for (var i=0;i<this.Dragon_num;i++){
            var tR= new clsDragon(this.ctx,'d'+i, "imgs/Enemies/Dragon/", 0, 2);
            this.Enemys.push(tR);
        }
    }
    ////////////////////////////////////////////////////////////////////////////
    /**
     * Funcion que da movimiento al jugador, enemigos y fondo.
     */
    _CallBack_HeroMove(e){
        if (this.death){
            return;
        }
        if (e.code=="KeyA"){
            for (var i=0;i<this.Enemynum;i++){
                this.Enemys[i].MoveEnemy(3,-1);
            }
            this.m_Hero.takeDirection("left");
            this.imageBACKG1.setVelocity(7);
            this.imageBACKG1.moveLeft();
        }
        if (e.code=="KeyD"){
            for (var i=0;i<this.Enemynum;i++){
                this.Enemys[i].MoveEnemy(3, 1);
            }
            this.m_Hero.takeDirection("right");
            this.imageBACKG1.setVelocity(7);
            this.imageBACKG1.moveRight();
        }
        this.imageBACKG1.acceleration=true;
    }
    ////////////////////////////////////////////////////////////////////////////
    /**
     * Funcion de salto del personaje
     */
    _CallBack_HeroJump(e){
        if (this.death){
            return;
        }
        if (e.code=="Space"){
            this.m_Hero.jump()
        }
    }
    ////////////////////////////////////////////////////////////////////////////
    /**
     * Funcion para parar el movimiento
     */
    _CallBack_HeroStop(e){
        if(e.code == "KeyA"){
            this.imageBACKG1.setVelocity(0);
            this.imageBACKG1.acceleration=false;
            this.m_Hero.HeroStop("left")
            for (var i=0;i<this.Enemynum;i++){
                this.Enemys[i].MoveEnemy(2,1);
            } 
        }
        if(e.code == "KeyD"){
            this.imageBACKG1.setVelocity(0);
            this.imageBACKG1.acceleration=false;
            this.m_Hero.HeroStop("right")
            for (var i=0;i<this.Enemynum;i++){
                this.Enemys[i].MoveEnemy(2,1);
            }
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Funcion de dibujado del canvas
     */
    _DrawCanvasRect(){
        this.ctx.beginPath();
        this.ctx.lineWidth = "4";
        this.ctx.strokeStyle = "blue";
        this.ctx.rect(0, 0, 800, 600);
        this.ctx.stroke();
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Funcion que revisa las colisiones entre el jugador y los enemigos
     */
     _CheckHits(){ 
        for (var i=0;i<this.Enemynum;i++){
                if (this.m_Hero.sprite.Collide (this.Enemys[i].sprite)){
                    this.m_Hero.HasACollision();
                    this.death=true;
                };
            };
     
        }
    /////////////////////////////////////////////////////////////////////////////////////////////////    
    /**
     * Funcion bucle que redibuja todos los sprites y fondos
     */
    _loop() {
        if(this.pause){
                this.tick++;        
                this.ctx.clearRect(0, 0, canvas.width, canvas.height);
                this._CheckHits();
                this.imageBACKG1.Draw();
                for (var i=0;i<2;i++){
                    this.Enemys[i].Draw();
                    this.Enemys[i].MoveEnemy();
                }
                this.m_Hero.update();
                this.m_Hero.Draw();
                this._DrawCanvasRect();
    }
        window.requestAnimationFrame(this._loop.bind(this));
    }
    ////////////////////////////////////////////////////////////////////////////
}