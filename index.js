function getName(node) {
  return node["name"]
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(head, collection) {
  let nextAddress = head["next"]
  return collection[nextAddress]
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList]
  for(let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  let address
  if (index === 0) {
    address = linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    address = node["next"]
  }
  return address
}