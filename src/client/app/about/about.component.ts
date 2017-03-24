import {
    Component, OnInit, SystemJsNgModuleLoader, ComponentRef, ViewContainerRef,
    ComponentFactoryResolver, Compiler, ModuleWithComponentFactories
} from '@angular/core';

class ModuleNode { modulePath: string; componentName: string; }

@Component({
    moduleId: module.id,
    selector: 'sd-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css'],
    providers: [SystemJsNgModuleLoader]
})
export class AboutComponent {
    widgetConfig: string;
    module: ModuleNode;
    cmpRef: ComponentRef<any>;

    constructor(
        private viewref: ViewContainerRef,
        private resolver: ComponentFactoryResolver,
        private loader: SystemJsNgModuleLoader,
        private compiler: Compiler
    ) {}

    addDynamicModule() {
        this.module = {
            modulePath: '/app/plugins/dynamic.module#DynamicModule',
            componentName: 'TestComponent'
        };
        this.openExternalModule(this.module);
    }

    openExternalModule(module: any) {
        this.loader.load(module.modulePath)  // load the module and its components
            .then((modFac) => {
                // the missing step, need to use Compiler to resolve the module's embedded components
                this.compiler.compileModuleAndAllComponentsAsync<any>(modFac.moduleType)
                    .then((factory: ModuleWithComponentFactories<any>) => {
                        return factory.componentFactories.find(x => x.componentType.name === module.componentName);
                    })
                    .then(cmpFactory => {
                        // need to instantiate the Module so we can use it as the provider for the new component
                        let modRef = modFac.create(this.viewref.parentInjector);
                        this.cmpRef = this.viewref.createComponent(cmpFactory, 0, modRef.injector);
                        // done, now Module and main Component are known to NG2
                    });
            });
    }

    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}
