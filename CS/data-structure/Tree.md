# ๐ ํธ๋ฆฌ (Tree)

> ํธ๋ฆฌ(Tree)๋ ๊ณ์ธต์ ์ธ ์๋ฃ๋ฅผ ํํํ  ๋ ์ฌ์ฉ๋๋ **๋น์ ํ ๊ณ์ธต์  ์๋ฃ๊ตฌ์กฐ** ์๋๋ค.

## ๐ณ ํธ๋ฆฌ๊ตฌ์กฐ(Tree)๋ ๋ฌด์์ผ๊น?

- **๊ทธ๋ํ(Graph)** ์ ์ผ์ข์ด๋ค.
- ํ ๋ธ๋์์ ์์ํด์ ๋ค๋ฅธ ์ ์ ๋ค์ ์ํํ์ฌ ์๊ธฐ ์์ ์๊ฒ ๋์์ค๋ `์ํ`์ด ์๋, **๋ฌด๋ฐฉํฅ ์ฐ๊ฒฐ ๊ทธ๋ํ** ์ด๋ค.
- ํธ๋ฆฌ๊ตฌ์กฐ ๋ด์ ๋ ๋ค๋ฅธ ํ์ ํธ๋ฆฌ๊ตฌ์กฐ๊ฐ ์กด์ฌํ  ์ ์๋, **์ฌ๊ท์  ์๋ฃ๊ตฌ์กฐ** ์ด๊ธฐ๋ ํ๋ค.
- ๋ํ์ ์ผ๋ก, ์ปดํจํฐ์ <span style="color:red">`directory`</span>๊ตฌ์กฐ๋ <span style="color:red">`๊ธฐ์ ๋ฐ ์ ๋ถ ์กฐ์ง๋`</span>๊ฐ ํธ๋ฆฌ๊ตฌ์กฐ์ด๋ค.
- **๊ฐ์ง๋ฅผ ๋๋ ค๊ฐ๋ฉฐ ๋ป์ด๋๊ฐ๋ค.**
  <br/>
  ![image](https://user-images.githubusercontent.com/44965706/198544233-12062c2f-f653-4b58-9766-bf731d79744a.png)<br/>
  _๋๋ฌด๋ฅผ ๋ค์ง์ด๋์ ๋ฏํ ๋ชจ์ต์ด๋ค_

## ๐ณ ํธ๋ฆฌ๊ตฌ์กฐ(Tree) ์ฉ์ด

> ํธ๋ฆฌ๊ตฌ์กฐ์์ ์ฌ์ฉ๋๋ ์ฉ์ด์๋๋ค.

| ์ฉ์ด                                                      | ์๋ฏธ                                                         |
| --------------------------------------------------------- | ------------------------------------------------------------ |
| ๋ธ๋(<span style="color:red">`node`</span>)               | ๊ฐ์ฅ ๊ธฐ๋ณธ์ ์ธ ํธ๋ฆฌ์ ๊ตฌ์ฑ์์. ์ ๊ทธ๋ฆผ์ ๊ฐ ์ซ์์ ํด๋นํ๋ค. |
| ๊ฐ์ (<span style="color:red">`edge`</span>)               | ๋ธ๋์ ๋ธ๋๋ฅผ ์ฐ๊ฒฐํ๋ ์ฐ๊ฒฐ์ .                               |
| ๋ฃจํธ ๋ธ๋(<span style="color:red">`root node`</span>)     | ํธ๋ฆฌ ๊ตฌ์กฐ์์ ์ต์์์ ์กด์ฌํ๋ ๋ธ๋.                        |
| ๋จ๋ง ๋ธ๋(<span style="color:red">`terminal node`</span>) | ์๋๋ก ๋ ๋ค๋ฅธ ๋ธ๋๊ฐ ์ฐ๊ฒฐ๋์ด ์์ง ์์ ๋ธ๋.               |
| ๋ด๋ถ ๋ธ๋(<span style="color:red">`internal node`</span>) | ๋จ๋ง ๋ธ๋๋ฅผ ์ ์ธํ ๋ชจ๋  ๋ธ๋.                                |

- ๋จ๋ง ๋ธ๋(<span style="color:red">`terminal node`</span>)๋ ์์ฌ๊ท ๋ธ๋(<span style="color:red">`leaf node`</span>)๋ผ๊ณ ๋ ๋ถ๋ฆฐ๋ค.
- ๋ด๋ถ ๋ธ๋(<span style="color:red">`internal node`</span>)๋ ๋น๋จ๋ง ๋ธ๋(<span style="color:red">`nonterminal node`</span>)๋ผ๊ณ ๋ ๋ถ๋ฆฐ๋ค.
- ๋ธ๋๊ฐ ๊ด๊ณ๊ฐ ์ฑ๋ฆฝ๋  ์ ์๋ค.
  - <span style="color:red">`๋ถ๋ชจ(parent)`</span>
  - <span style="color:red">`์์(child)`</span>
  - <span style="color:red">`ํ์ (sibling)`</span>
  - <span style="color:red">`์กฐ์(ancestor)`</span>
  - <span style="color:red">`ํ์(descendant)`</span>

## ๐ณ ํธ๋ฆฌ๊ตฌ์กฐ(Tree)์ ํน์ง

> **ํ๋์ ๋ฃจํธ๋ธ๋**์ **0๊ฐ ์ด์์ ์์๋ธ๋**๋ก ์ด๋ฃจ์ด์ ธ ์์ต๋๋ค.

- ๋ชจ๋  ์์ ๋ธ๋๋ ํ๋์ ๋ถ๋ชจ ๋ธ๋๋ฅผ ๊ฐ์ต๋๋ค.
- ๋ธ๋๊ฐ **n๊ฐ**์ธ ํธ๋ฆฌ๋ ํญ์ **n-1๊ฐ**์ ๊ฐ์ ์ ๊ฐ์ต๋๋ค.

### ๐ ํธ๋ฆฌ๊ตฌ์กฐ ๋ง์ต๋๋ค.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvKvqg%2Fbtq1E9ODRk8%2FqXL8GehaRh0tgxiyrm8Q31%2Fimg.png)<br/>

### ๐ ํธ๋ฆฌ๊ตฌ์กฐ ์๋๋๋ค.

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsXGwq%2Fbtq1ByPsA98%2FiAmWtKVq4WWdEV85sorkkk%2Fimg.png)<br/>

