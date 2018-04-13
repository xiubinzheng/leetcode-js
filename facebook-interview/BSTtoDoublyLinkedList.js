class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


function bintree2listUtil(node){
    if(node===null)
        return node;

        if(node.left!==null){
            let left = bintree2listUtil(node.left);
            while(left.right!==null){
                left = left.right;
            }

            left.right = node;
            node.left = left;
        }

        if(node.right!==null){
            let right = bintree2listUtil(node.right);
            while(right.left!==null){
                right = right.left;
            }

            right.left = node;
            node.right = right;
        }
        return node;
}

let root = new Node(10);
root.left = new Node(12);
root.right = new Node(15);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right.left = new Node(36);

console.log(root);

console.log('\n');

function printList(node){
    while(node!==null){
        console.log(node.data +" ");
        node = node.right;
    }
}

console.log(printList(bintree2listUtil(root)));
