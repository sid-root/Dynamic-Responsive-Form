export class taskDef{

    public steps:taskStep[];

    constructor(){
        this.steps = [];
        //this.steps.push(new taskStep("Step 1"));
    }

    addStep(_tmpStep:taskStep):void{
        if(_tmpStep != null){
            this.steps.push(_tmpStep);
        }
        else{
            this.steps.push(new taskStep("Step " + (this.steps.length + 1)));
        }
    }

    getStepNames():string[]{
        let _stepNames:string[] = [];
        this.steps.forEach((_step) => {
            _stepNames.push(_step.stepName);
        });
        return _stepNames;
    }

    getClone():taskDef{
        return taskDef.getObj(this.getJson());
    }

    getJson(){
        var _json:any = {};
        _json.steps = [];

        for(var i = 0; i < this.steps.length;i++){
            _json.steps.push(this.steps[i].getJson())
        }
        return _json;
    }

    static getObj(_json:any):taskDef{
        let _tmpTaskDef:taskDef = new taskDef();

        for(var i = 0; i < _json.steps.length; i++){
            _tmpTaskDef.addStep(taskStep.getObj(_json.steps[i]));
        }

        return _tmpTaskDef;

    }
}


export class taskStep{
    public elements:stepElement[];
    public readonlyUsers:string[] = [];
    public readwriteUsers:string[] = [];
    public stepName:string;

    constructor(_stepName:string = ''){
        this.stepName = _stepName;
        this.elements = [];
        //this.elements.push(new stepElement("Name"));
    }


    addElement(_tmpElt:stepElement):void{
        this.elements.push(_tmpElt);
    }

    getJson(){
        var _json:any = {};
        _json.stepName = this.stepName;

        _json.elements = [];
        _json.readonlyUsers = [];
        _json.readwriteUsers = [];

        for(var i = 0; i < this.elements.length;i++){
            _json.elements.push(this.elements[i].getJson());
        }

        for(var i = 0; i < this.readonlyUsers.length;i++){
            _json.readonlyUsers.push(this.readonlyUsers[i]);
        }

        for(var i = 0; i < this.readwriteUsers.length;i++){
            _json.readwriteUsers.push(this.readwriteUsers[i]);
        }

        return _json;
    }

    static getObj(_json:any):taskStep{
        let _tmpTaskStep:taskStep = new taskStep();
        _tmpTaskStep.stepName = _json.stepName;

        for(var i = 0; i < _json.elements.length; i++){
            _tmpTaskStep.addElement(stepElement.getObj(_json.elements[i]));
        }

        _tmpTaskStep.readonlyUsers = _json.readonlyUsers;
        _tmpTaskStep.readwriteUsers = _json.readwriteUsers;

        return _tmpTaskStep;
    }

}

export class stepElement{    
    public eltType:ElementType;
    public eltProperties:ElementProps;
    public readonlyUsers:string[] = [];
    public readwriteUsers:string[] = [];
    public eltName:string;

    constructor(_eltName:string = ''){
        this.eltName = _eltName;
        this.eltType = ElementType.TEXTFIELD;
        this.eltProperties = new ElementProps();
    }

    getJson(){
        var _json:any = {};
        _json.eltName = this.eltName;
        _json.eltType = this.eltType;
        _json.eltProperties = this.eltProperties.getJson();
        _json.readonlyUsers = [];
        _json.readwriteUsers = [];

        for(var i = 0; i < this.readonlyUsers.length;i++){
            _json.readonlyUsers.push(this.readonlyUsers[i]);
        }

        for(var i = 0; i < this.readwriteUsers.length;i++){
            _json.readwriteUsers.push(this.readwriteUsers[i]);
        }

        return _json;
    }

    static getObj(_json:any):stepElement{
        let _tmpStepElement:stepElement = new stepElement();

        _tmpStepElement.eltName = _json.eltName;
        _tmpStepElement.eltType = _json.eltType;
        _tmpStepElement.eltProperties = ElementProps.getObj(_json.eltProperties);
        _tmpStepElement.readonlyUsers = _json.readonlyUsers;
        _tmpStepElement.readwriteUsers = _json.readwriteUsers;


        return _tmpStepElement;
    }
}

export class ElementProps{
    public listOptions:string[] = [];
    public defaultVal:string = '';
    public onSubmitAction:string = 'default';

    constructor(){

    }

    getJson(){
        var _json:any = {};
        _json.listOptions = [];
        for(var i=0;i<this.listOptions.length;i++){
            _json.listOptions.push(this.listOptions[i]);
        }
        _json.defaultVal = this.defaultVal;
        _json.onSubmitAction = this.onSubmitAction;

        return _json;
    }
    static getObj(_json:any):ElementProps{
        let _tmpElementProps:ElementProps = new ElementProps();
        _tmpElementProps.listOptions = _json.listOptions;
        _tmpElementProps.defaultVal = _json.defaultVal;
        _tmpElementProps.onSubmitAction = _json.onSubmitAction;

        return _tmpElementProps;
    }
}

export class eltTypeDef{
    constructor(public eltName: string,public eltType: ElementType){

    }
}

export enum ElementType{
    TEXTFIELD = 1,
    MULTITEXT = 2,
    DATEFIELD = 3,
    SIMPLELIST = 4,
    DROPDOWN = 5,
    DEPENDENTDROPDOWN = 6,
    CHECKBOX = 7,
    RADIOBUTTON = 8,
    SLIDER = 9,
    SUBMITBUTTON = 10,
    FILEUPLOAD = 11

}