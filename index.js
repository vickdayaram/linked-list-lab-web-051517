
function getName(node){
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(head, collection){
  let nextNode = collection[head.next]
  return nextNode
}

function nodeAt(index, linkedList, collection){
  if(index === 0){
    return headNode(linkedList, collection)
  }
  let currentNode = headNode(linkedList, collection)
  let nextNode
  for(let i = 0; i < index; i++){
    nextNode = next(currentNode, collection)
    currentNode = nextNode
  }
  return currentNode
}

function addressAt(index, linkedList, collection){
  let node = nodeAt(index, linkedList, collection)
  let keys = Object.keys(collection)
  for(let i = 0; i < keys.length; i++){
    if(collection[keys[i]].name === node.name){
      return keys[i]
    }
  }
  return "not found"
}

function indexAt(node, collection, linkedList){
  let index = 0
  let currentNode = collection[linkedList]
  if(currentNode.name === node.name){
    return index
  }
  let i = 1
  while(true){
    let nextNode = next(currentNode, collection)
    currentNode = nextNode
    index = i
    if(currentNode.name === node.name){
      return index
    }
    i++
  }
  return 'not found'
}

function insertNodeAt(index, address, linkedList, collection){
  let newNode = collection[address]
  if(index === 0){
    newNode.next = linkedList
  } else {
  let previousNodeAddress = addressAt(index - 1, linkedList, collection)
  let previousNode = collection[previousNodeAddress]
  let currentNodeAddress = addressAt(index, linkedList, collection)
  let currentNode = collection[currentNodeAddress]
  newNode.next = currentNodeAddress
  previousNode.next = address
  }
}

function deleteNodeAt(index, linkedList, collection){
  let currentNodeAddress = addressAt(index, linkedList, collection)
  let currentNode = collection[currentNodeAddress]
  let nextAddress = currentNode.next
  let previousNodeAddress = addressAt(index - 1, linkedList, collection)
  let previousNode = collection[previousNodeAddress]
  previousNode.next = nextAddress
}
