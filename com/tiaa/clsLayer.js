class clsLayer{
    constructor(pCtx , pID , pPath, pX , pY, pModifier, pGameSpeed){
        this.ctx = pCtx;
        this.iD = pID;
        this.imgPath = pPath;
        this.x = pX;
        this.y = pY;
        this.width = 688;
        this.height = 211;
        this.x2 = this.width;
        ///////////////////////
        this.sprite=new clsSprite(this.ctx, this.iD , this.imgPath, 1 , ".png",  0, this.x, this.y, 0.1);
        this.sprite.flw.pt.x=10;
        this.sprite.flw.pt.y=10;
    }
    ///////////////////////////////////////////////////////////////////////////
    /**
     * Funcion de dibujado del fondo
     */
    draw(){
       this.sprite.Draw();
    }
    //////////////////////////////////////////////////////////////////////////
}