import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    const stackedPeople = []
    stackedPeople.push(topPerson.name)

    while (stackedPeople.length >= 1) { 
        const removedName = stackedPeople.pop()
        console.log (removedName)
        stackedPeople.push(topPerson.children)
    }

    
    console.log("First person is " + topPerson.name);
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    console.log("TODO!  First person is " + topPerson.name);
}

