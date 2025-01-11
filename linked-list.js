class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    append(value){//Number one solution
        let newNode=new Node(value);
        //Checks whether the head is empty or not, if its null then its adding the new node as the head
        if(this.head===null){
            this.head=newNode;
        }else{//if the head is not null or there is a node created before, then it will go until the end of the list and add the newly created node at the end
            let current=this.head;
            while(current.next!==null){
                current=current.next;
            }
            current.next=newNode;//adding the newly created node at the end of the linked list
        }
    }

    prepend(value){//Number two solution
        let newNode=new Node(value);
        newNode.next=this.head;
        this.head=newNode;
    }

    size(){//Number three solution
        let current=this.head;
        let count=0;

        if(current===null){
            return 0;
        }
        count+=1;
        while(current.next!=null){
            count+=1;
            current=current.next
        }
        return count;
    }

    headNode(){//Number four solution
        let current=this.head;
        return current;
    }

    tailNode(){//Number five solution
        let current=this.head;
        if(current===null)return null;
        while(current.next!=null){
            current=current.next;
        }
        return current;
    }

    atIndex(index){//Number six solution
        let count=0
        let current=this.head;
        if(current===null)return null;
        while(count<=index){
            if(count===index){
                return current
            }
            current=current.next;
            count+=1;
        }
    }

    pop(){//Number seven solution
        let current=this.head;
        while(current.next.next!=null){
            current=current.next;
        }
        current.next=null;
    }

    contains(value){//Number eight solution
        let current=this.head;
        let itContains=false;
        if(current.value===value)return true;
        if(current===null)return false;
        while(current.next!=null){
            if(current.next.value===value){
                itContains=true;
                break;
            }
            current=current.next;
        }
        return itContains;
    }

    find(value){//Number nine solution
        let count=1;
        let current=this.head;
        if(current===null)return null;
        if(current.value===value)return 0;
        while(current.next!=null){
            if(current.next.value===value){
                return count;
            }
            count+=1;
            current=current.next
        }
        return null;
    }

    toString(){//Number ten solution
        let myString='';
        let current=this.head;
        if(current!==null&&current.next===null)myArray.push(current.value);
        if(current===null)return null;
        while(current.next!==null){
            myString+=`(${current.value})->`
            current=current.next;
            if(current.next===null)myString+=`(${current.value})->null`;
        }
        return myString;  
    }

    insertAt(value,index){//solution for extra credit number 1
        let newNode=new Node(value);
        let count=0;   
        let current=this.head; 
        while(count<=index&&current!==null){
            if(index===0){
                this.prepend(value);
                break;
            }
            else if(count+1===index){
                newNode.next=current.next;
                current.next=newNode;
                break;
            }
            current=current.next;
            count+=1;
        }
        return this.toString();
    }

    removeAt(index){//solution for extra credit number 2
        let count=0;
        let current=this.head;
        let size=this.size();
        if(index===0){
            this.head=this.head.next;
            return this.toString();
        }
        while(count<index&&current!==null&&index<size){           
            if(count+1===index){
                let nextNode=current.next.next;
                current.next=null;
                current.next=nextNode;
                break;
            }
            current=current.next;
            count+=1;
        }
        return this.toString();
    }

    printLinkedList(){
        let current=this.head;
        while(current!==null){
            console.log(current.value);
            current=current.next;
        }
    }
}

const myLinkedList=new LinkedList();
myLinkedList.append('H');
myLinkedList.append('E');
myLinkedList.append('A');
myLinkedList.append('D');
// myLinkedList.printLinkedList();
// console.log(`The size of linked list is ${myLinkedList.size()}`);
// console.log('Head Node is');
// console.log(myLinkedList.headNode());
// console.log('Tail Node is');
// console.log(myLinkedList.tailNode());
// console.log('The Node at index 2 is');
// console.log(myLinkedList.atIndex(2));
// console.log('My linked list after Pop');
// myLinkedList.pop();
// myLinkedList.printLinkedList();
// console.log(myLinkedList.contains('D'));
//console.log(myLinkedList.find('D'));
console.log(myLinkedList.toString());
// console.log(myLinkedList.insertAt('M',0));
// console.log(myLinkedList.removeAt(2));


