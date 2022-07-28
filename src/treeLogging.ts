import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    const stackedPeople = []
    stackedPeople.push(topPerson.name)

    while (stackedPeople.length > 0) {
        console.log (stackedPeople.pop())
        for (const child of topPerson.children) {
            stackedPeople.push(child.name)
            const removedPerson = stackedPeople.pop()
            console.log (removedPerson)
            for (const grandchild of child.children){
                stackedPeople.push(grandchild.name)
                console.log(stackedPeople.pop())
                for (const greatgrandchild of grandchild.children){
                    stackedPeople.push(greatgrandchild.name)
                    console.log(stackedPeople.pop())
                }
            }
        }
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


