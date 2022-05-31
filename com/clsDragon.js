class clsDragon extends clsEnemy{
    constructor(pCtx, pId, source,Ini_Frame,End_Frame){
        super(pCtx,pId, source, 2,Ini_Frame,End_Frame );
        ///////////////////////
        var flw=this.sprite.flw;
        this.sprite.dc=7;
        flw.pt.x = 1190;
        flw.pt.y = 300;
    }
}