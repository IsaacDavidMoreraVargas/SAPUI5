sap.ui.define
(   [ "dtt/SAPUI5/model/Models","sap/ui/model/resource/ResourceModel","sap/ui/core/UIComponent",
    "./controller/HelloDialog"],
    /** 
     * @param{typeof sap.ui.core.UIComponent} UIComponent
     *
     */
        function(Models,ResourceModel,UIComponent, HelloDialog){
            return UIComponent.extend("dtt.SAPUI5.Component",{
                metadata:{
                    manifest:"json"
                },
                init: function(){
                    UIComponent.prototype.init.apply(this,arguments);
                    
                    this.setModel(Models.createRecipient());
                    this._helloDialog = new HelloDialog(this.getRootControl());
                    this.getRouter().initialize();
                    this.setModel(Models.createDeviceModel(), "device");
                },
                exit: function(){
                    this._helloDialog.destroy();
                    delete this._helloDialog;
                },
                openHelloDialog: function(){
                    this._helloDialog.open();
                }
            })
        }
)
