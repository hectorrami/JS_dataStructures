class myArray{
    constructor(){
        this.legth = 0;
        this.data = {};
    }

get(index){
    return this.data[index];
}

//push method to add to the array
push(element){
    this.data[this.legth] = element;
    this.legth++;
    return this.legth;
}

//pop element to remove the last element of the array
pop(){
    const lastElement = this.data[this.legth-1]
    delete this.data[this.legth-1]
    this.legth--;
    return lastElement;
}

deleteElement(index){
    const item = this.data[index];
    this.shift(index);
    return item;
}

shift(index){
    for(let i = index ; i < this.legth-1;i++){
        this.data[i] = this.data[i+1];
    }
        delete this.data[this.legth-1];
        this.legth--;
}
}

const newArray = new myArray();

//pushing elements into array
for(let i = 1; i <= 10; i++)
    newArray.push(i);

//delete index 2
newArray.deleteElement(2);

console.log(newArray);