- _๋ฃจํธ๋ธ๋๊ฐ ๋๊ฐ์ด๊ธฐ ๋๋ฌธ์ด๋ค._

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F4pwtu%2Fbtq1By9I93O%2Fzz7ZRsYNpUbKfCwCf0Jno0%2Fimg.png)<br/>

- _6๋ฒ ๋ธ๋์ ๋ถ๋ชจ๋ธ๋๊ฐ ๋๊ฐ์ด๊ธฐ ๋๋ฌธ์ด๋ค._
- _cycle์ ์ด๋ฃจ๊ธฐ ๋๋ฌธ์ด๋ค._

## ๐ณ ํธ๋ฆฌ๊ตฌ์กฐ(Tree)์ ์ข๋ฅ

> 5๊ฐ์ง ํธ๋ฆฌ๊ตฌ์กฐ๋ฅผ ์ดํด๋ณด๊ฒ ์ต๋๋ค.

### 1๏ธโฃ ํธํฅํธ๋ฆฌ (Skew Tree)

- ๋ชจ๋  ๋ธ๋๋ค์ด ํ๋์ ์์์ ๊ฐ์ง๋ ํธ๋ฆฌ๊ตฌ์กฐ.
  - ์ผ์ชฝ์ผ๋ก ์น์ฐ์น ํธ๋ฆฌ๋ `left skew tree`
  - ์ค๋ฅธ์ชฝ์ผ๋ก ์น์ฐ์น ํธ๋ฆฌ๋ `right skew tree`

### 2๏ธโฃ ์ด์งํธ๋ฆฌ (Binary Tree)

- ๊ฐ ๋ธ๋์ ์์๋ธ๋๊ฐ 2๊ฐ์ธ ํธ๋ฆฌ๊ตฌ์กฐ.

### 3๏ธโฃ ์ด์ง ํ์ ํธ๋ฆฌ (Binary Search Tree, BST)

- ์์ํ๋ ์ด์งํธ๋ฆฌ๋ฅผ ์๋ฏธํ๋ค.
- ํน์  ๋ธ๋์ ์ผ์ชฝ ์์์ ํด๋น ๋ธ๋๋ณด๋ค **์์ ๊ฐ**์, ์ค๋ฅธ์ชฝ ์์์ ํด๋น ๋ธ๋๋ณด๋ค **ํฐ ๊ฐ**์ ๊ฐ์ ธ์ผํ๋ค.

### 4๏ธโฃ m ์ ํ์ ํธ๋ฆฌ(m-way search tree)

- ์ต๋ m๊ฐ์ ์๋ธํธ๋ฆฌ๋ฅผ ๊ฐ๋ ํ์ ํธ๋ฆฌ
- `์ด์ง ํ์ ํธ๋ฆฌ`์ ํ์ฅ ๋ฒ์ .
  - ๋์ด๋ฅผ ์ค์ด๊ธฐ ์ํด ์ฌ์ฉ.

### 5๏ธโฃ ๊ท ํ ํธ๋ฆฌ (Balanced Tree, B-Tree)

- m์ ํ์ ํธ๋ฆฌ์์ ๋์ด ๊ท ํ์ ์ ์งํ๋ ํธ๋ฆฌ
  - `height-balanced m-way tree`

## ๐ณ ํธ๋ฆฌ๊ตฌ์กฐ(Tree)์ ์ํ

