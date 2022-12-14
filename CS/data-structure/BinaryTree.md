# π μ΄μ§νΈλ¦¬ (Binary Tree)

> **νΈλ¦¬κ΅¬μ‘°(Tree)** μ μ¬λ¬ μ ν μ€ κ°μ₯ κΈ°λ³Έμ΄ λλ μ νμλλ€.

_ν΄λΉ λ¬Έμλ [νΈλ¦¬κ΅¬μ‘°(Tree)](https://github.com/Jun99uu/TIL/blob/master/CS/data-structure/Tree.md)μ μ΄μ΄μ§λλ€._

## π΄ μ΄μ§νΈλ¦¬(Binary Tree)λ λ¬΄μμΌκΉ?

- κ° λΈλμ μμλΈλκ° **2κ° μ΄ν**μΈ νΈλ¦¬κ΅¬μ‘°.
  ![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FblbjFV%2Fbtq1K3P9Y8v%2FH393OwoRI9lX8N3wrz9OO1%2Fimg.png)
- μμ λΈλ μ€ **μΌμͺ½ μμ**μ `left node`, **μ€λ₯Έμͺ½ μμ**μ `right node`λΌκ³  νλ€.
  - `left node`μ μν μλΈνΈλ¦¬μ `right node`μ μν μλΈνΈλ¦¬λ νμ€νκ² κ΅¬λΆλμ΄μΌ νλ€.

## π΄ μ΄μ§νΈλ¦¬(Binary Tree)μ νΉμ§

- **nκ°**μ λΈλλ₯Ό κ°μ§ μ΄μ§νΈλ¦¬λ ν­μ **(n-1)κ°**μ κ°μ μ κ°λλ€.
  - λ£¨νΈλΈλλ₯Ό μ μΈν λͺ¨λ  λΈλκ° λΆλͺ¨λΈλλ₯Ό κ°κΈ° λλ¬Έμ΄λ€.
- λμ΄κ° `h`μΈ μ΄μ§νΈλ¦¬κ° κ°μ§ μ μλ λΈλμ μ΅μ κ°μλ **(h+1)κ°**, μ΅λ κ°μλ **(2^(h+1) -1)κ°**μ΄λ€.
  - μ΄μ§νΈλ¦¬μ λμ΄κ° `h`κ° λκΈ° μν΄μ , ν λ λ²¨μ μ΅μ νκ°μ λΈλκ° μμ΄μΌνκΈ° λλ¬Έμ΄λ€. --> μ΅μ **(h+1)κ°**
  - νλμ λΈλλ μ΅λ 2κ°μ μμ λΈλλ₯Ό κ°μ§ μ μκΈ° λλ¬Έμ λ λ²¨ `i`μμ λΈλμ μ΅λ κ°μλ **2^i**κ° λλ€. --> λμ΄κ° `h`μΌ λ, μ΅λ λΈλμ κ°μλ **(2^(h+1) -1)κ°**

## π΄ μ΄μ§νΈλ¦¬(Binary Tree)μ μ’λ₯

> μ΄μ§νΈλ¦¬(Binary Tree)μ 4κ°μ§ μ νμ μκ°ν©λλ€.

### 1οΈβ£ μ  μ΄μ§νΈλ¦¬ (Full Binary Tree or Strict Binary Tree)

- λͺ¨λ  λΈλκ° **0κ°** νΉμ **2κ°**μ μμ λΈλλ₯Ό κ°λ νΈλ¦¬κ΅¬μ‘°μ΄λ€.
  ![images](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdSwyWw%2Fbtq9KmfrOlf%2F37ctrWKZKRSQJEZA7C9UMK%2Fimg.png)

### 2οΈβ£ μμ  μ΄μ§ νΈλ¦¬ (Complete Binary Tree)

- λ§μ§λ§ λ λ²¨μ μ μΈ νκ³  λͺ¨λ  λ λ²¨μ΄ μμ ν μ±μμ Έ μλ νΈλ¦¬κ΅¬μ‘°.
- λ§μ§λ§ λ λ²¨μ κ½ μ°¨ μμ§ μμλ λμ§λ§, λΈλκ° μΌμͺ½μμ μ€λ₯Έμͺ½μΌλ‘ μ±μμ ΈμΌ νλ€.
- λ§μ§λ§ `λ λ²¨ h`μμ **1 ~ 2h-1 κ°**μ λΈλλ₯Ό κ°μ§ μ μλ€.
- μμ  μ΄μ§ νΈλ¦¬λ λ°°μ΄μ μ¬μ©ν΄ ν¨μ¨μ μΌλ‘ νν κ°λ₯νλ€.
  ![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7BofG%2Fbtq9Eilu1J5%2F0HNO2KiWkBxTvERSJGHla0%2Fimg.png)

### 3οΈβ£ ν¬ν μ΄μ§ νΈλ¦¬ (Perfect Binary Tree)

- λͺ¨λ  λ λ²¨μ΄ μμ ν μ±μμ Έ μλ νΈλ¦¬κ΅¬μ‘°.
- `μ  μ΄μ§νΈλ¦¬ (Full Binary Tree or Strict Binary Tree)`μ μ±μ§λ λ§μ‘±ν΄μΌ νλ€. μ¦ λͺ¨λ  λΈλκ° **0κ°** νΉμ **2κ°**μ μμ λΈλλ₯Ό κ°λλ€.
- λͺ¨λ  λ§λ¨ λΈλκ° **λμΌν κΉμ΄ λλ λ λ²¨**μ κ°λλ€.
- λμ΄ `k`μ νΈλ¦¬μμ, λΈλ κ°μκ° μ νν **2^k-1 κ°**μ¬μΌ νλ€.
  ![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdfWC2R%2Fbtq9LqomTS7%2Frt4Io0pCfqBCckCs92CNz0%2Fimg.png)

### 4οΈβ£ κ· ν μ΄μ§ νΈλ¦¬ (Balanced Binary Tree)

- μΌμͺ½ μλΈνΈλ¦¬μ μ€λ₯Έμͺ½ μλΈνΈλ¦¬μ λμ΄ μ°¨μ΄κ° λͺ¨λ `1`λ§νΌ λλ νΈλ¦¬κ΅¬μ‘°.
  ![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcBpW7h%2Fbtq2E9oilQv%2F5r8K5dfuj56DKKniJh7tRk%2Fimg.png)

## π΄ μ΄μ§νΈλ¦¬(Binary Tree) κ΅¬ν

> μ΄μ§νΈλ¦¬μ κ° λΈλ μΈμ€ν΄μ€λ μμ μ λΆλͺ¨ λΈλμ λν λ νΌλ°μ€μ λ μμλΈλμ λν λ νΌλ°μ€λ₯Ό κ°μ§κ² λ©λλ€.

```python
    # μ΄μ§νΈλ¦¬μ λΈλ
    class Node:
        def __init__(self, data):
            # νλΌλ―Έν°λ‘ λ°μ λ°μ΄ν°λ₯Ό μ½μ
            self.data = data
            # NoneμΌλ‘ μ΄κΈ°κ°μ μ§μ  ν, λΈλ μμ± νμ μ§μ 
            self.left_child = None
            self.right_child = None
```

### π μμ  μ΄μ§νΈλ¦¬

```python
    node1= TreeNode()
    node1.data = 'apple'

    node2= TreeNode()
    node2.data = 'banana'
    node1.left = node2

    node3= TreeNode()
    node3.data = 'carrot'
    node1.right = node3

    node4= TreeNode()
    node4.data = 'donkey'
    node2.left = node4

    node5= TreeNode()
    node5.data = 'elephant'
    node2.right = node5

    node6= TreeNode()
    node6.data = 'five'
    node3.left = node6
```

```python
    #level2μ μ΄μ§νΈλ¦¬κ° μμ±λ¨
    apple
    banana carrot
    donkey elephant five
```

## πμ°Έκ³ μλ£

### λ΄μ© λ° μ΄λ―Έμ§ μ°Έκ³ 

- [[μλ£κ΅¬μ‘°] μ΄μ§ νΈλ¦¬ (Binary tree) μμλ³΄κΈ°](https://yoongrammer.tistory.com/69)
- [[μλ£κ΅¬μ‘°] μ΄μ§ νΈλ¦¬ (Binary Tree)](https://skytitan.tistory.com/97)
- [5-2. [μλ£κ΅¬μ‘°] μ΄μ§νΈλ¦¬(binary tree)](https://kingpodo.tistory.com/27)
- [[μλ£κ΅¬μ‘°] νΈλ¦¬(Tree)μ κ°λ | μ΄μ§ νΈλ¦¬, μ  μ΄μ§ νΈλ¦¬, μμ  μ΄μ§νΈλ¦¬, ν¬ν μ΄μ§ νΈλ¦¬, μ΄μ§ νμνΈλ¦¬](https://code-lab1.tistory.com/8)

### μμ€μ½λ μ°Έκ³ 

- [μ΄μ§νΈλ¦¬ λ° μμ μ΄μ§νΈλ¦¬ κ΅¬νκ³Ό μν](https://seongonion.tistory.com/41)
- [[μλ£κ΅¬μ‘°] μ΄μ§ νΈλ¦¬(Binary Tree)](https://velog.io/@cha-suyeon/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EC%9D%B4%EC%A7%84-%ED%8A%B8%EB%A6%ACBinary-Tree)
