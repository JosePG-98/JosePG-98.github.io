class clsGoblin extends clsEnemy{
    constructor(pCtx, pId, source,Ini_Frame,End_Frame){
        super(pCtx,pId, source, 15, Ini_Frame,End_Frame);
        ///////////////////////
        var flw=this.sprite.flw;
        flw.pt.x = 800;
        flw.pt.y = 498;
    }
}