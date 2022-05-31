class clsEnemy{
    constructor(pCtx, pId, source, pNum_Sprites,Ini_Frame, End_Frame){
        this.sprite=new clsSprite(pCtx, pId, source, pNum_Sprites, '.png', 30, 30, 0.1, 1, 4 , Ini_Frame, End_Frame);
        var flw=this.sprite.flw;
        this.id=pId;
        flw.pt.x = 800;
        flw.pt.y = 498;
        ///////////////////////
        this.size = 1;
        this.sprite.scale = this.size;
        ///////////////////////
        this.EnemySpeed=2;
        this.VelMod=1;
    }
    ////////////////////////////////////////////////////////////////////////////
    /**
     * Esta funcion mueve a los enemigos sobre el eje x
     */
    MoveEnemy(pVel=this.EnemySpeed, pMod=this.VelMod){
        this.EnemySpeed=pVel;
        this.VelMod=pMod;
        this.sprite.flw.pt.x = (this.sprite.flw.pt.x - this.EnemySpeed * this.VelMod);
    }
    ////////////////////////////////////////////////////////////////////////////
    /**
     * Funcion de dibujado del enemigo
     */
    Draw(){
        this.sprite.Draw();
    }
    ////////////////////////////////////////////////////////////////////////////
}