> ํธ๋ฆฌ์ ๋ธ๋๋ฅผ ์ฒด๊ณ์ ์ผ๋ก ํ์ํ๋ ๊ณผ์ ์ ์๋ฏธํฉ๋๋ค. `์ ์ ์ํ` `์ค์ ์ํ` `ํ์ ์ํ` `๋ ๋ฒจ ์ํ`๋ก ๋๋์ด ์์ต๋๋ค.

### 1๏ธโฃ ์ ์ ์ํ (Preorder)

- **๊น์ด ์ฐ์  ์ํ**๋ผ๊ณ ๋ ๋ถ๋ฆฐ๋ค.
- ๋ฃจํธ๋ธ๋ --> ์ผ์ชฝ ์๋ธํธ๋ฆฌ --> ์ค๋ฅธ์ชฝ ์๋ธํธ๋ฆฌ ์์๋ก ์ํํ๋ ๋ฐฉ์์ด๋ค.
  - ![image](https://upload.wikimedia.org/wikipedia/commons/a/ac/Preorder-traversal.gif)<br/>
  ```python
  def preorder(self):
          def _preorder(node):
              print(node.item, end=' ')
              if node.left:
                  _preorder(node.left)
              if node.right:
                  _preorder(node.right)
          _preorder(self.root)
  ```

### 2๏ธโฃ ์ค์ ์ํ (Inorder)

- **๋์นญ ์ํ**๋ผ๊ณ ๋ ๋ถ๋ฆฐ๋ค.
- ์ผ์ชฝ ์๋ธํธ๋ฆฌ --> ๋ฃจํธ๋ธ๋ --> ์ค๋ฅธ์ชฝ ์๋ธํธ๋ฆฌ ์์๋ก ์ํํ๋ ๋ฐฉ์์ด๋ค.<br/>
  ![image](https://upload.wikimedia.org/wikipedia/commons/4/48/Inorder-traversal.gif)<br/>
  ```python
  def inorder(self):
  def _inorder(node):
      if node.left:
          _inorder(node.left)
      print(node.item, end=' ')
      if node.right:
          _inorder(node.right)
  _inorder(self.root)
  ```

### 3๏ธโฃ ํ์ ์ํ (Postorder)

- ์ผ์ชฝ ์๋ธํธ๋ฆฌ --> ์ค๋ฅธ์ชฝ ์๋ธํธ๋ฆฌ --> ๋ฃจํธ๋ธ๋ ์์๋ก ์ํํ๋ ๋ฐฉ์์ด๋ค.<br/>
  ![images](https://upload.wikimedia.org/wikipedia/commons/2/28/Postorder-traversal.gif)<br/>
  ```python
  def postorder(self):
  def _postorder(node):
      if node.left:
          _postorder(node.left)
      if node.right:
          _postorder(node.right)
      print(node.item, end=' ')
  _postorder(self.root)
  ```

### 4๏ธโฃ ๋ ๋ฒจ ์ํ (Levelorder)

- **๋๋น ์ฐ์  ์ํ**๋ผ๊ณ ๋ ๋ถ๋ฆฐ๋ค.
- ๊ฐ ๋ธ๋๋ฅผ ๋ ๋ฒจ ์์๋๋ก ๊ฒ์ฌํ๋ ์ํ ๋ฐฉ๋ฒ์ด๋ค.
- `์คํ`์ ์ฌ์ฉํ๋ ์์ ์ธ๊ฐ์ง ์ํ ๋ฐฉ๋ฒ๊ณผ ๋ค๋ฅด๊ฒ, `์ ์์ ์ถ ๊ธฐ๋ฐ์ ํ`๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ํ๋ค.

  ![image](https://res.cloudinary.com/practicaldev/image/fetch/s--Lng93Nkl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/eijg2o9eo8xtqk40q91d.png)

  ```python
  from collections import deque

  def levelorder(self):
      q = deque([self.root])
      while q:
          node = q.popleft()
          print(node.item, end=' ')
          if node.left:
              q.append(node.left)
          if node.right:
              q.append(node.right)
  ```

## ๐์ฐธ๊ณ ์๋ฃ

### ๋ด์ฉ ์ฐธ๊ณ 

- [์ค์ฑ์ฐ์ ์ดํ ์๋ฃ๊ตฌ์กฐ](http://www.orentec.co.kr/teachlist/DA_ST_1/teach_sub1.php)
- [[์๋ฃ๊ตฌ์กฐ] ํธ๋ฆฌ (Tree)](https://velog.io/@kimdukbae/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%ED%8A%B8%EB%A6%AC-Tree)
- [[์๋ฃ๊ตฌ์กฐ] ํธ๋ฆฌ (Tree)](https://yoongrammer.tistory.com/68)

### ์์ค์ฝ๋ ์ฐธ๊ณ 

- [[Python] ํธ๋ฆฌ ๊ตฌํ / ์ํ(์ ์ ์ํ, ์ค์ ์ํ, ํ์ ์ํ, ๋ ๋ฒจ ์ํ)](https://koosco.tistory.com/109)
