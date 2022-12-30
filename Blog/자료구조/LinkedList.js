//단일 연결리스트 노드 기본 구조
class Node {
  constructor(data) {
    this.pointer = null;
    this.data = data;
  }
}

//연결 리스트 기본 구조
class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  //맨 앞에 원소를 추가하는 경우
  insertHead(data) {
    const node = new Node(data);
    node.pointer = this.head;
    this.head = node;
    this.count++;
  }

  //맨 뒤에 원소를 추가하는 경우
  insertTail(data) {
    const node = new Node(data);
    let curNode = this.head;
    while (curNode.pointer !== null) {
      curNode = curNode.pointer;
    }
    curNode.pointer = node;
    this.count++;
  }

  //리스트 중간에 원소를 추가하는 경우
  //index 번째에 data를 넣겠다
  insertAt(index, data) {
    const node = new Node(data);

    if (index === 0) {
      //리스트 처음에 원소를 삽입하려한다면
      this.insertHead(data);
      return;
    }
    if (index === this.size - 1) {
      //리스트 끝에 원소를 삽입하려 한다면
      this.insertTail(data);
      return;
    }
    if (index > this.size - 1) {
      //리스트 범위를 벗어나서 원소를 삽입하려 한다면
      console.log("범위를 벗어났습니다!");
      return;
    }

    //첫 번째 노드 | 인덱스까지 가기 위한 카운트 변수
    let curNode = this.head;
    let curCount = 0;

    while (curCount !== index - 1) {
      //첫 번째 노드부터 순회 시작하여, 인덱스 되기 전까지 반복
      curNode = curNode.pointer;
      curCount++;
    }

    let tmp = curNode.pointer; //기존 index 번째에 있던 노드
    node.pointer = tmp; //새로 추가할 노드의 포인터를 기존 index 번째에 있던 노드에 연결
    curNode.pointer = node; //i기존 index 직전 노드의 포인터를 새로 추가할 노드와 연결

    this.count++;
  }

  //특정 위치에 있는 원소를 삭제하는 경우
  removeAt(index) {
    let curNode = this.head;
    let curCount = 0;
    let tmp;

    if (index === 0) {
      //첫 번째 노드를 삭제한다면
      tmp = curNode.pointer;
      curNode.pointer = null;
      this.pointer = tmp;
    } else {
      while (curCount !== index - 1) {
        //첫 번째 노드부터 순회 시작하여, 인덱스 되기 전까지 반복
        curNode = curNode.pointer;
        curCount++;
      }
      tmp = curNode.pointer.pointer; //삭제될 노드의 다음 다음 노드
      curNode.pointer.pointer = null; //연결 끊기
      curNode.pointer = tmp;
    }
    this.count--;
  }

  //마지막 노드를 삭제하는 경우
  removeTail() {
    if (this.count === 1) {
      this.removeAt(0);
      return;
    }
    if (this.count < 1) {
      return;
    }
    let curNode = this.head;
    while (curNode.pointer.pointer !== null) {
      //노드의 다음 다음 노드가 null이면, 다음 노드가 Tail 노드라는 것을 알 수 있기 때문.
      curNode = curNode.pointer;
    }
    curNode.pointer = null;
    this.count--;
  }

  //출력용 메소드
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.pointer;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertHead(1234);
linkedList.insertTail(6789);
linkedList.insertTail(351);
linkedList.insertTail(5457);
linkedList.insertTail(57864163);
linkedList.insertAt(1, 666666666);
linkedList.removeAt(1);
linkedList.removeTail();
linkedList.removeTail();
linkedList.printListData();
