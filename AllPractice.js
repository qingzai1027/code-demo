class CreateNode{
   constructor(key){
    this.key = null;
    this.left = null;
    this.right = null;
   } 
};

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(key){
        if(root){
            this.insertNode(this.root,new CreateNode(key));
        }else{
            this.root = new CreateNode(key)
        }
    };

    insertNode(node,newNode){
        if(node.key>newNode.key){
            if(node.left){
                this.insert(node.left,newNode);
            }else{
                node.left = newNode;
            }
        }else if(node.key<newNode.key){
            if(node.right){
                this.insertNode(node.right,newNode);
            }else{
                node.right = newNode;
            }
        };
    };
}