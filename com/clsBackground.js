class clsBackground{
    constructor(pCtx, pId){
        this.ctx = pCtx;
        this.id =pId;
        //Parametros paralax
        this.gameSpeed = 0;
        this.MaxSpeed = 0;
        this.acceleration = false;
        this.x = 0;
        this.x2 = 1376;
        this.mod = 0;
        ///////////////////////
        this.mQ = false;
        this.mL = false;
        this.mR = false;
        ///////////////////////
        this.createLayers();
    }
    /////////////////////////////////////////////////////////////
    setVelocity(pValue){
        this.MaxSpeed=pValue;
    }
    /////////////////////////////////////////////////////////////
    /**
     * Esta funcion crea las imagenes de fondo de escenario
     */
    createLayers(){
        this.layer0 = new clsSprite(this.ctx, "sky","imgs/background/sky/" , 1, ".png", 400 , 0 , 1);
        this.layer0.flw.pt.y=120;
        this.layer0.flw.pt.x=0;
        this.layer0.flw.pFuera = true;
        /////////////////////////////
        this.layer02 = new clsSprite(this.ctx, "sky","imgs/background/sky/" , 1, ".png", 400 , 0 , 1);
        this.layer02.flw.pt.y=120;
        this.layer02.flw.pt.x=800;
        this.layer02.flw.pFuera = true;
        //////////////////////////////
        this.layer2 = new clsSprite(this.ctx, "mountains","imgs/background/mountains/" , 1, ".png", 400 , 0 , 1);
        this.layer2.flw.pt.y=240;
        this.layer2.flw.pt.x=0;
        this.layer2.flw.pFuera = true;
        /////////////////////////////
        this.layer22 = new clsSprite(this.ctx, "mountains","imgs/background/mountains/" , 1, ".png", 400 , 0 , 1);
        this.layer22.flw.pt.y=240;
        this.layer22.flw.pt.x=800;
        this.layer22.flw.pFuera = true;
        /////////////////////////////
        this.layer3 = new clsSprite(this.ctx, "forest","imgs/background/forest/" , 1, ".png", 400 , 0 , 1);
        this.layer3.flw.pt.y=330;
        this.layer3.flw.pt.x=0;
        this.layer3.flw.pFuera = true;
        /////////////////////////////
        this.layer32 = new clsSprite(this.ctx, "forest","imgs/background/forest/" , 1, ".png", 400 , 0 , 1);
        this.layer32.flw.pt.y=330;
        this.layer32.flw.pt.x=800;
        this.layer32.flw.pFuera = true;
        /////////////////////////////
        this.layer4 = new clsSprite(this.ctx, "forest","imgs/background/forest2/" , 1, ".png", 400 , 0 , 1);
        this.layer4.flw.pt.y=430;
        this.layer4.flw.pt.x=0;
        this.layer4.flw.pFuera = true;
        /////////////////////////////
        this.layer42 = new clsSprite(this.ctx, "forest","imgs/background/forest2/" , 1, ".png", 400 , 0 , 1);
        this.layer42.flw.pt.y=430;
        this.layer42.flw.pt.x=800;
        this.layer42.flw.pFuera = true;
        /////////////////////////////
        this.layer5 = new clsSprite(this.ctx, "floor","imgs/background/floor/" , 1, ".png", 400 , 0 , 1);
        this.layer5.flw.pt.y= 770;
        this.layer5.flw.pt.x=0;
        this.layer5.flw.pFuera = true;
        /////////////////////////////
        this.layer52 = new clsSprite(this.ctx, "floor","imgs/background/floor/" , 1, ".png", 400 , 0 , 1);
        this.layer52.flw.pt.y=770;
        this.layer52.flw.pt.x=800;
        this.layer52.flw.pFuera = true;
        
    }
    /////////////////////////////////////////////////////////////
    /**
     * Esta funcion dibuja los escenarios
     */
    Draw(){
        this.movimiento();
        this.ControlSpeed();
        this.layer0.Draw();
        this.layer02.Draw();
        this.layer2.Draw();
        this.layer22.Draw();
        this.layer3.Draw();
        this.layer32.Draw();
        this.layer4.Draw();
        this.layer42.Draw();
        this.layer5.Draw();
        this.layer52.Draw();
    }
    /////////////////////////////////////////////////////////////
    /**
     * Esta funcion define que el escenario se mueve a la derecha
     */
    moveRight(){
        this.mR = true;
        this.mL = false;
        this.mod = 1;
    }
    /////////////////////////////////////////////////////////////
    /**
     * Esta funcion define que el escenario se mueve a la izquierda
     */
    moveLeft(){
        this.mL = true;
        this.mR = false;
        this.mod = -1;
    }
    /////////////////////////////////////////////////////////////
    /**
     * Esta funcion define la velocidad a la que acelera y frena el escenario
     */
    ControlSpeed(){
        if (this.acceleration){
            if (this.gameSpeed >= this.MaxSpeed){
                return;
            }else{
                this.gameSpeed = this.gameSpeed + 0.2;
            }
        }
        else {
            if(this.gameSpeed <= 0){
                this.gameSpeed = 0;
                return;
            }
            if(this.gameSpeed > 0){
                this.gameSpeed = this.gameSpeed - 0.5;
            }
        }
    }
    /////////////////////////////////////////////////////////////
    /**
     * Esta funcion mueve las capas del paralax a sus respectivas velocidades
     */
    movimiento(){
        var flwCielo = this.layer0.flw.pt;
        var flwCielo2 = this.layer02.flw.pt;
        var flwMont =this.layer2.flw.pt;
        var flwMont2 = this.layer22.flw.pt;
        var flwUpForest =this.layer3.flw.pt;
        var flwUpForest2 = this.layer32.flw.pt;
        var flwDownForest =this.layer4.flw.pt;
        var flwDownForest2 = this.layer42.flw.pt;
        var flwTierra =this.layer5.flw.pt;
        var flwTierra2 = this.layer52.flw.pt;
        ///////////////////////////////////////////////////////////
        if(this.mL | this.mR){
            flwCielo.x = flwCielo.x - (this.gameSpeed * 0.1)* this.mod;
            flwCielo2.x = flwCielo2.x - (this.gameSpeed * 0.1)* this.mod;
            flwMont.x = flwMont.x - (this.gameSpeed * 0.4) * this.mod;
            flwMont2.x = flwMont2.x - (this.gameSpeed * 0.4) * this.mod;
            flwUpForest.x = flwUpForest.x - (this.gameSpeed * 0.6) * this.mod;
            flwUpForest2.x = flwUpForest2.x - (this.gameSpeed * 0.6) * this.mod;
            flwDownForest.x = flwDownForest.x - (this.gameSpeed * 0.9) * this.mod;
            flwDownForest2.x = flwDownForest2.x - (this.gameSpeed * 0.9) * this.mod;
            flwTierra.x = flwTierra.x - (this.gameSpeed * 0.7) * this.mod;
            flwTierra2.x = flwTierra2.x - (this.gameSpeed * 0.7) * this.mod;
         
            if(this.mR){
                if (flwCielo.x + 800 < 0 ){
                    flwCielo.x = flwCielo2.x + 800;
                }
                if (flwCielo2.x + 800 < 0 ){
                    flwCielo2.x = flwCielo.x + 800;
                }
                /////////////////////////////////////
                if (flwMont.x + 800 < 0 ){
                    flwMont.x = flwMont2.x + 800;
                }
                if (flwMont2.x + 800 < 0 ){
                    flwMont2.x = flwMont.x + 800;
                }
                /////////////////////////////////////
                if (flwUpForest.x + 800 < 0 ){
                    flwUpForest.x = flwUpForest2.x + 800;
                }
                if (flwUpForest2.x + 800 < 0 ){
                    flwUpForest2.x = flwUpForest.x + 800;
                }
                /////////////////////////////////////
                if (flwDownForest.x + 800 < 0 ){
                    flwDownForest.x = flwDownForest2.x + 800;
                }
                if (flwDownForest2.x + 800 < 0 ){
                    flwDownForest2.x = flwDownForest.x + 800;
                }
                /////////////////////////////////////
                if (flwTierra.x + 800 < 0 ){
                    flwTierra.x = flwTierra2.x + 800;
                }
                if (flwTierra2.x + 800 < 0 ){
                    flwTierra2.x = flwTierra.x + 800;
                }
            }
            if(this.mL){
                if (flwCielo.x - 0 > 800 ){
                    flwCielo.x = flwCielo2.x -800;
                }
                if (flwCielo2.x - 0 > 800 ){
                    flwCielo2.x = flwCielo.x -800;
                }
                //////////////////////////////////////
                if (flwMont.x - 0 > 800 ){
                    flwMont.x = flwMont2.x -800;
                }
                if (flwMont2.x - 0 > 800 ){
                    flwMont2.x = flwMont.x -800;
                }
                //////////////////////////////////////
                if (flwUpForest.x - 0 > 800 ){
                    flwUpForest.x = flwUpForest2.x -800;
                }
                if (flwUpForest2.x - 0 > 800 ){
                    flwUpForest2.x = flwUpForest.x -800;
                }
                //////////////////////////////////////
                if (flwDownForest.x - 0 > 800 ){
                    flwDownForest.x = flwDownForest2.x -800;
                }
                if (flwDownForest2.x - 0 > 800 ){
                    flwDownForest2.x = flwDownForest.x -800;
                }
                //////////////////////////////////////
                if (flwTierra.x - 0 > 800 ){
                    flwTierra.x = flwTierra2.x -800;
                }
                if (flwTierra2.x - 0 > 800 ){
                    flwTierra2.x = flwTierra.x -800;
                }
            }
        }
    }
    
}