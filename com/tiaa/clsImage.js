class clsImage{
    constructor(pImagePath, pCtx, pAutodraw, pXoff=0, pYoff=0, pScale=1, pCenterPoint=0){
        this.image = new Image();
        this.imagepath = pImagePath;
        this.centerpoint=pCenterPoint;
        this.ctx = pCtx;
        this._loaded = 0;
        this.scale=pScale;
        this._autodraw = pAutodraw;
        this.Xoff= pXoff;
        this.Yoff=pYoff;
        this.Initialize();
        return this;
    }
/////////////////////////////////////////////////////////////////
/**
 * Funcion que llama a crear los eventListeners y la funcion de carga de imagenes
 */
    Initialize(){
        this._CreateListeners();
        this.LoadImage();
    }
/////////////////////////////////////////////////////////////////
/**
 * Funcion que crea un listener para cuando se carge la imagen
 */
    _CreateListeners(){
        this.image.addEventListener('load',this._onLoad.bind(this));
    }
/////////////////////////////////////////////////////////////////
/**
 * Funcion que al cargarse la imagen muestra un mensaje por consola, dibuja la imagen
 */
    _onLoad(){
        console.log('clsImage->onload' + this.image.width);
        this._loaded=1;
        if (this._autodraw){
            this.Draw();
        }
    }
/////////////////////////////////////////////////////////////////
/**
 * Esta funcion le asigna el path a la imagen
 */
    LoadImage(){
        this.image.src=this.imagepath;
    }
/////////////////////////////////////////////////////////////////
    /**
     * Funcion que crea el puntero de la imagen, y manda a dibujar la imagen en el canvas
     */
    Draw(pPT,pScale=1){
        if(pPT==null ){
            pPT=new clsPoint(0,0,0);
            pScale=this.scale;
        }
        if (this._loaded==1){
            var tRot=pPT.rotation;
            if (pPT.spin!=null && pPT.spin>0){
                tRot=pPT.spin;
            }
            this.drawImage2(this.ctx, this.image, pPT.x+this.Xoff,pPT.y+this.Yoff, pScale,  tRot);
        }
    }
/////////////////////////////////////////////////////////////////
/**
 * Funcion que dibuja la imagen en el canvas
 */
 drawImage2(ctx,image, x, y, scale, rotation=0){
    //console.log("rot" + rotation+ "  x=" + x);
    ctx.save();
    ctx.setTransform(scale, 0, 0, scale, x, y); // sets scale and origin
    ctx.rotate(rotation);

    if (this.centerpoint==0){
        ctx.drawImage(image, 0,0);
    }else{
        ctx.drawImage(image, -image.width / 2, -image.height / 2);
    }
    ctx.restore();
} 
/////////////////////////////////////////////////////////////////
}