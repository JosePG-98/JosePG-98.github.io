class clsFollow{
    constructor(){
        this.verbose=0;
        this.pt = new clsPoint(0,0,0,0)
        this._velocity=0;//Math.random()*5;
        this.friction=-0.01;
        this.rotationFriction=-0.001
        this._velomax=20;
        this._rotation=0;
        this.rotationVelo=0;
        this.rotation_dir=0;
        this.spin_velo=0;
        this._velo_x=0;
        this._velo_y=0;
        this.yfloor=999999;
        this.pFuera = false;
        this.gravity=0;
    }
    ///////////////////////////////////////////////
    setVelocity(pVelo){
        if (pVelo<0) pVelo=0;
        if (pVelo>this._velomax) pVelo=this._velomax;
        this._velocity=pVelo;
        this._velo_x=this._velocity*Math.cos(this._rotation);
        this._velo_y=this._velocity*Math.sin(this._rotation)
        //console.log('Velo_ '+this._velocity);
    }
    ////////////////////////////////////////////////
    increaseVelocity(){
        //console.log('Velocitiy Increase');
        this.setVelocity(this._velocity+1);
    }
    decreaseVelocity(){
        this.setVelocity(this._velocity-1);
    }
    ////////////////////////////////////////////////
    rotateRight(){
        if (this.verbose==1){
            console.log('rotateLeft inc rot='+ this.rotation);
        };
        this.rotationVelo=this.rotationVelo+0.02;
        this.rotation_dir= 0;
        this._rotation = 0;
        this.x 
        if (this.rotationVelo>0.1) {this.rotationVelo=0.1}
    }
    rotateLeft(){
        if (this.verbose==1){
            console.log('rotateRight inc rot='+ this.rotation);
        };
        this.rotation_dir=1;
        this.rotationVelo=this.rotationVelo+0.02;
        this.increaseVelocity();
        if (this.rotationVelo>1) {this.rotationVelo=1}
    }
    ///////////////////////////////////////////////////////////////////////////
    MoveRight(){
        this.rotation_dir=1;
        //this.pt.x=this.pt.x + 5;
        //this.increaseVelocity();
    }
    ///////////////////////////////////////////////////////////////////////////
    MoveLeft(){
        this.rotation_dir= - 1;
        //this.pt.x=this.pt.x - 5;
        //this.increaseVelocity();
    }
    ///////////////////////////////////////////////
    setRotation(){
        this.rotationVelo=this.rotationVelo+this.rotationFriction;
        if(this.rotationVelo<0){this.rotationVelo=0};
        
        if (this.rotation_dir==0){
            this._rotation=this._rotation+this.rotationVelo;
        }else{
            this._rotation=this._rotation-this.rotationVelo;
        }
    }
    
    ///////////////////////////////////////////////
    /**
     * Esta funcion se encarga de que cuando un enemigo salga de la pantalla lo reubique al otro lado
     */
    Move(){
        if (this.IsOutsideX()==true){
            //console.log('fuera');
        }
        if (this.IsOutsideY()==true){
            //console.log('fuera');
        }
        ///////////////////////
        this.setVelocity(this._velocity + this.friction);
        this.setRotation();
        this.pt.x=this.pt.x+this._velo_x;
        this.pt.y=this.pt.y+this._velo_y+ this.gravity;
        ///////////////////////
        if (this.pt.y>this.yfloor){
            this.pt.y=this.yfloor;
        }
        ///////////////////////
        this.pt.rotation=this._rotation;
        this.pt.spin=this.pt.spin+this.spin_velo;
    }
    ///////////////////////////////////////////////
    /**
     * Funcion que reubica al enemigo cuando sale del borde de la pantalla en el eje x, 
     * y lo reubica en el otro extremo
     */
    IsOutsideX(){
        if(this.pFuera){
            //console.log("Salio en" , this.pt.x)
            return}
        //if (this._velo_x>0){
        if (this.pt.x > 1200){
                this.pt.x=0;
                return true;
            }
        //else{
        if (this.pt.x < -30){
                this.pt.x=1200;
                return true;
            };
        //};
        return false;
    }
    //////////////////////////////////////////////////////////
    /**
     * Funcion que reubica al enemigo cuando sale del borde de la pantalla en el eje y, 
     * y lo reubica en el otro extremo
     */
    IsOutsideY(){
        if(this.pFuera){
            return}
        if (this._velo_y>0){
            if (this.pt.y > 600){
                this.pt.y=0;
                return true;
            };
        } else {
            if (this.pt.y < 0){
                this.pt.y=600;
                return true;
            };
        };
        return false;
    }
    ///////////////////////
}