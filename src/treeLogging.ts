import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person, topPersonKids: Person[]): void {
    const stackedPeople = []
    stackedPeople.push(topPerson.name)

    while (stackedPeople.length > 0) {
        const firstPerson = stackedPeople.pop()
        console.log (firstPerson)
        stackedPeople.push(topPersonKids)
        const removedPerson = stackedPeople.pop()
        console.log (removedPerson)
    }

    
    console.log("First person is " + topPerson.name);
}

//export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
//    const stackedPeople = []
//    stackedPeople.push(topPerson.name)
//
//    while (stackedPeople.length) { 
//        const removedName = stackedPeople.shift()
//        console.log (removedName)
//        stackedPeople.push(topPerson.children)
//    }

    
//    console.log("First person is " + topPerson.name);
//}


