# π³ ν΄μ(Hash)

> λ±μ₯νμ§ μμ£Ό μ€λλμμ§λ§, μμ§κΉμ§ μ°κ΅¬λλ μλ£κ΅¬μ‘°μ΄λ€.
> λΈλ‘μ²΄μΈ κΈ°μ μμ μ μ©νκ² μ¬μ©λλ€κ³  νλ€.

ν΄μλ₯Ό μ½κ² νννμλ©΄ μλκ° κ΅μ₯ν λΉ λ₯Έ ~~κ·Έλ¦¬κ³  κ·Έκ²μ μν΄ λ¦¬μμ€λ₯Ό ν¬κΈ°ν~~ μλ£κ΅¬μ‘°λΌκ³  ν  μ μλ€.<br/>
![image](https://velog.velcdn.com/images/igun0423/post/de13659d-b025-4de3-8092-cb12d575f1b5/image.png)<br/>
μ°μ  μμ μ΄λ―Έμ§λ₯Ό λ³΄λ©΄ `Hash Function`κ³Ό`Hashes`κ° λ±μ₯νλ κ²μ λ³Ό μ μλ€.
κ²°κ΅­ ν΄μ(Hash)λ, μ΄ μλμ μ©μ΄λ₯Ό ν΅ν©νμ¬ μΌμ»«λ λ§μ΄λ€.

- ν΄μ ν¨μ(Hash Function)
  - ν΄μ κ°(Hashes)
  - ν΄μ νμ΄λΈ(Hash Table)

κ·Έλ λ€λ©΄ μ ν΄μ κ°(Hashes)μ ν΄μ νμ΄λΈ(Hash Table)μ΄ ν΄μ ν¨μ(Hash Function) νμμ μ‘΄μ¬νλκ°?<br/>
μ΄λ `ν΄μ(Hash)`κ° λμνλ κ³Όμ μΈ `ν΄μ±(Hashing)`μ λ³΄λ©΄ μ μ μλ€.

## ν΄μ±(Hashing)

λ°μ΄ν°κ° `ν΄μν¨μ(Hash Function)`λ₯Ό κ±°μ³ κ³ μ ν `ν΄μ κ°(Hashes)`μΌλ‘ λ³νλκ³ , μ΄ κ°μ `ν΄μ νμ΄λΈ(Hash Table)`μ Indexκ° λλ€.
μ΄ κ²μ΄ `ν΄μ±(Hashing)`μ μμ½μ΄λ€.

## ν΄μ ν¨μ(Hash Function)

ν΄μ ν¨μμ κ°μ₯ μ€μν μ μ, **μλ ₯ λ°μ΄ν°λ₯Ό λ°ννμ¬ κ³ μ ν μΈλ±μ€λ₯Ό λ§λ€μ΄λΈλ€λ κ²μ΄λ€.**<br/>
![](https://velog.velcdn.com/images/igun0423/post/d9b65639-1d86-4192-9853-aebe5cc8d3ec/image.png)<br/>

- μ μ΄λ―Έμ§μ κ°μ΄, μ΄λ€ μ°μ°μ κ±°μ³μ **κ³ μ ν κ°**μ μ λ¬ν΄μΌνλ€.
- νμ§λ§ λκ΅¬λ μμν  μ μλ κ°μ μ΄ μλ€.
- λ§μ½, `ν΄μ ν¨μ(Hash Function)`μ κ±°μΉ λ°μ΄ν°κ° μ€λ³΅λλ€λ©΄?
  - `ν΄μ νμ΄λΈ(Hash Table)`μ Key-Valueμ ννμΈλ°, Valueμ λκ° μ΄μμ κ°μ΄ λ€μ΄κ° μ μλκ°?

μ΄λ₯Ό μν μμ£Ό λ€μν `ν΄μ μκ³ λ¦¬μ¦(Hash Algorithm)`μ΄ μ‘΄μ¬νλ€.

### β Division Method

_index = Key % νμ΄λΈ ν¬κΈ°(νμ΄λΈμ ν¬κΈ°λ μμ)_
λνμ μΈ ν΄μ ν¨μ μκ³ λ¦¬μ¦μ΄λ€.

### β Digit Folding

Keyμ λ¬Έμμ΄μ μμ€ν€μ½λλ‘ λ³ννμ¬ κ·Έ κ°μ λͺ¨λ ν©ν κ°.
μ΄ λ, Index κ°μ΄ νμ΄λΈμ ν¬κΈ°λ₯Ό λμ΄κ°λ©΄ `Division Method` μ μ©.

### β Multiplication Method

- K : μ«μλ‘ λ Key κ°
- A : 0κ³Ό 1 μ¬μ΄μ μ€μ
- m : 2μ μ κ³±μ

_index = (K \* A mod 1) \* m_

> μ΄μΈμλ κ΅μ₯ν λ§μ ν΄μ ν¨μ μκ³ λ¦¬μ¦μ΄ μ‘΄μ¬νλ€κ³  νλ€.

## μΆ©λ(Collision)

μμμ μΈκΈνλ κ°μ μ²λΌ, Indexκ°μ΄ μΆ©λ(Collision)νλ κ²½μ° ν΄κ²°ν  μ μλ λ°©λ²μ΄ νμνλ€.

### β λΆλ¦¬ μ°κ²°λ²(Separate Chaining)

![](https://velog.velcdn.com/images/igun0423/post/c3d5a4eb-39f8-465b-b760-afbcca47cfeb/image.png)<br/>

μ΄λ¦μ **Chain**μμλΆν° λλμ΄ μ€λ―, `λΆλ¦¬ μ°κ²°λ²(separate Chaining)`μ λ²ν· λ΄λΆμ λ°μ΄ν°μ `μ°κ²° λ¦¬μ€νΈ(Linked List)` `νΈλ¦¬`λ±μ μλ£κ΅¬μ‘°λ₯Ό μ μ©νμ¬ μ΄μ΄μ£Όλ λ°©λ²μ΄λ€.

μ΄λ¬ν Chaining λ°©μμ νμ΄λΈ μμ²΄μ Resizingμ΄ νμνμ§ μκ³ , μμλ₯Ό μ½κ² μΆκ°νκ³  μ­μ ν  μ μλ€λ μ₯μ μ΄ μλ€.

νμ§λ§ ~~μκ·Έλλ λ¦¬μμ€ ν¬κΈ°ν ν΄μνμ΄λΈ~~ λ¦¬μμ€λ₯Ό λ λ§μ΄ νμλ‘ν  μ μλ€λ λ¨μ μ΄ μ‘΄μ¬νλ€.

### β κ°λ°© μ£Όμλ²(Open Addressing)

`κ°λ°© μ£Όμλ²(Open Addressing)`μ λ²ν· λ΄λΆμ λΉμλ¦¬μ λ¨Όμ  λ°μ΄ν°λ₯Ό μ±μμ£Όλ©° νμ΄λΈμ ν¨μ¨μ μΌλ‘ κ΄λ¦¬νλ λ°©λ²μ΄λ€.

**1. Linear Probing** - νμ¬ IndexλΆν°, κ³ μ  κ° λ§νΌ μ΄λνμ¬ μ°¨λ‘λλ‘ λ°μ΄ν°λ₯Ό μ±μμ£Όλ λ°©λ²

**2. Quadratic Probing** - n λ²μ§Έ μΆ©λμ κ²½μ°, n^2λ§νΌ μ΄λνμ¬ λ°μ΄ν°λ₯Ό μ±μμ£Όλ λ°©λ². κ°λ Ή 1λ² μ§Έλ 1λ§νΌ, 2λ²μ§Έλ 4λ§νΌ...

**3. Double Hasing Probing** - ν΄μλ κ°μ ν λ² λ ν΄μ±νμ¬ ν΄μμ κ·μΉμ μμ λ λ°©λ². μλ‘μ΄ νμ΄λΈμ ν λΉνκ³  μ°μ°νλ κ³Όμ μμ λ λ§μ λΉμ©μ΄ νμνκ² λλ€.

## ν΄μ νμ΄λΈ(Hash Table)

### μ₯μ 

- μΈλ±μ€(index)λ‘ μΈν΄ κ²μ, μ½μ, μ­μ κ° λΉ λ₯΄λ€.
  - λ°μ΄ν° μΊμ±μ λ§μ΄ μ¬μ©λλ€.
- `ν€(Key)`μ `ν΄μκ°(Hashes)`μ¬μ΄μ μ°κ΄μ±μ΄ μκΈ° λλ¬Έμ λ³΄μμ΄ λ°μ΄λλ€.
  - μ΅κ·Ό λΈλ‘μ²΄μΈμ ν΅μ¬ κΈ°μ 
- μ€λ³΅ μ κ±°μ μ©μ΄νλ€.

### λ¨μ 

- κ³΅κ° λ³΅μ‘λκ° ν¬λ€.
- λ°μ΄ν°μ μμκ° μλ κ²½μ°, μ΄μΈλ¦¬μ§ μλλ€.
- ν΄μ ν¨μ μμ‘΄λκ° λλ€.

### μκ° λ³΅μ‘λ

|      | νκ·  | μ΅μ |
| ---- | ---- | ---- |
| κ²μ | O(1) | O(n) |
| μ½μ | O(1) | O(n) |
| μ­μ  | O(1) | O(n) |

# μλ°μ€ν¬λ¦½νΈμ ν΄μ(Hash)

## κΈ°λ³Έ κ΅¬μ‘°

```javascript
class HashTable {
  constructor(length) {
    this.table = new Array(length);
    this.size = 0;
  }
}
```

νμ΄λΈμ ν¬κΈ°(μμ)λ₯Ό λ°μ μμ±νλ€.

## ν΄μν¨μ

```javascript
  _hash(key) {
    //Digit Folding ν΄μ μκ³ λ¦¬μ¦
    //ν΄μ ν¨μ
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
```

μμμ μΈκΈνλ μΈ κ°μ§ ν΄μ μκ³ λ¦¬μ¦ μ€, `Digit Folding`μ μ¬μ©νμ¬ ν΄μ ν¨μλ₯Ό κ΅¬ννμλ€.

## set get remove

```javascript

  set(key, value) {
    const index = this._hash(key); //ν΄μν¨μλ₯Ό ν΅ν΄ κ³ μ ν ν΄μ κ° λ°ν
    if (this.table[index]) {
      //μΆ©λμ΄ λ°μνλ κ²½μ°, Separate Chaining λ°©μμΌλ‘ ν΄κ²°
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
      //ChainμΌλ‘ μ΄μ΄μ Έμλ κ²λ νμΈν΄μΌνλ€.
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
```

μΈ λ©μλ λͺ¨λ μΆ©λμ κ³ λ €νμ¬μΌνλ€.
μΆ©λμ ν΄κ²° λ°©μμΌλ‘, μ μ½λμμλ `Separate Chaining`μ μ΄μ©νλ€.

## μ μ²΄ μ½λ

```javascript
class HashTable {
  constructor(length) {
    this.table = new Array(length);
    this.size = 0;
  }

  _hash(key) {
    //Digit Folding ν΄μ μκ³ λ¦¬μ¦
    //ν΄μ ν¨μ
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key); //ν΄μν¨μλ₯Ό ν΅ν΄ κ³ μ ν ν΄μ κ° λ°ν
    if (this.table[index]) {
      //μΆ©λμ΄ λ°μνλ κ²½μ°, Separate Chaining λ°©μμΌλ‘ ν΄κ²°
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
      //ChainμΌλ‘ μ΄μ΄μ Έμλ κ²λ νμΈν΄μΌνλ€.
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
```

# Reference

[[μλ£κ΅¬μ‘°] ν΄μ νμ΄λΈ(Hash Table) μ΄λ? , ν΄μ μκ³ λ¦¬μ¦ , ν΄μ ν¨μ](https://code-lab1.tistory.com/14)
[[μλ£κ΅¬μ‘°] Hash/HashTable/HashMap](https://hee96-story.tistory.com/48)
[JavaScript Hash Table β Associative Array Hashing in JS](https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/)
