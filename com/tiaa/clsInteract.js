class clsInteract{
    constructor(pParent){
        this.Doc=pParent.Doc;
        this.parent=pParent;
        this.Doc.addEventListener('keydown', this._keydown.bind(this));
        this.Doc.addEventListener('keyup', this._KeyUp.bind(this));
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Funcion que al introducir un input por teclado, segun las teclas presionadas envia un evento
     * que se activara en la clase principal
     */
    _keydown(e){
        var eventname="__KEYDOWN_CUSTOM";
        console.log('_______keydown  == ' + e.code);
       
        if(e.code === "KeyD"){
            eventname="__KEY_HERO_MOVE";
        }
        if(e.code === "KeyA"){
            eventname="__KEY_HERO_MOVE";
        }
         if(e.code === "Space"){
            eventname="__KEY_HERO_JUMP";
        }
        var tEvent=new Event(eventname, e);
        var new_event = new e.constructor(tEvent.type, e)
        this.Doc.dispatchEvent(new_event);
}
////////////////////////////////////////////////////////////////////////////////////////////
/**
* Funcion que al introducir un input por teclado, segun las teclas que se libere, envia un evento
* que se activara en la clase principal
*/
    _KeyUp(e){
        var eventname="__KEYDOWN_CUSTOM";
        if(e.code === "Space"){
            eventname = "_CallBack_HeroStop"
        }
        if(e.code === "KeyD"){
            eventname = "_CallBack_HeroStop"
        }
        if(e.code === "KeyA"){
            eventname = "_CallBack_HeroStop"
        }
        var tEvent=new Event(eventname, e);
        var new_event = new e.constructor(tEvent.type, e)
        this.Doc.dispatchEvent(new_event);
    }
}