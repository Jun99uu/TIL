class HashTable {
  constructor(length) {
    this.table = new Array(length);
    this.size = 0;
  }

  _hash(key) {
    //Digit Folding 해시 알고리즘
    //해시 함수
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key); //해시함수를 통해 고유한 해시 값 반환
    if (this.table[index]) {
      //충돌이 발생하는 경우, Separate Chaining 방식으로 해결
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      //Chain으로 이어져있는 것도 확인해야한다.
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

const ht = new HashTable(127);

ht.set("Dogo", 111);
ht.set("Kitty", 150);
ht.set("Honey", 192);

ht.display();
/**
7: [ Honey: 192 ]
12: [ Dogo: 111 ] 
25: [ Kitty: 150 ]
 */

console.log(ht.size); // 3

ht.remove("Kitty");
ht.display();
/**
7: [ Honey: 192 ]
12: [ Dogo: 111 ]
*/
