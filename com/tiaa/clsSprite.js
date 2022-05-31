class clsSprite{
    constructor(pCtx, pId='', pImgPath, pNum_Frames, pFileExtension, pXoff, pYoff, pScale=1, pState = 0, DelayCheck, psframe=0,
    peframe=4){ 
        this.ctx=pCtx;
        this.Id= pId;
        this.pFileExtension=pFileExtension
        this.visible = true;
        this.frames=[];
        this.num_frames=pNum_Frames;
        this.scale=pScale;
        this.current_frame=0;
        this._imgPath=pImgPath;
        this.cnt=0;
        this.state= pState ;
        this.flw=new clsFollow();
        this.loaded=false;
        ///////////////////////
        this.Xoff=pXoff;
        this.Yoff=pYoff;
        ///////////////////////
        this.previo=false;
        this.Dead=false;
        ///////////////////////
        this.dc=DelayCheck;
        this.sframe=psframe;
        this.eframe=peframe;
        ///////////////////////
        this.init();
        this._loop();
    }
// 
/**
 * Esta funcion mide la distancia entre los bordes de los sprites, y cuando el del jugador
 * colisiona con el de un enemigo devuelve true
 */
Collide(pSprite){
    var tRet=false;
    var rect1 = this._getBoundingRect();
    var rect2 = pSprite._getBoundingRect();

    var d = GetDistance(this._centerPoint(), pSprite._centerPoint());

    if (d<(rect1.width/3)){
        tRet=true;
    } 
    return tRet;
}
// --------------------------------------------------------------------------------
/**
 * Devuelve el centro del sprite
 */
_centerPoint(){
    return {x: this.GetX(), y: this.GetY()};
}
//----------------------------------------------------------------------------------
/**
 * Devuelve las medidas del sprite
 */
_getBoundingRect(){
    return { left:this.GetX()- this.GetWidth()/2 , top: this.GetY()-this.GetHeight()/2 , width: this.GetWidth() , height: this.GetHeight()};
        
}
//----------------------------------------------------------------------------------
/**
 * Crea las imagenes y las incluye en la array frames
 */
    LoadImages(){
        if(this.num_frames == 1){
            var tI=new clsImage(this._imgPath+"frame_0"+this.pFileExtension, this.ctx, 0, this.Xoff, this.Yoff, this.scale, 1);
            tI.caption=this.Id;
            this.frames.push(tI);
            this.loaded=true;
        }else{
            for (var i=0; i<=this.num_frames;i++){
                var tI=new clsImage(this._imgPath+"frame_"+i+this.pFileExtension, this.ctx, 0, this.Xoff, this.Yoff, this.scale, 1)
                tI.caption=this.Id;
                this.frames.push(tI);
            }
            this.loaded=true;
        }
    }
//----------------------------------------------------------------------------------
/**
 * Esta funcion actua como un tick devolviendonos true por intervalos
 */
    _DelayCheck(){
        this.cnt++
        if (this.cnt % this.dc == 0 ){
            return true;
        }
        return false;
    }
//----------------------------------------------------------------------------------
/**
 * Esta funcion pone en marcha la carga de imagenes 
 */
    init(){
       this.LoadImages()
    }

//----------------------------------------------------------------------------------
/**
 * Funcion que devuelve la x
 */
    GetX(){
        return this.flw.pt.x
    }
/**
 * Funcion que devuelve la y
 */
    GetY(){
        return this.flw.pt.y
    }
/**
 * Funcion que devuelve el ancho
 */
    GetWidth(){
        return this.frames[this.current_frame].image.width* this.scale;
    }
/**
 * Funcion que devuelve la altura
 */
    GetHeight(){
        return this.frames[this.current_frame].image.height*this.scale;
    }
//----------------------------------------------------------------------------------
/**
 * Esta funcion recorre los frames y los va dibujando
 */
    Draw(){

        if (this.loaded==false) {
            return;
        }
        if(this.visible==false) return;

        if (this._DelayCheck()){
            if(this.Dead && this.current_frame >= 35){
                this.current_frame = 36;
            }else{
                if(this.state==1){this.current_frame++;}
                if(this.current_frame>=this.eframe) this.current_frame=this.sframe;
                if(this.current_frame<this.sframe) this.current_frame=this.sframe;
                }
        }
       var tPT=this.flw.pt;
       if (this.ignoreimagerotation==1){
           tPT.rotation=0;
       }
       if (this.current_frame!=undefined){
           this.frames[this.current_frame].Draw(tPT, this.scale, this.spinning);
       }     
    }
//----------------------------------------------------------------------------------
/**
 * Funcion bucle que comprueba que el sprite esta fuera de pantalla
 */
    _loop(){
        if (this.loaded==false) {return}
        this.flw.Move();
        window.requestAnimationFrame(this._loop.bind(this));
    }
//----------------------------------------------------------------------------------
/**
 * Funcion que cambia los frames del heroe cuando muere
 */
GoToAndStop(){
    this.sframe = 30;
    this.eframe = 36;
    this.Dead=true;
    }
}