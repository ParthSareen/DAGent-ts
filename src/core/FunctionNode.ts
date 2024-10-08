import BaseNode from "./BaseNode";

class FunctionNode implements BaseNode {
    public func: (...args: any[]) => any;
    public nextNodes: Map<string, BaseNode>;
    public compiled: boolean = false;

    constructor(func: (...args: any[]) => any) {
        this.func = func;
        this.nextNodes = new Map<string, BaseNode>();
        console.log('FunctionNode created with function:', func);
    }

    addNextNodes(nodes: BaseNode[]): void {
        nodes.forEach(node => {
            this.nextNodes.set(node.constructor.name, node);
            console.log('Next node added:', node);
        });
    }

    compile(forceLoad: boolean): Promise<void> {
        if (this.compiled) {
            console.log('FunctionNode already compiled, skipping compilation.');
            return Promise.resolve();
        }

        // Perform any necessary compilation steps
        // For FunctionNode, this might involve analyzing the function signature
        console.log('Compiling FunctionNode...');

        this.compiled = true;
        console.log('FunctionNode compiled successfully.');
        return Promise.resolve();
    }

    run(context: any): Promise<any> {
        console.log('Executing function with context:', context);
        return Promise.resolve(this.func(context));
    }
}

export default FunctionNode;